import { motion, Variants } from "framer-motion";
import { Link } from "react-router-dom";

const footerVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

const linkVariants: Variants = {
  initial: { opacity: 0, y: 10 },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2 + i * 0.1,
      duration: 0.4,
      type: "spring",
      stiffness: 120,
    },
  }),
};

const Footer = ({ t }: any) => (
  <motion.footer
    className="w-full flex flex-col items-center py-10 px-4 text-sm text-zinc-600 dark:text-zinc-400 bg-zinc-50 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 transition-all duration-500"
    variants={footerVariants}
    initial="initial"
    animate="animate"
  >
    {/* Copyright Section */}
    <motion.div
      className="text-center mb-6"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1, duration: 0.5, type: "spring", stiffness: 120 }}
    >
      <p className="text-base font-medium text-zinc-800 dark:text-zinc-200">
        &copy; {new Date().getFullYear()}{" "}
        <span className="font-semibold text-zinc-900 dark:text-white">
          {t("profile.realName")}
        </span>
        . {t("footer.rights", "All rights reserved.")}
      </p>
    </motion.div>

    {/* Links Section */}
    <div className="flex flex-wrap justify-center gap-6 mb-4">
      {[
        {
          to: "/privacy-policy",
          label: t("privacy.title", "Privacy Policy"),
        },
        {
          to: "/terms-of-service",
          label: t("terms.title", "Terms of Service"),
        },
      ].map((link, i) => (
        <motion.div
          key={link.to}
          className="text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 hover:underline transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-900"
          variants={linkVariants}
          initial="initial"
          animate="animate"
          custom={i}
        >
          <Link to={link.to}>{link.label}</Link>
        </motion.div>
      ))}
    </div>

    {/* Made By Section */}
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.4, type: "spring", stiffness: 120 }}
    >
      <p className="text-sm text-zinc-500 dark:text-zinc-500">
        {t("footer.madeBy", "Made by")}{" "}
        <a
          href="https://github.com/KingIronMan2011"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:underline transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-900"
        >
          KingIronMan2011
        </a>
      </p>
    </motion.div>
  </motion.footer>
);

export default Footer;
