import "./App.css";
import React, { useState } from "react";
import pptlogo from "./assets/img/pngwing.com.png";
import Marcadores from "./components/Marcadores";
import TurnoJugador from "./components/TurnoJugador";
import Reglas from "./components/Reglas";


function App() {
    const [inicio, setInicio] = useState(false);
     const [reglas, setReglas] = useState(false);
  
  // const verReglas = () => {    
  // setReglas(!reglas);    
  //   };
    
  return (
    <div className="App">
      <h1>Piedra Papel Tijera</h1>
      <div>
        {/* {pptlogo} lo hago asi porque lo importo */}
        <img className="main_img" src={pptlogo} alt="logo_ppt"></img>
      </div>
      <div className="card">
         {reglas ? <Reglas />: ''}
        <Marcadores inicio={inicio} setInicio={setInicio}  reglas={reglas} setReglas={setReglas}/>
        
        { inicio ?  <TurnoJugador></TurnoJugador>  : <h2>Comenzaremos en cuanto ingreses tu nombre de Usuario</h2>    }
        
         
                          </div>
    </div>
  );
}

export default App;
