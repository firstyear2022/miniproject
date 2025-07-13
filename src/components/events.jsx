import React, { useState } from "react";
import { CalendarCheck, Users, Megaphone } from "lucide-react";
import { useTranslation } from "react-i18next";

const campaigns = [
  {
    key: "awareness_month",
    icon: Megaphone,
    link: "https://www.breastcancer.org/about-breast-cancer/breast-cancer-awareness-month",
  },
  {
    key: "walkathon",
    icon: Users,
  },
  {
    key: "screening_drive",
    icon: CalendarCheck,
  },
];

export default function CampaignsEvents() {
  const { t } = useTranslation();
  const [rsvpName, setRsvpName] = useState("");
  const [rsvpEmail, setRsvpEmail] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleRSVP = (e) => {
    e.preventDefault();
    if (!rsvpName.trim() || !rsvpEmail.trim() || !selectedEvent) {
      alert(t("events.rsvp_alert"));
      return;
    }
    setSubmitted(true);
    setRsvpName("");
    setRsvpEmail("");
    setSelectedEvent(null);
  };

  return (
    <section className="py-16 px-6 bg-white mx-auto">
      <h2 className="text-3xl font-bold text-pink-600 mb-6 text-center">
        {t("events.title")}
      </h2>
      <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
        {t("events.intro")}
      </p>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {campaigns.map(({ key, icon: Icon }, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between border border-pink-200 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center gap-3 mb-4 text-pink-600">
              <Icon size={28} />
              <h3 className="text-xl font-semibold">
                {t(`events.campaigns.${key}.title`)}
              </h3>
            </div>
            <p className="text-gray-600 mb-2">
              {t(`events.campaigns.${key}.description`)}
            </p>
            <p className="text-sm text-pink-500 font-medium mb-2">
              {t(`events.campaigns.${key}.date`)}
            </p>
            {t(`events.campaigns.${key}.location`, { defaultValue: "" }) && (
              <p className="text-gray-500 italic text-sm mb-4">
                4cd{" "}
                {t(`events.campaigns.${key}.location`)}
              </p>
            )}
            {key !== "awareness_month" && (
              <button
                className="mt-auto self-start bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-4 rounded"
                onClick={() => {
                  setSelectedEvent(key);
                  setSubmitted(false);
                }}
              >
                {t("events.rsvp_button")}
              </button>
            )}
            {key === "awareness_month" && (
              <a
                href="https://www.breastcancer.org/about-breast-cancer/breast-cancer-awareness-month"
                target="_blank"
                rel="noreferrer"
                className="mt-auto self-start text-pink-700 font-semibold underline"
              >
                {t("events.learn_more")}
              </a>
            )}
          </div>
        ))}
      </div>

      {/* RSVP Form */}
      {selectedEvent && (
        <div className="max-w-md mx-auto bg-white p-6 rounded-xl border border-pink-200 shadow-md">
          <h3 className="text-2xl font-semibold text-pink-600 mb-4">
            {t("events.rsvp_for", {
              event: t(`events.campaigns.${selectedEvent}.title`),
            })}
          </h3>
          <form onSubmit={handleRSVP} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-1"
              >
                {t("events.full_name")}
              </label>
              <input
                type="text"
                id="name"
                value={rsvpName}
                onChange={(e) => setRsvpName(e.target.value)}
                className="w-full p-2 border border-pink-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-1"
              >
                {t("events.email_address")}
              </label>
              <input
                type="email"
                id="email"
                value={rsvpEmail}
                onChange={(e) => setRsvpEmail(e.target.value)}
                className="w-full p-2 border border-pink-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 rounded transition-colors"
            >
              {t("events.submit_rsvp")}
            </button>
          </form>
          {submitted && (
            <p className="mt-4 text-green-700 font-medium">
              389 {t("events.rsvp_thank_you")}
            </p>
          )}
          <button
            className="mt-3 text-pink-600 underline"
            onClick={() => setSelectedEvent(null)}
          >
            {t("events.cancel")}
          </button>
        </div>
      )}

      <div className="mt-16 text-center text-gray-700 max-w-lg mx-auto">
        <h3 className="text-xl font-semibold mb-2">
          {t("events.participate_title")}
        </h3>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>{t("events.participate_1")}</li>
          <li>{t("events.participate_2")}</li>
          <li>{t("events.participate_3")}</li>
          <li>{t("events.participate_4")}</li>
          <li>{t("events.participate_5")}</li>
        </ul>
      </div>
    </section>
  );
}
