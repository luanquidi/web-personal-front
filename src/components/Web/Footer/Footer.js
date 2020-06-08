import React from "react";
import { Layout, Row, Col } from "antd";

// Components
import MyInfo from "./MyInfo/MyInfo";
import Newsletter from "../Newsletter/Newsletter";
import NavigationFooter from "./NavigationFooter/NavigationFooter";

//Styles
import "./Footer.scss";

const Footer = () => {
  const { Footer } = Layout;
  return (
    <Footer className="footer">
      <Row>
        <Col md={4} />
        <Col md={16}>
          <Row>
            <Col md={8}>
              <MyInfo />
            </Col>
            <Col md={8}>
              <NavigationFooter />
            </Col>
            <Col md={8}>
              <Newsletter />
            </Col>
          </Row>
          <Row className="footer__copyright">
            <Col md={12}>&copy; 2020 ALL RIGHTS RESERVED</Col>
            <Col md={12}>UpDev | Desarrollo web & móvil</Col>
          </Row>
        </Col>
        <Col md={4} />
      </Row>
    </Footer>
  );
};

export default Footer;
