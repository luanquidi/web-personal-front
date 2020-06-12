import React from "react";

import Emoji from "a11y-react-emoji";
import { ReactComponent as YouTubeIcon } from "../../../assets/img/svg/youtube.svg";
import { ReactComponent as TwitterIcon } from "../../../assets/img/svg/twitter.svg";
import { ReactComponent as FacebookIcon } from "../../../assets/img/svg/facebook.svg";
import { ReactComponent as LinkedinIcon } from "../../../assets/img/svg/linkedin.svg";

// Styles
import "./SocialLinks.scss";
import { notification } from "antd";

const SocialLinks = () => {
  return (
    <div className="social-links">
      <a
        href="https://www.youtube.com/watch?v=JcHLxzrsRS4"
        target="_blank"
        rel="noopener noreferrer"
        className="youtube"
        onClick={(e) => {
          e.preventDefault();
          notification["warning"]({
            message: (
              <span>
                Próximamente! <Emoji symbol="🤣" label="love" />
                <Emoji symbol="🔝" label="happy" />
              </span>
            ),
          });
        }}
      >
        <YouTubeIcon />
      </a>
      <a
        href="https://www.youtube.com/watch?v=JcHLxzrsRS4"
        target="_blank"
        rel="noopener noreferrer"
        className="facebook"
        onClick={(e) => {
          e.preventDefault();
          notification["warning"]({
            message: (
              <span>
                Próximamente! <Emoji symbol="🤣" label="love" />
                <Emoji symbol="🔝" label="happy" />
              </span>
            ),
          });
        }}
      >
        <FacebookIcon />
      </a>
      <a
        href="https://www.youtube.com/watch?v=JcHLxzrsRS4"
        target="_blank"
        rel="noopener noreferrer"
        className="twitter"
        onClick={(e) => {
          e.preventDefault();
          notification["warning"]({
            message: (
              <span>
                Próximamente! <Emoji symbol="🤣" label="love" />
                <Emoji symbol="🔝" label="happy" />
              </span>
            ),
          });
        }}
      >
        <TwitterIcon />
      </a>
      <a
        href="https://www.youtube.com/watch?v=JcHLxzrsRS4"
        target="_blank"
        rel="noopener noreferrer"
        className="linkedin"
        onClick={(e) => {
          e.preventDefault();
          notification["warning"]({
            message: (
              <span>
                Próximamente! <Emoji symbol="🤣" label="love" />
                <Emoji symbol="🔝" label="happy" />
              </span>
            ),
          });
        }}
      >
        <LinkedinIcon />
      </a>
    </div>
  );
};

export default SocialLinks;
