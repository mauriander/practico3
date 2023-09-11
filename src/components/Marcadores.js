import React, { useState } from "react";

import TurnoJugador from './TurnoJugador';
import TurnoPc from './TurnoPc'

function Marcadores(props) {

  const [nombre, setNombre] = useState("Mauri");
  const [puntajeUsuario, setPuntajeUsuario] = useState(0);
  const [puntajePC, setPuntajePC] = useState(0);

 
   const actualizarPuntajes = (resultado) => {
    if (resultado === "Usted Gana") {
      setPuntajeUsuario(puntajeUsuario + 1);
    } else if (resultado === "Tu pierdes, vuelve a intentarlo") {
      setPuntajePC(puntajePC + 1);
    }
  };

 const validarNombre = (nombre) => {
    return nombre.trim().length > 0;
  };

 const reiniciar = () => {  window.location.reload();}
  const guardar = (name) => {    
    setNombre(name);
  };

 const tab = <>&nbsp;&nbsp;&nbsp;&nbsp;</>;
  return (
    <div>
      {props.children}
      <input
        type="text"
        value={nombre}
        onChange={(e) => guardar(e.target.value)}
      ></input>
      <button onClick={() => guardar(nombre)}>Iniciar</button>
<button onClick={() => reiniciar()}>Reiniciar</button>
      <p><strong>{nombre}</strong>  {tab} <span><strong>PC</strong></span> </p>
        <p>Puntaje {nombre} {puntajeUsuario} {tab}<span>Puntaje pc{puntajePC} </span></p>
<div><span></span></div>
      
    </div>
  );
}

export default Marcadores;
