
import './App.css';
import pptlogo from './assets/img/pngwing.com.png'
//import Jugar from './components/Jugar'
import Marcadores from './components/Marcadores';
import TurnoJugador from './components/TurnoJugador';
import TurnoPc from './components/TurnoPc'
function App() {
  return (
    <div className="App">
     <h1>Piedra Papel Tijera</h1>
     <div>
     {/* {pptlogo} lo hago asi porque lo importo */}
        <img 
        className='main_img'
        src={pptlogo}
        alt='logo_ppt'></img>
     

     </div>
     <div className='card'>
     <div className='cards-header'></div>
     <Marcadores></Marcadores>
     <TurnoJugador></TurnoJugador>
     <TurnoPc></TurnoPc>
        {/* <Jugar/> */}

     </div>
   
    </div>
  );
}

export default App;
