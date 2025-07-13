import React from "react";
import { motion } from "framer-motion";
import { FileDown, Stethoscope } from "lucide-react";
import { useTranslation } from "react-i18next";

const stages = [
	{
		stage: "stage0",
		desc: "stage0_desc",
		spread: "stage0_spread",
		treatment: "stage0_treatment",
		prognosis: "stage0_prognosis",
	},
	{
		stage: "stage1",
		desc: "stage1_desc",
		spread: "stage1_spread",
		treatment: "stage1_treatment",
		prognosis: "stage1_prognosis",
	},
	{
		stage: "stage2",
		desc: "stage2_desc",
		spread: "stage2_spread",
		treatment: "stage2_treatment",
		prognosis: "stage2_prognosis",
	},
	{
		stage: "stage3",
		desc: "stage3_desc",
		spread: "stage3_spread",
		treatment: "stage3_treatment",
		prognosis: "stage3_prognosis",
	},
	{
		stage: "stage4",
		desc: "stage4_desc",
		spread: "stage4_spread",
		treatment: "stage4_treatment",
		prognosis: "stage4_prognosis",
	},
];

const AddOns = () => {
	const { t } = useTranslation();
	return (
		<div className="grid gap-4 md:grid-cols-2 mt-10">
			<div className="bg-pink-100 p-4 sm:p-6 rounded-xl shadow">
				<h4 className="text-lg font-bold mb-2">
					{t("stages.download_guide")}
				</h4>
				<p className="text-sm text-gray-700 mb-2">
					{t("stages.download_guide_desc")}
				</p>
				<a
					href="https://www.cooperhealth.org/sites/default/files/pdfs/Breast%20Cancer%20Treatment%20by%20Stage.pdf"
					className="inline-flex items-center gap-2 text-pink-700 font-medium hover:underline"
				>
					<FileDown className="w-4 h-4" />{" "}
					{t("stages.download_pdf")}
				</a>
			</div>
			<div className="bg-pink-100 p-4 sm:p-6 rounded-xl shadow">
				<h4 className="text-lg font-bold mb-2">
					{t("stages.expert_video")}
				</h4>
				<p className="text-sm text-gray-700 mb-2">
					{t("stages.expert_video_desc")}
				</p>
				<a
					href="https://www.youtube.com/watch?v=Dr6MejkqRoQ"
					target="_blank"
					rel="noopener noreferrer"
					className="inline-flex items-center gap-2 text-pink-700 font-medium hover:underline"
				>
					<Stethoscope className="w-4 h-4" />{" "}
					{t("stages.watch_now")}
				</a>
			</div>
		</div>
	);
};

export default function BreastCancerStagesSection() {
	const { t } = useTranslation();
	return (
		<section className="py-10 px-3 sm:px-6 bg-white">
			<div className="max-w-5xl mx-auto">
				<h2 className="text-2xl sm:text-3xl font-bold text-pink-600 mb-6 text-center">
					{t("stages.title")}
				</h2>
				<p className="text-center text-gray-700 mb-8 sm:mb-12 max-w-2xl mx-auto text-base sm:text-lg">
					{t("stages.intro")}
				</p>
				<div className="grid gap-6">
					{stages.map((item, idx) => (
						<motion.div
							key={idx}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.4, delay: idx * 0.1 }}
							className="p-4 sm:p-6 rounded-xl shadow bg-pink-50 border-l-4 border-pink-500"
						>
							<h3 className="text-lg sm:text-xl font-semibold text-pink-700 mb-2">
								{t(`stages.${item.stage}`)}
							</h3>
							<p className="text-sm sm:text-base text-gray-700 mb-2">
								{t(`stages.${item.desc}`)}
							</p>
							<ul className="text-sm sm:text-base text-gray-600 list-disc ml-5">
								<li>
									<strong>{t("stages.spread")}</strong>{" "}
									{t(`stages.${item.spread}`)}
								</li>
								<li>
									<strong>{t("stages.treatment")}</strong>{" "}
									{t(`stages.${item.treatment}`)}
								</li>
								<li>
									<strong>{t("stages.prognosis")}</strong>{" "}
									{t(`stages.${item.prognosis}`)}
								</li>
							</ul>
						</motion.div>
					))}
				</div>
				<AddOns />
				<div className="mt-10 bg-pink-100 p-4 sm:p-5 rounded-xl">
					<h4 className="font-bold text-pink-700 text-base sm:text-lg mb-2">
						{t("stages.why_important")}
					</h4>
					<p className="text-sm sm:text-base text-gray-700">
						{t("stages.why_important_desc")}
					</p>
				</div>
			</div>
		</section>
	);
}