import React from "react";
import aboutImg from "../assets/img/personal-foto.jpg";
import { Trans, useTranslation } from "react-i18next";

export default function About() {
  const { t, i18n } = useTranslation();
  const handleResumeRedirect = () => {
    if (i18n.language === "pt") {
      window.open("/docs/pt/curriculo.pdf", "_blank");
    } else {
      window.open("/docs/en/Resume.pdf", "_blank");
    }
  };
  return (
    <section
      id="sobre"
      style={{ backgroundColor: "#f8f9fa", padding: "4rem 0" }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-5 text-center mb-4 mb-md-0">
            <img
              src={aboutImg}
              alt="Larissa Hirai"
              className="img-fluid rounded shadow"
              style={{
                width: "250px",
                height: "250px",
                objectFit: "cover",
                borderRadius: "0.5rem",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              }}
            />
          </div>

          <div className="col-md-7">
            <h2 className="fw-bold mb-3">{t("about_me_title")}</h2>
            <p className="lead">
              <Trans
                i18nKey="about_me_1"
                components={{ strong: <strong />, em: <em /> }}
              />
            </p>
            <p>
              <Trans
                i18nKey="about_me_2"
                components={{ strong: <strong />, em: <em /> }}
              />
            </p>
            <p>
              <Trans
                i18nKey="about_me_3"
                components={{ strong: <strong />, em: <em />, a: <a /> }}
              />
            </p>
            <p>{t("about_me_4")}</p>
            <p>
              <Trans
                i18nKey="about_me_5"
                components={{ strong: <strong />, em: <em /> }}
              />
            </p>
            <button
              type="button"
              onClick={handleResumeRedirect}
              className="btn-curriculo"
            >
              {t("about_me_buttom")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
