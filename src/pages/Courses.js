import React, { useState, useEffect } from "react";
import { notification, Row, Col, Spin } from "antd";
import PresentationCourses from "../components/Web/Courses/PresentationCourses/PresentationCourses";
import CoursesList from "../components/Web/Courses/CoursesList/CoursesList";
import { getCoursesApi } from "../api/course";
import { Helmet } from "react-helmet";

const Courses = () => {
  const [courses, setCourses] = useState(null);

  useEffect(() => {
    getCoursesApi()
      .then((res) => {
        if (!res.ok) {
          notification["warning"]({
            message: res.message,
          });
        } else {
          setCourses(res.courses);
        }
      })
      .catch((err) => {
        notification["error"]({
          message: "Error del servidor.",
        });
      });
  }, []);

  return (
    <>
      <Helmet>
        <title>UpDev | Desarrollo web</title>
      </Helmet>
      <Row>
        <Col md={4} />
        <Col md={16}>
          <PresentationCourses />

          {!courses ? (
            <Spin
              tip="Cargando cursos"
              style={{ textAlign: "center", width: "100%", padding: "20px" }}
            />
          ) : (
            <CoursesList courses={courses} />
          )}
        </Col>
        <Col md={4} />
      </Row>
    </>
  );
};
export default Courses;
