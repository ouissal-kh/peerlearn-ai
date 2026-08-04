const messages = [
  {
    role: "ai",
    text: "Hello Ouissal 👋 I'm your AI Mentor. What would you like to learn today?",
  },
  {
    role: "user",
    text: "I want to learn React.",
  },
  {
    role: "ai",
    text: "Great choice! I recommend starting with Components, Props, State, then Hooks.",
  },
];

export default function MentorCard() {
  return (
    <div className="rounded-3xl bg-white shadow-sm">
      {/* Header */}

      <div className="border-b border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-gray-900">
          🤖 AI Mentor
        </h2>

        <p className="mt-2 text-gray-600">
          Your personal learning assistant.
        </p>
      </div>

      {/* Messages */}

      <div className="space-y-5 p-6">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${
              msg.role === "user"
                ? "justify-end"
                : "justify-start"
            }`}
          >
            <div
              className={`max-w-md rounded-2xl px-5 py-4 ${
                msg.role === "user"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-900"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input */}

      <div className="border-t border-gray-200 p-6">
        <div className="flex gap-4">
          <input
            placeholder="Ask your AI Mentor..."
            className="flex-1 rounded-xl border border-gray-300 px-5 py-3 outline-none focus:border-blue-600"
          />

          <button className="rounded-xl bg-blue-600 px-6 text-white hover:bg-blue-700">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}