
import styled from "styled-components";
const DivReglas = styled.div`
     background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border: none;   
      text-align: center;
      padding:32px;
      margin: 32px;
     border-radius:8px;
    
`
const LiReglas = styled.li`
        border: none;
      list-style-type: none;
      color:white;      
       margin: 16px 16px;
`

const TituloReglas = styled.h2`
      
      color:white;      
       margin: 16px 16px;
`
//Soalmente es retrona un html no es necesario pero se realizo para mejorar el usos de componentes
const Reglas = ()=>{

return (
    <DivReglas>
 
<TituloReglas>Reglas PIEDRA - PAPEL - TIJERA</TituloReglas>
<hr></hr>

 <div className="item">
     <ul>
<LiReglas>Cada jugador elige una de las tres opciones: piedra, papel o tijera.</LiReglas>
<LiReglas>La piedra aplasta la tijera, la tijera corta el papel y el papel envuelve la piedra.</LiReglas>
<LiReglas>El jugador que elige el objeto que vence al del otro gana la ronda.</LiReglas>
<LiReglas>Si los dos jugadores eligen el mismo objeto, hay empate y se repite la ronda.</LiReglas>
<LiReglas>Se jugaran al mejor de 5 rondas.Es decie el primero en alcanzar 3 puntos resultara ganador</LiReglas>
</ul>
</div>
     
    </DivReglas>
);

};

export default Reglas;