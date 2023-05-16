import React from 'react';
import ReactDOM from 'react-dom';
import "./styles/calculator.css";


class CalculatorComponent extends React.Component {
    render(){
        return(
           <div id='calculator'>
               <div id="calculatorScreen">
                  <span id='screenNumber'>0</span>
               </div>
               <div id="calculatorBody">
                   <ul id="operations">
                      <li className='buttons'>
                          <span id="operator1">Inv</span>
                      </li>
                      <li className='buttons'>
                         <span id="operator2">sin</span>
                      </li>
                      <li className='buttons'>
                         <span id="operator3">π</span>
                      </li>
                      <li className='buttons'>
                         <span id="operator4">cos</span>
                      </li>
                      <li className='buttons'>
                         <span id="operator5">log</span>
                      </li>
                      <li className='buttons'>
                         <span id="operator6">e</span>
                      </li>
                      <li className='buttons'>
                         <span id="operator7">tan</span>
                      </li>
                      <li className='buttons'>
                         <span id="btn5">x!</span>
                      </li>
                      <li className='buttons'>
                         <span id="btn6">rad</span>
                      </li>
                      <li className='buttons'>
                         <span id="btn1">deg</span>
                      </li>
                      <li className='buttons'>
                         <span id="btn2">√</span>
                      </li>
                      <li className='buttons'>
                         <span id="btn3">
                           x
                           <sup>y</sup>
                         </span>
                      </li>
                      <li className='buttons'>
                         <span id="btn0">ANS</span>
                      </li>
                      <li className='buttons'>
                         <span id="btnPoint">EXP</span>
                      </li>
                      <li className='buttons'>
                         <span id="btnEqual">E</span>
                      </li>
                  </ul>
                  <ul id="keys">
                     <li className='buttons'>
                        <span id="btnkey1">(</span>
                     </li>
                     <li className='buttons'>
                        <span id="btnkey2">)</span>
                     </li>
                     <li className='buttons'>
                       <span id="btnpercent">%</span>
                     </li>
                     <li className='buttons'>
                        <span id="btn7">7</span>
                     </li>
                     <li className='buttons'>
                       <span id="btn8">8</span>
                     </li>
                     <li className='buttons'>
                        <span id="btn9">9</span>
                     </li>
                     <li className='buttons'>
                        <span id="btn4">4</span>
                     </li>
                     <li className='buttons'>
                        <span id="btn5">5</span>
                     </li>
                     <li className='buttons'>
                        <span id="btn6">6</span>
                     </li>
                     <li className='buttons'>
                        <span id="btn1">1</span>
                     </li>
                     <li className='buttons'>
                        <span id="btn2">2</span>
                     </li>
                     <li className='buttons'>
                        <span id="btn3">3</span>
                     </li>
                     <li className='buttons'>
                        <span id="btn0">0</span>
                     </li>
                     <li className='buttons'>
                        <span id="btnPoint">.</span>
                     </li>
                     <li className='buttons'>
                        <span id="btnEqual">=</span>
                     </li>
                  </ul>
                  <ul id="basicoperations">
                     <li className='buttons'>
                        <span id="btn6">AC</span>
                     </li>
                     <li className='buttons'>
                        <span id="btn1">+</span>
                     </li>
                     <li className='buttons'>
                        <span id="btn2">x</span>
                     </li>
                     <li className='buttons'>
                        <span id="btn3">÷</span>
                     </li>
                     <li className='buttons'>
                        <span id="btn0">-</span>
                     </li>
                  </ul>
               </div>
           </div>
        );
    }
}

export default CalculatorComponent;