import React, { useEffect } from "react";
import techStudio from "../assets/img/techStudio.png";
import priceRise from "../assets/img/priceRise.png";
import todoList from "../assets/img/todolist.png";
import nasaApod from "../assets/img/nasa-apod.png";
import videoMeet from "../assets/img/videoMeet.png";
import freeScribe from "../assets/img/FreeScribe.png";
import { Trans, useTranslation } from "react-i18next";

export default function Projects() {
  const { t } = useTranslation();
  useEffect(() => {
    const carouselElement = document.querySelector(
      "#carouselExampleIndicators"
    );
    if (window.bootstrap && carouselElement) {
      new window.bootstrap.Carousel(carouselElement); // força inicialização
    }
  }, []);
  return (
    <section
      style={{
        background:
          "linear-gradient( to bottom, rgba(109, 60, 171, 0.7), rgba(142, 44, 162, 0.7) ), #000",
        padding: "4rem 0",
      }}
      id="pojetos"
    >
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="5"
            aria-label="Slide 6"
          ></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <div
              className="card mx-auto shadow-lg border-0 rounded project-card"
              style={{ maxWidth: "800px" }}
            >
              <img
                className="card-img-top project-img"
                src={techStudio}
                alt="Tech Studio"
              />
              <a
                href="https://larissahirai.github.io/techStudio/"
                target="_blank"
              >
                <div className="project-overlay">
                  <h5>Tech Studio</h5>
                  <p>
                    <strong>{t("projects_language")}</strong> HTML, CSS
                  </p>
                  <p>{t("projects_description_1")}</p>
                </div>
              </a>
            </div>
          </div>

          <div className="carousel-item">
            <div
              className="card mx-auto shadow-lg border-0 rounded project-card"
              style={{ maxWidth: "800px" }}
            >
              <img
                className="card-img-top project-img"
                src={priceRise}
                alt="Price Rise"
              />
              <a
                href="https://larissahirai.github.io/priceRise/"
                target="_blank"
              >
                <div className="project-overlay">
                  <h5>Price Rise</h5>
                  <p>
                    <strong>{t("projects_language")}</strong> HTML, CSS
                  </p>
                  <p>{t("projects_description_2")}</p>
                </div>
              </a>
            </div>
          </div>

          <div className="carousel-item">
            <div
              className="card mx-auto shadow-lg border-0 rounded project-card"
              style={{ maxWidth: "800px" }}
            >
              <img
                className="card-img-top project-img"
                src={todoList}
                alt="ToDo List"
              />
              <a href="https://todolist-lari.netlify.app/" target="_blank">
                <div className="project-overlay">
                  <h5>To do List</h5>
                  <p>
                    <strong>{t("projects_language")}</strong> React, HTML, CSS
                  </p>
                  <p>{t("projects_description_3")}</p>
                </div>
              </a>
            </div>
          </div>
          <div className="carousel-item">
            <div
              className="card mx-auto shadow-lg border-0 rounded project-card"
              style={{ maxWidth: "800px" }}
            >
              <img
                className="card-img-top project-img"
                src={nasaApod}
                alt="Price Rise"
              />
              <a
                href="https://project-nasa-react-app.netlify.app/"
                target="_blank"
              >
                <div className="project-overlay">
                  <h5>Nasa APOD</h5>
                  <p>
                    <strong>{t("projects_language")}</strong> React, HTML, CSS
                  </p>
                  <p>{t("projects_description_4")}</p>
                </div>
              </a>
            </div>
          </div>

          <div className="carousel-item">
            <div
              className="card mx-auto shadow-lg border-0 rounded project-card"
              style={{ maxWidth: "800px" }}
            >
              <img
                className="card-img-top project-img"
                src={videoMeet}
                alt="Video Meet"
              />
              <a
                href="https://wondrous-capybara-495e07.netlify.app/"
                target="_blank"
              >
                <div className="project-overlay">
                  <h5>Video Meet</h5>
                  <p>
                    <strong>{t("projects_language")}</strong> React, HTML,
                    TailwindCSS, CSS, Nodejs
                  </p>
                  <p>{t("projects_description_5")}</p>
                </div>
              </a>
            </div>
          </div>

          <div className="carousel-item">
            <div
              className="card mx-auto shadow-lg border-0 rounded project-card"
              style={{ maxWidth: "800px" }}
            >
              <img
                className="card-img-top project-img"
                src={freeScribe}
                alt="Free Scribe"
              />
              <a
                href="https://free-scribe-trancription.netlify.app/"
                target="_blank"
              >
                <div className="project-overlay">
                  <h5>Free Scribe</h5>
                  <p>
                    <strong>{t("projects_language")}</strong> React, HTML,
                    TailwindCSS, CSS
                  </p>
                  <p>{t("projects_description_6")}</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Próximo</span>
        </button>
      </div>
    </section>
  );
}
