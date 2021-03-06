import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';
import Logo from '../../images/logo.png'
import './Header.css'
const Header = () => {
    const [loggedInUser,setLoggedInUser]=useContext(userContext)
    return (
        <div className="header">
            <img src={Logo} alt="logo"/> 
            <nav>
                <Link to="/shop">Shop</Link>
                <Link to="/review">Order Review</Link>
                <Link to="/manage">Manage Inventory</Link>
                <button onClick={()=>setLoggedInUser({})}>Log Out</button>
            </nav>
        </div>
    );
};

export default Header;