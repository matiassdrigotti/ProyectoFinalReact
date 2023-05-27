import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./CartItem.css";

const CartItem = ({ id, name, img, quantity, price }) => {
  const { removeItem } = useContext(CartContext);
  return (
    <div className="CartItem">
      <img src={img} alt={name} />
      <div className="Contenido">
        <p>Nombre: {name}</p>
        <p>Cantidad: {quantity}</p>
        <p>Precio: ${price}</p>
        <p>Subtotal: ${quantity * price}</p>
        <button onClick={() => removeItem(id)}>Eliminar</button>
      </div>
    </div>
  );
};

export default CartItem;