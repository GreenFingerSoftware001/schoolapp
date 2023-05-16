import React from "react";
import ReactDOM from "react-dom";
import ProductCardComponent from "./ProductCard"


class RootHolder extends React.Component {
    render(){
        return(
            <div className="cardHolder">
                <div className="section1">
                   <ProductCardComponent BodyTitle="bodytitle"/>
                   <ProductCardComponent BodyTitle="bodytitle2"/>
                   <ProductCardComponent BodyTitle="bodytitle3"/>
                </div>
                <div className="section2">
                    <ProductCardComponent BodyTitle="bodytitle4"/>
                    <ProductCardComponent BodyTitle="bodytitle5"/>
                    <ProductCardComponent BodyTitle="bodytitle6"/>
                </div>
                <div className="section3">
                    <ProductCardComponent BodyTitle="bodytitle7"/>
                    <ProductCardComponent BodyTitle="bodytitle8"/>
                    <ProductCardComponent BodyTitle="bodytitle9"/>
                </div>
            </div>
        );

    }
}

export default RootHolder;