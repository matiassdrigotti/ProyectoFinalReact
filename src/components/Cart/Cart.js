import React from "react";
import './Cart.css';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import CartItem from '../CartItem/CartItem';
import { Link, useNavigate } from 'react-router-dom';

const Cart = () => {
    const { cart, clearCart, totalQuantity, total} = useContext(CartContext)
    const navigate = useNavigate();

    if(totalQuantity === 0) {
        return (
            <div>
                <h1>No hay items en el carrito</h1>
                <Link to='/' className='contenido'>Productos</Link>
            </div>
        )
    }

    return (
        <div className="Cart">
            { cart.map(p => <CartItem key={p.id} {...p}/>)}
            <h3>Total: ${total()}</h3>
            <button onClick={() => clearCart()} className='Buttom'>Limpiar carrito</button>
            <Link to='/checkout' className='Option'>Checkout</Link>
            <button className="btnVolver" onClick={() => navigate('/')} type="button">Volver</button>
        </div>
    )
}

export default Cart;