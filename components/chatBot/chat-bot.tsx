import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Bot, Plus, MessageSquare, User, Settings, Send } from "lucide-react";

export default function ChatGPTClone() {
  const [messages, setMessages] = React.useState([
    { role: "assistant", content: "Hello! How can I assist you today?" },
    { role: "user", content: "Can you explain what React is?" },
    {
      role: "assistant",
      content:
        "React is a popular JavaScript library for building user interfaces. It was developed by Facebook and is widely used for creating interactive, reusable UI components. React uses a virtual DOM (Document Object Model) to efficiently update and render components, which helps in building fast and scalable web applications. It follows a component-based architecture, allowing developers to break down complex UIs into smaller, manageable pieces. React also introduces JSX, a syntax extension that allows you to write HTML-like code within JavaScript, making it easier to describe what the UI should look like.",
    },
  ]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const input = form.elements.namedItem("message") as HTMLInputElement;
    const newMessage = input.value.trim();
    if (newMessage) {
      setMessages([...messages, { role: "user", content: newMessage }]);
      input.value = "";
    }
  };

  return (
    <div className="flex h-screen bg-gray-900 text-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-gray-100 flex flex-col">
        <div className="p-4">
          <Button
            variant="outline"
            className="w-full justify-start text-gray-100 border-gray-700 hover:bg-gray-700 hover:text-gray-100"
          >
            <Plus className="mr-2 h-4 w-4" />
            New chat
          </Button>
        </div>
        <ScrollArea className="flex-grow">
          <div className="p-4 space-y-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Button
                key={i}
                variant="ghost"
                className="w-full justify-start text-gray-300 hover:bg-gray-700 hover:text-gray-100"
              >
                <MessageSquare className="mr-2 h-4 w-4" />
                Conversation {i + 1}
              </Button>
            ))}
          </div>
        </ScrollArea>
        <Separator className="bg-gray-700" />
        <div className="p-4">
          <Button
            variant="ghost"
            className="w-full justify-start text-gray-300 hover:bg-gray-700 hover:text-gray-100"
          >
            <User className="mr-2 h-4 w-4" />
            Upgrade to Plus
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start text-gray-300 hover:bg-gray-700 hover:text-gray-100"
          >
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-gray-800 border-b border-gray-700 p-4 flex items-center justify-between">
          <h1 className="text-xl font-semibold text-gray-100">ChatGPT</h1>
          <Select>
            <SelectTrigger className="w-[180px] bg-gray-700 text-gray-100 border-gray-600">
              <SelectValue placeholder="Select a model" />
            </SelectTrigger>
            <SelectContent className="bg-gray-700 text-gray-100 border-gray-600">
              <SelectItem value="gpt-3.5-turbo">GPT-3.5</SelectItem>
              <SelectItem value="gpt-4">GPT-4</SelectItem>
            </SelectContent>
          </Select>
        </header>

        {/* Chat Area */}
        <ScrollArea className="flex-grow p-4 space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[80%] p-4 rounded-lg ${
                  message.role === "user"
                    ? "bg-blue-600 text-gray-100"
                    : "bg-gray-700 text-gray-100"
                }`}
              >
                <div className="flex items-center mb-2">
                  {message.role === "user" ? (
                    <User className="h-6 w-6 mr-2" />
                  ) : (
                    <Bot className="h-6 w-6 mr-2" />
                  )}
                  <span className="font-semibold">
                    {message.role === "user" ? "You" : "ChatGPT"}
                  </span>
                </div>
                <p>{message.content}</p>
              </div>
            </div>
          ))}
        </ScrollArea>

        {/* Input Area */}
        <div className="border-t border-gray-700 p-4">
          <form onSubmit={handleSendMessage} className="flex space-x-2">
            <Input
              name="message"
              placeholder="Type your message here..."
              className="flex-grow bg-gray-700 text-gray-100 border-gray-600 placeholder-gray-400"
            />
            <Button
              type="submit"
              className="bg-blue-600 text-gray-100 hover:bg-blue-700"
            >
              <Send className="h-4 w-4 mr-2" />
              Send
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
