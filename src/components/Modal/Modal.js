import React from "react";
import { Modal as ModalAnt } from "antd";

// Style
import "./Modal.scss";

const Modal = (props) => {
  const { children, title, isVisible, setIsVisible, ...other } = props;

  return (
    <ModalAnt
      title={title}
      centered
      visible={isVisible}
      onCancel={() => setIsVisible(false)}
      footer={false}
      {...other}
    >
      {children}
    </ModalAnt>
  );
};

export default Modal;
