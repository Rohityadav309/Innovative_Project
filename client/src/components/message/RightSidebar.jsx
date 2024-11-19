import React, { useState } from "react";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import SendIcon from "@mui/icons-material/Send";

function RightSidebar() {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      setMessages([...messages, inputMessage]);
      setInputMessage(""); // Clear the input field after sending
    }
  };

  return (
    <div className="flex flex-col h-screen w-[20vw] border-l border-black border-[2px]">
      <div className="flex items-center p-2 bg-[#96DEDA]">
        <img
          src="assets/person/1.jpeg"
          alt="pic"
          className="w-12 h-12 rounded-full ml-1"
        />
        <h3 className="ml-2 text-lg font-semibold">hello</h3>
      </div>
      <div className="h-0.5 bg-black"></div>
      <div className="flex-grow overflow-y-auto p-2 scrollbar-hide">
        {messages.map((message, index) => (
          <div key={index} className="mb-2">
            {message}
          </div>
        ))}
      </div>
      <div className="flex items-center p-2 border-t border-black-300 bg-[#96DEDA]">
        <input
          type="text"
          placeholder="Type a message..."
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
          className="flex-grow mr-2 p-2 border rounded"
        />
        <div className="mr-2">
          <AttachFileIcon />
        </div>
        <EmojiEmotionsIcon />
        <button onClick={handleSendMessage} className="ml-2 p-1 text-gray-700">
          <SendIcon />
        </button>
      </div>
    </div>
  );
}

export default RightSidebar;
