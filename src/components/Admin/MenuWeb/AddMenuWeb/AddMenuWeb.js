import React, { useState } from "react";

// Components
import { Form, Icon, Input, Button, Select, notification } from "antd";

// Functions
import { getAccessToken } from "../../../../api/auth";
import { addMenuApi } from "../../../../api/menu";

// Style
import "./AddMenuWeb.scss";

const AddMenuWeb = ({ setIsVisibleModal, setReloadMenuWeb }) => {
  const [menuData, setMenuData] = useState({ http: "http://" });
  return (
    <div className="add-menu-web">
      <h1>AddMenuWeb Component</h1>
      <AddForm
        setIsVisibleModal={setIsVisibleModal}
        setReloadMenuWeb={setReloadMenuWeb}
        menuData={menuData}
        setMenuData={setMenuData}
      />
    </div>
  );
};

function AddForm({
  setIsVisibleModal,
  setReloadMenuWeb,
  menuData,
  setMenuData,
}) {
  const selectBefore = (
    <Select
      defaultValue="http://"
      style={{ width: 90 }}
      onChange={(e) =>
        setMenuData({
          ...menuData,
          http: e,
        })
      }
    >
      <Select.Option value="http://">http://</Select.Option>
      <Select.Option value="https://">https://</Select.Option>
    </Select>
  );
  const addMenu = (e) => {
    e.preventDefault();
    const token = getAccessToken();
    const data = {
      title: menuData.title,
      url: (menuData.http ? menuData.http : "http://") + menuData.url,
      order: 1000,
    };

    if (!menuData.title || !menuData.url) {
      notification["error"]({
        message: "Todos los campos son obligatorios",
      });
      return;
    }

    addMenuApi(token, data)
      .then((res) => {
        notification["success"]({
          message: res.message,
        });
        setIsVisibleModal(false);
        setReloadMenuWeb(true);
        setMenuData({ http: "http://" });
      })
      .catch((err) => {
        notification["error"]({
          message: err.message,
        });
      });
  };

  return (
    <Form className="form-add" onSubmit={addMenu}>
      <Form.Item>
        <Input
          prefix={<Icon type="font-size" />}
          placeholder="Titulo"
          value={menuData.title}
          onChange={(e) => setMenuData({ ...menuData, title: e.target.value })}
        />
      </Form.Item>

      <Form.Item>
        <Input
          addonBefore={selectBefore}
          placeholder="URL"
          value={menuData.url}
          onChange={(e) => setMenuData({ ...menuData, url: e.target.value })}
        />
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="btn-submit"
          style={{ width: "100%" }}
        >
          Crear menú
        </Button>
      </Form.Item>
    </Form>
  );
}

export default AddMenuWeb;
