import React from "react";
import ReactDOM from "react-dom";

class LeftPartComponent extends React.Component {
    render(){
        return(
            <div className="LeftComponent">
                <ul className="leftmenuComponent">
                   <li className="LComponent">
                      <span className="LeftMssgs">Tools1</span>
                   </li>
                   <li className="LComponent">
                      <span className="LeftMssgs">option2</span>

                   </li>
                   <li className="LComponent">
                      <span className="LeftMssgs">option3</span>

                   </li>
                   <li className="LComponent">
                      <span className="LeftMssgs">option4</span>

                   </li>
                   <li className="LComponent">
                      <span className="LeftMssgs">option5</span>
                   </li>
                   <li className="LComponent">
                      <span className="LeftMssgs">option6</span>
                   </li>
                </ul>
            </div>
        );
    }
}

export default LeftPartComponent;