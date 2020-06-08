import React, { useEffect, useState } from "react";

import './Error.scss';

const Error = () => {
    const [positionX, setPositionX] = useState("");
    const [positionY, setPositionY] = useState("");

    useEffect(()=> {
        const container = document.querySelector('.error-404');
        window.onmousemove = function(e){
            var x = - e.clientX/5;
            var y = - e.clientY/5;
            setPositionX(`${x}px`);
            setPositionY(`${y}px`);
        }
        console.log(container)
    }, []);
    
  return (
    <div className="error-404" style={{backgroundPositionX: positionX, backgroundPositionY: positionY}}>
      <div className="error-404__content">
        <h2>404</h2>
        <h4>Opps! Pagina no encontrada</h4>
      </div>
    </div>
  );
};

export default Error;
