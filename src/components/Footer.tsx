const Footer = ({ t }: any) => (
  <footer className="w-full flex flex-col items-center py-8 text-sm text-gray-500 bg-white/80 dark:bg-gray-900/80 rounded-b-xl shadow-inner transition-all duration-500">
    <div className="mb-2 text-center">
      &copy; {new Date().getFullYear()}{" "}
      <span className="font-semibold text-gray-700 dark:text-gray-200 transition-colors duration-300">
        {t("profile.realName")}
      </span>
      . {t("footer.rights", "All rights reserved.")}{" "}
    </div>
    <div className="flex gap-6 mt-1">
      <a
        href="/privacy-policy"
        className="hover:underline hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
      >
        {t("privacyPolicy", "Privacy Policy")}
      </a>
      <span className="text-gray-300 dark:text-gray-600">|</span>
      <a
        href="/terms-of-service"
        className="hover:underline hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
      >
        {t("termsOfService", "Terms of Service")}
      </a>
    </div>
  </footer>
);

export default Footer;
