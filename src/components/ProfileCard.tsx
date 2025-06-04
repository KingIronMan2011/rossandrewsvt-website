import { User, MapPin, AtSign } from "lucide-react";

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
          className="ml-1 p-1 hover:bg-blue-100 dark:hover:bg-blue-800 rounded-full transition-all duration-300 ease-in-out transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600"
          aria-label="Copy to clipboard"
          tabIndex={0}
        >
          {copiedField === "email" ? (
            <span className="w-4 h-4 text-green-500 font-bold transition-all duration-300">
              ✓
            </span>
          ) : (
            <span className="w-4 h-4 text-gray-400 hover:text-blue-600 dark:hover:text-blue-300 transition-all duration-300">
              ⧉
            </span>
          )}
        </button>
      </div>
    </div>
  </div>
);

export default ProfileCard;
