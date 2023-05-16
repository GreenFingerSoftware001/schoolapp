import React from "react";
import ReactDOM from "react-dom";

class ProductCardComponent extends React.Component {
     render(){
        return(
            <div className="ProductCard">
                <div className="ImgCard">

                </div>
                <div className="CardBody">
                    <h2 className="cardmssg">{ this.props.BodyTitle }</h2>
                    <p className="cardmssg2">{ this.props.BodyMssg }</p>
                </div>
            </div>
        );
     }
}

export default ProductCardComponent;