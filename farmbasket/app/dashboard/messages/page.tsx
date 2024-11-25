"use client";
import React, { useState, useEffect } from "react";
import { io, Socket } from "socket.io-client";

export default function Messages() {
  type Message = {
    sender: string;
    content: string;
  };

  type Conversation = {
    id: string;
    name: string;
    profilePicture: string | null;
    isOnline: boolean;
    lastSeen: string;
    messages: Message[];
  };

  const [conversations, setConversations] = useState<Conversation[]>([
    {
      id: "1",
      name: "Alice",
      profilePicture: null,
      isOnline: true,
      lastSeen: "Today 14:53",
      messages: [
        { sender: "", content: "Hey, how are you?" },
        { sender: "You", content: "I'm good, thanks! How about you?" },
      ],
    },
    // Add more conversations here...
  ]);

  const [currentConversationId, setCurrentConversationId] = useState<string | null>(null);
  const [messageInput, setMessageInput] = useState("");
  const [socket, setSocket] = useState<Socket | null>(null);

  // Initialize Socket.IO
  useEffect(() => {
    const socketInstance = io("http://farm-basket3.onrender.com", {
      reconnectionAttempts: 5,
      transports: ["websocket"],
    });

    socketInstance.on("connect", () => {
      console.log("Connected to Socket.IO server with ID:", socketInstance.id);
    });

    socketInstance.on("disconnect", (reason) => {
      console.warn("Disconnected from Socket.IO server. Reason:", reason);
    });

    socketInstance.on("error", (error) => {
      console.error("Socket.IO error:", error);
    });

    socketInstance.on("newMessage", (data) => {
      console.log("New message received:", data);

      // Update the conversation with the new message
      setConversations((prevConversations) =>
        prevConversations.map((conversation) =>
          conversation.id === data.conversationId
            ? {
                ...conversation,
                messages: [...conversation.messages, data.message],
              }
            : conversation
        )
      );
    });

    setSocket(socketInstance);

    return () => {
      socketInstance.disconnect();
    };
  }, []);

  const sendMessage = () => {
    if (!messageInput.trim()) {
      console.error("Message input is empty. Please type a message.");
      return;
    }

    if (!currentConversationId) {
      console.error("No conversation selected. Please select a conversation.");
      return;
    }

    if (!socket) {
      console.error("Socket.IO connection is not initialized.");
      return;
    }

    const newMessage = {
      sender: "You",
      content: messageInput.trim(),
    };

    const payload = {
      conversationId: currentConversationId,
      message: newMessage,
    };

    console.log("Sending message payload:", payload);

    socket.emit("sendMessage", payload, (response: { status: string; error?: string }) => {
      if (response.status === "ok") {
        console.log("Message sent successfully.");
        // Optimistically update the UI
        setConversations((prevConversations) =>
          prevConversations.map((conversation) =>
            conversation.id === currentConversationId
              ? {
                  ...conversation,
                  messages: [...conversation.messages, newMessage],
                }
              : conversation
          )
        );
        setMessageInput("");
      } else {
        console.error("Error sending message:", response.error);
      }
    });
  };

  const handleConversationClick = (conversationId: string) => {
    setCurrentConversationId(conversationId);
  };

  const selectedConversation = conversations.find(
    (conversation) => conversation.id === currentConversationId
  );

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-800 p-4 flex flex-col">
        <h2 className="text-lg font-bold mb-4">Customers</h2>
        <ul className="flex flex-col gap-4">
          {conversations.map((conversation) => (
            <li
              key={conversation.id}
              className={`p-3 rounded-lg cursor-pointer flex items-center gap-4 ${
                currentConversationId === conversation.id ? "bg-green-500 text-black" : "bg-gray-700"
              }`}
              onClick={() => handleConversationClick(conversation.id)}
            >
              <div className="w-8 h-8 rounded-full bg-gray-400"></div>
              <span className="text-lg">{conversation.name}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Messages Section */}
      <div className="w-3/4 bg-gray-100 flex flex-col">
        {selectedConversation ? (
          <div className="flex flex-col flex-grow">
            {/* Chat Header */}
            <div className="p-4 bg-white text-black border-b flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-gray-400"></div>
              <div>
                <h3 className="font-bold text-lg">{selectedConversation.name}</h3>
                <p className="text-sm text-gray-500">
                  {selectedConversation.isOnline
                    ? "Active"
                    : `Last seen ${selectedConversation.lastSeen}`}
                </p>
              </div>
            </div>

            {/* Messages Display */}
            <div className="flex-grow overflow-y-auto bg-white p-4">
              {selectedConversation.messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex mb-2 ${
                    message.sender === "You" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-xs p-2 rounded-lg ${
                      message.sender === "You"
                        ? "bg-green-500 text-black rounded-br-none"
                        : "bg-gray-300 text-black rounded-bl-none"
                    }`}
                  >
                    <strong>{message.sender !== "You" && `${message.sender}`}</strong> {message.content}
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="flex items-center p-4 border-t bg-white">
              <input
                type="text"
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                placeholder="Type your message"
                className="flex-1 border p-3 rounded-lg text-black"
              />
              <button
                onClick={sendMessage}
                className="ml-3 bg-green-500 text-black px-6 py-2 rounded-lg"
              >
                Send
              </button>
            </div>
          </div>
        ) : (
          <p className="text-black text-center m-auto">Select a conversation to view messages.</p>
        )}
      </div>
    </div>
  );
}
