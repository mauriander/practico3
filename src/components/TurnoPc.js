import React, { useState } from "react";
import jugadaPC from '../components/TurnoJugador.js'
function TurnoPC(props){




return (
    <div>
{props.children}


<p>Input de resultados</p>
 <div>
 <div className="item">
      <button> <img 
        className='user_img'
        src={jugadaPC}
        alt='user'></img>
     </button>
</div>
     </div>
    </div>
)

}

export default TurnoPC;