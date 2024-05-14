import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";



import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const { title, subtitle, img } = images[currentIndex];

    const next = () => {
        setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
    };

    const prev = () => {
        setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
    };

    return (
        <div className="card flex">
            <div onClick={prev} className="left-arrow arrow flex">
                <ArrowBackIosIcon />
            </div>
            <h2 className="title">{title}</h2>
            <img className="image" src={img} alt="" />
            <h4 className="caption">{subtitle}</h4>
            <div onClick={next} className="right-arrow arrow flex">
                <ArrowForwardIosIcon />
            </div>
        </div>
    );
}

export default Carousel;