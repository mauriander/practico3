import React, { useState } from "react";
import piedra from "../assets/img/piedra-removebg-preview.png";
import papel from "../assets/img/papel-removebg-preview.png";
import tijera from "../assets/img/tijera-removebg-preview.png";
import styled from "styled-components";
// https://www.npmjs.com/package/react-modal
import Modal from 'react-modal';
// https://reactcommunity.org/react-modal/
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
const DivModal = styled.div`

 
`
const Header = styled.h1``
const DivCard = styled.div`
  background-image: linear-gradient(to top, #09203f 0%, #537895 100%);
  border-radius: 6px;
    display: flex;
  flex-direction: column;
  flex-grow: 1;
  max-height: 430px;
  width: 100%;
`
function TurnoJugador(props) {
  const [jugadaUsuario, setjugadaUsuario] = useState(null);
 const [jugadaPC, setjugadaPC] = useState(null);
 const [resultado, setResultado] = useState('');
 const [puntajeUsuario, setPuntajeUsuario] = useState(0);
  const [puntajePC, setPuntajePC] = useState(0);
 const [modalIsOpen, setModalIsOpen] = useState(false);
  const [mensajeModal, setMensajeModal] = useState('');

const closeModal = () => {
  setModalIsOpen(false);
  reiniciarPartida();
};


  
  

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
      if (puntajeUsuario >= 2) {
    //setResultado("El ganador es Usted");
setMensajeModal('Felicitaciones ganaste la partida');

   setModalIsOpen(true);
  }
  } else {
      setPuntajePC(puntajePC + 1);
    setResultado("Tu pierdes, vuelve a intentarlo");
       if (puntajePC >= 2) {
    //setResultado("El ganador La Computadora");
  setMensajeModal('Perdiste la partida, Intentalo nuevamente');

   setModalIsOpen(true);
  }
  }
 
};

  function reiniciarPartida() {
    setPuntajeUsuario(0);
    setPuntajePC(0);
    setjugadaUsuario(null);
    setjugadaPC(null);
    setResultado("");
   //Conservo el nombre
  }
  return (
  
    <DivCard>
      {props.children}
          <Header>{puntajeUsuario} - {puntajePC}</Header>
    <Header>{resultado}</Header>
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
  <h1>{mensajeModal}</h1>
 
 
  <Botones onClick={closeModal}>REINICIAR</Botones>
  <p></p>
  <Botones onClick={window.close()}>SALIR Y CERRAR VENTANA</Botones>

</Modal>: ''}
    <div>
        <button><img src={jugadaUsuario} alt="jugadUsuario" /></button>
        <span><button><img src={jugadaPC} alt="jugadapc" /></button></span>
    </div>
      <div className="items">
    <div className="item">
        <button onClick={() => guardarJugada("piedra")}>
            <img className="piedra_img" src={piedra} alt="piedra" />
        </button>
    </div>
    <div className="item">
        <button onClick={() => guardarJugada("papel")}>
            <img className="papel_img" src={papel} alt="papel"></img>
        </button>
    </div>
    <div className="item">
        <button onClick={() => guardarJugada("tijera")}>
            <img className="tijera_img" src={tijera} alt="tijera"></img>
        </button>
    </div>
</div>
    </DivCard>
  );
}

export default TurnoJugador;
