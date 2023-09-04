import React from "react";
import piedra from '../assets/img/piedra-removebg-preview.png'
import papel from '../assets/img/papel-removebg-preview.png'
import tijera from '../assets/img/tijera-removebg-preview.png'
import turnopc from '../assets/img/pngwing.com.png'
function TurnoPC(props){
return (
    <div>
{props.children}


<p>Input de resultados</p>
 <div>
 <div className="item">
      <button> <img 
        className='user_img'
        src={piedra}
        alt='user'></img>
     </button>
</div>
     </div>
    </div>
)

}

export default TurnoPC;