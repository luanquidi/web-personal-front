import React from "react";
import Logo from "../../../../assets/img/png/logo.png";
import SocialLink from '../../SocialLinks/SocialLinks';

//Style
import "./MyInfo.scss";

const MyInfo = () => {
  return (
    <div className="my-info">
      <img src={Logo} alt="UpDev" />
      <h4>
        <span>UpDev</span> conoce un poco más sobre nosotros.
      </h4>
      <SocialLink />
    </div>
  );
};

export default MyInfo;
