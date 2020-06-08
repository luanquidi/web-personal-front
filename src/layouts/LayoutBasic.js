import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { Row, Col } from "antd";

// Components
import MenuTop from "../components/Web/MenuTop/MenuTop";
import MenuMovil from "../components/Web/MenuMovil/MenuMovil";
import Footer from "../components/Web/Footer/Footer";

// Styles
import "./LayoutBasic.scss";

const LayoutBasic = (props) => {
  const { routes } = props;

  const [widthDevice, setWidthDevice] = useState(window.innerWidth);

  window.addEventListener("resize", (e) => {
    setWidthDevice(window.innerWidth);
  });

  if (widthDevice < 768) {
    return (
      <>
        <MenuMovil />
        <LoadRoutes routes={routes} />
        <Footer />
      </>
    );
  }


  return (
    <>
      <Row gutter={24} className="layout-row">
        <Col md={4} />
        <Col md={16}>
          <MenuTop />
        </Col>
        <Col md={4} />
      </Row>
      <LoadRoutes routes={routes} />
      <Footer />
    </>
  );
};

const LoadRoutes = ({ routes }) => {
  return (
    <Switch>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
    </Switch>
  );
};

export default LayoutBasic;
