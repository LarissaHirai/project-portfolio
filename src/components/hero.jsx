import React from "react";
import webDevImg from "../assets/img/web-development.png";
import { Trans, useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();
  return (
    <section
      id="hero"
      className="gradient-background d-flex align-items-center"
    >
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-5 text-md-start text-center mb-4 mb-md-0">
            <h1 className="display-4 fw-bold text-white text-larissa">
              {t("hero_hello")}
            </h1>
            <p className="lead text-white">{t("hero_developer")}</p>
          </div>

          <div className="col-md-5 text-center">
            <img
              className="img-fluid float-animation"
              src={webDevImg}
              alt="coding-foto"
              style={{ maxHeight: "300px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
