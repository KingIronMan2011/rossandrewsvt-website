import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Globe, ChevronDown, Check } from "lucide-react";

// This is a reusable sub-component for each language option in the dropdown.
const LanguageOption = ({
  name,
  isActive,
  onClick,
}: {
  code: string;
  name: string;
  isActive: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-2 w-full px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
      isActive
        ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
        : "hover:bg-gray-50 dark:hover:bg-gray-700/50 text-gray-700 dark:text-gray-300"
    }`}
  >
    {isActive && <Check className="w-4 h-4" />}
    <span className="flex-1 text-left">{name}</span>
  </button>
);

export function LanguageSelector() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setIsOpen(false);
  };

  // This effect handles closing the menu when clicking outside of it.
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen((v) => !v)}
        className="flex items-center gap-2 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
        aria-label="Select language"
      >
        <Globe className="w-5 h-5 text-gray-600 dark:text-gray-400" />
        <ChevronDown
          className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-xl shadow-lg ring-1 ring-black ring-opacity-5 p-2 focus:outline-none transform origin-top-right transition-all duration-200 ease-out scale-100">
          {Object.entries(t("language.options", { returnObjects: true })).map(
            ([code, name]) => (
              <LanguageOption
                key={code}
                code={code}
                name={name as string}
                isActive={i18n.language === code}
                onClick={() => changeLanguage(code)}
              />
            ),
          )}
        </div>
      )}
    </div>
  );
}
