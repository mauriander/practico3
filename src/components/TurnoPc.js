import React, { useState } from "react";
import jugadaPC from '../components/TurnoJugador.js'
const TurnoPC = ({jugada})=>{




return (
    <div>

<p>Input de resultados</p>
 <div>
  <p>MUESTRO JUGADA COMPONENTE PC</p>
 <div className="item">
      <button> <img 
        className='user_img'
        src={jugada}
        alt='user'></img>
     </button>
</div>
     </div>
    </div>
);

};

export default TurnoPC;