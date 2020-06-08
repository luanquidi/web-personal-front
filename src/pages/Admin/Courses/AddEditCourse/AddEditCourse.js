import React, { useState, useEffect } from "react";
import { Icon, Button, Form, Input, notification } from "antd";
import { getAccessToken } from "../../../../api/auth";

import "./AddEditCourse.scss";
import { updateCourseApi, createCourseApi } from "../../../../api/course";

const AddEditCourse = ({ setIsVisibleModal, setReloadCourses, course }) => {
  const [courseData, setCourseData] = useState({});

  return (
    <div className="add-edit-course">
      <AddEditForm
        course={course}
        setIsVisibleModal={setIsVisibleModal}
        setReloadCourses={setReloadCourses}
      />
    </div>
  );
};

function AddEditForm(props) {
  const { course, setReloadCourses, setIsVisibleModal } = props;
  const [courseAdd, setCourseAdd] = useState({});

  useEffect(() => {
    if (course) {
      setCourseAdd(course);
    } else {
        setCourseAdd({})
    }
  }, [course]);

  const onSubmit = (e) => {
    e.preventDefault();

    const token = getAccessToken();

    if (course) {
      if (!course.idCourse || !course.price || !course.link) {
        notification["error"]({
          message: "Todos los campos son obligatorios",
        });
        return;
      }

      updateCourseApi(token, course._id, courseAdd)
        .then((res) => {
          notification["success"]({
            message: res.message,
          });
          setIsVisibleModal(false);
          setReloadCourses(true);
        })
        .catch((err) => {
          notification["error"]({
            message: err.message,
          });
        });
    } else {
      if (!courseAdd.idCourse || !courseAdd.price || !courseAdd.link) {
        notification["error"]({
          message: "Todos los campos son obligatorios",
        });
        return;
      }

      createCourseApi(token, courseAdd)
        .then((res) => {
          notification["success"]({
            message: res.message,
          });
          setIsVisibleModal(false);
          setReloadCourses(true);
          setCourseAdd({});
        })
        .catch((err) => {
          notification["error"]({
            message: err.message,
          });
        });
    }
  };

  const onChange = (input) => {
    setCourseAdd({
      ...courseAdd,
      [input.name]: input.value,
    });
  };

  return (
    <Form className="form-add-edit" onSubmit={(e) => onSubmit(e)}>
      <Form.Item>
        <Input
          prefix={<Icon type="key" />}
          placeholder="ID del curso"
          value={courseAdd.idCourse}
          name="idCourse"
          onChange={(e) => onChange(e.target)}
          disabled={course ? true : false}
        />
      </Form.Item>
      <Form.Item>
        <Input
          prefix={<Icon type="dollar" />}
          placeholder="Precio del curso"
          value={courseAdd.price}
          name="price"
          onChange={(e) => onChange(e.target)}
        />
      </Form.Item>
      <Form.Item>
        <Input
          prefix={<Icon type="link" />}
          placeholder="URL del curso"
          value={courseAdd.link}
          name="link"
          onChange={(e) => onChange(e.target)} // onChange={}
        />
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="btn-submit"
          style={{ width: "100%" }}
        >
          {course ? "Actualizar curso" : "Crear curso"}
        </Button>
      </Form.Item>
    </Form>
  );
}

export default AddEditCourse;
