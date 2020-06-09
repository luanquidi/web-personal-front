import React from "react";
import AcademyLogo from "../../../../assets/img/png/academy.png";
import Web from "../../../../assets/img/logos/web.png";
// Styles
import "./PresentationCourses.scss";

const PresentationCourses = () => {
  return (
    <div className="presentation-courses">
      <img src={Web} alt="UpDev" />
      <p>
        Apartado de sitios web que integrantes del equipo han realizado con
        diferentes tecnologías, te invitamos a que le eches un vistazo para que notes el avance que hemos tenido, cada día
        aprendemos y entendemos cuales son las mejores tecnologías a implementar para ofrecer una buena experiencia al usuario.
      </p>
    </div>
  );
};

export default PresentationCourses;
