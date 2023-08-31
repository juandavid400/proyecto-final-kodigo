import React from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {Link} from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="left">
                    <div className="item">
                        <img width="30px" src="/img/colombia-icon.png" alt="Bandera de Colombia" />
                        <KeyboardArrowDownIcon/>
                    </div>
                    <div className="item">
                        <span>PESOSCol</span>
                        <KeyboardArrowDownIcon/>
                    </div>
                    <div className="item">
                        <Link className="link" to="/products/1">Celulares</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/products/2">Video Juegos</Link>
                    </div>
                </div>

                <div className="center">
                    <Link className="link" to="/">Blackwell</Link>
                </div>

                <div className="right">
                    <div className="item">
                        <Link className="link" to="/">Inicio</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/">Sobre nosotros</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/">Tiendas</Link>
                    </div>
                    <div className="icons">
                        <SearchIcon/>
                        <PersonIcon/>
                        <FavoriteBorderIcon/>
                        <div className="cartIcon">
                            <ShoppingCartIcon/>
                            <span>0</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar