import React, { useState, useEffect } from "react";
import { Row, Col, Card, Button, Rate, notification } from "antd";
import { getCourseUdemyApi } from "../../../../api/course";
import "./CoursesList.scss";
import CLAVE from '../../../../assets/img/logos/clave.jpeg';

// Style
const CoursesList = ({ courses }) => {
  return (
    <div className="courses-list">
      <Row>
        {courses.map((course) => (
          <Col md={8} key={course._id} className="courses-list__course">
            <Course course={course} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

function Course({ course }) {
  const [courseData, setCourseData] = useState({});

  useEffect(() => {
    getCourseUdemyApi(course.idCourse)
      .then((res) => {
        if (res.ok) {
          setCourseData(res.course);
        } else {
          notification["warning"]({
            message: "Problema al cargar curso " + course.idCourse,
          });
        }
      })
      .catch((err) => {
        notification["warning"]({
          message: "Error del servidor, al cargar cursos",
        });
      });
  }, [courseData]);

  if (!courseData) {
    return (
      <>
        <a
          href="#"
          target="_blank"
          rel="noopenner noreferrer"
          onClick={(e) => e.preventDefault()}
        >
          <Card
            cover={
              <img src={CLAVE} alt="Clave Mar" />
            }
          >
            <Card.Meta
              title="Clave mar"
              description="Pagina web restaurante de comida de mar Clave Mar"
            />
            <a
              type="primary"
              target="_blank"
              rel="noopenner noreferrer"
              style={{ width: "100%", marginTop: "30px" }}
              href="http://laclavedelmar.com/"
            >
              Visitar
            </a>
            <div className="courses-list__course-footer">
              {/* <span>
                {course.price ? `${course.price} $` : courseData.price}
              </span> */}
              <div>
                <Rate disabled defaultValue={5} />
              </div>
            </div>
          </Card>
        </a>
      </>
    );
  }

  return (
    <a
      href="#"
      target="_blank"
      rel="noopenner noreferrer"
      onClick={(e) => e.preventDefault()}
    >
      <Card
        cover={<img src={courseData.image_480x270} alt={courseData.title} />}
      >
        <Card.Meta title={courseData.title} description={courseData.headline} />
        <Button type="primary" style={{ width: "100%", marginTop: "30px" }}>
          Entrar en el curso
        </Button>
        <div className="courses-list__course-footer">
          <span>{course.price ? `${course.price} $` : courseData.price}</span>
          <div>
            <Rate disabled defaultValue={5} />
          </div>
        </div>
      </Card>
    </a>
  );
}

export default CoursesList;
