import React, { useState } from "react";
import piedra from "../assets/img/piedra-removebg-preview.png";
import papel from "../assets/img/papel-removebg-preview.png";
import tijera from "../assets/img/tijera-removebg-preview.png";
import styled from "styled-components";

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
    alert('El ganador es Usted');
    reiniciarPartida();
  }
  } else {
      setPuntajePC(puntajePC + 1);
    setResultado("Tu pierdes, vuelve a intentarlo");
       if (puntajePC >= 2) {
    //setResultado("El ganador La Computadora");
    alert('La Computadora ha ganada esta vez');
    //confirm('Desea continuar');
    reiniciarPartida();
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
