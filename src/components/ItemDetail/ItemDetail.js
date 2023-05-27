import './ItemDetail.css';
import { useContext, useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)
        
        const item = {
            id, name, img, price
        }

        addItem(item, quantity)
    } 
    
    const Navigate = useNavigate();

    return (
        <article className="CardItem2">
            <header className="Header2">
                <h2>{name}</h2>
            </header>
            <section>
            <picture className="detalleImg2">
                <img src={img} alt={name}/>
            </picture>
                <p className="Info2">
                    Categoria: {category}
                </p>
                <p className="Info2">
                    Descripcion: {description}
                </p>
                <p className="Info2">
                    Precio: {price}
                </p>
            </section>
            <footer className="ItemFooter2">
                {
                    quantityAdded > 0 ? (
                        <Link to = '/cart' className='Option'>Terminar compra</Link>
                    ): (
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
                    )
                }
               
                <button onClick={() => Navigate(-1)} className='btnVolver' type="button">Volver</button>
            </footer>
        </article>
    )
}

export default ItemDetail