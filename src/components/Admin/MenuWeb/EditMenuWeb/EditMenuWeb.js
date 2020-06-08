import React, { useState, useEffect } from "react";
import { Icon, Form, Input, Button, notification } from "antd";

// Functios
import { updateMenuApi } from "../../../../api/menu";
import { getAccessToken } from "../../../../api/auth";

// Styles
import "./EditMenuWeb.scss";

const EditMenuWeb = ({ setIsVisibleModal, setReloadMenuWeb, menu }) => {
  const [menuData, setMenuData] = useState(menu);

  useEffect(() => {
    setMenuData(menu);
  }, [menu]);

  const editMenu = (e) => {
    e.preventDefault();

    if (!menuData.title || !menuData.url) {
      notification["error"]({
        message: "Todos los campos son obligatorios.",
      });
      return;
    }

    const token = getAccessToken();

    updateMenuApi(token, menuData._id, menuData)
      .then((res) => {
        notification["success"]({
          message: res.message,
        });
        setReloadMenuWeb(true);
        setIsVisibleModal(false);
      })
      .catch((err) => {
        notification["error"]({
          message: err.message,
        });
      });
  };

  return (
    <div className="edit-menu-web">
      <EditForm
        menuData={menuData}
        setMenuData={setMenuData}
        editMenu={editMenu}
      />
    </div>
  );
};

function EditForm({ editMenu, menuData, setMenuData }) {
  return (
    <Form className="form-edit" onSubmit={editMenu}>
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
          Editar menú
        </Button>
      </Form.Item>
    </Form>
  );
}

export default EditMenuWeb;
