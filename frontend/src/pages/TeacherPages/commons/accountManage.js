import React from "react";
import ReactDOM from "react-dom";
import "./styles/accountManage.css"

class AccountManage extends React.Component {
     render(){
         return(
               <div className="AccountManager">
                   <div className="AccountData">
                       <div className="UserPicture">

                       </div>
                       <div className="UserData">
                           <h3>Username</h3>
                           <h3>Email</h3>
                       </div>
                   </div>
                   <div className="AccountOptions">
                           <div className="options">
                               <a href="#" className="manager">Log-In</a>
                           </div>
                           <div className="options">
                               <a href="" className="manager">Cambiar cuenta</a>
                           </div>
                           <div className="options">
                               <a href="" className="manager">Salir de todas las cuentas</a>
                           </div>
                        </div>
                </div>
         );
     }
}

export default AccountManage;