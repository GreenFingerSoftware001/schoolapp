import React from "react";
import "./clases.css";
class ClassesCardComponent extends React.Component {
     render(){
        return(
            <div id="ClassCard">
                <div id="cardlabel">
                    <h3 id="classcardtitle">Tus Cursos</h3>
                    <span class="material-symbols-outlined">add</span>
                </div>
            </div>
        );
     }
}

export default ClassesCardComponent;
