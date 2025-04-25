"use client";

import Image from "next/image";

export default function ChatDashboard() {
  const questions = [
    {
      name: "Phoenix Baker",
      handle: "@phoenix",
      time: "5min ago",
      question: "What are the requirements for opening a new store?",
      avatar: "/av1.svg",
    },
    {
      name: "Koray Okumus",
      handle: "@koray",
      time: "4hr ago",
      question: "How do I manage inventory effectively?",
      avatar: "/av2.svg",
    },
  ];

  const lft = "/lft.svg";
  const rht = "/rht.svg";

  return (
    <div className="bg-white w-full h-full flex flex-col sm:flex-row rounded-2xl shadow overflow-hidden">
      {/* Left Section: Pending Questions */}
      <div className="w-full sm:w-1/3 border-r px-4 py-6 bg-white">
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-semibold text-lg">Pending Questions</h2>
          <span className="text-xs bg-blue-600 text-white px-2 py-0.5 rounded-full font-medium">
            02
          </span>
        </div>

        <ul className="divide-y divide-gray-200">
          {questions.map((q, idx) => (
            <li key={idx} className="py-4 flex gap-3 items-start">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <Image
                  src={q.avatar}
                  alt={q.name}
                  width={36}
                  height={36}
                  className="rounded-full object-cover"
                />
              </div>

              <div className="flex-1">
                <div className="flex justify-between text-sm">
                  <span className="font-semibold">{q.name}</span>
                  <span className="text-gray-400 text-xs">{q.time}</span>
                </div>
                <div className="text-xs text-gray-500">{q.handle}</div>
                <div className="text-sm text-gray-700 mt-1">{q.question}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Section: AI Chat Assistant */}
      <div className="w-full sm:w-2/3 bg-gray-50 flex flex-col justify-center items-center text-center px-6 py-10">
        <div className="flex items-center justify-center mb-4 -space-x-10">
          <Image src={lft} alt="Left Vector" width={40} height={40} />
          <Image src={rht} alt="Right Vector" width={40} height={40} />
        </div>

        <h2 className="text-xl font-semibold mb-2">Welcome to the AI Chat Assistant</h2>
        <p className="text-sm text-gray-500 mb-6">Ask your question here..</p>

        <div className="flex w-full max-w-md">
          <input
            type="text"
            placeholder="Ask your question here..."
            className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <button className="bg-blue-500 text-white px-4 rounded-r-md text-sm">
            ➤
          </button>
        </div>
      </div>
    </div>
  );
}
