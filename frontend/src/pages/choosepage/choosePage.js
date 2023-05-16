import React from 'react';
import ReactDOM from 'react-dom';
import CardComponent from './components/OptionCard1';
import CardComponent2 from './components/OptionCard2';
import "./styles/choosepage.css";

class ChooseComponent extends React.Component {
     render(){
        return(
           <div className='choose-container'>

               <CardComponent userType='Profesores' />
               <CardComponent2 userType='Estudiantes' />
           </div>
        );
     }

}

export default ChooseComponent;