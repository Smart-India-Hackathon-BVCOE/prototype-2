import React, { useState } from "react";

const ChatInterface = () => {
  const [messages, setMessages] = useState([
    { type: "ai", content: "Hello! How can I assist you today?" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { type: "user", content: input }]);
      setInput("");
      // Simulating AI response
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            type: "ai",
            content:
              "This is a simulated AI response. Connect your API here for real functionality.",
          },
        ]);
      }, 1000);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-gray-100">
      <div className="w-full max-w-4xl bg-gray-800 shadow-xl rounded-lg p-6 space-y-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-blue-400">
            Welcome to our Portal
            <span className="text-green-400">!</span>
          </h1>
          <p className="text-xl text-gray-400 mt-2">
            Your personal docs assistant.
          </p>
        </div>

        <div className="space-y-4 h-96 overflow-y-auto px-2">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.type === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`p-4 rounded-lg max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl ${
                  message.type === "user"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-700 text-gray-100"
                }`}
              >
                <p>{message.content}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1 p-3 bg-gray-700 text-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Type your message..."
          />
          <button
            onClick={handleSend}
            className="bg-blue-600 text-white px-4 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out flex items-center justify-center"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
