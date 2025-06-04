const Footer = ({ t }: any) => (
  <footer className="w-full flex flex-col items-center py-6 text-sm text-gray-500">
    <div>
      &copy; {new Date().getFullYear()} {t("profile.realName")}. All rights
      reserved.
    </div>
    <div className="flex gap-4 mt-2">
      <a
        href="/privacy-policy"
        className="hover:underline hover:text-gray-700 transition"
      >
        {t("privacyPolicy", "Privacy Policy")}
      </a>
      <a
        href="/terms-of-service"
        className="hover:underline hover:text-gray-700 transition"
      >
        {t("termsOfService", "Terms of Service")}
      </a>
    </div>
  </footer>
);

export default Footer;
