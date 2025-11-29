import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import type { Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 120, damping: 18 },
  },
};

const headingVariants: Variants = {
  hidden: { opacity: 0, y: -16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1,
      duration: 0.5,
      type: "spring" as const,
      stiffness: 120,
    },
  },
};

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.15 + i * 0.06,
      duration: 0.4,
      type: "spring" as const,
      stiffness: 120,
    },
  }),
};

const Privacy = () => {
  const { t } = useTranslation();

  const sections: Record<string, React.ReactNode> = {
    introduction: (
      <>
        <h2 className="text-xl font-semibold mb-3 text-zinc-800 dark:text-white">
          {t("privacy.introductionTitle", "Introduction")}
        </h2>
        <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
          {t(
            "privacy.introductionText",
            "This is a personal website and it does not collect, store, or share any personal data from visitors.",
          )}
        </p>
      </>
    ),
    informationCollection: (
      <>
        <h2 className="text-xl font-semibold mb-3 text-zinc-800 dark:text-white">
          {t("privacy.informationCollectionTitle", "Information Collection")}
        </h2>
        <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
          {t(
            "privacy.informationCollectionText",
            "We do not collect any personal information from you when you visit this website.",
          )}
        </p>
      </>
    ),
    useOfInformation: (
      <>
        <h2 className="text-xl font-semibold mb-3 text-zinc-800 dark:text-white">
          {t("privacy.useOfInformationTitle", "Use of Information")}
        </h2>
        <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
          {t(
            "privacy.useOfInformationText",
            "Since no information is collected, no information is used or processed in any way.",
          )}
        </p>
      </>
    ),
    dataSecurity: (
      <>
        <h2 className="text-xl font-semibold mb-3 text-zinc-800 dark:text-white">
          {t("privacy.dataSecurityTitle", "Data Security")}
        </h2>
        <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
          {t(
            "privacy.dataSecurityText",
            "As no personal data is collected or stored, there are no security risks regarding your personal information on this website.",
          )}
        </p>
      </>
    ),
    contactUs: (
      <>
        <h2 className="text-xl font-semibold mb-3 text-zinc-800 dark:text-white">
          {t("privacy.contactUsTitle", "Contact Us")}
        </h2>
        <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
          {t(
            "privacy.contactUsText",
            "If you have any questions about this Privacy Policy, please contact us at",
          ) + " "}
          <a
            href="mailto:rossandrews.vtuber@gmail.com"
            className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 underline transition-colors duration-300"
          >
            rossandrews.vtuber@gmail.com
          </a>
          .
        </p>
      </>
    ),
  };

  return (
    <motion.main
      className="max-w-3xl mx-auto px-4 py-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        className="text-3xl font-bold mb-8 text-zinc-900 dark:text-white text-center"
        variants={headingVariants}
        initial="hidden"
        animate="visible"
      >
        {t("privacy.title", "Privacy Policy")}
      </motion.h1>
      <motion.div
        className="space-y-8 text-zinc-700 dark:text-zinc-200 text-base leading-relaxed bg-white/95 dark:bg-zinc-800/95 backdrop-blur-lg rounded-2xl shadow-lg p-8 md:p-10 transition-all duration-500 hover:shadow-xl border border-zinc-100 dark:border-zinc-700"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        transition={{ delayChildren: 0.2, staggerChildren: 0.08 }}
        whileHover={{
          scale: 1.01,
          boxShadow: "0 12px 48px rgba(59, 130, 246, 0.1)",
        }}
      >
        {Object.values(sections).map((section, i) => (
          <motion.div
            key={i}
            variants={sectionVariants}
            custom={i}
            initial="hidden"
            animate="visible"
          >
            {section}
          </motion.div>
        ))}
      </motion.div>
    </motion.main>
  );
};

export default Privacy;
