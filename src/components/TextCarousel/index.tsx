import React, { useState, useEffect } from "react";

const TextCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const texts = [
        "1. Lorem ipsum dolor sit amet consectetur adipisicing elit...",
        "2. Lorem ipsum dolor sit amet consectetur adipisicing elit...",
        "3. Lorem ipsum dolor sit amet consectetur adipisicing elit...",
        "4. Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    ];

    const updateText = (newIndex: number) => {
        setCurrentIndex(newIndex);
    };

    const handleLeftClick = () => {
        const newIndex = (currentIndex - 1 + texts.length) % texts.length;
        updateText(newIndex);
    };

    const handleRightClick = () => {
        const newIndex = (currentIndex + 1) % texts.length;
        updateText(newIndex);
    };

    return (
        <div className="section carousel">
            <div className="carousel-content">
                <img src="images/textCarousel/quote-before.svg" alt="" className="quote-img" />
                <div className="carousel-row">
                    <div>
                        <img
                            src="images/textCarousel/left-pointer.svg"
                            alt=""
                            className="carousel-arrow left-arrow"
                            onClick={handleLeftClick}
                        />
                    </div>
                    <div className="text-container">
                        {texts.map((text, index) => (
                            <p
                                key={index}
                                className={`carousel-text ${
                                    index === currentIndex ? "active" : ""
                                }`}
                            >
                                {text}
                            </p>
                        ))}
                    </div>
                    <div>
                        <img
                            src="images/textCarousel/right-pointer.svg"
                            alt=""
                            className="carousel-arrow right-arrow"
                            onClick={handleRightClick}
                        />
                    </div>
                </div>
                <img src="images/textCarousel/quote-after.svg" alt="" className="quote-img" />
            </div>
        </div>
    );
};

export default TextCarousel;
