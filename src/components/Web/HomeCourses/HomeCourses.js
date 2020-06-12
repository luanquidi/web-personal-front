import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Card, Button } from "antd";
// import Aos from "aos";
// import "aos/dist/aos.css";

// import reactJsHooks from "../../../assets/img/jpg/react-js-hooks.jpg";
// import reactNative from "../../../assets/img/jpg/react-native.jpg";
// import javaScript from "../../../assets/img/jpg/javascript-es6.jpg";
// import wordPress from "../../../assets/img/jpg/wordpress.jpg";
// import prestaShop from "../../../assets/img/jpg/prestashop-1-7.jpg";
// import cssGrid from "../../../assets/img/jpg/css-grid.jpg";

import JS from "../../../assets/img/logos/javascript.png";
import JS2 from "../../../assets/img/logos/js.jpg";
import HTML from "../../../assets/img/logos/html.png";
import HTML2 from "../../../assets/img/logos/html2.jpg";
import CSS from "../../../assets/img/logos/css.png";
import CSS2 from "../../../assets/img/logos/css.jpg";
import ANGULAR from "../../../assets/img/logos/angular.png";
import ANGULAR2 from "../../../assets/img/logos/angular.jpg";
import REACT from "../../../assets/img/logos/react.png";
import REACT2 from "../../../assets/img/logos/react.jpg";
import MONGO from "../../../assets/img/logos/mongo.png";
import MONGO2 from "../../../assets/img/logos/mongo.jpg";
import NODE from "../../../assets/img/logos/nodejs.png";
import NODE2 from "../../../assets/img/logos/node.jpg";
import NODE3 from "../../../assets/img/logos/node.png";
import LARAVEL from "../../../assets/img/logos/laravel.png";
import LARAVEL2 from "../../../assets/img/logos/laravel2.png";
import IONIC from "../../../assets/img/logos/ionic.png";
import IONIC2 from "../../../assets/img/logos/ionic.jpg";
import POSTGRES from "../../../assets/img/logos/postgres.png";
import POSTGRES2 from "../../../assets/img/logos/postgres.jpg";
import MYSQL from "../../../assets/img/logos/mysql.png";
import MYSQL2 from "../../../assets/img/logos/mysql.jpg";
import NET from "../../../assets/img/logos/net.png";
// import NET2 from "../../../assets/img/logos/aspnet.png";
import NET2 from "../../../assets/img/logos/net.jpg";

// Styles
import "./HomeCourses.scss";

const HomeCourses = () => {
  // useEffect(() => {
  //   Aos.init({
  //     duration: 2000,
  //   });
  // });
  return (
    <Row className="home-courses">
      <Col lg={24} className="home-courses__title">
        <h2>Tecnologías, Habilidades y conocimientos</h2>
      </Col>
      <Col lg={4} />
      <Col lg={16}>
        <Row className="row-courses">
          <Col md={6} data-aos={window.innerWidth < 764 ? "fade-up" : "fade-right"}>
            <CardCourse
              image={CSS2}
              title="Estilos CSS"
              subTitle="Diseño - CSS"
              link="https://openwebinars.net/blog/que-es-css/"
            />
          </Col>

          <Col md={6} data-aos={window.innerWidth < 764 ? "fade-up" : "fade-down"}>
            <CardCourse
              image={HTML2}
              title="Maquetación HTML"
              subTitle="Estructura - HTML"
              link="https://www.especialistashosting.com/blog/index.php/2016/07/que-es-y-para-que-sirve-html/"
            />
          </Col>

          <Col md={6} data-aos={window.innerWidth < 764 ? "fade-up" : "fade-down"}>
            <CardCourse
              image={JS2}
              title="JavaScript"
              subTitle="Funcionalidad - JS"
              link="https://openwebinars.net/blog/que-es-javascript-y-para-que-sirve/"
            />
          </Col>

          <Col md={6} data-aos={window.innerWidth < 764 ? "fade-up" : "fade-left"}>
            <CardCourse
              image={ANGULAR2}
              title="Angular"
              subTitle="Framework - Angular/TS/JS"
              link="https://openwebinars.net/blog/que-es-angular/"
            />
          </Col>
        </Row>
        <Row className="row-courses">
          <Col md={6} data-aos={window.innerWidth < 764 ? "fade-up" : "fade-right"}>
            <CardCourse
              image={MONGO2}
              title="Mongo"
              subTitle="Base de datos - NoSQL"
              link="https://openwebinars.net/blog/que-es-mongodb/"
            />
          </Col>
          <Col md={6} className="laravel-image" data-aos={window.innerWidth < 764 ? "fade-up" : "fade-left"}>
            <CardCourse
              image={LARAVEL2}
              title="Laravel"
              subTitle="Framework - Laravel/PHP"
              link="https://www.synergyweb.es/blog/laravel-desarrollo-medida/"
            />
          </Col>
          <Col md={6} className="node-image" data-aos={window.innerWidth < 764 ? "fade-up" : "fade-right"}>
            <CardCourse
              image={NODE2}
              title="NodeJs"
              subTitle="Framework - Node/JS"
              link="https://openwebinars.net/blog/que-es-nodejs/"
            />
          </Col>
          <Col md={6} className="react-image" data-aos={window.innerWidth < 764 ? "fade-up" : "fade-left"}>
            <CardCourse
              image={REACT2}
              title="React"
              subTitle="Framework - React/JS"
              link="https://platzi.com/blog/react-js-de-javascript/"
            />
          </Col>
        </Row>
        <Row className="row-courses">
          <Col md={6} data-aos={window.innerWidth < 764 ? "fade-up" : "fade-right"}>
            <CardCourse
              image={POSTGRES2}
              title="Postgres"
              subTitle="Base de datos - SQL"
              link="https://openwebinars.net/blog/que-es-postgresql/"
            />
          </Col>
          <Col md={6} className="mysql-image" data-aos={window.innerWidth < 764 ? "fade-up" : "fade-up"}>
            <CardCourse
              image={MYSQL2}
              title="MySQL"
              subTitle="Base de datos - SQL"
              link="https://openwebinars.net/blog/que-es-mysql/"
            />
          </Col>
          <Col md={6} className="net-image" data-aos="fade-up">
            <CardCourse
              image={NET2}
              title=".NET"
              subTitle="Framework - .NET"
              link="https://openwebinars.net/blog/que-es-net-framework/"
            />
          </Col>
          <Col md={6} className="last-image" data-aos={window.innerWidth < 764 ? "fade-up" : "fade-left"}>
            <CardCourse
              image={IONIC2}
              title="Ionic"
              subTitle="Framework - Ionic/TS"
              link="https://openwebinars.net/blog/ionic-framework-que-es/"
            />
          </Col>
        </Row>
      </Col>
      <Col lg={4} />
      {/* <Col lg={24} className="home-courses__more">
        <Link to={"/courses"}>
          <Button>Ver más</Button>
        </Link>
      </Col> */}
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
