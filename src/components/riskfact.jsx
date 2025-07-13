import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import "./flipcard.css"; // Make sure this path is correct

export default function MythVsTruthSection() {
  const { t } = useTranslation();
  const mythTruthPairs = [
    {
      myth: t("myth.myth1"),
      truth: t("myth.truth1"),
    },
    {
      myth: t("myth.myth2"),
      truth: t("myth.truth2"),
    },
    {
      myth: t("myth.myth3"),
      truth: t("myth.truth3"),
    },
    {
      myth: t("myth.myth4"),
      truth: t("myth.truth4"),
    },
    {
      myth: t("myth.myth5"),
      truth: t("myth.truth5"),
    },
    {
      myth: t("myth.myth6"),
      truth: t("myth.truth6"),
    },
  ];

  return (
    <section className="py-20 px-2 sm:px-4 md:px-10">
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-pink-600 mb-6 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ 
          duration: 0.8,
          ease: "easeOut"
        }}
      >
        {t("myth.title", "Myth vs Truth")}
      </motion.h2>

      <motion.p
        className="text-gray-600 max-w-2xl mx-auto text-center mb-12 text-base sm:text-lg"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ 
          delay: 0.2,
          duration: 0.6,
          ease: "easeOut"
        }}
      >
        {t("myth.description", "Flip the cards to uncover the truth and break common misconceptions about breast cancer.")}
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7 justify-center">
        {mythTruthPairs.map((item, index) => (
          <motion.div
            key={index}
            className="flip-card w-full max-w-xs sm:max-w-sm md:max-w-md h-60 mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: index * 0.2,
              duration: 0.8,
              ease: "easeOut"
            }}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            <motion.div 
              className="flip-inner rounded-xl shadow-xl"
              whileHover={{ rotateY: 180 }}
              transition={{ 
                type: "spring",
                stiffness: 300,
                damping: 25
              }}
            >
              <div className="flip-front bg-gradient-to-br from-white to-pink-50">
                <div className="text-center p-4 sm:p-6">
                  <motion.h3 
                    className="text-lg sm:text-xl font-semibold mb-4 text-pink-600"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {t("myth.myth", "Myth")}
                  </motion.h3>
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{item.myth}</p>
                </div>
              </div>
              <div className="flip-back bg-gradient-to-br from-pink-50 to-white">
                <div className="text-center p-4 sm:p-6">
                  <motion.h3 
                    className="text-lg sm:text-xl font-semibold mb-4 text-green-600"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {t("myth.truth", "Truth")}
                  </motion.h3>
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{item.truth}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}