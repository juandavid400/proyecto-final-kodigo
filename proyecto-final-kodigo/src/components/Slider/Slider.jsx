import React, { useState } from "react";
import "./Slider.scss";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Slider = () => {

    const [currentSlide, setCurrentSlide] = useState(0)

    const data = [
        "../img/samsung.png",
        "../img/iphone-14.png",
        "../img/google-pixel-7.png",
    ];

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
    };
    const nextSlide = () => {
        setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
    };

    return (
        <div className="slider">
            <div className="container" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
                <img src={data[0]} alt="Imagen carousel 1" />
                <img src={data[1]} alt="Imagen carousel 2" />
                <img src={data[2]} alt="Imagen carousel 3" />
            </div>
            <div className="icons">
                <div className="icon" onClick={prevSlide}>
                    <ArrowBackIcon/>
                </div>
                <div className="icon" onClick={nextSlide}>
                    <ArrowForwardIcon/>
                </div>
            </div>
        </div>
    )
}

export default Slider