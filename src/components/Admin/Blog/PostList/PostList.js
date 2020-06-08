import React from "react";
import { List, Button, Icon, notification, Modal } from "antd";
import { Link } from "react-router-dom";

// Style
import "./PostList.scss";
import { deletePostApi } from "../../../../api/post";
import { getAccessToken } from "../../../../api/auth";

const { confirm } = Modal;

const PostList = ({ posts, setReloadPosts, editPost }) => {
  return (
    <div className="posts-list">
      <List
        dataSource={posts}
        renderItem={(post) => (
          <Post post={post} setReloadPosts={setReloadPosts} editPost={editPost} />
        )}
      />
    </div>
  );
};

function Post({ post, setReloadPosts, editPost }) {
  const deletePost = (id) => {
    const token = getAccessToken();

    confirm({
      title: "¿Desea eliminar este post?",
      content: `Una vez eliminado el post con url ${post.url} no se podrá recuperar.`,
      okText: "Si, eliminar",
      cancelText: "No, cancelar",
      icon: "warning",
      okType: "danger",
      onOk: () => {
        deletePostApi(token, id)
          .then((res) => {
            if (res.ok) {
              notification["success"]({
                message: res.message,
              });
              setReloadPosts(true);
            } else {
              notification["error"]({
                message: "No se pudo eliminar el post.",
              });
            }
          })
          .catch((err) => {
            console.log(err);
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
        <Link to={`/blog/${post.url}`} target="_blank">
          <Button type="primary">
            <Icon type="eye" />
          </Button>
        </Link>,
        <Button type="primary" onClick={() => editPost(post)}>
          <Icon type="edit" />
        </Button>,
        <Button type="danger" onClick={() => deletePost(post._id)}>
          <Icon type="delete" />
        </Button>,
      ]}
    >
      <List.Item.Meta title={post.title} />
    </List.Item>
  );
}
export default PostList;
