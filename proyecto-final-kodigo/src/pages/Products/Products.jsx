import React from "react";
import "./Products.scss";
import List from "../../components/List/List";
import { useParams } from "react-router-dom";
import { useState } from "react";

const Products = () => {

    const catId = parseInt(useParams().id);
    const [maxPrice,SetMaxPrice] = useState(1400);
    const [sort,setSort] = useState(null);

    return (
        <div className="products">
            <div className="left">
                <div className="filterItem">
                    <h2>Categoría de productos</h2>
                    <div className="inputItem">
                        <input type="checkbox" id="1" value={1}/>
                        <label htmlFor="1">Samsung</label>
                    </div>
                    <div className="inputItem">
                        <input type="checkbox" id="2" value={2}/>
                        <label htmlFor="2">Google</label>
                    </div>
                    <div className="inputItem">
                        <input type="checkbox" id="3" value={3}/>
                        <label htmlFor="3">Iphone</label>
                    </div>
                </div>
                <div className="filterItem">
                    <h2>Filtro de precio</h2>
                    <div className="inputItem">
                        <span>0</span>
                        <input type="range" min={0} max={1400} onChange = {(e) => SetMaxPrice(e.target.value)}/>
                        <span>{maxPrice}</span>
                    </div>
                </div>
                <div className="filterItem">
                    <h2>Organizar por:</h2>
                    <div className="inputItem">
                        <input type="radio" id="asc" value="asc" name="price"  onChange = {(e) => setSort("asc")}/>
                        <label htmlFor="asc">Precios más bajos primero</label>
                    </div>
                    <div className="inputItem">
                        <input type="radio" id="desc" value="desc" name="price" onChange = {(e) => setSort("desc")}/>
                        <label htmlFor="desc">Precios más altos primero</label>
                    </div>
                </div>
            </div>

            <div className="right">
                <img className="catImg" src="../img/colombia.jpg" alt="" />
                <List catId = {catId} maxPrice={maxPrice} sort={sort}/>
            </div>
        </div>
    )
}

export default Products