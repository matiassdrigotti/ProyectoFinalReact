import React from "react";
import cart from "../CartWidget/assets/cart.svg";
import './CartWidget.css';
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)

    return(
        <div className="Navegador">
            <img src={cart} alt="cart-widget"/>
            <span>{ totalQuantity() }</span>
        </div>
    )
}

export default CartWidget;
