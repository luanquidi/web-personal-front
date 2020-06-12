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
        <h2>¿Qué es UpDev? y sus servicios</h2>
        <div style={{ paddingLeft: "50px", paddingRight: "50px"}}>
          <h3 style={{ marginLeft: "5px", marginRight: "5px" }}>
            UpDev es un proyecto que nace a raiz de las multiples necesidades
            que existen cotidianamente dentro de la sociedad, identificando en
            diferentes lugares situaciones en las cuales la tecnología sería la
            mejor solución. UpDev está conformado por 3 cursantes de la carrera
            Ingenieria en Sistemas y Telecomunicaciones de la Universidad de
            Manizales con el deseo de aprender infinidad de conceptos
            relacionados con la tecnología
          </h3>
        </div>
      </Col>
      <Col lg={4} />
      <Col lg={16}>
        <Row className="row-cards">
          <Col md={8} className="boxes" data-aos={window.innerWidth < 764 ? "fade-up" : "fade-right"}>
            <CardInfo
              title="Desarrollo web"
              icon="global"
              description="Creación de aplicaciones web"
            />
          </Col>
          <Col md={8} className="boxes" data-aos={window.innerWidth < 764 ? "fade-up" : "fade-down"}>
            <CardInfo
              title="Desarrollo móvil"
              icon="mobile"
              description="Creación de aplicaciones móviles"
            />
          </Col>
          <Col md={8} className="boxes" data-aos={window.innerWidth < 764 ? "fade-up" : "fade-left"}>
            <CardInfo
              title="Soporte"
              icon="clock-circle"
              description="Soporte 24/7 en las diferentes aplicaciones"
            />
          </Col>
          {/* <Col md={8} className="boxes" data-aos="fade-left">
            <CardInfo
              title="Aprendizaje"
              icon="message"
              description="esconocido usó una galería de textos y los mezcló de tal manera que a galería de textos y los mezcló d"
            />
          </Col> */}
        </Row>
        <Row className="row-cards">
          <Col md={8} className="boxes" data-aos={window.innerWidth < 764 ? "fade-up" : "fade-right"}>
            <CardInfo
              title="Drone"
              icon="rocket"
              description="Cinematicas de locaciones / Trabajos topográficos (Proyecto FlyDrone)"
            />
          </Col>
          <Col md={8} className="boxes" data-aos="fade-up">
            <CardInfo
              title="Precios"
              icon="dollar"
              description="Te ofrecemos un buen servicio que va de la mano de precios amigables"
            />
          </Col>
          <Col md={8} className="boxes" data-aos={window.innerWidth < 764 ? "fade-up" : "fade-left"}>
            <CardInfo
              title="Calidad"
              icon="check-circle"
              description="Productos con excelente calidad, que se verá reflejado en la experiencia del usuario al momento de usar nuestras aplicaciones (Proyecto UpDev)"
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
