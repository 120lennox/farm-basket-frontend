"use client";
import React, { useState } from "react";

export default function Messages() {
  
  type Message = {
    sender: string;
    content: string;
  };

  type Conversation = {
    id: string;
    name: string;
    messages: Message[];
  };

  
  const [conversations, setConversations] = useState<Conversation[]>([
    {
      id: "1",
      name: "Alice",
      messages: [
        { sender: "", content: "Hey, how are you?" },
        { sender: "You", content: "I'm good, thanks! How about you?" },
      ],
    },
    {
      id: "2",
      name: "Bob",
      messages: [
        { sender: "", content: "Are we still on for today?" },
        { sender: "You", content: "Yes, see you at 5!" },
      ],
    },
    {
      id: "3",
      name: "Lisbeth",
      messages: [
        { sender: "", content: "Do you still have the tractor?" },
        { sender: "You", content: "Yes, I do." },
      ],
    },
  ]);

  
  const [currentConversationId, setCurrentConversationId] = useState<string | null>(null);
  const [messageInput, setMessageInput] = useState("");

  
  const handleConversationClick = (conversationId: string) => {
    setCurrentConversationId(conversationId);
  };

  
  const sendMessage = async () => {
    if (!messageInput.trim() || !currentConversationId) return;

    
    const newMessage: Message = {
      sender: "You",
      content: messageInput,
    };

    
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

    
    try {
      const response = await fetch("https://farm-basket3.onrender.com/messages/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: newMessage,
        }),
      });

      if (!response.ok) {
        console.error("Failed to send message to the server");
        
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  
  const selectedConversation = conversations.find(
    (conversation) => conversation.id === currentConversationId
  );

  
  return (
    <div className="flex h-screen">
     
        
        
          <div className="w-1/3  overflow-y-auto">
            <ul>
              {conversations.map((conversation) => (
                <li
                  key={conversation.id}
                  className={`p-2 cursor-pointer ${
                    currentConversationId === conversation.id ? "bg-blue-500" : ""
                  }`}
                  onClick={() => handleConversationClick(conversation.id)}
                >
                  <strong>{conversation.name}</strong>
                </li>
              ))}
            </ul>
          </div>

          
          <div className="w-2/3 p-4 flex flex-col">
            {selectedConversation ? (
              <div className="flex flex-col flex-grow">
              
                <div
                  className="flex-grow overflow-y-auto mb-4"
                  style={{ maxHeight: "500px" }}
                >
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
                            ? "bg-green-500 text-white rounded-br-none"
                            : "bg-gray-200 text-black rounded-bl-none"
                        }`}
                      >
                        <strong>{message.sender !== "You" && `${message.sender}`}</strong>{" "}
                        {message.content}
                      </div>
                    </div>
                  ))}
                </div>

                
                <div className="flex text-black items-center">
                  <input
                    type="text"
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    placeholder="Type your message"
                    className="flex-1 border p-2 rounded"
                  />
                  <button
                    onClick={sendMessage}
                    className="ml-2 bg-green-500 text-black px-4 py-2 rounded"
                  >
                    Send
                  </button>
                </div>
              </div>
            ) : (
              <p>Select a conversation to view messages.</p>
            )}
          </div>
        </div>
      
    
  );
}