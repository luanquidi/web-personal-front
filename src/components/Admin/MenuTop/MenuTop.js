import React from "react";
import LuisLogo from "../../../assets/img/png/logo.png";
import { Icon, Button } from "antd";
import { logout } from "../../../api/auth";

// Styles
import "./MenuTop.scss";

const MenuTop = (props) => {
  const { menuCollapsed, setMenuCollapsed } = props;
  
  const closeMenu = () => {
    setMenuCollapsed(!menuCollapsed);
  };

  const closeSession = () => {
    logout();
    window.location.reload();
  }
  return (
    <div className="menu-top">
      <div className="menu-top__left">
        <img
          className="menu-top__left-logo"
          src={LuisLogo}
          alt="Luis Angel Quiñones"
        />
        <Button type="link" onClick={closeMenu}>
          <Icon type={menuCollapsed ? 'menu-unfold' : 'menu-fold'} />
        </Button>
      </div>
      <div className="menu-top__right">
        <Button type="link" onClick={closeSession}>
          <Icon type="poweroff" />
        </Button>
      </div>
    </div>
  );
};

export default MenuTop;
