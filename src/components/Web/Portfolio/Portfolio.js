import React, { useEffect } from "react";
import "./Portfolio.scss";
import { Col, Row, Card } from "antd";
import ImageLuis from "../../../assets/img/jpg/luis.jpg";
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
    <Row className="portfolio">
      <Col md={24} className="portfolio__title" data-aos="flip-left">
        <h2><span>UpDev</span> Team</h2>
      </Col>
      <Col md={4}></Col>
      <Col md={16} data-aos="fade-down-left">
        <Row>
          <Col md={4}></Col>
          <Col md={16} className="portfolio__container">
            <div className="portfolio__header">
              <img
                src={ImageLuis}
                style={{ width: "150px" }}
                alt="Luis Angel Quiñones"
                data-aos="flip-right"
              />
              <h2>Luis Angel Quiñones Diaz</h2>
              <h4>Desarrollador junior</h4>
            </div>
            <div className="portfolio__description" data-aos="zoom-in-up">
              <p>
                Estudiante de ingeniería de sistemas y telecomunicaciones de
                séptimo semestre de la Universidad de Manizales:{" "}
                <span>
                  "Siempre me ha gustado estar en constante aprendizaje, poco a
                  poco entendí que la tecnología nos brinda grandes
                  oportunidades así que decidí empezar a prepararme en base a
                  esto en la Universidad y de la mano de plataformas digitales
                  que me han ayudado mucho para consolidar los conocimientos y
                  habilidades que tengo actualmente. La programación es
                  fundamental hoy en día."
                </span>
              </p>
              <div className="portfolio__header__social" data-aos="fade-up">
                <SocialLinks  />
              </div>
            </div>
          </Col>
          <Col md={4}></Col>
        </Row>
      </Col>
      <Col md={4}></Col>
    </Row>
  );
};

export default Portfolio;
