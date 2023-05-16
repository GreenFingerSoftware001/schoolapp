import React from "react";
import ReactDOM from "react-dom";

class ModalContentEdit extends React.Component {
     render(){
        return(
            <div className="modalEdit">
                <div className="EditPart">
                    <div className="header-modal">
                        <span className="headertitle">Mensaje Nuevo</span>
                        <span class="material-symbols-sharp">close</span>
                    </div>
                    <form  method="POST" className="editform">
                        <input type="text" name="field1" className="field1" placeholder="Title"></input>
                        <textarea  rows="19" cols="50" placeholder="content"></textarea>
                        <input type="submit" name="submitbtn"  value="Enviar" className="S_button"></input>
                    </form>
                    <div className="tools">
                        <div className="E-tools">
                        <select name="fonts" id="font-size">
                            <option value="small">16px</option>
                            <option value="medium">30px</option>
                            <option value="large">90px</option>
                            <option value="extralarge">120px</option>
                        </select>
                        </div>
                        <div className="E-tools">
                        <select name="font-type" id="types">
                            <option value="small">type1</option>
                            <option value="medium">type2</option>
                            <option value="large">type3</option>
                            <option value="extralarge">type4</option>
                        </select>
                        </div>
                        <div className="E-tools">
                            <input type="file" name="files" className="filesinput"></input>
                            
                        </div>
                        <div className="E-tools">

                        </div>
                    </div>
                </div>
            </div>
        );
     }
}




export default ModalContentEdit;