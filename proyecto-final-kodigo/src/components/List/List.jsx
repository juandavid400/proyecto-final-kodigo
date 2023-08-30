import React from "react";
import "./List.scss";
import Card from "../Card/Card";

const List = () => {

    const data = [
        {
            id: 1,
            img: "../img/samsung-z-fold-5-256-gb-negro-12gb-single.webp",
            img2: "../img/samsung-z-fold-5-256-gb-negro-12gb-doble.webp",
            title: "Samsung Z Fold 5",
            isNew: true,
            oldPrice: 1799,
            price: 1699,
        },
        {
            id: 2,
            img: "../img/vivo-y22s-6-128-mb-azul-single.webp",
            img2: "../img/vivo-y22s-6-128-mb-azul-doble.webp",
            title: "Vivo y22s 6",
            isNew: true,
            oldPrice: 366,
            price: 300,            
        },
        {
            id: 3,
            img: "../img/motorola-moto-razer-40-ultra-512-gb-negro-single.webp",
            img2: "../img/motorola-moto-razer-40-ultra-512-gb-negro-doble.webp",
            title: "Motorola Moto Razer 40 Ultra",
            isNew: true,
            oldPrice: 1150,
            price: 1000,
        },
        {
            id: 4,
            img: "../img/iphone-14-pro-max-1-tb-negro-single.webp",
            img2: "../img/iphone-14-pro-max-1-tb-negro-doble.webp",
            title: "Iphone 14 Pro Max Negro",
            isNew: true,
            oldPrice: 1300,
            price: 1100,
        },
        {
            id: 5,
            img: "../img/iphone-13-pro-max-256-gb-oro-single.webp",
            img2: "../img/iphone-13-pro-max-256-gb-oro-doble.webp",
            title: "Iphone 13 Pro Max Oro",
            isNew: true,
            oldPrice: 1200,
            price: 1100,
        },
        {
            id: 6,
            img: "../img/xiaomi-12-256-gb-gris-single.webp",
            img2: "../img/xiaomi-12-256-gb-gris-doble.webp",
            title: "Xiaomi 12 Gris",
            isNew: true,
            oldPrice: 800,
            price: 700,
        },
    ];

    return (
        <div className="list">{data?.map(item => (
            <Card item = {item} key = {item.id}/>
        ))}</div>
    )
}

export default List