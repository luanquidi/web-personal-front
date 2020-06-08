import React, { useEffect, useState } from "react";
import { elastic as Menus } from "react-burger-menu";
import "./MenuMovil.scss";
import { Menu } from "antd";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../../assets/img/png/logo.png";
import { getMenusApi } from "../../../api/menu";

const MenuMovil = (props) => {
  const [menuData, setMenuData] = useState([]);
  const [open, setOpen] = useState(false);

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
  const showSettings = (event) => {
    event.preventDefault();
  };

  if (true) {
    return (
      <>
        <Menu className="menu-top-movil" mode="horizontal">
          <Menu.Item className="menu-top-movil__logo">
            <Link to={"/"} className="bb">
              <img src={Logo} alt="upDev" />
            </Link>
          </Menu.Item>

          {/* <SocialLinks /> */}
        </Menu>
        <Menus style={{ transform: "translate3d(0px, 0px, 0px)" }}>
          {menuData.map((item) => (
            <NavLink
              activeClassName="is-active"
              key={item._id}
              id="home"
              className="menu-item"
              to={item.url}
              onClick={() => setOpen(!open)}
            >
              <span>{item.title}</span>
            </NavLink>
          ))}
        </Menus>
      </>
    );
    // transform: translate3d(0px, 0px, 0px);
  }
  return (
    <Menus {...props}>
      <a id="home" className="menu-item" href="/">
        Home
      </a>
      <a id="about" className="menu-item" href="/about">
        About
      </a>
      <a id="contact" className="menu-item" href="/contact">
        Contact
      </a>
      <a onClick={(e) => showSettings(e)} className="menu-item--small" href="">
        Settings
      </a>
    </Menus>
  );
};

// const MenuMovil = (props) => {
//     const showSettings = (event) => {
//       event.preventDefault();
//     };

//     return (
//       <Menu {...props}>
//         <a id="home" className="menu-item" href="/">
//           Home
//         </a>
//         <a id="about" className="menu-item" href="/about">
//           About
//         </a>
//         <a id="contact" className="menu-item" href="/contact">
//           Contact
//         </a>
//         <a onClick={(e) => showSettings(e)} className="menu-item--small" href="">
//           Settings
//         </a>
//       </Menu>
//     );
//   };

export default MenuMovil;

// return (
//   <Menu className="menu-top-web" mode="horizontal">
//     <Menu.Item className="menu-top-web__logo">
//       <Link to={"/"} className="bb">
//         <img src={Logo} alt="upDev" />
//       </Link>
//     </Menu.Item>

//     {menuData.map((item) => {
//       const external = item.url.indexOf("http") > -1 ? true : false;

//       if (external) {
//         return (
//           <Menu.Item key={item._id} className="menu-top-web__item">
//             <a href={item.url} target="_blank" rel="noopener noreferrer">
//               {item.title}
//             </a>
//           </Menu.Item>
//         );
//       }

//       return (
//         <Menu.Item key={item._id} className="menu-top-web__item">
//           <Link to={item.url}>{item.title}</Link>
//         </Menu.Item>
//       );
//     })}

//     <SocialLinks />
//   </Menu>
// );
