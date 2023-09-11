import { computeHeadingLevel } from "@testing-library/react";
import React, {useState } from "react";


function Marcadores(props) {
  const [nombre, setNombre] = useState("");
  const [iniciom, setIniciom] = useState(false);  
 const validarNombre = (nombre) => {
    if (nombre.length > 0 && /^[a-zA-Z0-9]+$/.test(nombre)) {
      setNombre(nombre);
      setIniciom(true);
      props.setInicio(true);
    } else {
      setIniciom(false);
          props.setInicio(false);
      alert("Por favor, ingrese un nombre válido.");
    }
  };
 const reiniciar = () => {  
  setNombre("");
    setIniciom(false);
    props.setInicio(false);
  //  window.location.reload();
}
 

 const tab = <>&nbsp;&nbsp;&nbsp;&nbsp;</>;
  return (
   <div>
      {props.children}
      <input
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      ></input>
      <button onClick={() => validarNombre(nombre)}>Iniciar</button>
      <button onClick={() => reiniciar()}>Reiniciar</button>
      <p>
        <strong>{nombre}</strong> {tab} <span><strong>PC</strong></span>
      </p>
    </div>
  );
}
export default Marcadores;

