import React from "react";
import { Layout, Tabs } from "antd";
import Logo from '../../../assets/img/png/logo.png';

import RegisterForm from "../../../components/Admin/RegisterForm/RegisterForm";
import LoginForm from "../../../components/Admin/LoginForm/LoginForm";
import { getAccessToken } from "../../../api/auth";

// Styles
import './SignIn.scss';
import { Redirect } from "react-router-dom";

const SignIn = () => {
  const { Content } = Layout;
  const { TabPane } = Tabs;
  
  if(getAccessToken()){
    return <Redirect to="/admin" />
  }
  return (
    <Layout className="sign-in">
      <Content className="sign-in__content">
        
        <h1 className="sign-in__content-logo">
          <img src={Logo} alt="Luis Angel Quiñones" />
        </h1>
        <div className="sign-in__content-tabs">
          <Tabs type="card">
            <TabPane tab={<span>Entrar</span>} key="1">
              <LoginForm />
            </TabPane>
            <TabPane tab={<span>Registrarse</span>} key="2">
              <RegisterForm />
            </TabPane>
          </Tabs>
        </div>


      </Content>
    </Layout>
  );
};

export default SignIn;
