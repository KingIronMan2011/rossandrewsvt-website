import { FaXTwitter } from "react-icons/fa6";
import { ExternalLink } from "lucide-react";

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
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="flex flex-col items-start gap-2 px-6 py-6 rounded-2xl bg-white/90 dark:bg-gray-800/90 border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition-all duration-200 hover:scale-[1.025] hover:bg-blue-50 dark:hover:bg-blue-900/40 min-h-[110px]"
    style={{ minHeight: 110 }}
  >
    <div className="flex items-center gap-3 w-full">
      <span className="flex-shrink-0">
        {icon || <ExternalLink size={24} />}
      </span>
      <span className="font-semibold text-lg text-gray-800 dark:text-white break-words">
        {name}
      </span>
    </div>
    {description && (
      <span className="block text-base text-gray-600 dark:text-gray-300 mt-1 break-words">
        {description}
      </span>
    )}
    <ExternalLink size={20} className="opacity-60 mt-2 self-end" />
  </a>
);

const ArtSections = ({ t }: any) => {
  const customArtLinks = [
    {
      name: t("artistNames.vexivy404"),
      description: t("artistDescriptions.modelArt"),
      url: "https://x.com/vexivy404", // Updated from twitter.com
      icon: <FaXTwitter size={22} color="#000" />,
    },
    {
      name: t("artistNames.JayIllustrator"),
      description: t("artistDescriptions.banners"),
      url: "https://x.com/JayIllustrator", // Updated from twitter.com
      icon: <FaXTwitter size={22} color="#000" />,
    },
    {
      name: t("artistNames.funkpunc"), // Changed from sophiagame34379
      description: t("artistDescriptions.emotes"),
      url: "https://x.com/dankpunc",
      icon: <FaXTwitter size={22} color="#000" />,
    },
    {
      name: t("artistNames.lunamoonof27171"), // Changed from BaileyTyli341
      description: t("artistDescriptions.model3d"),
      url: "https://x.com/lunamoonof27171",
      icon: <FaXTwitter size={22} color="#000" />,
    },
    {
      name: t("artistNames.Micke_Creation"),
      description: t("artistDescriptions.loreAnim"),
      url: "https://x.com/Micke_Creation", // Updated from twitter.com
      icon: <FaXTwitter size={22} color="#000" />,
    },
    {
      name: t("artistNames.lie_live2d"),
      description: t("artistDescriptions.loreVoice"),
      url: "https://x.com/lie_live2d", // Updated from twitter.com
      icon: <FaXTwitter size={22} color="#000" />,
    },
    {
      name: t("artistNames.dankpunc"),
      description: t("artistDescriptions.badges"),
      url: "https://x.com/dankpunc",
      icon: <FaXTwitter size={22} color="#000" />,
    },
  ];

  const modelSketchLinks = [
    {
      name: t("artistNames.Daisy_bunnyy"),
      description: t("artistDescriptions.sketch1"),
      url: "https://x.com/Daisy_bunnyy", // Updated from twitter.com
      icon: <FaXTwitter size={22} color="#000" />,
    },
    {
      name: t("artistNames.Niwyria"),
      description: t("artistDescriptions.sketch2"),
      url: "https://x.com/Niwyria", // Updated from twitter.com
      icon: <FaXTwitter size={22} color="#000" />,
    },
    {
      name: t("artistNames.Floophy_Loo"),
      description: t("artistDescriptions.sketch3"),
      url: "https://x.com/Floophy_Loo", // Updated from twitter.com
      icon: <FaXTwitter size={22} color="#000" />,
    },
    {
      name: t("artistNames.Bellestissa"),
      description: t("artistDescriptions.sketch4"),
      url: "https://x.com/Bellestissa", // Updated from twitter.com
      icon: <FaXTwitter size={22} color="#000" />,
    },
    {
      name: t("artistNames.LenitaLenK"),
      description: t("artistDescriptions.sketch5"),
      url: "https://x.com/LenitaLenK", // Updated from twitter.com
      icon: <FaXTwitter size={22} color="#000" />,
    },
    {
      name: t("artistNames.seysech"),
      description: t("artistDescriptions.sketch6"),
      url: "https://x.com/seysech", // Updated from twitter.com
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
      {/* --- Custom Art Section --- */}
      <div className="mt-12 relative z-0">
        <h3 className="text-lg md:text-xl font-bold text-gray-800 dark:text-white mb-4 text-center">
          {t("sections.customArt", "Custom Art")}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {customArtLinks.map((link) => (
            <ArtistCard
              key={link.url}
              name={link.name}
              url={link.url}
              icon={link.icon}
              description={link.description}
            />
          ))}
        </div>
      </div>
      {/* --- 2D Model Sketches Section --- */}
      <div className="mt-12 relative z-0">
        <h3 className="text-lg md:text-xl font-bold text-gray-800 dark:text-white mb-4 text-center">
          {t("sections.modelSketches", "2D Model Sketches")}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {modelSketchLinks.map((link) => (
            <ArtistCard
              key={link.url}
              name={link.name}
              url={link.url}
              icon={link.icon}
              description={link.description}
            />
          ))}
        </div>
      </div>
      {/* --- Fan Art Section --- */}
      <div className="mt-12 relative z-0">
        <h3 className="text-lg md:text-xl font-bold text-gray-800 dark:text-white mb-4 text-center">
          {t("sections.fanArt", "Fan Art")}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {fanArtLinks.map((link) => (
            <ArtistCard
              key={link.url}
              name={link.name}
              url={link.url}
              icon={link.icon}
              description={link.description}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ArtSections;
