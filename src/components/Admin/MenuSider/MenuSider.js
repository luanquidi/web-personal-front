import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Icon } from "antd";

// Styles
import "./MenuSider.scss";

const MenuSider = (props) => {
    const { Sider } = Layout;
    const { menuCollapsed } = props;


  return (
    <Sider className="menu-sider" collapsed={menuCollapsed}>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">
          <Link to={"/admin"}>
            <Icon type="home" />
            <span className="nav-text">Home</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to={"/admin/menu-web"}>
            <Icon type="menu" />
            <span className="nav-text">Menu Web</span>
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default MenuSider;
