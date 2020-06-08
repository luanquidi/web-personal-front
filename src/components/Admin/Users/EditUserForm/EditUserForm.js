import React, { useState, useCallback, useEffect } from "react";
import {
  Icon,
  Avatar,
  Form,
  Input,
  Select,
  Button,
  Row,
  Col,
  notification,
} from "antd";
import { useDropzone } from "react-dropzone";
import NoAvatar from "../../../../assets/img/png/no-avatar.png";
import {
  getAvatarApi,
  uploadAvatarApi,
  updateUserApi,
} from "../../../../api/user";
import { getAccessToken } from "../../../../api/auth";

// Styles
import "./EditUserForm.scss";

const EditUserForm = ({ user, setIsVisibleModal, setReloadUsers }) => {
  const [avatar, setAvatar] = useState(null);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    setUserData({
      name: user.name,
      lastname: user.lastname,
      email: user.email,
      role: user.role,
      avatar: user.avatar,
    });
  }, []);

  useEffect(() => {
    if (user.avatar) {
      getAvatarApi(user.avatar).then((res) => {
        setAvatar(res);
      });
    } else {
      setAvatar(null);
    }
  }, [user]);

  useEffect(() => {
    if (avatar) {
      setUserData({
        ...userData,
        avatar: avatar.file,
      });
    }
  }, [avatar]);

  const updateUser = (e) => {
    e.preventDefault();
    const token = getAccessToken();
    let userUpdate = userData;

    if (userUpdate.password || userUpdate.repeatPassword) {
      if (userUpdate.password !== userUpdate.repeatPassword) {
        notification["error"]({
          message: "Las contraseñas no coinciden.",
        });
        return;
      } else {
        delete userUpdate.repeatPassword;
      }
    }

    if (!userUpdate.name || !userUpdate.lastname || !userUpdate.email) {
      notification["error"]({
        message: "Los campos nombre, apellidos y correo son obligatorios.",
      });
      return;
    }

    if (typeof userUpdate.avatar === "object") {
      uploadAvatarApi(token, userUpdate.avatar, user._id).then((res) => {
        userUpdate.avatar = res.avatarName;
        updateUserApi(token, userUpdate, user._id).then((res) => {
          notification["success"]({
            message: res.message,
          });
        });
      });
    } else {
      updateUserApi(token, userUpdate, user._id).then((res) => {
        notification["success"]({
          message: res.message,
        });
        setReloadUsers(true);
      });
    }
    setIsVisibleModal(false);
  };

  return (
    <div className="edit-user-form">
      <UploadAvatar avatar={avatar} setAvatar={setAvatar} />
      <EditForm
        userData={userData}
        setUserData={setUserData}
        updateUser={updateUser}
      />
    </div>
  );
};

function UploadAvatar(props) {
  const { avatar, setAvatar } = props;
  const [avatarUrl, setAvatarUrl] = useState(null);

  useEffect(() => {
    if (avatar) {
      if (avatar.preview) {
        setAvatarUrl(avatar.preview);
      } else {
        setAvatarUrl(avatar);
      }
    } else {
      setAvatarUrl(null);
    }
  }, [avatar]);

  const onDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
      setAvatar({
        file,
        preview: URL.createObjectURL(file),
      });
    },
    [setAvatar]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: "image/jpeg, image/png",
    noKeyboard: true,
    onDrop,
  });

  return (
    <div className="upload-avatar" {...getRootProps()}>
      <Input {...getInputProps()} />
      {isDragActive ? (
        <Avatar size={150} src={NoAvatar} />
      ) : (
        <Avatar size={150} src={avatarUrl ? avatarUrl : NoAvatar} />
      )}
    </div>
  );
}

function EditForm(props) {
  const { userData, setUserData, updateUser } = props;
  const { Option } = Select;

  return (
    <Form className="form-edit" onSubmit={updateUser}>
      <Row gutter={24}>
        <Col span={12}>
          <Form.Item>
            <Input
              prefix={<Icon type="user" />}
              placeholder="Nombre"
              value={userData.name}
              onChange={(e) =>
                setUserData({ ...userData, name: e.target.value })
              }
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item>
            <Input
              prefix={<Icon type="user" />}
              placeholder="Apellidos"
              value={userData.lastname}
              onChange={(e) =>
                setUserData({ ...userData, lastname: e.target.value })
              }
            />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col span={12}>
          <Form.Item>
            <Input
              prefix={<Icon type="mail" />}
              placeholder="Correo electrónico"
              value={userData.email}
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item>
            <Select
              placeholder="Seleccione un rol"
              value={userData.role}
              onChange={(e) => setUserData({ ...userData, role: e })}
            >
              <Option value="admin">Administrador</Option>
              <Option value="editor">Editor</Option>
              <Option value="reviewr">Revisor</Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col span={12}>
          <Form.Item>
            <Input
              type="password"
              prefix={<Icon type="lock" />}
              placeholder="Contraseña"
              onChange={(e) =>
                setUserData({ ...userData, password: e.target.value })
              }
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item>
            <Input
              type="password"
              prefix={<Icon type="lock" />}
              placeholder="Repetir contraseña"
              onChange={(e) =>
                setUserData({ ...userData, repeatPassword: e.target.value })
              }
            />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="btn-submit">
          Actualizar Usuario
        </Button>
      </Form.Item>
    </Form>
  );
}

export default EditUserForm;
