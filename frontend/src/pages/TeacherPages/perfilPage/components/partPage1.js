import React from "react";
import ReactDOM from "react-dom";

class PartComp1 extends React.Component {
     render(){
        return(
            <div className="Leftpartside">
                <ul className="menuPartOptions">
                    <li className="P-options">
                      <span className="P-mssgs">Agregar Presentacion</span>
                    </li>
                    <li className="P-options">
                      <span className="P-mssgs">Editar detalles</span>
                    </li>
                    <li className="P-options">
                      <span className="P-mssgs">Agregar aficiones</span>
                    </li>
                    <li className="P-options">
                      <span className="P-mssgs">Agregar Destacados</span>
                    </li>
                </ul>
            </div>
        );
     }
}

export default PartComp1;