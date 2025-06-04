import {
  FaTwitch,
  FaXTwitter,
  FaYoutube,
  FaDiscord,
  FaMoneyBillWave,
} from "react-icons/fa6";
import { ExternalLink } from "lucide-react";

const SocialLinks = ({ t }: any) => {
  const links = [
    {
      label: t("profile.links.0.label"),
      url: t("profile.links.0.url"),
      icon: <FaTwitch size={22} color="#9147ff" />,
      color: "bg-purple-100 text-purple-700 hover:bg-purple-200",
      wide: false,
    },
    {
      label: t("profile.links.1.label"),
      url: t("profile.links.1.url"),
      icon: <FaXTwitter size={22} color="#000" />,
      color: "bg-blue-100 text-blue-700 hover:bg-blue-200",
      wide: false,
    },
    {
      label: t("profile.links.2.label"),
      url: t("profile.links.2.url"),
      icon: <FaYoutube size={22} color="#ff0000" />,
      color: "bg-red-100 text-red-700 hover:bg-red-200",
      wide: false,
    },
    {
      label: t("profile.links.3.label"),
      url: t("profile.links.3.url"),
      icon: <FaDiscord size={22} color="#5865F2" />,
      color: "bg-indigo-100 text-indigo-700 hover:bg-indigo-200",
      wide: false,
    },
    {
      label: t("profile.links.4.label"),
      url: t("profile.links.4.url"),
      icon: <FaMoneyBillWave size={24} color="#059669" />,
      color:
        "bg-green-100 text-green-700 hover:bg-green-200 font-bold text-lg border-2 border-green-300",
      wide: true,
    },
  ];

  return (
    <div className="mt-8 z-0 relative">
      <h3 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-white mb-4 transition-all duration-300 ease-in-out">
        {t("sections.socialLinks", "Social Links")}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {links.map((link) =>
          link.wide ? (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center gap-2 px-4 py-4 rounded-2xl font-semibold transition-all duration-150 group ${link.color} shadow-sm col-span-1 sm:col-span-2`}
              style={{ minHeight: "56px" }}
            >
              <span>{link.icon}</span>
              <span className="flex-1 text-center">{link.label}</span>
              <ExternalLink
                size={20}
                className="opacity-60 group-hover:opacity-100"
              />
            </a>
          ) : (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold transition-all duration-150 group ${link.color} shadow-sm`}
            >
              <span>{link.icon}</span>
              <span className="flex-1">{link.label}</span>
              <ExternalLink
                size={18}
                className="opacity-60 group-hover:opacity-100"
              />
            </a>
          )
        )}
      </div>
    </div>
  );
};

export default SocialLinks;
