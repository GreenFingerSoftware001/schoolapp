import * as React from "react";


class BarLineComponent extends React.Component {
    render(){
        return(
            <div id="BarLine">
                <ul id="MainMenu">
                   <li className="MainOptions">
                      <span className="OptionsText">Enviar</span>
                   </li>
                    <li className="MainOptions">
                       <span className="OptionsText">Herramientas</span>
                       <ul className="SubMenu">
                          <li className="SubOptions">
                             <button className="tools">tool1</button>
                          </li>
                          <li className="SubOptions">
                             <button className="tools">tool2</button>
                          </li>
                          <li className="SubOptions">
                             <button className="tools">tool3</button>
                          </li>
                          <li className="SubOptions">
                             <button className="tools">tool4</button>
                          </li>
                       </ul>
                    </li>
                </ul>
            </div>
        );
    }
}


export default BarLineComponent;