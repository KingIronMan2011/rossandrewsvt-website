import { User, MapPin, AtSign, Copy, Check } from "lucide-react";

const ProfileCard = ({ t, handleCopy, copiedField, siteConfig }: any) => (
  <div className="sticky top-8 z-0">
    <div className="aspect-square w-full overflow-hidden rounded-xl shadow-lg transition-all duration-500 ease-in-out hover:shadow-2xl">
      <img
        src={siteConfig.profile.avatar}
        alt="Profile"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
    </div>
    <div className="mt-6 space-y-4">
      <div className="flex items-center gap-3 text-gray-700 dark:text-gray-200 transition-colors duration-300">
        <User className="w-5 h-5" />
        <span className="text-base font-medium">{t("profile.realName")}</span>
      </div>
      <div className="flex items-center gap-3 text-gray-700 dark:text-gray-200 transition-colors duration-300">
        <MapPin className="w-5 h-5" />
        <span className="text-base">{t("profile.location")}</span>
      </div>
      <div className="flex items-center gap-3 text-gray-700 dark:text-gray-200 transition-colors duration-300">
        <AtSign className="w-5 h-5" />
        <span className="text-base truncate">{t("profile.email")}</span>
        <button
          onClick={() => handleCopy(t("profile.email"), "email")}
          className={`ml-2 flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600
            ${
              copiedField === "email"
                ? "bg-gray-200 dark:bg-gray-700 scale-110"
                : "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 hover:scale-105"
            }`}
          aria-label="Copy to clipboard"
          tabIndex={0}
        >
          {copiedField === "email" ? (
            <Check className="w-4 h-4 text-green-500 transition-colors duration-200" />
          ) : (
            <Copy className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors duration-200" />
          )}
        </button>
      </div>
    </div>
  </div>
);

export default ProfileCard;
