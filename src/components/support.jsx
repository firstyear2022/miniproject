import React from "react";
import { Phone, Globe, Hospital, Users, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function SupportResources() {
  const { t } = useTranslation();
  return (
    <section className="py-10 px-3 sm:px-6 rounded-xl max-w-6xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold text-pink-600 mb-6 text-center">
        {t("support.title")}
      </h2>
      <p className="text-center text-gray-700 max-w-2xl mx-auto mb-10 sm:mb-12 text-base sm:text-lg">
        {t("support.intro")}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {/* Helplines */}
        <div className="bg-white p-4 sm:p-6 rounded-lg border border-pink-200 shadow-sm">
          <div className="flex items-center gap-3 text-pink-600 mb-3">
            <Phone />
            <h3 className="text-lg sm:text-xl font-semibold">{t("support.helplines.title")}</h3>
          </div>
          <ul className="text-gray-700 list-disc list-inside space-y-2 text-sm sm:text-base">
            <li><strong>{t("support.helplines.india_label")}</strong> {t("support.helplines.india")}</li>
            <li><strong>{t("support.helplines.usa_label")}</strong> {t("support.helplines.usa")}</li>
            <li><strong>{t("support.helplines.uk_label")}</strong> {t("support.helplines.uk")}</li>
            <li><strong>{t("support.helplines.email_label")}</strong> {t("support.helplines.email")}</li>
          </ul>
        </div>

        {/* Forums */}
        <div className="bg-white p-4 sm:p-6 rounded-lg border border-pink-200 shadow-sm">
          <div className="flex items-center gap-3 text-pink-600 mb-3">
            <Globe />
            <h3 className="text-lg sm:text-xl font-semibold">{t("support.forums.title")}</h3>
          </div>
          <ul className="text-gray-700 list-disc list-inside space-y-2 text-sm sm:text-base">
            <li><a href="https://community.breastcancer.org" target="_blank" rel="noreferrer" className="text-pink-700 underline">{t("support.forums.bco")}</a></li>
            <li><a href="https://cancerforums.net" target="_blank" rel="noreferrer" className="text-pink-700 underline">{t("support.forums.cf")}</a></li>
            <li><a href="https://www.reddit.com/r/breastcancer/" target="_blank" rel="noreferrer" className="text-pink-700 underline">{t("support.forums.reddit")}</a></li>
          </ul>
        </div>

        {/* Clinics */}
        <div className="bg-white p-4 sm:p-6 rounded-lg border border-pink-200 shadow-sm">
          <div className="flex items-center gap-3 text-pink-600 mb-3">
            <Hospital />
            <h3 className="text-lg sm:text-xl font-semibold">{t("support.clinics.title")}</h3>
          </div>
          <ul className="text-gray-700 list-disc list-inside space-y-2 text-sm sm:text-base">
            <li><strong>{t("support.clinics.tata")}</strong></li>
            <li><strong>{t("support.clinics.acs")}</strong></li>
            <li><strong>{t("support.clinics.pinkhope")}</strong></li>
            <li><strong>{t("support.clinics.cansupport")}</strong></li>
          </ul>
          <a
            href="https://www.google.com/maps/search/breast+cancer+clinics+near+me"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center text-pink-600 mt-3 underline text-sm sm:text-base"
          >
            <MapPin className="mr-2" size={18} /> {t("support.clinics.find_nearby")}
          </a>
        </div>

        {/* Survivor Stories */}
        <div className="bg-white p-4 sm:p-6 rounded-lg border border-pink-200 shadow-sm">
          <div className="flex items-center gap-3 text-pink-600 mb-3">
            <Users />
            <h3 className="text-lg sm:text-xl font-semibold">{t("support.survivors.title")}</h3>
          </div>
          <p className="text-gray-700 mb-2 text-sm sm:text-base">
            {t("support.survivors.intro")}
          </p>
          <ul className="text-pink-700 list-disc list-inside space-y-1 text-sm sm:text-base">
            <li><a href="https://www.nationalbreastcancer.org/breast-cancer-ribbon/" target="_blank" rel="noreferrer">{t("support.survivors.ribbon")}</a></li>
            <li><a href="https://www.survivingbreastcancer.org/breast-cancer-stories?gad_source=1&gad_campaignid=10554593716&gbraid=0AAAAACT9FcqaFSYxSFne8OwVv6jrH0UR4&gclid=CjwKCAjwruXBBhArEiwACBRtHX4GZAufCallF702LY2uSoogC9r_qGhL39DVJAvlmvuu8s9VaMyfqBoCcW4QAvD_BwE" target="_blank" rel="noreferrer">{t("support.survivors.bco_stories")}</a></li>
          </ul>
        </div>
      </div>
    </section>
  );
}