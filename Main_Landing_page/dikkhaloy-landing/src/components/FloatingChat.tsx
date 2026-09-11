"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, ChevronDown } from "lucide-react";

interface Message {
  id: number;
  from: "user" | "agent";
  text: string;
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: 1,
    from: "agent",
    text: "আস্সালামু আলাইকুম! 👋 Dikkhaloy-তে স্বাগতম। আপনাকে কীভাবে সাহায্য করতে পারি?",
  },
];

const QUICK_REPLIES = [
  "মূল্য তালিকা জানতে চাই",
  "Free trial কীভাবে শুরু করব?",
  "Demo দেখতে চাই",
  "Technical support দরকার",
];

/** Auto-reply for demo purposes */
function autoReply(msg: string): string {
  const m = msg.toLowerCase();
  if (m.includes("মূল্য") || m.includes("price") || m.includes("দাম"))
    return "আমাদের pricing সম্পূর্ণ flexible। #pricing সেকশন দেখুন, অথবা আমাদের team-এর সাথে কথা বলুন। 📞";
  if (m.includes("trial") || m.includes("শুরু") || m.includes("free"))
    return "বিনামূল্যে শুরু করতে উপরে 'বিনামূল্যে শুরু করুন' বাটনে ক্লিক করুন। কোনো credit card লাগবে না! ✅";
  if (m.includes("demo"))
    return "আমাদের Live Demo-র জন্য একটি appointment book করুন। আমরা আপনার প্রতিষ্ঠানের জন্য কাস্টম ডেমো দেব। 🗓️";
  if (m.includes("support") || m.includes("সমস্যা") || m.includes("help"))
    return "Technical সমস্যার জন্য আমাদের WhatsApp-এ যোগাযোগ করুন অথবা support@dikkhaloy.com-এ email করুন। 🛠️";
  return "ধন্যবাদ আপনার মেসেজের জন্য। আমাদের একজন agent শীঘ্রই আপনার সাথে যোগাযোগ করবেন। 🙏";
}

export default function FloatingChat() {
  const [open, setOpen]         = useState(false);
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [input, setInput]       = useState("");
  const [typing, setTyping]     = useState(false);
  const [unread, setUnread]     = useState(0);
  const bottomRef               = useRef<HTMLDivElement>(null);
  const inputRef                = useRef<HTMLInputElement>(null);
  const nextId                  = useRef(2);

  // Auto-scroll on new message
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  // Focus input when opened
  useEffect(() => {
    if (open) {
      setUnread(0);
      setTimeout(() => inputRef.current?.focus(), 200);
    }
  }, [open]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = { id: nextId.current++, from: "user", text: text.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setTyping(true);

    // Simulate agent typing delay
    setTimeout(() => {
      const reply: Message = {
        id: nextId.current++,
        from: "agent",
        text: autoReply(text),
      };
      setMessages((prev) => [...prev, reply]);
      setTyping(false);
      if (!open) setUnread((u) => u + 1);
    }, 1200 + Math.random() * 600);
  };

  const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") sendMessage(input);
  };

  return (
    <>
      {/* ── Chat Window ── */}
      {open && (
        <div
          className="fixed bottom-24 right-4 sm:right-6 z-[70] w-[calc(100vw-2rem)] sm:w-[360px] max-h-[520px] flex flex-col rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-white"
          style={{ animation: "fadeSlideIn 0.25s ease-out" }}
          role="dialog"
          aria-label="Live chat"
          aria-modal="true"
        >
          {/* Header */}
          <div className="flex items-center gap-3 bg-gradient-to-r from-green-700 to-emerald-800 px-4 py-3.5 text-white">
            {/* Agent avatar */}
            <div className="relative">
              <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center text-base">🎓</div>
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 border-2 border-emerald-800 rounded-full" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-semibold text-sm">Dikkhaloy Support</div>
              <div className="text-green-300 text-[10px] flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse inline-block" />
                সাধারণত কয়েক মিনিটে উত্তর দেই
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="p-1.5 rounded-lg hover:bg-white/15 transition-colors"
              aria-label="চ্যাট বন্ধ করুন"
            >
              <ChevronDown size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50" style={{ maxHeight: "280px" }}>
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
              >
                {msg.from === "agent" && (
                  <div className="w-6 h-6 bg-gradient-to-br from-green-600 to-emerald-700 rounded-full flex items-center justify-center text-white text-[10px] mr-2 flex-shrink-0 mt-auto">
                    🎓
                  </div>
                )}
                <div
                  className={`
                    max-w-[75%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed
                    ${msg.from === "user"
                      ? "bg-green-600 text-white rounded-br-md shadow-sm"
                      : "bg-white text-gray-800 border border-gray-100 rounded-bl-md shadow-sm"
                    }
                  `}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {typing && (
              <div className="flex justify-start">
                <div className="w-6 h-6 bg-gradient-to-br from-green-600 to-emerald-700 rounded-full flex items-center justify-center text-white text-[10px] mr-2 flex-shrink-0 mt-auto">
                  🎓
                </div>
                <div className="bg-white border border-gray-100 rounded-2xl rounded-bl-md px-4 py-3 shadow-sm">
                  <div className="flex gap-1 items-center h-3">
                    {[0, 1, 2].map((i) => (
                      <div
                        key={i}
                        className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: `${i * 0.15}s` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Quick replies */}
          <div className="flex gap-2 px-4 py-2 overflow-x-auto scrollbar-hide bg-white border-t border-gray-100">
            {QUICK_REPLIES.map((q) => (
              <button
                key={q}
                onClick={() => sendMessage(q)}
                className="flex-shrink-0 text-[10px] text-green-700 border border-green-200 bg-green-50 hover:bg-green-100 px-3 py-1.5 rounded-full transition-colors font-medium whitespace-nowrap"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="flex items-center gap-2 px-4 py-3 bg-white border-t border-gray-100">
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="মেসেজ লিখুন..."
              className="flex-1 text-sm bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all"
              aria-label="Chat message input"
            />
            <button
              onClick={() => sendMessage(input)}
              disabled={!input.trim()}
              className="w-9 h-9 bg-gradient-to-br from-green-600 to-emerald-700 text-white rounded-xl flex items-center justify-center shadow-md hover:shadow-lg disabled:opacity-40 disabled:cursor-not-allowed hover:scale-105 active:scale-95 transition-all"
              aria-label="মেসেজ পাঠান"
            >
              <Send size={15} />
            </button>
          </div>
        </div>
      )}

      {/* ── FAB button ── */}
      <button
        className="chat-fab"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "চ্যাট বন্ধ করুন" : "Live chat খুলুন"}
        aria-expanded={open}
      >
        <span className="relative z-10 text-white transition-transform duration-300" style={{ transform: open ? "rotate(0deg)" : "rotate(0deg)" }}>
          {open
            ? <X size={22} className="text-white" />
            : <MessageCircle size={22} className="text-white" />
          }
        </span>
        {/* Unread badge */}
        {!open && unread > 0 && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white z-20">
            {unread}
          </span>
        )}
      </button>
    </>
  );
}
