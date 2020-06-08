import React from "react";
import MainBanner from "../components/Web/MainBanner/MainBanner";
import HomeCourses from "../components/Web/HomeCourses/HomeCourses";
import HomeMyCoursesWork from "../components/Web/HomeMyCoursesWork/HomeMyCoursesWork";
import {Helmet} from 'react-helmet';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>UpDev</title>
      </Helmet>
      <MainBanner />
      <HomeCourses />
      <HomeMyCoursesWork />
    </>
  );
};

export default Home;
