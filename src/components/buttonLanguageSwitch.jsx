import React from "react";
import { useTranslation } from "react-i18next";

export default function ButtonLanguageSwitch() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-switch">
      <button onClick={() => changeLanguage("pt")}>🇧🇷 Português</button>
      <button onClick={() => changeLanguage("en")}>🇺🇸 English</button>
    </div>
  );
}
