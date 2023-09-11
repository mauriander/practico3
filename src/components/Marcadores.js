import React, {useState } from "react";


function Marcadores(props) {

  const [nombre, setNombre] = useState("Mauri");
  
  
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
        <p>Puntaje {nombre}  {tab}<span>Puntaje pc {props.puntajePC}</span></p>
<div><span></span></div>
      
    </div>
  );
}

export default Marcadores;

