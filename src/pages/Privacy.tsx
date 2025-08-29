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
        <h2 className="text-xl font-semibold mb-2">
          {t("privacy.introductionTitle", "Introduction")}
        </h2>
        <p>
          {t(
            "privacy.introductionText",
            "This is a personal website and it does not collect, store, or share any personal data from visitors.",
          )}
        </p>
      </>
    ),
    informationCollection: (
      <>
        <h2 className="text-xl font-semibold mb-2">
          {t("privacy.informationCollectionTitle", "Information Collection")}
        </h2>
        <p>
          {t(
            "privacy.informationCollectionText",
            "We do not collect any personal information from you when you visit this website.",
          )}
        </p>
      </>
    ),
    useOfInformation: (
      <>
        <h2 className="text-xl font-semibold mb-2">
          {t("privacy.useOfInformationTitle", "Use of Information")}
        </h2>
        <p>
          {t(
            "privacy.useOfInformationText",
            "Since no information is collected, no information is used or processed in any way.",
          )}
        </p>
      </>
    ),
    dataSecurity: (
      <>
        <h2 className="text-xl font-semibold mb-2">
          {t("privacy.dataSecurityTitle", "Data Security")}
        </h2>
        <p>
          {t(
            "privacy.dataSecurityText",
            "As no personal data is collected or stored, there are no security risks regarding your personal information on this website.",
          )}
        </p>
      </>
    ),
    contactUs: (
      <>
        <h2 className="text-xl font-semibold mb-2">
          {t("privacy.contactUsTitle", "Contact Us")}
        </h2>
        <p>
          {t(
            "privacy.contactUsText",
            "If you have any questions about this Privacy Policy, please contact us at",
          ) + " "}
          <a
            href="mailto:rossandrews.vtuber@gmail.com"
            className="text-blue-600 dark:text-blue-400 underline"
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
      className="max-w-2xl mx-auto px-4 py-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        className="text-3xl font-bold mb-6 text-gray-800 dark:text-white"
        variants={headingVariants}
        initial="hidden"
        animate="visible"
      >
        {t("privacy.title", "Privacy Policy")}
      </motion.h1>
      <motion.div
        className="space-y-6 text-gray-700 dark:text-gray-200 text-base leading-relaxed bg-white/80 dark:bg-gray-900/80 rounded-xl shadow-md p-8 border border-gray-100/60 dark:border-gray-800/60"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        transition={{ delayChildren: 0.2, staggerChildren: 0.08 }}
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
