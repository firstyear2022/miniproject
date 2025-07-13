import React from "react";
import { motion } from "framer-motion";
import { Eye, Hand } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function BreastSelfExamSection() {
  const { t } = useTranslation();
  const steps = [
    {
      title: t("selfex.step1_title"),
      icon: Eye,
      description: t("selfex.step1_desc"),
    },
    {
      title: t("selfex.step2_title"),
      icon: Hand,
      description: t("selfex.step2_desc"),
    },
    {
      title: t("selfex.step3_title"),
      icon: Hand,
      description: t("selfex.step3_desc"),
    },
    {
      title: t("selfex.step4_title"),
      icon: Hand,
      description: t("selfex.step4_desc"),
    },
  ];

  const tips = [
    t("selfex.tip1"),
    t("selfex.tip2"),
    t("selfex.tip3"),
    t("selfex.tip4"),
  ];

  return (
    <section className="max-w-4xl mx-auto p-4 sm:p-6 my-8 sm:my-12">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-2xl sm:text-3xl font-bold text-pink-700 mb-6 text-center"
      >
        {t("selfex.title")}
      </motion.h2>
      <p className="text-center text-gray-700 mb-8 max-w-2xl mx-auto">
        {t("selfex.intro")}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        {steps.map((step, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="bg-white rounded-xl shadow p-5 sm:p-6 flex flex-col gap-2"
          >
            <div className="flex items-center gap-3 mb-2">
              <step.icon className="w-6 h-6 text-pink-600" />
              <h3 className="text-lg font-semibold text-pink-700">
                {step.title}
              </h3>
            </div>
            <p className="text-gray-700 text-sm sm:text-base">{step.description}</p>
          </motion.div>
        ))}
      </div>
      <motion.h3
        className="text-xl font-bold text-pink-600 mb-4 text-center"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {t("selfex.pro_tips_title")}
      </motion.h3>
      <ul className="list-disc list-inside text-gray-700 max-w-xl mx-auto mb-6">
        {tips.map((tip, idx) => (
          <li key={idx} className="mb-2 text-sm sm:text-base">{tip}</li>
        ))}
      </ul>
    </section>
  );
}