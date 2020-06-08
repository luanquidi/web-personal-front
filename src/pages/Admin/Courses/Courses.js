import React, { useState, useEffect } from "react";
import { getCoursesApi } from "../../../api/course";
import CoursesList from "./CoursesList/CoursesList";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [reloadCourses, setReloadCourses] = useState(false);

  useEffect(() => {
    getCoursesApi().then((res) => {
      setCourses(res.courses);
    });

    setReloadCourses(false);
  }, [reloadCourses]);

  return (
    <div>
      <CoursesList courses={courses} setReloadCourses={setReloadCourses} />
    </div>
  );
};

export default Courses;
