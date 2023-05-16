import * as React from 'react';
import "./other.css"


class OComponent extends React.Component {
    render(){
        return (
          <div id="recent">
              <h3 id="threeComp">Elementos Recientes</h3>
              <div className='Comps'>
                  <span id='comptext' className='compsText'>Element 1</span>
              </div>
          </div>
        );
    }
}


export default OComponent;