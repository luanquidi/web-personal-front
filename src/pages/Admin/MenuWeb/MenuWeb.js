import React, { useState, useEffect } from "react";
import { getMenusApi } from "../../../api/menu";
import MenuWebList from "../../../components/Admin/MenuWeb/MenuWebList/MenuWebList";

const MenuWeb = () => {
  const [menu, setMenu] = useState([]);
  const [reloadMenuWeb, setReloadMenuWeb] = useState(false);

  useEffect(() => {
    getMenusApi().then((res) => {
      setMenu(res.menus);
    });
    setReloadMenuWeb(false);
  }, [reloadMenuWeb]);

  return <MenuWebList menu={menu} setReloadMenuWeb={setReloadMenuWeb} />;
};

export default MenuWeb;
