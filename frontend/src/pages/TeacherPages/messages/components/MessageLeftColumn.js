import React from "react";
import ReactDOM from "react-dom";

class LeftEmailComponet extends React.Component {
     render(){
        return (
            <div className="LeftEmail">
                <div className="redactar">
                    <span>Redactar</span>
                </div>
                <div className="side1">
                    <ul className="Emailmenu">
                       <li className="files">
                          <span className="Tool-00">Inbox</span>
                       </li>
                       <li className="files">
                          <span className="Tool-01">HomeworkInbox</span>
                       </li>
                       <li className="files">
                          <span className="Tool-02">TestsInbox</span>
                       </li>
                       <li className="files">
                          <span className="Tool-03">OutBox</span>
                       </li>
                       <li className="files">
                          <span className="Tool-04">Borradores</span>
                       </li>
                       <li className="files">
                          <span className="Tool-05">Importants</span>
                       </li>
                       <li className="files">
                          <span className="Tool-06">Todos</span>
                       </li>
                       <li className="files">
                          <span className="Tool-07">Papelera</span>
                       </li>
                    </ul>
                </div>
            </div>
        );
     }
}

export default LeftEmailComponet;