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
      margin: 16px 16px;
    
      &:hover {
        opacity: 0.7;
      }
           

&:disabled {
  background-color: #ccc; 
  color: #666; 
  cursor: not-allowed; 
}
`
const Divisor = styled.div`
display:center;
align-items: center; 


   
 
`

function Marcadores(props) {
  const [nombre, setNombre] = useState("");
  const [iniciom, setIniciom] = useState(false); 
  const [inputDisabled, setInputDisabled] = useState(false); 
 const [reglas, setReglas] = useState(false);
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

 
  
  const verReglas = () => {    
     setReglas(!reglas);
  props.setReglas(!reglas);    
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
   <div>
      {props.children}
      <Divisor>
        <input
        style={{fontSize: 32 + 'px'}}
        type="text"
        placeholder="Ingrese nombre de usuario"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        disabled={inputDisabled} 
        ></input>
        <Botones disabled={inputDisabled}   onClick={() => validarNombre(nombre)}>Iniciar</Botones>
      </Divisor>
      <Divisor>
        <Botones disabled={!inputDisabled}  onClick={() => reiniciar()}>Reiniciar</Botones>

         {reglas?   <Botones  onClick={() => verReglas()}>Ocultar Reglas de Juego</Botones>:  <Botones  onClick={() => verReglas()}>Ver Reglas de Juego</Botones>} 
      </Divisor>
      <div>
        <strong>{nombre.toUpperCase()}</strong> {tab} <span><strong>PC</strong></span>
      </div>
    </div>
  );
}
export default Marcadores;

