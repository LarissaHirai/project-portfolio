import React from "react";
import { Trans, useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();
  return (
    <section
      id="contato"
      style={{
        background:
          "linear-gradient(to top,rgba(109, 60, 171, 0.7),rgba(142, 44, 162, 0.7)),#212121",
        padding: "4rem 0",
      }}
    >
      <div className="container text-center text-white">
        <h2 className="fw-bold">{t("contact_title")}</h2>
        <p className="text-white mb-4">{t("contact_phrase")}</p>
        <p className="linkContato">
          <strong>Email:</strong>
          <a href="mailto:larissamitie.hirai@gmail.com">
            larissamitie.hirai@gmail.com
          </a>
        </p>
        <p className="linkContato">
          <strong>GitHub:</strong>
          <a href="https://github.com/LarissaHirai" target="_blank">
            github.com/LarissaHirai
          </a>
        </p>
        <p className="linkContato">
          <strong>LinkedIn:</strong>
          <a
            href="https://www.linkedin.com/in/larissa-mitie-curi-hirai-85424726a/"
            target="_blank"
          >
            linkedin.com/in/larissa-mitie-curi-hirai/
          </a>
        </p>
      </div>
    </section>
  );
}
