import { FaXTwitter } from "react-icons/fa6";
import { ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";

const cardVariants: Variants = {
  initial: { opacity: 0, y: 20, scale: 0.95 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 150, damping: 20 },
  },
  exit: { opacity: 0, y: 20, scale: 0.95, transition: { duration: 0.2 } },
  whileHover: {
    scale: 1.02,
    boxShadow: "0 8px 24px rgba(59, 130, 246, 0.1)",
    transition: { type: "spring", stiffness: 250, damping: 20 },
  },
};

const listVariants = {
  initial: {},
  animate: { transition: { staggerChildren: 0.05 } },
  exit: {},
};

const ArtistCard = ({
  name,
  description,
  url,
  icon,
}: {
  name: string;
  description?: string;
  url: string;
  icon?: React.ReactNode;
}) => (
  <motion.a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="group flex flex-col justify-between p-6 rounded-xl
      bg-white dark:bg-gray-800
      border border-gray-200 dark:border-gray-700
      shadow-sm hover:shadow-md
      transition-all duration-300 ease-out
      min-h-[120px] focus:outline-none focus:ring-2 focus:ring-blue-500"
    variants={cardVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    whileHover="whileHover"
    whileFocus="whileHover"
    layout
  >
    <div className="flex items-center gap-3 mb-2">
      <span className="flex-shrink-0 text-gray-600 dark:text-gray-400 group-hover:text-blue-500 transition-colors duration-300">
        {icon || <ExternalLink size={20} />}
      </span>
      <span className="font-medium text-lg text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 break-words">
        {name}
      </span>
    </div>
    {description && (
      <span className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed break-words">
        {description}
      </span>
    )}
    <div className="self-end mt-4 text-gray-400 dark:text-gray-500 group-hover:text-blue-500 transition-colors duration-300">
      <ExternalLink size={18} />
    </div>
  </motion.a>
);

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <section className="mt-12 px-4 sm:px-0">
    <motion.div
      className="bg-gray-50 dark:bg-gray-900 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 py-8 px-6 sm:px-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 100, damping: 18 },
      }}
      exit={{ opacity: 0, y: 20, transition: { duration: 0.2 } }}
      layout
    >
      <motion.h3
        className="text-xl font-semibold text-gray-900 dark:text-white mb-8 text-center"
        initial={{ opacity: 0, y: -10 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, type: "spring", stiffness: 120 },
        }}
        exit={{ opacity: 0, y: -10, transition: { duration: 0.2 } }}
        layout
      >
        {title}
      </motion.h3>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        variants={listVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        layout
      >
        <AnimatePresence>{children}</AnimatePresence>
      </motion.div>
    </motion.div>
  </section>
);

const ArtSections = ({ t }: any) => {
  const customArtLinks = [
    {
      name: t("artistNames.vexivy404"),
      description: t("artistDescriptions.modelArt"),
      url: "https://x.com/vlutchlab",
      icon: (
        <FaXTwitter size={20} className="text-gray-600 dark:text-gray-400" />
      ),
    },
    {
      name: t("artistNames.JayIllustrator"),
      description: t("artistDescriptions.banners"),
      url: "https://x.com/JayIllustrator",
      icon: (
        <FaXTwitter size={20} className="text-gray-600 dark:text-gray-400" />
      ),
    },
    {
      name: t("artistNames.dankpunc"),
      description: t("artistDescriptions.emotesBadges"),
      url: "https://x.com/dankpunc",
      icon: (
        <FaXTwitter size={20} className="text-gray-600 dark:text-gray-400" />
      ),
    },
    {
      name: t("artistNames.lunamoonof27171"),
      description: t("artistDescriptions.model3d"),
      url: "https://x.com/lunamoonof27171",
      icon: (
        <FaXTwitter size={20} className="text-gray-600 dark:text-gray-400" />
      ),
    },
    {
      name: t("artistNames.Micke_Creation"),
      description: t("artistDescriptions.loreAnim"),
      url: "https://x.com/Micke_Creation",
      icon: (
        <FaXTwitter size={20} className="text-gray-600 dark:text-gray-400" />
      ),
    },
    {
      name: t("artistNames.lie_live2d"),
      description: t("artistDescriptions.loreVoice"),
      url: "https://x.com/lie_live2d",
      icon: (
        <FaXTwitter size={20} className="text-gray-600 dark:text-gray-400" />
      ),
    },
  ];

  const modelSketchLinks = [
    {
      name: t("artistNames.Daisy_bunnyy"),
      description: t("artistDescriptions.sketch1"),
      url: "https://x.com/Daisy_bunnyy",
      icon: (
        <FaXTwitter size={20} className="text-gray-600 dark:text-gray-400" />
      ),
    },
    {
      name: t("artistNames.Niwyria"),
      description: t("artistDescriptions.sketch2"),
      url: "https://x.com/Niwyria",
      icon: (
        <FaXTwitter size={20} className="text-gray-600 dark:text-gray-400" />
      ),
    },
    {
      name: t("artistNames.Floophy_Loo"),
      description: t("artistDescriptions.sketch3"),
      url: "https://x.com/Floophy_Loo",
      icon: (
        <FaXTwitter size={20} className="text-gray-600 dark:text-gray-400" />
      ),
    },
    {
      name: t("artistNames.Bellestissa"),
      description: t("artistDescriptions.sketch4"),
      url: "https://x.com/Bellestissa",
      icon: (
        <FaXTwitter size={20} className="text-gray-600 dark:text-gray-400" />
      ),
    },
    {
      name: t("artistNames.LenitaLenK"),
      description: t("artistDescriptions.sketch5"),
      url: "https://x.com/LenitaLenK",
      icon: (
        <FaXTwitter size={20} className="text-gray-600 dark:text-gray-400" />
      ),
    },
    {
      name: t("artistNames.seysech"),
      description: t("artistDescriptions.sketch6"),
      url: "https://x.com/seysech",
      icon: (
        <FaXTwitter size={20} className="text-gray-600 dark:text-gray-400" />
      ),
    },
  ];

  const fanArtLinks = [
    {
      name: t("artistNames.dankpunc"),
      description: t("artistDescriptions.fanart"),
      url: "https://x.com/dankpunc",
      icon: (
        <FaXTwitter size={20} className="text-gray-600 dark:text-gray-400" />
      ),
    },
  ];

  return (
    <>
      <Section title={t("sections.customArt", "Custom Art")}>
        {customArtLinks.map((link) => (
          <ArtistCard key={link.url} {...link} />
        ))}
      </Section>
      <Section title={t("sections.modelSketches", "2D Model Sketches")}>
        {modelSketchLinks.map((link) => (
          <ArtistCard key={link.url} {...link} />
        ))}
      </Section>
      <Section title={t("sections.fanArt", "Fan Art")}>
        {fanArtLinks.map((link) => (
          <ArtistCard key={link.url} {...link} />
        ))}
      </Section>
    </>
  );
};

export default ArtSections;
