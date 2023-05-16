import React from "react";
import ReactDOM from "react-dom";

class LeftComponent extends React.Component {
     render(){
        return (
            <div className="LeftComp">
                <ul className="menuComp">
                   <li className="comps">
                      <span className="mssgComp">Solicitudes de amistad</span>
                   </li>
                   <li className="comps">
                      <span className="mssgComp">Sugerencias</span>
                   </li>
                   <li className="comps">
                      <span className="mssgComp">Todos los amigos</span>
                   </li>
                   <li className="comps">
                      <span className="mssgComp">Crear Grupo Nuevo</span>
                   </li>
                </ul>
            </div>
        );
     }
}

export default LeftComponent;