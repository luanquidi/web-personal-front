import React, { useEffect } from "react";
import { Row, Col, Icon, Card } from "antd";
import Aos from "aos";
import "aos/dist/aos.css";

// Syles
import "./HomeMyCoursesWork.scss";

const HomeMyCoursesWork = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);

  return (
    <Row className="home-my-courses-work">
      <Col lg={24} className="home-my-courses-work__title">
        <h2>¿Cómo funcionan los cursos?</h2>
        <h3>
          esconocido usó una galería de textos y los mezcló de tal manera que
        </h3>
      </Col>
      <Col lg={4} />
      <Col lg={16}>
        <Row className="row-cards">
          <Col md={8} className="boxes" data-aos="fade-right">
            <CardInfo
              title="Cursos y Clases"
              icon="clock-circle"
              description="esconocido usó una galería de textos y los mezcló de tal manera que a galería de textos y los mezcló d"
            />
          </Col>
          <Col md={8} className="boxes" data-aos="fade-down">
            <CardInfo
              title="Acceso 24/7"
              icon="key"
              description="esconocido usó una galería de textos y los mezcló de tal manera que a galería de textos y los mezcló d"
            />
          </Col>
          <Col md={8} className="boxes" data-aos="fade-left">
            <CardInfo
              title="Aprendizaje"
              icon="message"
              description="esconocido usó una galería de textos y los mezcló de tal manera que a galería de textos y los mezcló d"
            />
          </Col>
        </Row>
        <Row className="row-cards">
          <Col md={8} className="boxes" data-aos="fade-right">
            <CardInfo
              title="Mejora perfil"
              icon="user"
              description="esconocido usó una galería de textos y los mezcló de tal manera que a galería de textos y los mezcló d"
            />
          </Col>
          <Col md={8} className="boxes" data-aos="fade-up">
            <CardInfo
              title="Precios bajos"
              icon="dollar"
              description="esconocido usó una galería de textos y los mezcló de tal manera que a galería de textos y los mezcló d"
            />
          </Col>
          <Col md={8} className="boxes" data-aos="fade-left">
            <CardInfo
              title="Certificados"
              icon="check-circle"
              description="esconocido usó una galería de textos y los mezcló de tal manera que a galería de textos y los mezcló d"
            />
          </Col>
        </Row>
      </Col>
      <Col lg={4} />
    </Row>
  );
};

function CardInfo({ icon, title, subTitle, description }) {
  const { Meta } = Card;
  return (
    <Card className="home-my-courses-work__card">
      <Icon type={icon} />
      <Meta title={title} description={description} />
    </Card>
  );
}

export default HomeMyCoursesWork;
