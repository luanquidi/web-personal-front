import React from "react";
import MainBanner from "../components/Web/MainBanner/MainBanner";
import HomeCourses from "../components/Web/HomeCourses/HomeCourses";
import HomeMyCoursesWork from "../components/Web/HomeMyCoursesWork/HomeMyCoursesWork";
import { Helmet } from "react-helmet";
import Portfolio from "../components/Web/Portfolio/Portfolio";
import video from "../assets/video/Drone.mp4";
const Home = () => {
  const isSafari = /^((?!chrome|Android).)*safari/i.test(navigator.userAgent);
  
  return (
    <>
      <Helmet>
        <title>UpDev</title>
      </Helmet>
      <MainBanner />
      <HomeCourses />
      <HomeMyCoursesWork />
      <Portfolio />
      {window.innerWidth < 764 && !isSafari ? (
        <div
          className="video-footer"
          style={{ position: "relative", opacity: "0.5", display: "flex" }}
        >
          <div
            style={{
              position: "absolute",
              textAlign: "center",
              width: "100%",
              // backgroundColor: "red",
              alignItems: "center",
              height: "100%",
            }}
          >
            <p style={{ marginTop: "70px", fontSize: "15vw" }}>UpDev</p>
          </div>
          <video style={{ width: "100%" }} autoPlay loop muted>
            <source src={video} type="video/mp4" />
          </video>
        </div>
      ) : null}
    </>
  );
};

export default Home;
