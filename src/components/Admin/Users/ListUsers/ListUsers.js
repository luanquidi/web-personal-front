import React, { useState } from "react";
import { Icon, Switch, Button, List, Avatar } from "antd";
import NoAvatar from "../../../../assets/img/png/no-avatar.png";

// Components
import Modal from "../../../Modal/Modal";
import EditUserForm from "../EditUserForm/EditUserForm";

// Styles
import "./ListUsers.scss";

const ListUsers = (props) => {
  const { usersActive, usersInactive } = props;
  const [viewUsersActive, setViewUsersActive] = useState(true);
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState(null);

  return (
    <div className="list-users">
      <div className="list-users__switch">
        <Switch
          defaultChecked
          onChange={() => setViewUsersActive(!viewUsersActive)}
        />
        <span>
          {viewUsersActive ? "Usuarios Activos" : "Usuarios Inactivos"}
        </span>
      </div>
      {viewUsersActive ? (
        <UsersActive
          usersActive={usersActive}
          setIsVisibleModal={setIsVisibleModal}
          setModalContent={setModalContent}
          setModalTitle={setModalTitle}
        />
      ) : (
        <UsersInactive usersInactive={usersInactive} />
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
}) {

  const editUser = (user) => {
    setIsVisibleModal(true);
    setModalTitle(`Editar ${user.name} ${user.lastname}`);
    setModalContent(<EditUserForm user={user}/>);
  }
  return (
    <List
      className="users-active"
      itemLayout="horizontal"
      dataSource={usersActive}
      renderItem={(user) => (
        <List.Item
          actions={[
            <Button type="primary" onClick={() => editUser(user)}>
              <Icon type="edit" />
            </Button>,
            <Button
              type="danger"
              onClick={() => console.log("Desactivar User")}
            >
              <Icon type="stop" />
            </Button>,
            <Button type="danger" onClick={() => console.log("Eliminar User")}>
              <Icon type="delete" />
            </Button>,
          ]}
        >
          <List.Item.Meta
            avatar={<Avatar src={user.avatar ? user.avatar : NoAvatar} />}
            title={`
                        ${user.name ? user.name : "..."} 
                        ${user.lastname ? user.lastname : "..."}
                    `}
            description={user.email}
          />
        </List.Item>
      )}
    />
  );
}

function UsersInactive({ usersInactive }) {
  return (
    <List
      className="users-active"
      itemLayout="horizontal"
      dataSource={usersInactive}
      renderItem={(user) => (
        <List.Item
          actions={[
            <Button type="primary" onClick={() => console.log("Activar User")}>
              <Icon type="check" />
            </Button>,
            <Button type="danger" onClick={() => console.log("Eliminar User")}>
              <Icon type="delete" />
            </Button>,
          ]}
        >
          <List.Item.Meta
            avatar={<Avatar src={user.avatar ? user.avatar : NoAvatar} />}
            title={`
                            ${user.name ? user.name : "..."} 
                            ${user.lastname ? user.lastname : "..."}
                        `}
            description={user.email}
          />
        </List.Item>
      )}
    />
  );
}

export default ListUsers;
