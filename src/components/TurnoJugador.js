import React, { useState } from "react";
import piedra from "../assets/img/piedra-removebg-preview.png";
import papel from "../assets/img/papel-removebg-preview.png";
import tijera from "../assets/img/tijera-removebg-preview.png";
function TurnoJugador(props) {
  const [jugadaUsuario, setjugadaUsuario] = useState(null);
 const [jugadaPC, setjugadaPC] = useState(null);
  const guardarJugada = (jugada) => {
    setjugadaUsuario(jugada);
   // jugadaUsuario=jugada;
   console.log(jugada);
   
  let i = Math.floor(Math.random() * (2 - 0 + 1) + 0);
  let ajugada = ["piedra", "papel", "tijera"];
  console.log("La computadora eligio: " + ajugada[i]);
  setjugadaPC(ajugada[i]);
  };

  return (
    <div>
      {props.children}

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
