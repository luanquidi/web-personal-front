import React, { useState } from "react";
import { notification, Button, Form, Icon, Input } from "antd";

// Functions
import { suscribeEmailApi } from "../../../api/newsletter";

// Style
import "./Newsletter.scss";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const suscribe = (e) => {
    e.preventDefault();

    if (!email) {
      notification["error"]({
        message: "El correo es obligatorio",
      });
      return;
    }

    const emailValid = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    const resultValidation = emailValid.test(email);

    if (!resultValidation) {
      notification["error"]({
        message: "El correo debe ser valido.",
      });
      return;
    }

    suscribeEmailApi(email)
      .then((res) => {
        if (res.ok) {
          notification["success"]({
            message: res.message,
          });
          setEmail("");
        } else {
          notification["error"]({
            message: res.message,
          });
          setEmail("");
        }
      })
      .catch((err) => {
        notification["error"]({
          message: err.message,
        });
      });
  };
  return (
    <div className="newsletter">
      <h3>Newsletter</h3>
      <Form onSubmit={(e) => suscribe(e)}>
        <Form.Item>
          <Input
            prefix={<Icon type="user" style={{ color: "rgba(0,0,0,0.25" }} />}
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" disabled={email ? false : true}>
            Suscribirse
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Newsletter;
