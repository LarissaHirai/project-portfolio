import React from "react";
import { Trans, useTranslation } from "react-i18next";
export default function Education() {
  const { t } = useTranslation();
  return (
    <section id="formacao-academica" className="py-5 bg-light">
      <div className="container text-center">
        <h2 className="display-6 fw-bold text-dark mb-4">
          🎓 {t("academic_title")}
        </h2>
        <div className="col-lg-8 mx-auto">
          <p className="fs-5 text-muted">
            <Trans
              i18nKey="academic_description"
              components={{ strong: <strong />, em: <em /> }}
            />
          </p>
        </div>
      </div>
    </section>
  );
}
