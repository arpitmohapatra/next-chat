import React, { useState } from "react";
import { Send } from "lucide-react";
import { ResizableBox } from "react-resizable";
import "react-resizable/css/styles.css";
import { Message, Article } from "../lib/interfaces";
import mockArticles from "../lib/mock";

// Add resizable container component
const ResizablePanel = ({
  children,
  width,
  onResize,
}: {
  children: React.ReactNode;
  width: number;
  onResize: (width: number) => void;
}) => {
  return (
    <ResizableBox
      width={width}
      height={Infinity}
      minConstraints={[300, Infinity]}
      maxConstraints={[800, Infinity]}
      onResize={(e, { size }) => onResize(size.width)}
      resizeHandles={["e"]}
      className="relative"
    >
      {children}
    </ResizableBox>
  );
};

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [articles, setArticles] = useState<Article[]>([]);
  const [leftPanelWidth, setLeftPanelWidth] = useState(800);

  // Calculate right panel width based on left panel
  const rightPanelWidth = window.innerWidth - leftPanelWidth;

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: input,
      sender: "user",
    };

    const botMessage: Message = {
      id: Date.now() + 1,
      text: `You said: ${input}`,
      sender: "bot",
    };

    setMessages([...messages, userMessage, botMessage]);
    setArticles(mockArticles(input));
    setInput("");
  };

  return (
    <div className="flex-1 flex">
      <ResizablePanel width={leftPanelWidth} onResize={setLeftPanelWidth}>
        <div className="h-full flex flex-col bg-gray-50 border-r">
          <div className="flex-1 p-4 overflow-y-auto">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`mb-4 flex ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-xs md:max-w-md p-3 rounded-lg ${
                    message.sender === "user"
                      ? "bg-blue-600 text-white"
                      : "bg-white text-gray-900"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSend} className="p-4 bg-white border-t">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <Send size={20} />
              </button>
            </div>
          </form>
        </div>
      </ResizablePanel>

      <div style={{ width: rightPanelWidth }} className="bg-white p-4">
        <h2 className="text-xl font-semibold mb-4">Relevant Articles</h2>
        <div className="space-y-4">
          {articles.map((article) => (
            <div key={article.id} className="p-4 border rounded-lg">
              <h3 className="font-medium mb-2">{article.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{article.snippet}</p>
              <a
                href={article.url}
                className="text-blue-600 hover:underline text-sm"
              >
                Read more
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chat;
