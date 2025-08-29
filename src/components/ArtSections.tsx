import { FaXTwitter } from "react-icons/fa6";
import { ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import type { Variants } from "framer-motion";

const cardVariants: Variants = {
  initial: { opacity: 0, y: 30, scale: 0.97 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 180, damping: 20 },
  },
  exit: { opacity: 0, y: 30, scale: 0.97, transition: { duration: 0.18 } },
  whileHover: {
    scale: 1.06,
    boxShadow: "0 12px 36px 0 rgba(59,130,246,0.13)",
    zIndex: 2,
    transition: { type: "spring" as const, stiffness: 300, damping: 18 },
  },
};

const listVariants = {
  initial: {},
  animate: { transition: { staggerChildren: 0.04 } },
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
    className="group flex flex-col items-start gap-2 p-6 rounded-2xl
      bg-gradient-to-br from-white/90 via-blue-50/80 to-white/90 dark:from-gray-800/90 dark:via-blue-900/60 dark:to-gray-800/90
      border border-gray-200/60 dark:border-gray-700/60
      shadow-lg
      transition-all duration-300 ease-out
      backdrop-blur-sm"
    style={{ minHeight: 110 }}
    variants={cardVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    whileHover="whileHover"
    whileFocus="whileHover"
    layout
  >
    <motion.div
      className="flex items-center gap-3 w-full"
      initial={{ opacity: 0, x: -16 }}
      animate={{
        opacity: 1,
        x: 0,
        transition: { duration: 0.35, type: "spring", stiffness: 180 },
      }}
      exit={{ opacity: 0, x: -16, transition: { duration: 0.15 } }}
      layout
    >
      <span className="flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
        {icon || <ExternalLink size={24} />}
      </span>
      <span
        className="font-semibold text-lg text-gray-800 dark:text-white break-words
        transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400"
      >
        {name}
      </span>
    </motion.div>
    {description && (
      <motion.span
        className="block text-base text-gray-600 dark:text-gray-300 mt-1 break-words
        transition-colors duration-300"
        initial={{ opacity: 0, y: 10 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.4, type: "spring", stiffness: 140 },
        }}
        exit={{ opacity: 0, y: 10, transition: { duration: 0.15 } }}
        layout
      >
        {description}
      </motion.span>
    )}
    <motion.div
      initial={{ opacity: 0, x: 10 }}
      animate={{ opacity: 0.6, x: 0, transition: { duration: 0.4 } }}
      exit={{ opacity: 0, x: 10, transition: { duration: 0.15 } }}
      whileHover={{ opacity: 1, x: 4, y: -4, color: "#3b82f6" }}
      className="mt-2 self-end transition-all duration-300"
      layout
    >
      <ExternalLink
        size={20}
        className="transition-all duration-300 group-hover:text-blue-500 dark:group-hover:text-blue-400"
      />
    </motion.div>
  </motion.a>
);

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <section className="mt-14 relative z-0 px-2 sm:px-0">
    <motion.div
      className="bg-white/80 dark:bg-gray-900/80 rounded-xl shadow-md border border-gray-100/60 dark:border-gray-800/60 py-8 px-2 sm:px-8 transition-all duration-500"
      initial={{ opacity: 0, y: 24 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 100, damping: 18 },
      }}
      exit={{ opacity: 0, y: 24, transition: { duration: 0.18 } }}
      layout
    >
      <motion.h3
        className="text-lg md:text-xl font-bold text-gray-800 dark:text-white mb-7
        text-center transition-colors duration-300
        after:content-[''] after:block after:w-24 after:h-1 after:mx-auto after:mt-2
        after:bg-gradient-to-r after:from-blue-500/0 after:via-blue-500 after:to-blue-500/0
        dark:after:from-blue-400/0 dark:after:via-blue-400 dark:after:to-blue-400/0"
        initial={{ opacity: 0, y: -10 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, type: "spring", stiffness: 120 },
        }}
        exit={{ opacity: 0, y: -10, transition: { duration: 0.18 } }}
        layout
      >
        {title}
      </motion.h3>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 max-w-3xl mx-auto"
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
      icon: <FaXTwitter size={22} color="#000" />,
    },
    {
      name: t("artistNames.JayIllustrator"),
      description: t("artistDescriptions.banners"),
      url: "https://x.com/JayIllustrator",
      icon: <FaXTwitter size={22} color="#000" />,
    },
    {
      name: t("artistNames.dankpunc"),
      description: t("artistDescriptions.emotesBadges"),
      url: "https://x.com/dankpunc",
      icon: <FaXTwitter size={22} color="#000" />,
    },
    {
      name: t("artistNames.lunamoonof27171"),
      description: t("artistDescriptions.model3d"),
      url: "https://x.com/lunamoonof27171",
      icon: <FaXTwitter size={22} color="#000" />,
    },
    {
      name: t("artistNames.Micke_Creation"),
      description: t("artistDescriptions.loreAnim"),
      url: "https://x.com/Micke_Creation",
      icon: <FaXTwitter size={22} color="#000" />,
    },
    {
      name: t("artistNames.lie_live2d"),
      description: t("artistDescriptions.loreVoice"),
      url: "https://x.com/lie_live2d",
      icon: <FaXTwitter size={22} color="#000" />,
    },
  ];

  const modelSketchLinks = [
    {
      name: t("artistNames.Daisy_bunnyy"),
      description: t("artistDescriptions.sketch1"),
      url: "https://x.com/Daisy_bunnyy",
      icon: <FaXTwitter size={22} color="#000" />,
    },
    {
      name: t("artistNames.Niwyria"),
      description: t("artistDescriptions.sketch2"),
      url: "https://x.com/Niwyria",
      icon: <FaXTwitter size={22} color="#000" />,
    },
    {
      name: t("artistNames.Floophy_Loo"),
      description: t("artistDescriptions.sketch3"),
      url: "https://x.com/Floophy_Loo",
      icon: <FaXTwitter size={22} color="#000" />,
    },
    {
      name: t("artistNames.Bellestissa"),
      description: t("artistDescriptions.sketch4"),
      url: "https://x.com/Bellestissa",
      icon: <FaXTwitter size={22} color="#000" />,
    },
    {
      name: t("artistNames.LenitaLenK"),
      description: t("artistDescriptions.sketch5"),
      url: "https://x.com/LenitaLenK",
      icon: <FaXTwitter size={22} color="#000" />,
    },
    {
      name: t("artistNames.seysech"),
      description: t("artistDescriptions.sketch6"),
      url: "https://x.com/seysech",
      icon: <FaXTwitter size={22} color="#000" />,
    },
  ];

  const fanArtLinks = [
    {
      name: t("artistNames.dankpunc"),
      description: t("artistDescriptions.fanart"),
      url: "https://x.com/dankpunc",
      icon: <FaXTwitter size={22} color="#000" />,
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
