import React from "react";
import { Row, Col, Icon } from "antd";
import { Link } from "react-router-dom";

import "./NavigationFooter.scss";

const NavigationFooter = () => {
  return (
    <Row className="navigation-footer">
      <Col>
        <h3>Navegación</h3>
      </Col>
      <Col lg={12}>
        <ListNavigationLeft />
      </Col>
      <Col lg={12}>
        <ListNavigationRight />
      </Col>
    </Row>
  );
};

function ListNavigationLeft() {
  return (
    <ul>
      <li>
        <Link to="/blog">
          <Icon type="message" />
          Blog
        </Link>
      </li>
      {/* <li>
        <Link to={"/contact"}>
          <Icon type="hdd" /> Desarrollo web
        </Link>
      </li>
      <li>
        <Link to={"/courses"}>
          <Icon type="appstore" /> Desarrollo web
        </Link>
      </li>
      <li>
        <Link to={"/user"}>
          <Icon type="right" /> Desarrollo web
        </Link>
      </li> */}
    </ul>
  );
}

function ListNavigationRight() {
  return (
    <ul>
      <li>
        <Link to="/sitios">
          <Icon type="global" />
          Sitios Web
        </Link>
      </li>
      {/* <li>
        <Link to={"/contact"}>
          <Icon type="code" /> Desarrollo web
        </Link>
      </li>
      <li>
        <Link to={"/courses"}>
          <Icon type="database" /> Desarrollo web
        </Link>
      </li>
      <li>
        <Link to={"/blog"}>
          <Icon type="right" /> Desarrollo web
        </Link>
      </li> */}
    </ul>
  );
}


export default NavigationFooter;
