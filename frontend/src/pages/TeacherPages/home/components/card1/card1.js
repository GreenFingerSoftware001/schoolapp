import React from "react";
import ReactDOM from "react-dom";
import "./card1.css";

class Card1 extends React.Component {
    Create(){
        document.querySelector('.PublishBox').style.visibility = "visible";
    }
     render(){
        return(
            <div>
                <div className="personal_coment">
                     <div className="user_content">
                         <div className="img-data">
                             <img src="{% static 'images/notuser3.png' %}" alt="notuser"></img>
                         </div>
                         <button className="new_post" onClick={this.Create}>
                              <span>Crea una publicacion...</span>
                         </button>
                     </div>
                     <div className="uploadedTools">
                         <ul className="upload-tools">
                            <li className="files">
                               <button id="uploadtool1">
                                   <p className="mssg-tool1"><span className="material-symbols-outlined">image</span>Foto</p>
                               </button>
                            </li>
                            <li className="files">
                               <p className="mssg-tool2"><span className="material-symbols-outlined">slideshow</span>Video</p>
                            </li>
                            <li className="files">
                              <p className="mssg-tool3"><span className="material-symbols-outlined">schedule</span>Event</p>
                            </li>
                         </ul>
                     </div>
                </div>
            </div>
        );
     }
}

export default Card1;