import React, { useState } from "react";
import {
  Form,
  Icon,
  Input,
  Select,
  Button,
  Row,
  Col,
  notification,
} from "antd";

import { signUpAdminApi } from "../../../../api/user";
import { getAccessToken } from "../../../../api/auth";

// Style
import "./AddUserForm.scss";

const AddUserForm = ({ setIsVisibleModal, setReloadUsers }) => {
  const [userData, setUserData] = useState({});

  const addUser = (e) => {
    e.preventDefault();
    if (
      !userData.name ||
      !userData.lastname ||
      !userData.password ||
      !userData.repeatPassword ||
      !userData.role ||
      !userData.email
    ) {
      notification["error"]({
        message: "Todos los campos son obligatorios.",
      });
      return;
    }

    if (userData.password !== userData.repeatPassword) {
      notification["error"]({
        message: "Las contraseñas no coinciden.",
      });
      return;
    }

    const token = getAccessToken();
    signUpAdminApi(token, userData)
      .then((res) => {
        notification["success"]({
          message: res.message,
        });
        setIsVisibleModal(false);
        setReloadUsers(true);
        setUserData({});
      })
      .catch((err) => {
        notification["error"]({
          message: "No se pudo crear el usuario.",
        });
      });
  };

  const clearForm = () => {};

  return (
    <div className="add-user-form">
      <AddForm
        userData={userData}
        setUserData={setUserData}
        addUser={addUser}
      />
    </div>
  );
};

function AddForm({ userData, setUserData, addUser }) {
  return (
    <Form className="form-add" onSubmit={addUser}>
      <Row gutter={24}>
        <Col span={12}>
          <Form.Item>
            <Input
              prefix={<Icon type="user" />}
              placeholder="Nombre"
              value={userData.name}
              onChange={(e) => {
                setUserData({ ...userData, name: e.target.value });
              }}
            />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item>
            <Input
              prefix={<Icon type="user" />}
              placeholder="Apellidos"
              value={userData.lastname}
              onChange={(e) => {
                setUserData({ ...userData, lastname: e.target.value });
              }}
            />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col span={12}>
          <Form.Item>
            <Input
              type="email"
              prefix={<Icon type="mail" />}
              placeholder="Correo electrónico"
              value={userData.email}
              onChange={(e) => {
                setUserData({ ...userData, email: e.target.value });
              }}
            />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item>
            <Select
              placeholder="Seleccióna un rol"
              onChange={(e) => setUserData({ ...userData, role: e })}
              value={userData.role}
            >
              <Select.Option value="admin">Administrador</Select.Option>
              <Select.Option value="editor">Editor</Select.Option>
              <Select.Option value="reviwer">Revisor</Select.Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col span={12}>
          <Form.Item>
            <Input
              type="password"
              prefix={<Icon type="lock" />}
              placeholder="Contraseña"
              value={userData.password}
              onChange={(e) => {
                setUserData({ ...userData, password: e.target.value });
              }}
            />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item>
            <Input
              type="password"
              prefix={<Icon type="lock" />}
              placeholder="Repetir contraseña"
              value={userData.repeatPassword}
              onChange={(e) => {
                setUserData({ ...userData, repeatPassword: e.target.value });
              }}
            />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="btn-submit">
          Crear usuario
        </Button>
      </Form.Item>
    </Form>
  );
}

export default AddUserForm;
