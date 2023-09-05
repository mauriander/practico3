import React, { useState } from "react";
import piedra from "../assets/img/piedra-removebg-preview.png";
import papel from "../assets/img/papel-removebg-preview.png";
import tijera from "../assets/img/tijera-removebg-preview.png";
function TurnoJugador(props) {
  const [jugadaUsuario, setjugadaUsuario] = useState(null);
 const [jugadaPC, setjugadaPC] = useState(null);
  const guardarJugada = (jugada) => {
    if(jugada=='piedra')
    setjugadaUsuario(piedra);
      if(jugada=='papel')
    setjugadaUsuario(papel);
      if(jugada=='tijera')
    setjugadaUsuario(tijera);
   // jugadaUsuario=jugada;
   console.log(jugada);
   
  let i = Math.floor(Math.random() * (2 - 0 + 1) + 0);
  let ajugada = ["piedra", "papel", "tijera"];
  console.log("La computadora eligio: " + ajugada[i]);
  if(ajugada[i]=='piedra')
    setjugadaPC(piedra);
      if(ajugada[i]=='papel')
    setjugadaPC(papel);
      if(ajugada[i]=='tijera')
    setjugadaPC(tijera);
  
  };

  return (
    <div>
      {props.children}
<div> 
          <button> <img src={jugadaUsuario} alt="jugadUsuario" /></button> 
          <span> <button><img src={jugadaPC} alt="jugadapc" /></button></span></div>
      <div className="items">
        <div className="item">
          <button onClick={() => guardarJugada("piedra")}>
            <img className="piedra_img" src={piedra} alt="piedra" />
          </button>
        </div>
        <div className="item">
          {" "}
          <button onClick={() => guardarJugada("papel")}>
            {" "}
            <img className="papel_img" src={papel} alt="papel"></img>
          </button>
        </div>
        <div className="item">
          {" "}
          <button onClick={() => guardarJugada("tijera")}>
            {" "}
            <img className="tijera_img" src={tijera} alt="tijera"></img>
          </button>
        </div>
      </div>
    </div>
  );
}

export default TurnoJugador;
