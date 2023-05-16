import React from "react";
import CalculatorComponent from './calculator/calculator'
import './calculator/styles/ToolRender.css';
import EmptyPageComponent from "./calculator/components/emptypage";
import BarLineComponent from "./barline/barline";
import "./styles/toolpage.css";

class ToolPage extends React.Component {
    render(){
        return(
            <div id="ToolPage">
                <BarLineComponent/>
            </div>
        );
    }
}

export default ToolPage;