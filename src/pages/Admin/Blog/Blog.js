import React, { useState, useEffect } from "react";
import { Button, notification } from "antd";
import Modal from "../../../components/Modal/Modal";
import { withRouter } from "react-router-dom";

// Functions
import { getPostsApi } from "../../../api/post";
import queryString from "query-string";

// Components
import PostList from "../../../components/Admin/Blog/PostList/PostList";
import Pagination from "../../../components/Pagination/Pagination";
import AddEditPostForm from "../../../components/Admin/Blog/AddEditPostForm/AddEditPostForm";

// Style
import "./Blog.scss";

const Blog = ({ location, history }) => {
  const [posts, setPosts] = useState(null);
  const [modalTitle, setModalTitle] = useState("");
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [reloadPosts, setReloadPosts] = useState(false);
  const { page = 1 } = queryString.parse(location.search);

  useEffect(() => {
    getPostsApi(12, page)
      .then((res) => {
        if (!res.ok) {
          notification["warning"]({
            message: res.message,
          });
          return;
        }
        setPosts(res.posts);
      })
      .catch((err) => {
        notification["warning"]({
          message: "Problemas al listar posts.",
        });
      });
    setReloadPosts(false);
  }, [page, reloadPosts]);

  const addPost = () => {
    setIsVisibleModal(true);
    setModalTitle("Creando nuevo post");
    setModalContent(
      <AddEditPostForm
        setIsVisibleModal={setIsVisibleModal}
        setReloadPosts={setReloadPosts}
        post={null}
      />
    );
  };

  const editPost = (post) => {
    setIsVisibleModal(true);
    setModalTitle("Editando nuevo post");
    setModalContent(
      <AddEditPostForm
        setIsVisibleModal={setIsVisibleModal}
        setReloadPosts={setReloadPosts}
        post={post}
      />
    );
  };

  if (!posts) {
    return null;
  }

  return (
    <div className="blog">
      <div className="blog__add-post">
        <Button type="primary" onClick={addPost}>
          Nueva publicación
        </Button>
      </div>
      <PostList
        posts={posts.docs}
        setReloadPosts={setReloadPosts}
        editPost={editPost}
      />
      <Pagination posts={posts} location={location} history={history} />

      <Modal
        title={modalTitle}
        isVisible={isVisibleModal}
        setIsVisible={setIsVisibleModal}
        width="75%"
      >
        {modalContent}
      </Modal>
    </div>
  );
};

export default withRouter(Blog);
