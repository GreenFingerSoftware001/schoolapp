import * as React from 'react';
import ReactDOM from 'react-dom';

class CardComponent2 extends React.Component{
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
            <div className='S-card2'>
                <h2 className='CardTitle'>
                {this.state.isTrue?'Picked':'Estudiantes'}
                </h2>
            </div>
        );
     }
}

export default CardComponent2;