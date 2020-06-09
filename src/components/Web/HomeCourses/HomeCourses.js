import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Card, Button } from "antd";
import Aos from "aos";
import "aos/dist/aos.css";

// import reactJsHooks from "../../../assets/img/jpg/react-js-hooks.jpg";
// import reactNative from "../../../assets/img/jpg/react-native.jpg";
// import javaScript from "../../../assets/img/jpg/javascript-es6.jpg";
// import wordPress from "../../../assets/img/jpg/wordpress.jpg";
// import prestaShop from "../../../assets/img/jpg/prestashop-1-7.jpg";
// import cssGrid from "../../../assets/img/jpg/css-grid.jpg";

import JS from "../../../assets/img/logos/javascript.png";
import HTML from "../../../assets/img/logos/html.png";
import CSS from "../../../assets/img/logos/css.png";
import ANGULAR from "../../../assets/img/logos/angular.png";
import REACT from "../../../assets/img/logos/react.png";
import MONGO from "../../../assets/img/logos/mongo.png";
import NODE from "../../../assets/img/logos/nodejs.png";
import LARAVEL from "../../../assets/img/logos/laravel.png";
import IONIC from "../../../assets/img/logos/ionic.png";
import POSTGRES from "../../../assets/img/logos/postgres.png";
import MYSQL from "../../../assets/img/logos/mysql.png";
import NET from "../../../assets/img/logos/net.png";

// Styles
import "./HomeCourses.scss";

const HomeCourses = () => {
  useEffect(() => {
    Aos.init({
      duration: 1500,
    });
  });
  return (
    <Row className="home-courses">
      <Col lg={24} className="home-courses__title">
        <h2>Tecnologías, Habilidades y conocimientos</h2>
      </Col>
      <Col lg={4} />
      <Col lg={16}>
        <Row className="row-courses" data-aos="fade-right">
          <Col md={6} className="first-image">
            <CardCourse
              image={CSS}
              title="Estilos CSS"
              subTitle="Diseño - CSS"
              link="https://openwebinars.net/blog/que-es-css/"
            />
          </Col>

          <Col md={6}>
            <CardCourse
              image={HTML}
              title="Maquetación HTML"
              subTitle="Estructura - HTML"
              link="https://www.especialistashosting.com/blog/index.php/2016/07/que-es-y-para-que-sirve-html/"
            />
          </Col>

          <Col md={6}>
            <CardCourse
              image={JS}
              title="JavaScript"
              subTitle="Funcionalidad - JS"
              link="https://openwebinars.net/blog/que-es-javascript-y-para-que-sirve/"
            />
          </Col>

          <Col md={6}>
            <CardCourse
              image={ANGULAR}
              title="Angular"
              subTitle="Framework - Angular/TS/JS"
              link="https://openwebinars.net/blog/que-es-angular/"
            />
          </Col>
        </Row>
        <Row className="row-courses" data-aos="fade-left">
          <Col md={6}>
            <CardCourse
              image={MONGO}
              title="Mongo"
              subTitle="Base de datos - NoSQL"
              link="https://openwebinars.net/blog/que-es-mongodb/"
            />
          </Col>
          <Col md={6} className="laravel-image">
            <CardCourse
              image={LARAVEL}
              title="Laravel"
              subTitle="Framework - Laravel/PHP"
              link="https://www.synergyweb.es/blog/laravel-desarrollo-medida/"
            />
          </Col>
          <Col md={6} className="node-image">
            <CardCourse
              image={NODE}
              title="NodeJs"
              subTitle="Framework - Node/JS"
              link="https://openwebinars.net/blog/que-es-nodejs/"
            />
          </Col>
          <Col md={6} className="last-image">
            <CardCourse
              image={REACT}
              title="React"
              subTitle="Framework - React/JS"
              link="https://platzi.com/blog/react-js-de-javascript/"
            />
          </Col>
        </Row>
        <Row className="row-courses" data-aos="fade-right">
          <Col md={6}>
            <CardCourse
              image={POSTGRES}
              title="Postgres"
              subTitle="Base de datos - SQL"
              link="https://openwebinars.net/blog/que-es-postgresql/"
            />
          </Col>
          <Col md={6} className="mysql-image">
            <CardCourse
              image={MYSQL}
              title="MySQL"
              subTitle="Base de datos - SQL"
              link="https://openwebinars.net/blog/que-es-mysql/"
            />
          </Col>
          <Col md={6} className="net-image">
            <CardCourse
              image={NET}
              title=".NET"
              subTitle="Framework - .NET"
              link="https://openwebinars.net/blog/que-es-net-framework/"
            />
          </Col>
          <Col md={6} className="last-image">
            <CardCourse
              image={IONIC}
              title="Ionic"
              subTitle="Framework - Ionic/TS"
              link="https://openwebinars.net/blog/ionic-framework-que-es/"
            />
          </Col>
        </Row>
      </Col>
      <Col lg={4} />
      <Col lg={24} className="home-courses__more">
        {/* <Link to={"/courses"}>
          <Button>Ver más</Button>
        </Link> */}
      </Col>
    </Row>
  );
};

function CardCourse({ image, title, subTitle, link }) {
  const { Meta } = Card;

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <Card
        className="home-courses__card"
        cover={<img src={image} alt={title} />}
        actions={[<Button type="primary">Conocer</Button>]}
      >
        <Meta title={title} description={subTitle} />
      </Card>
    </a>
  );
}

export default HomeCourses;
