import React, { useState } from "react";
import piedra from "../assets/img/piedra-removebg-preview.png";
import papel from "../assets/img/papel-removebg-preview.png";
import tijera from "../assets/img/tijera-removebg-preview.png";
import defaultimg from "../assets/img/pngwin100.png";
import styled from "styled-components";
// https://www.npmjs.com/package/react-modal
import Modal from "react-modal";
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
    opacity: 0.7;
  }
`;
const DivModal = styled.div``;
const Header = styled.h1`
  color: white;
`;

const Resultados = styled.h1`
  font-size: 32px;
  color: white;
`;
const DivCard = styled.div`
  background-image: linear-gradient(to top, #09203f 0%, #537895 100%);
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 32px;
  margin: 32px;
  

`;


// -------------------------CODIGO-------------------------
// -------------------------CODIGO-------------------------
// -------------------------CODIGO-------------------------
// -------------------------CODIGO-------------------------
function TurnoJugador(props) {
  //Coloco como default una img neutral para ambos
  const [jugadaUsuario, setjugadaUsuario] = useState(defaultimg);
  const [jugadaPC, setjugadaPC] = useState(defaultimg);

  //Coloco setteo a 0 o vacio para inicializar
  const [resultado, setResultado] = useState("");
  const [puntajeUsuario, setPuntajeUsuario] = useState(0);
  const [puntajePC, setPuntajePC] = useState(0);

  //Modal is open va aparecer en false porque se abrira solamente al llamar a la funcion
  const [modalIsOpen, setModalIsOpen] = useState(false);
  //Mensaje momdal se utilizar para poner un mensaje dentro de el y luego mostralo en modal para saber si gano o perdio
  const [mensajeModal, setMensajeModal] = useState("");


  const [selectedOption, setSelectedOption] = useState(null); 

  const closeModal = () => {
    setModalIsOpen(false);
    reiniciarPartida();
  };


  //GUARDA LA JUGADA DEL USUARIO
  const guardarJugada = (jugada) => {
      //Almacenar la opcion elegida y mostrarla por segundos, luego vuelvo a cero y se /'destilda'
    setSelectedOption(jugada); 
     setTimeout(() => {
      setSelectedOption(null);
    }, 2000);
    if (jugada == "piedra") setjugadaUsuario(piedra);
    if (jugada == "papel") setjugadaUsuario(papel);
    if (jugada == "tijera") setjugadaUsuario(tijera);
    // jugadaUsuario=jugada;
    console.log(jugada);


      //CALCULA JUGADA PC
    let i = Math.floor(Math.random() * (2 - 0 + 1) + 0);
    let ajugada = ["piedra", "papel", "tijera"];
    console.log("La computadora eligio: " + ajugada[i]);
    if (ajugada[i] == "piedra") setjugadaPC(piedra);
    if (ajugada[i] == "papel") setjugadaPC(papel);
    if (ajugada[i] == "tijera") setjugadaPC(tijera);
   
    
    // LLAMO A LA FUNCION PARA DETERMINARA 
    determinarGanador(jugada, ajugada[i]);
  };


  //cOMPARA LAS JUGADAS, DETERMINA EL GANADOR Y CAMBIA A LOS ESTADOS CORRESPONDIENTES
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
        setMensajeModal("Felicitaciones ganaste la partida");
//abro el lmodal y el modal muestra el mensaje seteado
        setModalIsOpen(true);
      }
    } else {
      setPuntajePC(puntajePC + 1);
      setResultado("Usted pierde");
      if (puntajePC >= 2) {
        //setResultado("El ganador La Computadora");
        setMensajeModal("Perdiste la partida, Intentalo nuevamente");
//abro el lmodal y el modal muestra el mensaje seteado
        setModalIsOpen(true);
      }
    }
  }

  //Setea en los valores por defecto como al prinicpio
  function reiniciarPartida() {
    setPuntajeUsuario(0);
    setPuntajePC(0);
    setjugadaUsuario(defaultimg);
    setjugadaPC(defaultimg);
    setResultado("");
    //Conservo el nombre
  }

  //Guardo la variable
  const tab = <>&nbsp;&nbsp;&nbsp;&nbsp;</>;
  const vacio=<>&nbsp;</>;

  //guardo el estilo para poner fondo azul ; pero no se implemtno todavia

// -------------------------RETURN-------------------------
// -------------------------RETURN-------------------------
// -------------------------RETURN-------------------------
// -------------------------RETURN-------------------------
  return (
    <DivCard>
      {props.children}
      <Header>
        Tú{tab}|{tab}PC
        <br></br>
          {puntajeUsuario} {tab}~{tab} {puntajePC}
      </Header>   
         <div>
        <button>
          <img src={jugadaUsuario} alt="jugadUsuario" />
        </button>
        {tab}
        <span>
          <button>
            <img src={jugadaPC} alt="jugadapc" />
          </button>
        </span>
      </div> 
      <Resultados>{resultado}</Resultados> 
      
      <p>Escoge una de las siguientes opciones</p>
      <div className="items">
        <div className="item">
          <button onClick={() => guardarJugada("piedra")} style={selectedOption === "piedra" ? { backgroundColor: "#4da8cf"  } : {}}>
            <img className="piedra_img" src={piedra} alt="piedra" />
          </button>
        </div>
       
        <div className="item">
          <button onClick={() => guardarJugada("papel")}
           style={selectedOption === "papel" ? { backgroundColor: "#4da8cf"  } : {}}>
            <img className="papel_img" src={papel} alt="papel"></img>
          </button>
        
        </div>
        <div className="item">
          <button
            onClick={() => guardarJugada("tijera")}
           style={selectedOption === "tijera" ? { backgroundColor: "#4da8cf" } : {}}
          >
            <img className="tijera_img" src={tijera} alt="tijera"></img>
          </button>
        </div>
      </div>
      
      {/*--------------------- modal---------------------- */}
      {/*--------------------- modal---------------------- */}
      {/*--------------------- modal---------------------- */}
      {/*--------------------- modal---------------------- */}
      {modalIsOpen ? (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={{
            overlay: {
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            },
            content: {
              top: "50%",
              left: "50%",
              right: "auto",
              bottom: "auto",
              alignContent: "center",
              transform: "translate(-50%, -50%)",
              backgroundColor: "#333",
              color: "white",
              width: "350px",
              height: "350px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            },
          }}
        >
          <Botones onClick={closeModal}>X</Botones>
          <h1>{mensajeModal}</h1>
        </Modal>
      ) : (
        ""
      )} 
    </DivCard>
  );
}

export default TurnoJugador;
