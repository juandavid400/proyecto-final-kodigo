import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";

const Card = ({item}) => {
    return (
        <Link className="link" to={`/product/${item.id}`}>
        <div className="card">
            <div className="image">
                {item.isNew && <span>Ofertas de temporada</span>}
                <img src={item.img} alt="Articulo en descuento 1" className="mainImg" />
                <img src={item.img2} alt="Articulo en descuento 1 hover" className="secondImg" />
            </div>
            
            <h2>{item.title}</h2>
            <div className="prices">
                <h3>${item.oldPrice}</h3>
                <h3>${item.price}</h3>
            </div>            
        </div>
        </Link>
    )
}

export default Card