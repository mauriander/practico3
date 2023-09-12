import { computeHeadingLevel } from "@testing-library/react";
import React, {useState } from "react";
import styled from "styled-components";
const Botones = styled.button`
  background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  padding: 10px 20px;
  text-align: center;
  
   &:hover {
   opacity:0.7;
  }
`
const Divisor = styled.div`

   
 
`

function Marcadores(props) {
  const [nombre, setNombre] = useState("");
  const [iniciom, setIniciom] = useState(false); 
  const [inputDisabled, setInputDisabled] = useState(false); 
  
 const validarNombre = (nombre) => {
    if (nombre.length > 0 && /^[a-zA-Z0-9]+$/.test(nombre)) {
      setNombre(nombre);
      setIniciom(true);
      setInputDisabled(true);
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
    setInputDisabled(false);
  //  window.location.reload();
}
 

 const tab = <>&nbsp;&nbsp;&nbsp;&nbsp;</>;
  return (
   <Divisor>
      {props.children}
      <input
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        disabled={inputDisabled} 
      ></input>
      <Botones onClick={() => validarNombre(nombre)}>Iniciar</Botones>
      <Botones onClick={() => reiniciar()}>Reiniciar</Botones>
      <p>
        <strong>{nombre.toUpperCase()}</strong> {tab} <span><strong>PC</strong></span>
      </p>
    </Divisor>
  );
}
export default Marcadores;

