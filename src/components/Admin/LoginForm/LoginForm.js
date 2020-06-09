import React, { useState } from "react";
import { Form, Icon, Input, notification, Button } from "antd";
import Validatios from "../../../utils/formValidation";
import { signInApi } from "../../../api/user";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../../utils/constants";
import "./LoginForm.scss";

const LoginForm = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const [formValid, setFormValid] = useState({
    email: false,
    password: false,
  });

  const inputValidation = (e) => {
    const { type, name } = e.target;

    if (type === "email") {
      setFormValid({
        ...formValid,
        [name]: Validatios.emailValidation(e.target),
      });
    } else if (type === "password") {
      setFormValid({
        ...formValid,
        [name]: Validatios.minLengthValidation(e.target, 6),
      });
    }
  };

  const changeForm = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const clearForm = () => {
    const inputsForm = document.getElementsByTagName("input");

    for (let i of inputsForm) {
      i.classList.remove("success");
    }

    setInputs({
      email: "",
      password: "",
    });
    setFormValid({
      email: false,
      password: false,
    });
  };

  const signIn = async (e) => {
    e.preventDefault();

    if (!formValid.email || !formValid.password) {
      notification["error"]({
        message: "Todos los campos son obligatorios.",
      });
    } else {
      const result = await signInApi(inputs);
      if (!result.ok) {
        notification["error"]({
          message: result.message,
        });
      } else {
        const { accessToken, refreshToken } = result;

        localStorage.setItem(ACCESS_TOKEN, accessToken);
        localStorage.setItem(REFRESH_TOKEN, refreshToken);

        notification["success"]({
          message: result.message,
        });

        clearForm();
        // return <Redirect from="/admin/login" to='/admin' />
        window.location.href = '/#/admin';
      }
    }
  };

  return (
    <Form className="login-form" onSubmit={signIn} onChange={changeForm}>
      <Form.Item>
        <Input
          prefix={<Icon type="mail" style={{ color: "rgba(0,0,0,.25" }} />}
          type="email"
          name="email"
          placeholder="Correo electrónico"
          className="login-form__input"
          onChange={inputValidation}
          value={inputs.email}
        />
      </Form.Item>
      <Form.Item>
        <Input
          prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25" }} />}
          type="password"
          name="password"
          placeholder="Contraseña"
          className="login-form__input"
          onChange={inputValidation}
          value={inputs.password}
        />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" className="login-form__button">
          Ingresar
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
