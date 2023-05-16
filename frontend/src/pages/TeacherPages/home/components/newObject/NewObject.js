import React from 'react';
import "./newobject.css";

class NewObjectComponent extends React.Component {
     render(){
         return(
            <div id="buttons_holder">
                    <button id="button1" className='homeworktools'>Nueva Publicacion</button>
                    <button id="button2" className="homeworktools">Nueva Clase</button>
             </div>
         );
     }
}

export default NewObjectComponent;