import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Layout, Menu, Icon } from "antd";

// Styles
import "./MenuSider.scss";

const MenuSider = (props) => {
  const { Sider } = Layout;
  const { menuCollapsed, location } = props;

  return (
    <Sider className="menu-sider" collapsed={menuCollapsed}>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={[location.pathname]}
      >
        <Menu.Item key="/admin">
          <Link to={"/admin"}>
            <Icon type="home" />
            <span className="nav-text">Home</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="/admin/users">
          <Link to={"/admin/users"}>
            <Icon type="user" />
            <span className="nav-text">Usuarios</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="/admin/menu">
          <Link to={"/admin/menu"}>
            <Icon type="menu" />
            <span className="nav-text">Menu</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="/admin/courses">
          <Link to={"/admin/courses"}>
            <Icon type="book" />
            <span className="nav-text">Cursos</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="/admin/blog">
          <Link to={"/admin/blog"}>
            <Icon type="message" />
            <span className="nav-text">Blogs</span>
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default withRouter(MenuSider);
