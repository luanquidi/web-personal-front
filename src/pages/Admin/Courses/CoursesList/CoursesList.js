import React, { useState, useEffect } from "react";
import { List, Icon, Button, Modal as ModalAnt, notification } from "antd";
import DragSortableList from "react-drag-sortable";
import {
  getCourseUdemyApi,
  deleteCourseApi,
  updateCourseApi,
} from "../../../../api/course";
import Modal from "../../../../components/Modal/Modal";
// Styles
import "./CoursesList.scss";
import { getAccessToken } from "../../../../api/auth";
import AddEditCourse from "../AddEditCourse/AddEditCourse";

const { confirm } = ModalAnt;

const CoursesList = ({ setReloadCourses, courses }) => {
  const [listCourses, setListCourses] = useState([]);
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [modalTitle, setModalTitle] = useState("");

  useEffect(() => {
    const listCoursesArray = [];
    courses.map((course) => {
      listCoursesArray.push({
        content: (
          <Course
            course={course}
            setReloadCourses={setReloadCourses}
            setIsVisibleModal={setIsVisibleModal}
            setModalTitle={setModalTitle}
            setModalContent={setModalContent}
          />
        ),
      });
    });
    setListCourses(listCoursesArray);
  }, [courses]);

  const addCourseModal = () => {
    setIsVisibleModal(true);
    setModalTitle("Creando nuevo curso");
    setModalContent(
      <AddEditCourse
        setIsVisibleModal={setIsVisibleModal}
        setReloadCourses={setReloadCourses}
      />
    );
  };

  const onSort = (sortedList, dropEvent) => {
    console.log(sortedList);
    const token = getAccessToken();
    sortedList.map((item) => {
      const data = {
        order: item.rank,
      };
      updateCourseApi(token, item.content.props.course._id, data);
    });
  };

  return (
    <div className="courses-list">
      <div className="courses-list__header">
        <Button type="primary" onClick={addCourseModal}>
          Nuevo curso
        </Button>
      </div>
      <div className="courses-list__items">
        {listCourses.length === 0 && (
          <h2 style={{ textAlign: "center", margin: 0 }}>
            No tienes cursos creados
          </h2>
        )}
        <DragSortableList items={listCourses} onSort={onSort} type="vertical" />
      </div>
      <Modal
        title={modalTitle}
        isVisible={isVisibleModal}
        setIsVisible={setIsVisibleModal}
      >
        {modalContent}
      </Modal>
    </div>
  );
};

function Course({
  course,
  setReloadCourses,
  setIsVisibleModal,
  setModalTitle,
  setModalContent,
}) {
  const [courseData, setCourseData] = useState(null);

  const editCourseModal = (course) => {
    setIsVisibleModal(true);
    setModalTitle("Editando curso");
    setModalContent(
      <AddEditCourse
        setIsVisibleModal={setIsVisibleModal}
        setReloadCourses={setReloadCourses}
        course={course}
      />
    );
  };

  const deleteCourse = (id) => {
    const token = getAccessToken();
    confirm({
      title: "¿Desea eliminar este curso?",
      content: `Una vez eliminado el curso con id ${course.idCourse} no se podrá recuperar.`,
      okText: "Si, eliminar",
      cancelText: "No, cancelar",
      icon: "warning",
      okType: "danger",
      onOk: () => {
        deleteCourseApi(token, id)
          .then((res) => {
            notification["success"]({
              message: res.message,
            });
            setReloadCourses(true);
          })
          .catch((err) => {
            notification["error"]({
              message: "No se pudo eliminar el curso.",
            });
          });
      },
      onCancel: () => {
        return;
      },
    });
  };

  useEffect(() => {
    getCourseUdemyApi(course.idCourse).then((res) => {
      if (!res.ok) {
        notification["warning"]({
          message: `El curso con el id ${course.idCourse} no se ha encontrado.`,
        });
      }

      setCourseData(res.course);
    });
  }, [course]);

  if (!courseData) {
    return null;
  }

  return (
    <List.Item
      actions={[
        <Button type="primary" onClick={() => editCourseModal(course)}>
          <Icon type="edit" />
        </Button>,
        <Button type="danger" onClick={() => deleteCourse(course._id)}>
          <Icon type="delete" />
        </Button>,
      ]}
    >
      <img
        src={courseData.image_480x270}
        alt={courseData.title}
        style={{ width: "100px", marginRight: "20px" }}
      />
      <List.Item.Meta
        title={`${courseData.title} | ID: ${course.idCourse}`}
        description={courseData.headline}
      />
    </List.Item>
  );
}

export default CoursesList;
