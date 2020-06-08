import React, { useState, useEffect } from "react";
import {
  Icon,
  Switch,
  Button,
  List,
  Avatar,
  notification,
  Modal as ModalAntd,
} from "antd";
import NoAvatar from "../../../../assets/img/png/no-avatar.png";

// Components
import Modal from "../../../Modal/Modal";
import EditUserForm from "../EditUserForm/EditUserForm";
import AddUserForm from "../AddUserForm/AddUserForm";

import {
  getAvatarApi,
  activeUserApi,
  deleteUserApi,
} from "../../../../api/user";
import { getAccessToken } from "../../../../api/auth";

// Styles
import "./ListUsers.scss";

const { confirm } = ModalAntd;

const ListUsers = (props) => {
  const { usersActive, usersInactive, setReloadUsers } = props;
  const [viewUsersActive, setViewUsersActive] = useState(true);
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState(null);

  const addUserModal = () => {
    setIsVisibleModal(true);
    setModalTitle("Creando nuevo usuario");
    setModalContent(
      <AddUserForm
        setIsVisibleModal={setIsVisibleModal}
        setReloadUsers={setReloadUsers}
      />
    );
  };

  return (
    <div className="list-users">
      <div className="list-users__header">
        <div className="list-users__header-switch">
          <Switch
            defaultChecked
            onChange={() => setViewUsersActive(!viewUsersActive)}
          />
          <span>
            {viewUsersActive ? "Usuarios Activos" : "Usuarios Inactivos"}
          </span>
        </div>
        <Button type="primary" onClick={addUserModal}>
          Nuevo usuario
        </Button>
      </div>

      {viewUsersActive ? (
        <UsersActive
          usersActive={usersActive}
          setIsVisibleModal={setIsVisibleModal}
          setModalContent={setModalContent}
          setModalTitle={setModalTitle}
          setReloadUsers={setReloadUsers}
        />
      ) : (
        <UsersInactive
          usersInactive={usersInactive}
          setReloadUsers={setReloadUsers}
        />
      )}

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

function UsersActive({
  usersActive,
  setIsVisibleModal,
  setModalTitle,
  setModalContent,
  setReloadUsers,
}) {
  const editUser = (user) => {
    setIsVisibleModal(true);
    setModalTitle(`Editar ${user.name} ${user.lastname}`);
    setModalContent(
      <EditUserForm
        user={user}
        setIsVisibleModal={setIsVisibleModal}
        setReloadUsers={setReloadUsers}
      />
    );
  };
  return (
    <List
      className="users-active"
      itemLayout="horizontal"
      dataSource={usersActive}
      renderItem={(user) => (
        <UserActive
          user={user}
          editUser={editUser}
          setReloadUsers={setReloadUsers}
        />
      )}
    />
  );
}

function UsersInactive({ usersInactive, setReloadUsers }) {
  return (
    <List
      className="users-active"
      itemLayout="horizontal"
      dataSource={usersInactive}
      renderItem={(user) => (
        <UserInactive user={user} setReloadUsers={setReloadUsers} />
      )}
    />
  );
}

// Component de un usuario
function UserActive({ user, editUser, setReloadUsers }) {
  const [avatar, setAvatar] = useState(null);

  useEffect(() => {
    if (user.avatar) {
      getAvatarApi(user.avatar).then((res) => {
        setAvatar(res);
      });
    } else {
      setAvatar(null);
    }
  }, [user]);

  const deactivateUser = () => {
    const token = getAccessToken();

    activeUserApi(token, user._id, false)
      .then((res) => {
        notification["success"]({
          message: res.message,
        });
        setReloadUsers(true);
      })
      .catch((err) => {
        notification["error"]({
          message: "No se pudo desactivar el usuario.",
        });
      });
  };

  const deleteUser = () => {
    const token = getAccessToken();

    confirm({
      title: "¿Desea eliminar este usuario?",
      content: `Una vez eliminado el usuario con email ${user.email} no se podrá recuperar.`,
      okText: "Si, eliminar",
      cancelText: "No, cancelar",
      icon: "warning",
      okType: "danger",
      onOk: () => {
        deleteUserApi(token, user._id)
          .then((res) => {
            notification["success"]({
              message: res.message,
            });
            setReloadUsers(true);
          })
          .catch((err) => {
            notification["error"]({
              message: "No se pudo eliminar el usuario.",
            });
          });
      },
      onCancel: () => {
        return;
      },
    });
  };

  return (
    <List.Item
      actions={[
        <Button type="primary" onClick={() => editUser(user)}>
          <Icon type="edit" />
        </Button>,
        <Button type="danger" onClick={deactivateUser}>
          <Icon type="stop" />
        </Button>,
        <Button type="danger" onClick={deleteUser}>
          <Icon type="delete" />
        </Button>,
      ]}
    >
      <List.Item.Meta
        avatar={<Avatar src={avatar ? avatar : NoAvatar} />}
        title={`
                          ${user.name ? user.name : "..."} 
                          ${user.lastname ? user.lastname : "..."}
                      `}
        description={user.email}
      />
    </List.Item>
  );
}

// Component de un usuario inactivo
function UserInactive({ user, setReloadUsers }) {
  const [avatar, setAvatar] = useState(null);

  useEffect(() => {
    if (user.avatar) {
      getAvatarApi(user.avatar).then((res) => {
        setAvatar(res);
      });
    } else {
      setAvatar(null);
    }
  }, [user]);

  const activateUser = () => {
    const token = getAccessToken();

    activeUserApi(token, user._id, true)
      .then((res) => {
        notification["success"]({
          message: res.message,
        });
        setReloadUsers(true);
      })
      .catch((err) => {
        notification["error"]({
          message: "No se pudo activar el usuario.",
        });
      });
  };

  const deleteUser = () => {
    const token = getAccessToken();

    confirm({
      title: "¿Desea eliminar este usuario?",
      content: `Una vez eliminado el usuario con email ${user.email} no se podrá recuperar.`,
      okText: "Si, eliminar",
      cancelText: "No, cancelar",
      icon: "warning",
      okType: "danger",
      onOk: () => {
        deleteUserApi(token, user._id)
          .then((res) => {
            notification["success"]({
              message: res.message,
            });
            setReloadUsers(true);
          })
          .catch((err) => {
            notification["error"]({
              message: "No se pudo eliminar el usuario.",
            });
          });
      },
      onCancel: () => {
        return;
      },
    });
  };

  return (
    <List.Item
      actions={[
        <Button type="primary" onClick={activateUser}>
          <Icon type="check" />
        </Button>,
        <Button type="danger" onClick={deleteUser}>
          <Icon type="delete" />
        </Button>,
      ]}
    >
      <List.Item.Meta
        avatar={<Avatar src={avatar ? avatar : NoAvatar} />}
        title={`
                          ${user.name ? user.name : "..."} 
                          ${user.lastname ? user.lastname : "..."}
                      `}
        description={user.email}
      />
    </List.Item>
  );
}

export default ListUsers;
