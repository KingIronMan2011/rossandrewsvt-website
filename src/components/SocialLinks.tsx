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
      icon: <FaTwitch size={22} />,
      color: "bg-purple-600 text-white hover:bg-purple-700",
      wide: false,
    },
    {
      label: t("profile.links.1.label"),
      url: t("profile.links.1.url"),
      icon: <FaXTwitter size={22} />,
      color: "bg-blue-600 text-white hover:bg-blue-700",
      wide: false,
    },
    {
      label: t("profile.links.2.label"),
      url: t("profile.links.2.url"),
      icon: <FaYoutube size={22} />,
      color: "bg-red-600 text-white hover:bg-red-700",
      wide: false,
    },
    {
      label: t("profile.links.3.label"),
      url: t("profile.links.3.url"),
      icon: <FaDiscord size={22} />,
      color: "bg-indigo-600 text-white hover:bg-indigo-700",
      wide: false,
    },
    {
      label: t("profile.links.4.label"),
      url: t("profile.links.4.url"),
      icon: <FaMoneyBillWave size={24} />,
      color:
        "bg-green-600 text-white hover:bg-green-700 font-bold text-lg border-2 border-green-300",
      wide: true,
    },
  ];

  return (
    <div className="mt-10 z-0 relative">
      <h3 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-white mb-5 transition-all duration-500 ease-in-out tracking-tight">
        {t("sections.socialLinks", "Social Links")}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {links.map((link) =>
          link.wide ? (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center gap-3 px-5 py-4 rounded-2xl font-semibold transition-all duration-300 group ${link.color} shadow-md col-span-1 sm:col-span-2 hover:scale-[1.04] hover:shadow-xl`}
              style={{ minHeight: "56px" }}
            >
              <span className="transition-transform duration-300 group-hover:scale-110 text-white">
                {link.icon}
              </span>
              <span className="flex-1 text-center">{link.label}</span>
              <ExternalLink
                size={20}
                className="opacity-80 group-hover:opacity-100 text-white transition-colors duration-300"
              />
            </a>
          ) : (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center gap-3 px-5 py-3 rounded-xl font-semibold transition-all duration-300 group ${link.color} shadow-md hover:scale-[1.04] hover:shadow-xl`}
            >
              <span className="transition-transform duration-300 group-hover:scale-110 text-white">
                {link.icon}
              </span>
              <span className="flex-1">{link.label}</span>
              <ExternalLink
                size={18}
                className="opacity-80 group-hover:opacity-100 text-white transition-colors duration-300"
              />
            </a>
          )
        )}
      </div>
    </div>
  );
};

export default SocialLinks;
