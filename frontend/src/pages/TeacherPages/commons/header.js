import React from 'react';
import ReactDOM from 'react-dom';
import "./styles/header.css"

class Header extends React.Component {
   constructor(props) {
      super(constructor);
      this.state = {
         State: false,
      };
     
   }

   handleClick = () => {
      this.setState({isTrue:!this.state.isTrue});
      
   };
     render() {
        return (
           <div className='header'>
               <h1 className='pages-title'><a href="" className="url_title">Tutor<span className='sectitle'>Link</span></a></h1>
               <div className='searchblock'>
                   <form method='POST' className='searchform'>
                        <input type="text" name="search_field"  placeholder="Buscar:" className='search_field1'></input>
                        <input type="submit" name="submit_btn" value="Buscar"></input>
                   </form>
               </div>
               <div id="header-menu">
                   <div className='h-parts' id="part1">
                     chats
                   </div>
                   <div className='h-parts' id="part2">
                      notifications
                   </div>
                   <div className='h-parts' onClick={this.handleClick} id="part3">
                       <p>{this.state.isTrue?'Verdadero':'False'}</p>
                   </div>
               </div>
           </div>
        );
     }
}

export default Header;