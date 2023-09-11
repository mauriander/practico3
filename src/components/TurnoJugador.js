import React, { useState } from "react";
import piedra from "../assets/img/piedra-removebg-preview.png";
import papel from "../assets/img/papel-removebg-preview.png";
import tijera from "../assets/img/tijera-removebg-preview.png";

function TurnoJugador(props) {
  const [jugadaUsuario, setjugadaUsuario] = useState(null);
 const [jugadaPC, setjugadaPC] = useState(null);
 const [resultado, setResultado] = useState('');
 const [puntajeUsuario, setPuntajeUsuario] = useState(0);
  const [puntajePC, setPuntajePC] = useState(0);

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
//adentro guardar jugada
    determinarGanador(jugada,ajugada[i])

  };
 
function determinarGanador(turnoJugador, turnoCompu) {
   if (turnoCompu === turnoJugador) {
   setResultado("Empataron");
  } else if (
    (turnoJugador === "piedra" && turnoCompu === "tijera") ||
    (turnoJugador === "papel" && turnoCompu === "piedra") ||
    (turnoJugador === "tijera" && turnoCompu === "papel")
  ) {
    setPuntajeUsuario(puntajeUsuario + 1);
    setResultado("Usted Gana");
  } else {
      setPuntajePC(puntajePC + 1);
    setResultado("Tu pierdes, vuelve a intentarlo");
  }
  
};


  return (
    <div>
      {props.children}
<div>     <p>{puntajeUsuario} - {puntajePC}</p>
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
