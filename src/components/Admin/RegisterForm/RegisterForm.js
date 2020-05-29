import React, { useState } from "react";
import { Form, Icon, Input, Checkbox, notification, Button } from "antd";
import Validatios from "../../../utils/formValidation";
import { signUpApi } from "../../../api/user";

//Styles
import "./RegisterForm.scss";

const RegisterForm = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    repeatPassword: "",
    privacyPolicy: false,
  });
  const [formValid, setFormValid] = useState({
    name: false,
    lastname: false,
    email: false,
    password: false,
    repeatPassword: false,
    privacyPolicy: false,
  });

  const changeForm = (e) => {
    if (e.target.name === "privacyPolicy") {
      setInputs({
        ...inputs,
        [e.target.name]: e.target.checked,
      });
    } else {
      setInputs({
        ...inputs,
        [e.target.name]: e.target.value,
      });
    }
  };

  const inputValidation = (e) => {
    const { type, name } = e.target;

    if (type === "text") {
      setFormValid({
        ...formValid,
        [name]: Validatios.minLengthValidation(e.target, 4),
      });
    }

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
    } else if (type === "checkbox") {
      setFormValid({
        ...formValid,
        [name]: e.target.checked,
      });
    }
  };

  const register = async (e) => {
    e.preventDefault();
    const passwordVal = inputs.password;
    const passwordRepeat = inputs.repeatPassword;

    if (
      !inputs.name ||
      !inputs.privacyPolicy ||
      !passwordVal ||
      !passwordRepeat
    ) {
      notification["error"]({
        message: "Todos los campos son obligatorios.",
      });
    } else {
      if (passwordVal !== passwordRepeat) {
        notification["error"]({
          message: "Las contraseñas no coinciden",
        });
      } else {
        inputs.email = inputs.email.toLowerCase();
        const result = await signUpApi(inputs);

        if (result.ok) {
          notification["success"]({
            message: result.message,
          });
        } else {
          notification["error"]({
            message: result.message,
          });
        }
        clearForm();
      }
    }
  };

  const clearForm = () => {
    const inputsForm = document.getElementsByTagName("input");

    for (let i of inputsForm) {
      i.classList.remove("success");
    }

    setInputs({
      email: "",
      password: "",
      repeatPassword: "",
      privacyPolicy: false,
    });
    setFormValid({
      name: false,
      lastname: false,
      email: false,
      password: false,
      repeatPassword: false,
      privacyPolicy: false,
    });
  };

  return (
    <Form className="register-form" onSubmit={register} onChange={changeForm}>
      <Form.Item>
        <Input
          prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25" }} />}
          type="text"
          name="name"
          placeholder="Nombre"
          className="register-form__input"
          onChange={inputValidation}
          value={inputs.name}
        />
      </Form.Item>
      <Form.Item>
        <Input
          prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25" }} />}
          type="text"
          name="lastname"
          placeholder="Apellidos"
          className="register-form__input"
          onChange={inputValidation}
          value={inputs.lastname}
        />
      </Form.Item>
      <Form.Item>
        <Input
          prefix={<Icon type="mail" style={{ color: "rgba(0,0,0,.25" }} />}
          type="email"
          name="email"
          placeholder="Correo electrónico"
          className="register-form__input"
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
          className="register-form__input"
          onChange={inputValidation}
          value={inputs.password}
        />
      </Form.Item>

      <Form.Item>
        <Input
          prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25" }} />}
          type="password"
          name="repeatPassword"
          placeholder="Repetir contraseña"
          className="register-form__input"
          onChange={inputValidation}
          value={inputs.repeatPassword}
        />
      </Form.Item>

      <Form.Item>
        <Checkbox
          name="privacyPolicy"
          onChange={inputValidation}
          checked={inputs.privacyPolicy}
        >
          He leído y acepto las politicas de privacidad
        </Checkbox>
      </Form.Item>

      <Form.Item>
        <Button htmlType="submit" className="register-form__button">
          Crear cuenta
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RegisterForm;
