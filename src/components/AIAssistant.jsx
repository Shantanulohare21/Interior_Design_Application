import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Namaste! I'm your Aangan AI assistant. How can I help you design your dream space today?",
      sender: "bot",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    const currentUserMessage = {
      id: Date.now(),
      text: inputValue,
      sender: "user",
    };
    setMessages((prev) => [...prev, currentUserMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      let botResponse =
        "That sounds wonderful! Our principal designer would love to discuss this further. Would you like to schedule a free Vastu consultation?";

      const lowerInput = currentUserMessage.text.toLowerCase();
      if (lowerInput.includes("cost") || lowerInput.includes("price")) {
        botResponse =
          "Our full-home interior design projects typically start from ₹15 Lakhs, depending on the scale and material choices. We'd love to give you a more accurate estimate!";
      } else if (lowerInput.includes("vastu")) {
        botResponse =
          "Vastu Shastra is at the heart of our unique approach. We ensure spatial harmony, proper directions for living areas, and positive energy flow.";
      } else if (
        lowerInput.includes("location") ||
        lowerInput.includes("city") ||
        lowerInput.includes("where")
      ) {
        botResponse =
          "We have active teams in Mumbai, Delhi, Bangalore, Hyderabad, Pune, and Chennai!";
      }

      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, text: botResponse, sender: "bot" },
      ]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        className="fixed bottom-[28px] right-[100px] w-[60px] h-[60px] bg-charcoal border-2 border-gold rounded-full flex items-center justify-center shadow-lg shadow-gold/20 z-50 group hover:bg-gold transition-colors duration-300"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        aria-label="Open AI Assistant"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-gold group-hover:text-charcoal transition-colors"
        >
          <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7v5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-5a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z" />
          <path d="M9 16a3 3 0 0 0 6 0" />
          <path d="M8 12h.01" />
          <path d="M16 12h.01" />
        </svg>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-[100px] right-[28px] w-[350px] sm:w-[380px] h-[500px] max-h-[70vh] bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden border border-gold/20 max-w-[calc(100vw-56px)]"
          >
            {/* Header */}
            <div className="bg-charcoal p-4 flex items-center justify-between border-b border-gold/30">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#1C1C1C"
                    strokeWidth="2"
                  >
                    <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7v5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-5a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z" />
                  </svg>
                </div>
                <div>
                  <h3
                    className="text-gold font-semibold text-sm"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Aangan AI Assistant
                  </h3>
                  <p className="text-ivory/60 text-xs">
                    Online — Ready to help
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-ivory/60 hover:text-gold transition-colors"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Chat Body */}
            <div className="flex-1 bg-ivory p-4 overflow-y-auto flex flex-col gap-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                    msg.sender === "user"
                      ? "bg-burgundy text-ivory self-end rounded-br-sm"
                      : "bg-white text-charcoal border border-charcoal/5 self-start rounded-bl-sm shadow-sm"
                  }`}
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {msg.text}
                </div>
              ))}
              {isTyping && (
                <div className="bg-white text-charcoal border border-charcoal/5 self-start rounded-2xl rounded-bl-sm p-4 shadow-sm w-16 flex items-center justify-center gap-1.5">
                  <motion.div
                    className="w-1.5 h-1.5 bg-gold rounded-full"
                    animate={{ y: [0, -4, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8, delay: 0 }}
                  />
                  <motion.div
                    className="w-1.5 h-1.5 bg-gold rounded-full"
                    animate={{ y: [0, -4, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8, delay: 0.2 }}
                  />
                  <motion.div
                    className="w-1.5 h-1.5 bg-gold rounded-full"
                    animate={{ y: [0, -4, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8, delay: 0.4 }}
                  />
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Chat Input */}
            <form
              onSubmit={handleSend}
              className="p-3 bg-white border-t border-charcoal/5 flex gap-2"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about pricing, vast... "
                className="flex-1 bg-ivory/50 rounded-xl px-4 py-2 text-sm outline-none focus:ring-1 focus:ring-gold border border-transparent focus:border-gold transition-all text-charcoal"
                style={{ fontFamily: "var(--font-body)" }}
              />
              <button
                type="submit"
                disabled={!inputValue.trim()}
                className="w-10 h-10 bg-gold text-charcoal rounded-xl flex items-center justify-center hover:bg-gold-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="ml-1"
                >
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
