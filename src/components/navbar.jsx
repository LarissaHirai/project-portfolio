import React from "react";
import { Link } from "react-router-dom";
import { Trans, useTranslation } from "react-i18next";
export default function navbar() {
  const { t } = useTranslation();
  return (
    <section id="navbar-section">
      <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow-sm">
        <div className="container">
          {/*<a className="navbar-brand fw-bold" href="#hero">
            Meu Portfólio
          </a>/*}

          {/* Botão hamburguer que aparece no mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Links da navbar */}
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#hero">
                  {t("nav_home")}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#formacao-academica">
                  {t("nav_education")}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">
                  {t("nav_skills")}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#pojetos">
                  {t("nav_porjects")}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#sobre">
                  {t("nav_about_me")}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contato">
                  {t("nav_contact")}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}
