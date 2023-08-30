import React, { useState } from "react";
import "./Slider.scss";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Slider = () => {

    const [currentSlide, setCurrentSlide] = useState(0)

    const data = [
        "../img/banner1.jpg",
        "../img/banner2.jpg",
        "../img/banner3.webp",
    ];

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
    };
    const nextSlide = () => {
        setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
    };

    return (
        <div className="slider">
            <div className="containerSlider" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
                <img src={data[0]} alt="Imagen carousel 1" />
                <img src={data[1]} alt="Imagen carousel 2" />
                <img src={data[2]} alt="Imagen carousel 3" />
            </div>
            <div className="icons">
                <div className="icon" onClick={prevSlide}>
                    <ArrowBackIcon style={{ color: 'black' }} />
                </div>
                <div className="icon" onClick={nextSlide}>
                    <ArrowForwardIcon style={{ color: 'black' }} />
                </div>
            </div>
        </div>
    )
}

export default Slider