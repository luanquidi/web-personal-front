import React from "react";
import CLAVE from "../../../assets/img/logos/clave.jpeg";
import CRM from "../../../assets/img/logos/CRM.png";
import { Card, Rate, Row, Col } from "antd";

import "./Site.scss";

const Site = () => {
  return (
    <Row>
      <Col md={4} />
      <Col md={8} className="col-site">
        <Card
          cover={<img src={CLAVE} alt="Clave Mar" style={{ width: "150px" }} />}
          className="site"
        >
          <Card.Meta
            title="Clave mar"
            description="Pagina web restaurante de comida de mar Clave Mar"
          />
          <a
            type="primary"
            target="_blank"
            rel="noopenner noreferrer"
            style={{ width: "100%", marginTop: "30px" }}
            href="http://laclavedelmar.com/"
          >
            <span>Visitar</span>
          </a>
          <div className="site__footer">
            {/* <span>
                     {course.price ? `${course.price} $` : courseData.price}
                   </span> */}

            <Rate disabled defaultValue={5} />
          </div>
        </Card>
      </Col>
      <Col md={8} className="col-site">
        <Card
          cover={<img src={CRM} alt="Clave Mar" style={{ width: "150px" }} />}
          className="site"
        >
          <Card.Meta
            title="CRM"
            description="Pagina web CRM administrador de clientes"
          />
          <a
            type="primary"
            target="_blank"
            rel="noopenner noreferrer"
            style={{ width: "100%", marginTop: "30px" }}
            href="https://distracted-shirley-ccd41e.netlify.app/"
          >
            <span>Visitar</span>
          </a>
          <div className="site__footer">
            <Rate disabled defaultValue={5} />
          </div>
        </Card>
        
      </Col>
      <Col md={4} />
    </Row>
  );
};

export default Site;
