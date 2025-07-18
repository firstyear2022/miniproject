import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MessageCircleHeart } from "lucide-react";
import { useTranslation } from "react-i18next";
import "../styles/animations.css";

const ChatbotSupport = () => {
  const { t, i18n } = useTranslation();
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: t("chatbot.greeting"),
    },
  ]);

  useEffect(() => {
    setMessages([
      {
        from: "bot",
        text: t("chatbot.greeting"),
      },
    ]);
  }, [i18n.language, t]);

  const handleUserInput = (keyword) => {
  // Show the translated button text as the user's message
  let userText = "";
  if (keyword === "diagnosed") userText = t("chatbot.btn_diagnosed");
  else if (keyword === "screen") userText = t("chatbot.btn_screened");
  else if (keyword === "scared") userText = t("chatbot.btn_scared");
  else userText = keyword;

  setMessages((prev) => [...prev, { from: "user", text: userText }]);
  setTimeout(() => {
    let reply = t("chatbot.default");
    if (keyword === "diagnosed") reply = t("chatbot.diagnosed");
    else if (keyword === "screen") reply = t("chatbot.screening");
    else if (keyword === "scared") reply = t("chatbot.scared");
    setMessages((prev) => [...prev, { from: "bot", text: reply }]);
  }, 800);
};

  return (
    <div className="mt-16 p-6 bg-white rounded-xl shadow-md max-w-2xl mx-auto">
      <div className="flex items-center gap-3 mb-4">
        <MessageCircleHeart className="text-pink-600 w-6 h-6" />
        <h3 className="text-lg font-semibold text-gray-800">
          {t("chatbot.title")}
        </h3>
      </div>
      <div className="border p-4 h-64 overflow-y-auto bg-pink-50 rounded mb-4">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`mb-2 text-sm ${
              msg.from === "user"
                ? "text-right text-gray-700"
                : "text-left text-pink-700"
            }`}
          >
            <p>{msg.text}</p>
          </div>
        ))}
      </div>
      <div className="flex gap-2 flex-wrap">
        <button
  onClick={() => handleUserInput("diagnosed")}
  className="text-sm bg-pink-100 text-pink-700 px-3 py-1 rounded"
>
  {t("chatbot.btn_diagnosed")}
</button>
<button
  onClick={() => handleUserInput("screen")}
  className="text-sm bg-pink-100 text-pink-700 px-3 py-1 rounded"
>
  {t("chatbot.btn_screened")}
</button>
<button
  onClick={() => handleUserInput("scared")}
  className="text-sm bg-pink-100 text-pink-700 px-3 py-1 rounded"
>
  {t("chatbot.btn_scared")}
</button>
      </div>
    </div>
  );
};

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-pink-100 opacity-20 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute right-0 top-1/4 w-80 h-80 rounded-full bg-pink-200 opacity-20 blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, -50, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute left-1/4 bottom-1/4 w-72 h-72 rounded-full bg-pink-300 opacity-20 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [50, 0, 50],
          y: [-50, 0, -50],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

const RibbonAnimation = () => (
  <motion.div
    className="absolute right-10 top-20 w-24 h-24 opacity-20"
    animate={{
      rotate: 360,
      scale: [1, 1.1, 1],
    }}
    transition={{
      duration: 20,
      repeat: Infinity,
      ease: "linear",
    }}
  >
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M50 0C22.4 0 0 22.4 0 50s22.4 50 50 50 50-22.4 50-50S77.6 0 50 0zm0 90C27.9 90 10 72.1 10 50S27.9 10 50 10s40 17.9 40 40-17.9 40-40 40z"
        fill="#EC4899"
      />
      <circle cx="50" cy="50" r="15" fill="#EC4899" />
    </svg>
  </motion.div>
);

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="bg-white/70 text-gray-800 relative">
      <AnimatedBackground />

      {/* Hero Section */}
      <motion.section
        className="min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 relative"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <RibbonAnimation />
        <motion.h1
          className="text-4xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent animate-gradient"
          style={{
            backgroundImage:
              "linear-gradient(90deg, #f43f5e 0%, #ec4899 25%, #a21caf 50%, #ec4899 75%, #f43f5e 100%)",
            backgroundSize: "300% 300%",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {t("welcome")}
        </motion.h1>
        <motion.p
          className="text-base sm:text-lg text-gray-600 max-w-xl mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {t("awareness_info")}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Link
            to="/awareness"
            className="px-6 py-3 rounded-full shadow font-semibold transition bg-gradient-to-r from-pink-500 via-pink-400 to-purple-500 text-white hover:brightness-110"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #f43f5e 0%, #ec4899 25%, #a21caf 100%)",
            }}
          >
            {t("awareness_label")}
          </Link>
        </motion.div>
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        className="py-20 px-4 sm:px-6 text-center bg-pink-50/80 backdrop-blur-sm relative"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <RibbonAnimation />
        <h2 className="text-3xl sm:text-4xl font-semibold text-pink-600 mb-4">
          {t("about_project", "About This Project")}
        </h2>
        <p className="max-w-3xl mx-auto text-base sm:text-lg text-gray-700">
          {t("about_project_desc")}
        </p>
      </motion.section>

      <motion.section
        className="py-20 px-4 sm:px-6 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-pink-700 mb-4">
          {t("ready_to_take_step", "Ready to Take a Step?")}
        </h2>
        <p className="text-gray-600 mb-6 text-base sm:text-lg">
          {t("ready_to_take_step_desc")}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          <Link
            to="/symptoms"
            className="bg-white border-2 border-pink-500 text-pink-600 px-6 py-3 rounded-full hover:bg-pink-100 transition mb-3 sm:mb-0"
          >
            {t("symptoms_label")}
          </Link>
          <Link
            to="/awareness"
            className="bg-pink-500 text-white px-6 py-3 rounded-full hover:bg-pink-600 transition"
          >
            {t("awareness_label")}
          </Link>
        </div>
      </motion.section>

      <ChatbotSupport />
    </div>
  );
}