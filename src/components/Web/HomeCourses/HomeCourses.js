import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Card, Button } from "antd";

import reactJsHooks from "../../../assets/img/jpg/react-js-hooks.jpg";
import reactNative from "../../../assets/img/jpg/react-native.jpg";
import javaScript from "../../../assets/img/jpg/javascript-es6.jpg";
import wordPress from "../../../assets/img/jpg/wordpress.jpg";
import prestaShop from "../../../assets/img/jpg/prestashop-1-7.jpg";
import cssGrid from "../../../assets/img/jpg/css-grid.jpg";

// Styles
import "./HomeCourses.scss";

const HomeCourses = () => {
  return (
    <Row className="home-courses">
      <Col lg={24} className="home-courses__title">
        <h2>Aprende y mejora tus habilidades</h2>
      </Col>
      <Col lg={4} />
      <Col lg={16}>
        <Row className="row-courses">
          <Col md={6}>
            <CardCourse
              image={reactJsHooks}
              title="React JS Hooks"
              subTitle="Intermedio - React/JS"
              link="https://www.youtube.com/watch?v=JcHLxzrsRS4"
            />
          </Col>

          <Col md={6}>
            <CardCourse
              image={reactNative}
              title="React Native"
              subTitle="Intermedio - React/JS"
              link="https://www.youtube.com/watch?v=JcHLxzrsRS4"
            />
          </Col>

          <Col md={6}>
            <CardCourse
              image={wordPress}
              title="WordPress"
              subTitle="Intermedio - React/JS"
              link="https://www.youtube.com/watch?v=JcHLxzrsRS4"
            />
          </Col>

          <Col md={6}>
            <CardCourse
              image={cssGrid}
              title="Css Grid"
              subTitle="Intermedio - React/JS"
              link="https://www.youtube.com/watch?v=JcHLxzrsRS4"
            />
          </Col>
        </Row>
        <Row className="row-courses">
          <Col md={6}>
            <CardCourse
              image={prestaShop}
              title="PrestaShop"
              subTitle="Intermedio - React/JS"
              link="https://www.youtube.com/watch?v=JcHLxzrsRS4"
            />
          </Col>
          <Col md={6} />
          <Col md={6} />
          <Col md={6}>
            <CardCourse
              image={javaScript}
              title="JavaScript"
              subTitle="Intermedio - React/JS"
              link="https://www.youtube.com/watch?v=JcHLxzrsRS4"
            />
          </Col>
        </Row>
      </Col>
      <Col lg={4} />
      <Col lg={24} className="home-courses__more">
          <Link to={'/courses'}>
              <Button>Ver más</Button>
          </Link>
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
        actions={[<Button type="primary">Ver</Button>]}
      >
        <Meta title={title} description={subTitle} />
      </Card>
    </a>
  );
}

export default HomeCourses;
