import React from "react";
import { ReactDOM } from "react";


class PubComp extends React.Component {
    
    Hidde(){
        document.querySelector('.PublishBox').style.visibility = "hidden";
    }

    render(){
        return(
            <div className="pub-box">
            <div className="cardHeader">
                <h2 className="headerTitle">Crear una publicacion</h2>
                <button name="closed" className="closing_btn" onClick={this.Hidde}>X</button>
            </div>
            <div className="userSide">
               <div className="userPicture"></div>
               <select className="public-options">
                   <option value="public">Public</option>
                   <option value="friends">network</option>
               </select>
            </div>
            <form method="POST" className="NewPub">
                 <textarea name="published-text" className="field2" placeholder="Descripcion" rows="8" cols="10"></textarea>
                 <div className="tools-box">
                    <ul className="menu-tools">
                      <li className="tools-001">
                      <span class="material-symbols-sharp">schedule</span>
                      </li>
                      <li className="tools-002">
                      <span class="material-symbols-sharp">smart_display</span>
                      </li>
                      <li className="tools-003">
                      <span class="material-symbols-sharp">image</span>
                      </li>
                      <li className="tools-004">
                      <span class="material-symbols-sharp">edit</span>
                      </li>
                    </ul>
                 </div>
                
                 <button type="submit" name="publish_btn" className="BtnSubmit">Publicar</button>
            </form>
        </div>
        );
    }
}




export default PubComp;