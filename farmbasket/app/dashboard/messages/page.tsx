"use client";
import React, { useState } from "react";

export default function Messages() {
//   type Message = {
//     sender: string;
//     content: string;
//   };

//   type Conversation = {
//     id: string;
//     name: string;
//     profilePicture: string | null; // Placeholder for profile picture (null for now)
//     isOnline: boolean; // Online status
//     lastSeen: string; // Last seen time
//     messages: Message[];
//   };

//   const [conversations, setConversations] = useState<Conversation[]>([
//     {
//       id: "1",
//       name: "Alice",
//       profilePicture: null,
//       isOnline: true,
//       lastSeen: "Today 14:53",
//       messages: [
//         { sender: "", content: "Hey, how are you?" },
//         { sender: "You", content: "I'm good, thanks! How about you?" },
//       ],
//     },
//     {
//       id: "2",
//       name: "Bob",
//       profilePicture: null,
//       isOnline: false,
//       lastSeen: "Yesterday 19:30",
//       messages: [
//         { sender: "", content: "Are we still on for today?" },
//         { sender: "You", content: "Yes, see you at 5!" },
//       ],
//     },
//     {
//       id: "3",
//       name: "Lisbeth",
//       profilePicture: null,
//       isOnline: false,
//       lastSeen: "Today 09:15",
//       messages: [
//         { sender: "", content: "Do you still have the tractor?" },
//         { sender: "You", content: "Yes, I do." },
//       ],
//     },
//   ]);

//   const [currentConversationId, setCurrentConversationId] = useState<string | null>(null);
//   const [messageInput, setMessageInput] = useState("");

//   const handleConversationClick = (conversationId: string) => {
//     setCurrentConversationId(conversationId);
//   };

//   const sendMessage = async () => {
//     if (!messageInput.trim() || !currentConversationId) return;

//     const newMessage: Message = {
//       sender: "You",
//       content: messageInput,
//     };

//     setConversations((prevConversations) =>
//       prevConversations.map((conversation) =>
//         conversation.id === currentConversationId
//           ? {
//               ...conversation,
//               messages: [...conversation.messages, newMessage],
//             }
//           : conversation
//       )
//     );

//     setMessageInput("");

//     try {
//       const response = await fetch("https://farm-basket3.onrender.com/messages/send", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           messages: newMessage,
//         }),
//       });

//       if (!response.ok) {
//         console.error("Failed to send message to the server");
//       }
//     } catch (error) {
//       console.error("Error sending message:", error);
//     }
//   };

//   const selectedConversation = conversations.find(
//     (conversation) => conversation.id === currentConversationId
//   );

//   return (
//     <div className="flex h-screen bg-gray-900 text-white overflow-hidden">
//       {/* Sidebar */}
//       <div className="w-1/4 bg-gray-800 p-4 flex flex-col overflow-y-auto">
//         <h2 className="text-lg font-bold mb-4">Customers</h2>
//         <ul className="flex flex-col gap-4">
//           {conversations.map((conversation) => (
//             <li
//               key={conversation.id}
//               className={`p-3 rounded-lg cursor-pointer flex items-center gap-4 ${
//                 currentConversationId === conversation.id ? "bg-green-500 text-black" : "bg-gray-700"
//               }`}
//               onClick={() => handleConversationClick(conversation.id)}
//             >
//               {/* Profile Picture Placeholder */}
//               <div className="w-8 h-8 rounded-full bg-gray-400"></div>
//               <span className="text-lg">{conversation.name}</span>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Messages Section */}
//       <div className="w-3/4 flex flex-col h-full bg-gray-100">
//         {selectedConversation ? (
//           <div className="flex flex-col text-black h-full">
//             {/* Chat Header */}
//             <div className="p-4 bg-white border-b flex items-center gap-4">
//               <div className="w-10 h-10 rounded-full bg-gray-400"></div>
//               <div>
//                 <h3 className="font-bold text-lg">{selectedConversation.name}</h3>
//                 <p className="text-sm text-gray-500">
//                   {selectedConversation.isOnline ? "Active" : `Last seen ${selectedConversation.lastSeen}`}
//                 </p>
//               </div>
//             </div>

//             {/* Messages Display */}
//             <div className="flex-grow overflow-y-auto bg-white p-4">
//               {selectedConversation.messages.map((message, index) => (
//                 <div
//                   key={index}
//                   className={`flex mb-2 ${
//                     message.sender === "You" ? "justify-end" : "justify-start"
//                   }`}
//                 >
//                   <div
//                     className={`max-w-xs p-2 rounded-lg ${
//                       message.sender === "You"
//                         ? "bg-green-500 text-black rounded-br-none"
//                         : "bg-gray-300 text-black rounded-bl-none"
//                     }`}
//                   >
//                     <strong>{message.sender !== "You" && `${message.sender}`}</strong> {message.content}
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Message Input */}
//             <div className="flex items-center p-4 border-t bg-white">
//               <input
//                 type="text"
//                 value={messageInput}
//                 onChange={(e) => setMessageInput(e.target.value)}
//                 placeholder="Type your message"
//                 className="flex-1 border p-3 rounded-lg text-black"
//               />
//               <button
//                 onClick={sendMessage}
//                 className="ml-3 bg-green-500 text-black px-6 py-2 rounded-lg"
//               >
//                 Send
//               </button>
//             </div>
//           </div>
//         ) : (
//           <p className="text-black text-center m-auto">Select a conversation to view messages.</p>
//         )}
//       </div>


}
