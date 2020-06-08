import React, { useState, useEffect } from "react";
import {
  Icon,
  Form,
  Input,
  Button,
  DatePicker,
  Row,
  notification,
  Col,
} from "antd";
import { Editor } from "@tinymce/tinymce-react";
import moment from "moment";

// Functions
import { getAccessToken } from "../../../../api/auth";
import { addPostApi, updatePostApi } from "../../../../api/post";

// Style
import "./AddEditPostForm.scss";

const AddEditPostForm = ({ setIsVisibleModal, post, setReloadPosts }) => {
  const [postData, setPostData] = useState({});

  useEffect(() => {
    if (post) {
      setPostData(post);
    } else {
      setPostData({});
    }
  }, [post]);

  const processPost = (e) => {
    e.preventDefault();

    if (
      !postData.title ||
      !postData.url ||
      !postData.description ||
      !postData.date
    ) {
      notification["error"]({
        message: "Todos los cambios son obligatorios",
      });
      return;
    }

    if (!post) {
      addPost();
    } else {
      updatePost();
    }
  };

  const addPost = () => {
    const token = getAccessToken();
    addPostApi(token, postData)
      .then((res) => {
        if (res.ok) {
          notification["success"]({
            message: res.message,
          });
          setIsVisibleModal(false);
          setReloadPosts(true);
          setPostData({});
        } else {
          notification["error"]({
            message: res.message,
          });
        }
      })
      .catch((e) => {
        notification["error"]({
          message: "Error del servidor al crear post.",
        });
      });
  };

  const updatePost = () => {
    const token = getAccessToken();
    updatePostApi(token, postData._id, postData)
      .then((res) => {
        if (res.ok) {
          notification["success"]({
            message: res.message,
          });
          setIsVisibleModal(false);
          setReloadPosts(true);
          setPostData({});
        } else {
          notification["error"]({
            message: res.message,
          });
        }
      })
      .catch((e) => {
        notification["error"]({
          message: "Error del servidor al actualizar el post.",
        });
      });
  };

  return (
    <div className="add-edit-post-form">
      <AddEditForm
        postData={postData}
        setPostData={setPostData}
        post={post}
        processPost={processPost}
      />
    </div>
  );
};

function AddEditForm({ postData, post, setPostData, processPost }) {

  return (
    <Form className="add-edit-post-form" layout="inline" onSubmit={processPost}>
      <Row gutter={24}>
        <Col span={8}>
          <Input
            prefix={<Icon type="font-size" />}
            placeholder="Titulo"
            value={postData.title}
            onChange={(e) =>
              setPostData({ ...postData, title: e.target.value })
            }
          />
        </Col>
        <Col span={8}>
          <Input
            prefix={<Icon type="link" />}
            placeholder="URL"
            value={postData.url}
            onChange={(e) =>
              setPostData({
                ...postData,
                url: transformUrlText(e.target.value),
              })
            }
          />
        </Col>
        <Col span={8}>
          <DatePicker
            style={{ width: "100%" }}
            format="DD/MM/YYYY HH:mm:ss"
            placeholder="Fecha de publicación"
            showTime={{ defaultValue: moment("00:00:00", "HH:mm:ss") }}
            // onChange={}
            value={postData.date && moment(postData.date)}
            onChange={(e, value) =>
              setPostData({
                ...postData,
                date: moment(value, "DD/MM/YYYY HH:mm:ss").toISOString(),
              })
            }
          />
        </Col>
      </Row>
      <Editor
        value={postData.description ? postData.description : ""}
        init={{
          height: 400,
          menubar: true,
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount",
          ],
          toolbar:
            "undo redo | formatselect | bold italic backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | removeformat | help",
        }}
        onBlur={(e) =>
          setPostData({ ...postData, description: e.target.getContent() })
        }
      />

      <Button type="primary" htmlType="submit" className="btn-submit">
        {post ? "Actualizar post" : "Crear post"}
      </Button>
    </Form>
  );
}

function transformUrlText(text) {
  const url = text.replace(" ", "-");
  return url.toLowerCase();
}

export default AddEditPostForm;
