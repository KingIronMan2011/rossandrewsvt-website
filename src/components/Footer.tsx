import { motion } from "framer-motion";

const footerVariants: any = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 80, damping: 18 },
  },
};

const linkVariants = {
  initial: { opacity: 0, y: 10 },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 + i * 0.08, duration: 0.4 },
  }),
};

const Footer = ({ t }: any) => (
  <motion.footer
    className="w-full flex flex-col items-center py-8 text-sm text-gray-500 bg-white/80 dark:bg-gray-900/80 rounded-b-xl shadow-inner transition-all duration-500"
    variants={footerVariants}
    initial="initial"
    animate="animate"
  >
    <motion.div
      className="mb-2 text-center"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1, duration: 0.5, type: "tween" }}
    >
      &copy; {new Date().getFullYear()}{" "}
      <span className="font-semibold text-gray-700 dark:text-gray-200 transition-colors duration-300">
        {t("profile.realName")}
      </span>
      . {t("footer.rights", "All rights reserved.")}{" "}
    </motion.div>
    <div className="flex gap-6 mt-1">
      {[
        {
          href: "/privacy-policy",
          label: t("privacyPolicy", "Privacy Policy"),
        },
        {
          href: "/terms-of-service",
          label: t("termsOfService", "Terms of Service"),
        },
      ].map((link, i) => (
        <motion.a
          key={link.href}
          href={link.href}
          className="hover:underline hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
          variants={linkVariants}
          initial="initial"
          animate="animate"
          custom={i}
        >
          {link.label}
        </motion.a>
      ))}
      <motion.span
        className="text-gray-300 dark:text-gray-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.32, duration: 0.3 }}
      >
        |
      </motion.span>
    </div>
    <motion.div
      className="mt-2 text-xs text-gray-400 dark:text-gray-500"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.4 }}
    >
      {t("footer.madeBy", "Made by")}{" "}
      <a
        href="https://github.com/KingIronMan2011"
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold hover:underline text-blue-600 dark:text-blue-400"
      >
        KingIronMan2011
      </a>
    </motion.div>
  </motion.footer>
);

export default Footer;
