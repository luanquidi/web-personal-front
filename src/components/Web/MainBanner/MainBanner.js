import React from "react";
import { Row, Col } from "antd";

// Style
import "./MainBanner.scss";

const MainBanner = () => {
  return (
    <div className="main-banner">
      <div className="main-banner__dark">
        <Row>
          <Col md={4} />
          <Col md={16}>
            <h2>
              Conoce acerca de <span>UpDev</span> <br /> Tecnología web y móvil
            </h2>
            <h3>
              Nos apaciona el desarrollo, además lo ejercemos con un
              conocimiento actualizado
            </h3>
          </Col>
          <Col md={4} />
        </Row>
      </div>
    </div>
  );
};

export default MainBanner;
