import './NavBar.css'
import CartWidget from "../CartWidget/CartWidget"
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="NavBar">
            <Link to='/' className='GoldenCommerce'>Commerce</Link>
            <div className="Categories">
                <NavLink to={`/category/celular`} className={({ isActive }) => isActive ? 'ActiveOption' : 'OptionNav'}>Celulares</NavLink>
                <NavLink to={`/category/tablet`} className={({ isActive }) => isActive ? 'ActiveOption' : 'OptionNav'}>Tablet</NavLink>
                <NavLink to={`/category/notebook`} className={({ isActive }) => isActive ? 'ActiveOption' : 'OptionNav'}>Notebooks</NavLink>
            </div>
            <Link className='carrito' to="/cart"><CartWidget /></Link>
        </nav>
    )
}

export default NavBar;