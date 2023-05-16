import * as React from 'react';
import ReactDOM from 'react-dom';

class CardComponent extends React.Component{
     constructor(props){
         super(props);
         this.state = {
           state: false,
         }
     }

     
     handleClick = () => {
        this.setState({isTrue:!this.state.isTrue});
        if(this.state == false){
            console.log('mierda')
        }
    };

     render(){
        return(
            <div id='S-card' onClick={this.handleClick}>
                <h2 id='CardTitle1'>
                  {this.state.isTrue?'Picked':'Profesores'}
                </h2>
            </div>
        );
     }
}

export default CardComponent;