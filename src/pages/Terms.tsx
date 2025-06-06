import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const containerVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 18 },
  },
};

const headingVariants = {
  hidden: { opacity: 0, y: -16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.1, duration: 0.5, type: "spring", stiffness: 120 },
  },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.15 + i * 0.06,
      duration: 0.4,
      type: "spring",
      stiffness: 120,
    },
  }),
};

const Terms = () => {
  const { t } = useTranslation();

  const sections: Record<string, React.ReactNode> = {
    lastUpdated: (
      <p>
        <strong>{t("terms.lastUpdated", "Last updated:")}</strong> June 2025
      </p>
    ),
    intro: (
      <p>
        {t(
          "terms.intro",
          "By accessing or using this website, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use the site."
        )}
      </p>
    ),
    useOfContent: (
      <>
        <h2 className="text-xl font-semibold mb-2">
          {t("terms.useOfContentTitle", "Use of Content")}
        </h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            {t(
              "terms.useOfContent1",
              "All content on this website is for personal, non-commercial use unless otherwise stated."
            )}
          </li>
          <li>
            {t(
              "terms.useOfContent2",
              "You may not copy, reproduce, or distribute content without permission."
            )}
          </li>
        </ul>
      </>
    ),
    userConduct: (
      <>
        <h2 className="text-xl font-semibold mb-2">
          {t("terms.userConductTitle", "User Conduct")}
        </h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            {t(
              "terms.userConduct1",
              "Do not use this website for unlawful purposes or to harm others."
            )}
          </li>
          <li>
            {t(
              "terms.userConduct2",
              "Do not attempt to gain unauthorized access to any part of the site."
            )}
          </li>
        </ul>
      </>
    ),
    disclaimer: (
      <>
        <h2 className="text-xl font-semibold mb-2">
          {t("terms.disclaimerTitle", "Disclaimer")}
        </h2>
        <p>
          {t(
            "terms.disclaimerText",
            'This website is provided "as is" without warranties of any kind. We do not guarantee the accuracy or completeness of any content.'
          )}
        </p>
      </>
    ),
    liability: (
      <>
        <h2 className="text-xl font-semibold mb-2">
          {t("terms.liabilityTitle", "Limitation of Liability")}
        </h2>
        <p>
          {t(
            "terms.liabilityText",
            "We are not liable for any damages or losses resulting from your use of this website."
          )}
        </p>
      </>
    ),
    changes: (
      <>
        <h2 className="text-xl font-semibold mb-2">
          {t("terms.changesTitle", "Changes to Terms")}
        </h2>
        <p>
          {t(
            "terms.changesText",
            "We may update these Terms of Service at any time. Continued use of the site means you accept the updated terms."
          )}
        </p>
      </>
    ),
    contact: (
      <>
        <h2 className="text-xl font-semibold mb-2">
          {t("terms.contactTitle", "Contact")}
        </h2>
        <p>
          {t(
            "terms.contactText",
            "If you have any questions about these Terms, please contact us at:"
          )}{" "}
          <a
            href="mailto:rossandrews.vtuber@gmail.com"
            className="text-blue-600 dark:text-blue-400 underline"
          >
            rossandrews.vtuber@gmail.com
          </a>
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
        {t("terms.title", "Terms of Service")}
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

export default Terms;
