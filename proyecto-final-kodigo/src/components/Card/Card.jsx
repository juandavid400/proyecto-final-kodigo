import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";


const Card = ({item}) => {
    return (
        <Link className="link" to={`/product/${item.id}`}>
        <div className="card">
            <div className="image">
                {item?.atributes?.isNew && <span>Ofertas de temporada</span>}
                <img 
                src={
                    item?.atributes?.img?.data?.atributes?.url 
                        ? import.meta.env.VITE_REACT_APP_UPLOAD_URL + item.atributes?.img?.data?.atributes?.url.id
                        : ""
                } 

                alt="Articulo en descuento 1" className="mainImg" />
                <img 
                    src={
                        item?.atributes?.img2?.data?.atributes?.url
                            ? import.meta.env.VITE_REACT_APP_UPLOAD_URL + item.atributes?.img2?.data?.atributes?.url.id
                            : ""
                    } 
                    alt="Articulo en descuento 1 hover" className="secondImg" />
            </div>
            
            <h2>{item?.atributes}</h2>
            <div className="prices">
                <h3>${item?.oldPrice || item?.atributes?.price + 20}</h3>
                <h3>${item?.atributes?.price}</h3>
            </div>            
        </div>
        </Link>
    )
}

export default Card