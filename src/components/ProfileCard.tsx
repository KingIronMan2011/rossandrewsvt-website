import { User, MapPin, AtSign, Copy, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";

const copyButtonVariants: Variants = {
  initial: { scale: 1, rotate: 0 },
  hover: {
    scale: 1.1,
    rotate: 5,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
  tap: {
    scale: 0.95,
    rotate: -5,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
};

const iconVariants: Variants = {
  initial: { opacity: 1, scale: 1 },
  copied: {
    opacity: 1,
    scale: 1.2,
    transition: { type: "spring", stiffness: 400, damping: 20 },
  },
  exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
};

const ProfileCard = ({ t, handleCopy, copiedField, siteConfig }: any) => (
  <motion.div
    className="w-full"
    initial={{ opacity: 0, y: 30 }}
    animate={{
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 120, damping: 20 },
    }}
  >
    <motion.div
      className="aspect-square w-full overflow-hidden rounded-xl shadow-lg transition-all duration-500 ease-in-out hover:shadow-xl border border-gray-200 dark:border-gray-700"
      whileHover={{
        scale: 1.02,
        boxShadow: "0 8px 32px rgba(59, 130, 246, 0.1)",
      }}
      transition={{ type: "spring", stiffness: 180, damping: 25 }}
    >
      <img
        src={siteConfig.profile.avatar}
        alt="Profile"
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        loading="lazy"
      />
    </motion.div>
    <div className="mt-6 space-y-4">
      <motion.div
        className="flex items-center gap-3 text-gray-700 dark:text-gray-200 transition-colors duration-300"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0, transition: { delay: 0.1 } }}
      >
        <User className="w-5 h-5 text-gray-500 dark:text-gray-400" />
        <span className="text-lg font-semibold">{t("profile.realName")}</span>
      </motion.div>
      <motion.div
        className="flex items-center gap-3 text-gray-700 dark:text-gray-200 transition-colors duration-300"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0, transition: { delay: 0.18 } }}
      >
        <MapPin className="w-5 h-5 text-gray-500 dark:text-gray-400" />
        <span className="text-base">{t("profile.location")}</span>
      </motion.div>
      <motion.div
        className="flex items-center gap-3 text-gray-700 dark:text-gray-200 transition-colors duration-300"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0, transition: { delay: 0.26 } }}
      >
        <AtSign className="w-5 h-5 text-gray-500 dark:text-gray-400" />
        <span className="text-base truncate">{t("profile.email")}</span>
        <motion.button
          onClick={() => handleCopy(t("profile.email"), "email")}
          className={`ml-2 flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600 ${
            copiedField === "email"
              ? "bg-green-100 dark:bg-green-900 scale-110"
              : "bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
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
                <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
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
                <Copy className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </motion.div>
    </div>
  </motion.div>
);

export default ProfileCard;
