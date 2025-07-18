// ScreeningAndDiagnosisSection.tsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ScanLine,
  Stethoscope,
  Eye,
  FlaskConical,
  CalendarCheck2,
  LocateFixed,
  HelpCircle,
} from "lucide-react";
import { useTranslation } from "react-i18next";

export default function ScreeningAndDiagnosisSection() {
  const { t } = useTranslation();
  const [quizStep, setQuizStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const screeningMethods = [
    {
      title: t("screening.mammogram_title", "Mammogram"),
      icon: ScanLine,
      description: t(
        "screening.mammogram_desc",
        "A mammogram is a low-dose X-ray of the breast that can detect tumors before they can be felt. It's the most reliable screening tool for early detection. Annual screening is recommended for women aged 40 and above."
      ),
    },
    {
      title: t("screening.cbe_title", "Clinical Breast Exam (CBE)"),
      icon: Stethoscope,
      description: t(
        "screening.cbe_desc",
        "A physical examination performed by a healthcare professional to feel for lumps or other changes. It's often done during routine health checkups and is essential for early detection, especially in women aged 20–39 (every 1–3 years)."
      ),
    },
    {
      title: t("screening.bse_title", "Breast Self-Exam (BSE)"),
      icon: Eye,
      description: t(
        "screening.bse_desc",
        "A self-check method where a woman examines her own breasts for changes like lumps, swelling, or dimpling. While not a replacement for clinical exams, it helps increase body awareness and encourages women to notice unusual signs."
      ),
    },
    {
      title: t("screening.mri_biopsy_title", "MRI & Biopsy"),
      icon: FlaskConical,
      description: t(
        "screening.mri_biopsy_desc",
        "MRI is used for high-risk women, often alongside mammograms. A biopsy involves removing a small tissue sample to confirm cancer when an abnormality is found."
      ),
    },
  ];
  const questions = [
    {
      q: t("screening.quiz_q1", "Are you over 40 years old?"),
      yes: t("screening.quiz_q1_yes", "You should consider annual mammograms."),
      no: null,
    },
    {
      q: t("screening.quiz_q2", "Do you have a family history of breast cancer?"),
      yes: t("screening.quiz_q2_yes", "You may need screening with MRI and mammograms earlier."),
      no: null,
    },
    {
      q: t("screening.quiz_q3", "Do you feel any unusual lumps or changes in your breasts?"),
      yes: t("screening.quiz_q3_yes", "A clinical breast exam and possibly a biopsy are recommended."),
      no: t("screening.quiz_q3_no", "Continue monthly self-checks and regular screenings."),
    },
  ];

  const handleAnswer = (ans) => {
    const next = quizStep + 1;
    const result =
      ans === "yes" ? questions[quizStep].yes : questions[quizStep].no;
    if (result) setAnswers((prev) => [...prev, result]);
    setQuizStep(next);
  };

  return (
    <section className="py-14 px-3 sm:px-6 bg-gradient-to-b from-white to-pink-50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-pink-600 text-center mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {t("screening.title", "6. Screening & Diagnosis")}
        </motion.h2>

        <motion.p
          className="text-center text-gray-700 max-w-3xl mx-auto mb-10 sm:mb-12 text-base sm:text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {t(
            "screening.intro",
            "Early detection of breast cancer saves lives. Screening allows cancers to be found before symptoms appear — improving the chances of successful treatment. Below are the most common and effective screening methods."
          )}
        </motion.p>

        {/* Screening Methods */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mb-14">
          {screeningMethods.map((method, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-md p-5 sm:p-6 border border-pink-200 flex flex-col h-full"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <method.icon className="w-7 h-7 text-pink-600" />
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                  {method.title}
                </h3>
              </div>
              <p className="text-gray-600 text-sm sm:text-base">
                {method.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Timeline Cards */}
        <motion.h3
          className="text-lg sm:text-xl font-bold text-pink-700 text-center mb-4 sm:mb-6"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          {t("screening.when_start", "When Should You Start Screening?")}
        </motion.h3>

        <div className="flex flex-col md:flex-row justify-center items-center gap-5 md:gap-6 text-center mb-14">
          {[
            {
              age: t("screening.age_20_39", "Ages 20–39"),
              text: t("screening.age_20_39_text", "Monthly self-exams & clinical exams every 1–3 years."),
            },
            {
              age: t("screening.age_40_plus", "Ages 40+"),
              text: t("screening.age_40_plus_text", "Annual mammograms and regular clinical exams."),
            },
            {
              age: t("screening.high_risk", "High-Risk Women"),
              text: t("screening.high_risk_text", "Early and more frequent screenings (MRI + mammogram)."),
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow p-4 sm:p-5 w-full max-w-xs md:w-72 border border-pink-100 mx-auto"
            >
              <CalendarCheck2 className="text-pink-600 w-6 h-6 mx-auto mb-2" />
              <h4 className="text-pink-700 font-semibold mb-1">
                {item.age}
              </h4>
              <p className="text-sm sm:text-base text-gray-600">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mb-10 sm:mb-12">
          <a
            href="https://www.google.com/maps/search/breast+screening+centers+near+me"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white text-sm sm:text-base font-medium py-3 px-6 rounded-full transition"
          >
            <LocateFixed className="w-5 h-5" />
            {t("screening.find_center", "Find a Screening Center Near You")}
          </a>
        </div>

        {/* Interactive Quiz */}
        <div className="bg-white border border-pink-200 rounded-xl p-5 sm:p-8 max-w-md sm:max-w-2xl mx-auto text-center shadow-sm">
          <HelpCircle className="w-8 h-8 text-pink-600 mx-auto mb-4" />
          <h3 className="text-lg sm:text-xl font-semibold text-pink-700 mb-4">
            {t("screening.quiz_title", "What Screening is Right for You?")}
          </h3>

          {quizStep < questions.length ? (
            <>
              <p className="mb-6 text-gray-700 font-medium text-base sm:text-lg">
                {questions[quizStep].q}
              </p>
              <div className="flex flex-col xs:flex-row justify-center gap-4 sm:gap-6">
                <button
                  onClick={() => handleAnswer("yes")}
                  className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full"
                >
                  {t("screening.yes", "Yes")}
                </button>
                <button
                  onClick={() => handleAnswer("no")}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-2 rounded-full"
                >
                  {t("screening.no", "No")}
                </button>
              </div>
            </>
          ) : (
            <div className="space-y-2">
              {answers.length > 0 ? (
                answers.map((a, i) => (
                  <p key={i} className="text-gray-700 text-sm sm:text-base">
                    {a}
                  </p>
                ))
              ) : (
                <p className="text-gray-700">
                  {t("screening.keep_up", "Keep up your regular screenings!")}
                </p>
              )}
              <button
                onClick={() => {
                  setQuizStep(0);
                  setAnswers([]);
                }}
                className="mt-4 text-sm text-pink-600 hover:underline"
              >
                {t("screening.take_quiz_again", "Take quiz again")}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}