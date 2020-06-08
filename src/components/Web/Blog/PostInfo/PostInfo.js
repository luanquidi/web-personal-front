import React, { useEffect, useState } from "react";
import { notification, Spin } from "antd";
import moment from "moment";
import "moment/locale/es";
import { Helmet } from "react-helmet";
// Functions
import { getPostApi } from "../../../../api/post";

// Style
import "./PostInfo.scss";

const PostInfo = ({ url }) => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    getPostApi(url)
      .then((res) => {
        if (!res.ok) {
          notification["warning"]({
            message: res.message,
          });
        } else {
          setPost(res.post);
        }
      })
      .catch((err) => {
        notification["error"]({
          message: "Error al cargar post.",
        });
      });
  }, [url]);

  if (!post) {
    return (
      <Spin tip="Cargando..." style={{ width: "100%", padding: "200px 0" }} />
    );
  }

  return (
    <>
      <Helmet>
        <title> {post.title} | UpDev</title>
      </Helmet>
      <div className="post-info">
        <h1 className="post-info__title">{post.title}</h1>
        <div className="post-info__creation-date">
          {moment(post.date).locale("es").format("LL")}
        </div>
        <div
          className="post-info__description"
          dangerouslySetInnerHTML={{ __html: post.description }}
        />
      </div>
    </>
  );
};

export default PostInfo;
