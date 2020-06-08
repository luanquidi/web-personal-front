import React from "react";

import { ReactComponent as YouTubeIcon } from "../../../assets/img/svg/youtube.svg";
import { ReactComponent as TwitterIcon } from "../../../assets/img/svg/twitter.svg";
import { ReactComponent as FacebookIcon } from "../../../assets/img/svg/facebook.svg";
import { ReactComponent as LinkedinIcon } from "../../../assets/img/svg/linkedin.svg";

// Styles
import "./SocialLinks.scss";

const SocialLinks = () => {
  return (
    <div className="social-links">
      <a
        href="https://www.youtube.com/watch?v=JcHLxzrsRS4"
        target="_blank"
        rel="noopener noreferrer"
        className="youtube"
      >
        <YouTubeIcon />
      </a>
      <a
        href="https://www.youtube.com/watch?v=JcHLxzrsRS4"
        target="_blank"
        rel="noopener noreferrer"
        className="facebook"
      >
        <FacebookIcon />
      </a>
      <a
        href="https://www.youtube.com/watch?v=JcHLxzrsRS4"
        target="_blank"
        rel="noopener noreferrer"
        className="twitter"
      >
        <TwitterIcon />
      </a>
      <a
        href="https://www.youtube.com/watch?v=JcHLxzrsRS4"
        target="_blank"
        rel="noopener noreferrer"
        className="linkedin"
      >
        <LinkedinIcon />
      </a>
    </div>
  );
};

export default SocialLinks;
