import React, { useEffect } from "react";
import "./FeatureProducts.scss";
import Card from "../Card/Card";

import { useState } from "react";
import axios from "axios"



const FeatureProducts = ({type}) => {

    /* const data = [
        {
            id: 1,
            img: "../img/samsung.png",
            img2: "../img/iphone-14.png",
            title: "Samsung Galaxy S24 Ultra",
            isNew: true,
            oldPrice: 1899,
            price: 1699,
        },
        {
            id: 2,
            img: "../img/iphone-14.png",
            img2: "../img/iphone-14.png",
            title: "Iphone 14",
            isNew: true,
            oldPrice: 1099,
            price: 999,            
        },
        {
            id: 3,
            img: "../img/google-pixel-7.png",
            img2: "../img/iphone-14.png",
            title: "Google Pixel 7",
            isNew: true,
            oldPrice: 999,
            price: 899,
        },
        {
            id: 4,
            img: "../img/xiaomi-12-pro.png",
            img2: "../img/iphone-14.png",
            title: "Xiaomi 12 Pro",
            isNew: true,
            oldPrice: 999,
            price: 899,
        },
    ] */

    const [data, setData] = useState([]);

    useEffect (() => {
        const fetchData = async () => {
            try{
                const res = await axios.get(process.env.REACT_APP_API_URL+"/products",{
                    headers:{
                        Authorization: "bearer " + process.env.REACT_APP_API_TOKEN,
                    }
                });
                setData(res.data.data)
            } catch(err){
                console.log(err)
            }
        };
        fetchData();
    }, []);

    return (
        <div className="featureProducts">
            <div className="top">
                <h2>{type} products</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis, vitae sint, facere id facilis magnam rerum temporibus explicabo molestiae dolorum at fuga aspernatur reiciendis nostrum esse ex, autem nihil ipsa voluptatem necessitatibus quia mollitia nesciunt quaerat? Officia culpa aspernatur sunt, reprehenderit porro possimus numquam natus tempore beatae reiciendis vel modi nesciunt molestias deleniti impedit odit quo aperiam animi hic sapiente eveniet. Similique ducimus nobis quia autem. Omnis odit ipsam corrupti blanditiis voluptatum veritatis ab, quia, asperiores dolor incidunt atque fugit.</p>
            </div>
            <div className="bottom">
                {data.map(item => (
                    <Card item = {item} key = {item.id}/>
                ))}
            </div>
        </div>
    )
}

export default FeatureProducts