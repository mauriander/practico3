
import React, {useState } from "react";
import styled from "styled-components";
import Modal from "react-modal";
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
const Nombres = styled.h1`
font-size:32px;
color:white;
`
const DivCard = styled.div`
  background-image: linear-gradient(to top, #09203f 0%, #537895 100%);
  border-radius: 6px;
    display: flex;
  flex-direction: column;
  flex-grow: 1;
  max-height: 430px;
  width: 100%;
`
function Marcadores(props) {
  const [nombre, setNombre] = useState("");
  const [iniciom, setIniciom] = useState(false); 
  const [inputDisabled, setInputDisabled] = useState(false); 
 const [reglas, setReglas] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  
  const closeModal = () => {
  setModalIsOpen(false);
 
};


 const validarNombre = (nombre) => {
    if (nombre.length > 0 && /^[a-zA-Z]+$/.test(nombre) && nombre.length > 2 && nombre.length < 11) {
        
      setNombre(nombre);
      setIniciom(true);
      setInputDisabled(true);
      props.setInicio(true);
    } else {
      setIniciom(false);
          props.setInicio(false);
setModalIsOpen(true);
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
        {modalIsOpen ?<Modal
  isOpen={modalIsOpen}
  onRequestClose={closeModal}
  style={{
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    content: {

    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    alignContent:'center',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#333',
    color: 'white',
      width: '350px',
      height: '350px', display: 'flex',
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      textAlign: 'center',
    },
  }}
>
<Botones onClick={closeModal}>X</Botones>
  <h4>Verifique de no tener un espacio o tabulacion al inicio</h4>
 <h4>Verifique de no haber ingresado numeros</h4>
 <h4>Verifique de la longitud del nombre</h4>
 <h4>(Mínimo 3 - Máximo 11)</h4>
 
  
 

</Modal>: ''}
        
      </Divisor>
      <Divisor>
        <Botones disabled={!inputDisabled}  onClick={() => reiniciar()}>Reiniciar</Botones>

         {reglas?   <Botones  onClick={() => verReglas()}>Ocultar Reglas de Juego</Botones>:  <Botones  onClick={() => verReglas()}>Ver Reglas de Juego</Botones>} 
      </Divisor>
      <div>
        <Nombres><strong>{nombre.toUpperCase()}</strong> {tab} <span><strong>PC</strong></span></Nombres>
      </div>
    </div>
  );
}
export default Marcadores;

