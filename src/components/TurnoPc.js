import React, { useState } from "react";
import jugadaPC from '../components/TurnoJugador.js'
const TurnoPC = ({jugada})=>{

     const [reglasr, setReglasr] = useState(false);

  const verReglas = () => {
    console.log(reglasr);
   if (reglasr === true) {
  setReglasr(false);

} else {
  setReglasr(true);
}
    
    };
  

return (
    <div>
<button onClick={() => verReglas()}>OCULTAR REGLAS DE JUEGO</button> 
<p>Estas son la reglas</p>
 <div>
  <p>Estas son la reglas</p>
 <div className="item">
     <p>Estas son la reglas</p>
</div>
     </div>
    </div>
);

};

export default TurnoPC;