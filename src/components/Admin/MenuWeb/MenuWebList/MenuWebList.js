import React, { useEffect, useState } from "react";
import {
  List,
  Switch,
  Button,
  Icon,
  Modal as ModalAnt,
  notification,
} from "antd";

import DragSortableList from "react-drag-sortable";
import {
  updateMenuApi,
  activateMenuApi,
  deleteMenuApi,
} from "../../../../api/menu";
import { getAccessToken } from "../../../../api/auth";
import Modal from "../../../Modal/Modal";
import AddMenuWeb from "../AddMenuWeb/AddMenuWeb";

// Style
import "./MenuWebList.scss";
import EditMenuWeb from "../EditMenuWeb/EditMenuWeb";
const { confirm } = ModalAnt;

const MenuWebList = ({ menu, setReloadMenuWeb }) => {
  const [listItems, setListItems] = useState([]);
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState(null);

  useEffect(() => {
    const listItem = [];

    menu.forEach((item) => {
      listItem.push({
        content: <MenuItem item={item} setReloadMenuWeb={setReloadMenuWeb} openEditModal={openEditModal} />,
      });
    });

    setListItems(listItem);
  }, [menu]);

  const onSort = (sortedList, dropEvent) => {
    const token = getAccessToken();
    sortedList.forEach((item) => {
      const { _id } = item.content.props.item;
      const order = item.rank;
      updateMenuApi(token, _id, { order });
    });
  };

  const openAddModal = () => {
    setIsVisibleModal(true);
    setModalContent(
      <AddMenuWeb
        setIsVisibleModal={setIsVisibleModal}
        setReloadMenuWeb={setReloadMenuWeb}
      />
    );
    setModalTitle("Creando nuevo menú");
  };

  const openEditModal = (menu) => {
    setIsVisibleModal(true);
    setModalContent(
      <EditMenuWeb
        setIsVisibleModal={setIsVisibleModal}
        setReloadMenuWeb={setReloadMenuWeb}
        menu={menu}
      />
    );
    setModalTitle("Editando  menú: " + menu.title);
  };

  return (
    <div className="menu-web-list">
      <div className="menu-web-list__header">
        <Button type="primary" onClick={openAddModal}>
          Crear menú
        </Button>
      </div>
      <div className="menu-web-list__items">
        <DragSortableList items={listItems} onSort={onSort} type="vertical" />
      </div>
      <Modal
        title={modalTitle}
        isVisible={isVisibleModal}
        setIsVisible={setIsVisibleModal}
      >
        {modalContent}
      </Modal>
    </div>
  );
};

function MenuItem(props) {
  const { item, setReloadMenuWeb, openEditModal } = props;

  const activateMenu = () => {
    const token = getAccessToken();
    activateMenuApi(token, item._id, {
      active: !item.active,
    })
      .then((res) => {
        notification["success"]({
          message: res.message,
        });
      })
      .catch((err) => {
        notification["error"]({
          message: err.message,
        });
      });
  };

  const deleteMenu = () => {
    confirm({
      title: "¿Desea eliminar este menú?",
      content: `Una vez eliminado el menú con URL ${item.url} no se podrá recuperar.`,
      okText: "Si, eliminar",
      cancelText: "No, cancelar",
      icon: "warning",
      okType: "danger",
      onOk: () => {
        const token = getAccessToken();
        deleteMenuApi(token, item._id)
          .then((res) => {
            notification["success"]({
              message: res.message,
            });
            setReloadMenuWeb(true);
          })
          .catch((err) => {
            notification["error"]({
              message: err.message,
            });
          });
        return;
      },
      onCancel: () => {
        return;
      },
    });
  };

  return (
    <List.Item
      actions={[
        <Switch defaultChecked={item.active} onClick={activateMenu} />,
        <Button type="primary" onClick={() => openEditModal(item)}>
          <Icon type="edit" />
        </Button>,
        <Button type="danger" onClick={deleteMenu}>
          <Icon type="delete" />
        </Button>,
      ]}
    >
      <List.Item.Meta title={item.title} description={item.url} />
    </List.Item>
  );
}
export default MenuWebList;
