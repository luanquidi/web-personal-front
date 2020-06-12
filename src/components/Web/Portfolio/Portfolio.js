import React, { useEffect } from "react";
import "./Portfolio.scss";
import { Col, Row, Card } from "antd";
// import ImageLuis from "../../../assets/img/jpg/luis.jpg";
import ImageLuis from "../../../assets/img/png/luis2.png";
import ImageEsteban from "../../../assets/img/png/esteban.png";
import ImageJuan from "../../../assets/img/png/juan.png";
import SocialLinks from "../SocialLinks/SocialLinks";
import Aos from "aos";
import "aos/dist/aos.css";

const Portfolio = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);
  return (
    <>
      <Row className="portfolio">
        <Col
          md={24}
          className="portfolio__title"
          data-aos={window.innerWidth < 764 ? "fade-up" : "flip-left"}
        >
          <h2>
            <span>UpDev</span> Team
          </h2>
        </Col>
        <Col md={4}></Col>
        <Col
          md={16}
          data-aos={window.innerWidth < 764 ? "fade-up" : "fade-left"}
        >
          <Row>
            <Col md={4}></Col>
            <Col md={16} className="portfolio__container">
              <div className="portfolio__header">
                <img
                  src={ImageLuis}
                  style={{ width: "150px", height: "150px" }}
                  alt="Luis Angel Quiñones"
                  data-aos={window.innerWidth < 764 ? "fade-up" : "flip-right"}
                />
                <h2>Luis Angel Quiñones Diaz</h2>
                <h4>Desarrollador Junior</h4>
              </div>
              <div className="portfolio__description" data-aos="zoom-in-up">
                <p>
                  Estudiante de ingeniería en sistemas y telecomunicaciones de
                  séptimo semestre de la Universidad de Manizales:{" "}
                  <span>
                    "Siempre me ha gustado estar en constante aprendizaje, poco
                    a poco entendí que la tecnología nos brinda grandes
                    oportunidades así que decidí empezar a prepararme en base a
                    esto en la Universidad y de la mano de plataformas digitales
                    que me han ayudado mucho para consolidar los conocimientos y
                    habilidades que tengo actualmente. La programación es
                    fundamental hoy en día."
                  </span>
                  <br></br>
                </p>
                <h5>Experiencia</h5>
                <span>
                  <span>Empresa: </span> Newshore (Española) -{" "}
                  <span>Cargo: </span>Desarrollador Front-End Advance
                </span>
                <br></br>
                <span style={{ marginBottom: "10px" }}>
                  <span>Empresa: </span> Nexia - <span>Cargo: </span>{" "}
                  Desarrollador RPA
                </span>
                <div className="portfolio__header__social" data-aos="fade-up">
                  <SocialLinks />
                </div>
              </div>
            </Col>
            <Col md={4}></Col>
          </Row>
        </Col>
        <Col md={4}></Col>
      </Row>
      <Row className="portfolio">
        <Col md={4}></Col>
        <Col
          md={16}
          data-aos={window.innerWidth < 764 ? "fade-up" : "fade-left"}
        >
          <Row>
            <Col md={4}></Col>
            <Col md={16} className="portfolio__container">
              <div className="portfolio__header">
                <img
                  src={ImageEsteban}
                  style={{ width: "150px" }}
                  alt="Luis Angel Quiñones"
                  data-aos={window.innerWidth < 764 ? "fade-up" : "flip-right"}
                />
                <h2>Juan Esteban Hernandez</h2>
                <h4>Desarrollador Full-Stack</h4>
              </div>
              <div className="portfolio__description" data-aos="zoom-in-up">
                <p>
                  Estudiante de ingeniería en sistemas y telecomunicaciones de
                  séptimo semestre de la Universidad de Manizales, tecnólogo en
                  análisis y desarrollo de sistemas de información y egresado
                  del Sena (Caldas){" "}
                  <span>
                    {/* "Siempre me ha gustado estar en constante aprendizaje, poco
                    a poco entendí que la tecnología nos brinda grandes
                    oportunidades así que decidí empezar a prepararme en base a
                    esto en la Universidad y de la mano de plataformas digitales
                    que me han ayudado mucho para consolidar los conocimientos y
                    habilidades que tengo actualmente. La programación es
                    fundamental hoy en día." */}
                  </span>
                  <br></br>
                </p>
                <h5>Experiencia</h5>
                <span>
                  <span>Empresa: </span> Mdos4 - <span>Cargo: </span>
                  Desarrollador Full-Stack
                </span>
                <br></br>
                <span style={{ marginBottom: "10px" }}>
                  {/* <span>Empresa: </span> Nexia - <span>Cargo: </span>{" "}
                  Desarrollador RPA */}
                </span>
                <div className="portfolio__header__social" data-aos="fade-up">
                  <SocialLinks />
                </div>
              </div>
            </Col>
            <Col md={4}></Col>
          </Row>
        </Col>
        <Col md={4}></Col>
      </Row>
      <Row className="portfolio">
        <Col md={4}></Col>
        <Col
          md={16}
          data-aos={window.innerWidth < 764 ? "fade-up" : "fade-left"}
        >
          <Row>
            <Col md={4}></Col>
            <Col md={16} className="portfolio__container">
              <div className="portfolio__header">
                <img
                  src={ImageJuan}
                  style={{ width: "150px", height: "150px" }}
                  alt="Luis Angel Quiñones"
                  data-aos={window.innerWidth < 764 ? "fade-up" : "flip-right"}
                />
                <h2>Juan Manuel Gallego Toro</h2>
                <h4>Desarrollador Junior</h4>
              </div>
              <div className="portfolio__description" data-aos="zoom-in-up">
                <p>
                  Estudiante de ingeniería en sistemas y telecomunicaciones de
                  séptimo semestre de la Universidad de Manizales.{" "}
                  <span>
                    {/* "Siempre me ha gustado estar en constante aprendizaje, poco
                    a poco entendí que la tecnología nos brinda grandes
                    oportunidades así que decidí empezar a prepararme en base a
                    esto en la Universidad y de la mano de plataformas digitales
                    que me han ayudado mucho para consolidar los conocimientos y
                    habilidades que tengo actualmente. La programación es
                    fundamental hoy en día." */}
                  </span>
                  <br></br>
                </p>
                <h5>Experiencia</h5>
                <span>Proyectos y trabajos independientes</span>
                <br></br>
                <span style={{ marginBottom: "10px" }}>
                  {/* <span>Empresa: </span> Nexia - <span>Cargo: </span>{" "}
                  Desarrollador RPA */}
                </span>
                <div className="portfolio__header__social" data-aos="fade-up">
                  <SocialLinks />
                </div>
              </div>
            </Col>
            <Col md={4}></Col>
          </Row>
        </Col>
        <Col md={4}></Col>
      </Row>
    </>
  );
};

export default Portfolio;
