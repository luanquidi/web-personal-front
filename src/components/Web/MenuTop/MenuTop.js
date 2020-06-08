import React, { useState, useEffect } from "react";

// Components
import { Menu } from "antd";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../../assets/img/png/logo.png";
import { getMenusApi } from "../../../api/menu";

// Styles
import "./MenuTop.scss";
import SocialLinks from "../SocialLinks/SocialLinks";

const MenuTop = () => {
  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    getMenusApi().then((res) => {
      if(!res.ok){
        return;
      }
      setMenuData(
        res.menus.filter((i) => {
          if (i.active) {
            return i;
          }
          return null;
        })
      );
    });
  }, []);
  return (
    <Menu className="menu-top-web" mode="horizontal">
      <Menu.Item className="menu-top-web__logo">
        <Link to={"/"} className="bb">
          <img src={Logo} alt="upDev" />
        </Link>
      </Menu.Item>

      {menuData.map((item) => {
        const external = item.url.indexOf("http") > -1 ? true : false;

        if (external) {
          return (
            <Menu.Item key={item._id} className="menu-top-web__item">
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                {item.title}
              </a>
            </Menu.Item>
          );
        }

        return (
          <Menu.Item key={item._id} className="menu-top-web__item">
            <NavLink activeClassName="is-active" to={item.url}>
              {item.title}
            </NavLink>
          </Menu.Item>
        );
      })}
      <SocialLinks />
    </Menu>
  );
};

export default MenuTop;
