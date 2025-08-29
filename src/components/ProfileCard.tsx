import { User, MapPin, AtSign, Copy, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";

const copyButtonVariants: Variants = {
  initial: { scale: 1, rotate: 0 },
  hover: {
    scale: 1.12,
    rotate: 8,
    transition: { type: "spring" as const, stiffness: 300, damping: 18 },
  },
  tap: {
    scale: 0.95,
    rotate: -8,
    transition: { type: "spring" as const, stiffness: 300, damping: 18 },
  },
};

const iconVariants = {
  initial: { opacity: 1, scale: 1 },
  copied: {
    opacity: 1,
    scale: 1.2,
    transition: { type: "spring" as "spring", stiffness: 400, damping: 18 },
  },
  exit: { opacity: 0, scale: 0.8, transition: { duration: 0.15 } },
};

const ProfileCard = ({ t, handleCopy, copiedField, siteConfig }: any) => (
  <motion.div
    className="sticky top-8 z-0"
    initial={{ opacity: 0, y: 30 }}
    animate={{
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 120, damping: 18 },
    }}
  >
    <motion.div
      className="aspect-square w-full overflow-hidden rounded-xl shadow-lg transition-all duration-500 ease-in-out hover:shadow-2xl"
      whileHover={{
        scale: 1.015,
        boxShadow: "0 8px 32px 0 rgba(59,130,246,0.10)",
      }}
      transition={{ type: "spring", stiffness: 180, damping: 20 }}
    >
      <img
        src={siteConfig.profile.avatar}
        alt="Profile"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
    </motion.div>
    <div className="mt-6 space-y-4">
      <motion.div
        className="flex items-center gap-3 text-gray-700 dark:text-gray-200 transition-colors duration-300"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0, transition: { delay: 0.1 } }}
      >
        <User className="w-5 h-5" />
        <span className="text-base font-medium">{t("profile.realName")}</span>
      </motion.div>
      <motion.div
        className="flex items-center gap-3 text-gray-700 dark:text-gray-200 transition-colors duration-300"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0, transition: { delay: 0.18 } }}
      >
        <MapPin className="w-5 h-5" />
        <span className="text-base">{t("profile.location")}</span>
      </motion.div>
      <motion.div
        className="flex items-center gap-3 text-gray-700 dark:text-gray-200 transition-colors duration-300"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0, transition: { delay: 0.26 } }}
      >
        <AtSign className="w-5 h-5" />
        <span className="text-base truncate">{t("profile.email")}</span>
        <motion.button
          onClick={() => handleCopy(t("profile.email"), "email")}
          className={`ml-2 flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600
            ${
              copiedField === "email"
                ? "bg-gray-200 dark:bg-gray-700 scale-110"
                : "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
            }`}
          aria-label="Copy to clipboard"
          tabIndex={0}
          variants={copyButtonVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
        >
          <AnimatePresence mode="wait" initial={false}>
            {copiedField === "email" ? (
              <motion.span
                key="check"
                variants={iconVariants}
                initial="initial"
                animate="copied"
                exit="exit"
                className="flex"
              >
                <Check className="w-4 h-4 text-green-500" />
              </motion.span>
            ) : (
              <motion.span
                key="copy"
                variants={iconVariants}
                initial="initial"
                animate="initial"
                exit="exit"
                className="flex"
              >
                <Copy className="w-4 h-4 text-gray-500" />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </motion.div>
    </div>
  </motion.div>
);

export default ProfileCard;
