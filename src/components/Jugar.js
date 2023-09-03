import React from "react";

function Jugar(props){
return (
    <div>
{props.children}
<div className="items">
<div className="item"> Opcion1</div>
<div className="item"> Opcion2</div>
<div className="item"> Opcion3</div>
</div>
<p>Boton de play</p>

    </div>
)

}

export default Jugar;