import React, { useState } from "react";

function Marcadores(props) {
  //let nombre="Mauricio";
  const [nombre, setNombre] = useState("Mauri");
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
      <button onClick={() => guardar(nombre)}>Guardar</button>

      <p><strong>{nombre}</strong>  {tab} <span><strong>PC</strong></span> </p>
        <p>Puntaje {nombre}  {tab}<span>Puntaje pc</span></p>
<div><span></span></div>
      
    </div>
  );
}

export default Marcadores;
