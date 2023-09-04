import React, { useState } from "react";

function Marcadores(props) {
  //let nombre="Mauricio";
  const [nombre, setNombre] = useState("Mauri");
  const guardar = (name) => {
    setNombre(name);
  };

  return (
    <div>
      {props.children}
      <input
        type="text"
        value={nombre}
        onChange={(e) => guardar(e.target.value)}
      ></input>
      <button onClick={() => guardar(nombre)}>Guardar</button>

      <p>Input de resultados de {nombre}</p>
    </div>
  );
}

export default Marcadores;
