import React, { useState, useEffect } from "react";
import { Spin, List, notification } from "antd";
import { Link } from "react-router-dom";
import moment from "moment";
import queryString from "query-string";
import Pagination from "../../../Pagination/Pagination";
import { getPostsApi } from "../../../../api/post";
import "moment/locale/es";
import { Helmet } from "react-helmet";
// Styles
import "./PostsList.scss";

const PostsList = ({ location, history }) => {
  const [posts, setPosts] = useState(null);
  const { page = 1 } = queryString.parse(location.search);

  useEffect(() => {
    getPostsApi(12, page)
      .then((res) => {
        if (!res.ok) {
          notification["warning"]({
            message: res.message,
          });
        } else {
          setPosts(res.posts);
        }
      })
      .catch(() => {
        notification["error"]({
          message: "Error del servidor al listar los posts.",
        });
      });
  }, [page]);

  if (!posts) {
    return (
      <Spin tip="cargando" style={{ width: "100%", padding: "200px 0" }} />
    );
  }

  return (
    <>
      <Helmet>
        <title>Blog | UpDev</title>
      </Helmet>
      <div className="posts-list">
        <h1>Blog</h1>
        <List
          dataSource={posts.docs}
          renderItem={(post) => <Post post={post} />}
        />
        <Pagination posts={posts} location={location} history={history} />
      </div>
    </>
  );
};

function Post({ post }) {
  const day = moment(post.date).format("DD");
  const month = moment(post.date).format("MMMM");
  const year = moment(post.date).format("YYYY");
  return (
    <List.Item className="post">
      <div className="post__date">
        <span>{day}</span>
        <span>{month}</span>
        <span>{year}</span>
      </div>
      <Link to={`/blog/${post.url}`}>
        <List.Item.Meta title={post.title} />
      </Link>
    </List.Item>
  );
}

export default PostsList;
