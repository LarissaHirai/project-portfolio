import React from "react";
import { Trans, useTranslation } from "react-i18next";
export default function Skills() {
  const { t } = useTranslation();
  return (
    <section id="skills" className="py-5 bg-body-tertiary">
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          <div className="col">
            <div className="card h-100 shadow-sm border-0 rounded-4">
              <div className="card-body text-center">
                <i
                  className="bi bi-palette-fill fs-2 mb-3"
                  style={{ color: "rgb(108, 60, 171) " }}
                ></i>
                <h5 className="card-title fw-bold">Frontend</h5>
                <p className="card-text">
                  HTML, CSS, JavaScript, Bootstrap, Tailwind, React, TypeScript
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100 shadow-sm border-0 rounded-4">
              <div className="card-body text-center">
                <i
                  className="bi bi-cpu-fill fs-2 mb-3"
                  style={{ color: "rgb(108, 60, 171)" }}
                ></i>
                <h5 className="card-title fw-bold">Backend</h5>
                <p className="card-text">Python, PHP, PL/SQL, SQL</p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100 shadow-sm border-0 rounded-4">
              <div className="card-body text-center">
                <i
                  className="bi bi-database-fill fs-2 mb-3"
                  style={{ color: "rgb(108, 60, 171)" }}
                ></i>
                <h5 className="card-title fw-bold">{t("skills_data_base")}</h5>
                <p className="card-text">PostgreSQL, MySQL, Oracle</p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100 shadow-sm border-0 rounded-4">
              <div className="card-body text-center">
                <i
                  className="bi bi-tools fs-2 mb-3"
                  style={{ color: " rgb(108, 60, 171) " }}
                ></i>
                <h5 className="card-title fw-bold">{t("skills_tools")}</h5>
                <p className="card-text">
                  Docker, Git/GitHub, VS Code, Figma, Oracle Apex
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100 shadow-sm border-0 rounded-4">
              <div className="card-body text-center">
                <i
                  className="bi bi-bar-chart-line-fill fs-2 mb-3"
                  style={{ color: "rgb(108, 60, 171)" }}
                ></i>
                <h5 className="card-title fw-bold">{t("skills_others")}</h5>
                <p className="card-text">{t("skills_others_def")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
