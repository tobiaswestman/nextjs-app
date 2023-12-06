import { TextCarouselSection } from "@/models/Sections";
import React, { useState, FC } from "react";
import Image from "next/image";

interface CarouselTextProps {
    text: string;
    isActive: boolean;
}

const CarouselText: FC<CarouselTextProps> = ({ text, isActive }) => (
    <p className={`carousel-text ${isActive ? "active" : ""}`}>{text}</p>
);

const TextCarousel: FC<TextCarouselSection> = ({ texts }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

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

    if (!texts) {
        return null;
    }

    return (
        <>
            {texts.length > 0 && (
                <div className="section carousel">
                    <div className="carousel-content">
                        <Image
                            width={30}
                            height={30}
                            loading="lazy"
                            src="/images/textCarousel/quote-before.svg"
                            alt=""
                            className="quote-img"
                        />
                        <div className="carousel-row">
                            <div>
                                <Image
                                    width={30}
                                    height={30}
                                    loading="lazy"
                                    src="/images/textCarousel/left-pointer.svg"
                                    alt=""
                                    className="carousel-arrow left-arrow"
                                    onClick={handleLeftClick}
                                />
                            </div>
                            <div className="text-container">
                                {texts.map((text, index) => (
                                    <CarouselText
                                        key={index}
                                        text={text}
                                        isActive={index === currentIndex}
                                    />
                                ))}
                            </div>
                            <div>
                                <Image
                                    width={30}
                                    height={30}
                                    loading="lazy"
                                    src="/images/textCarousel/right-pointer.svg"
                                    alt=""
                                    className="carousel-arrow right-arrow"
                                    onClick={handleRightClick}
                                />
                            </div>
                        </div>
                        <Image
                            width={30}
                            height={30}
                            loading="lazy"
                            src="/images/textCarousel/quote-after.svg"
                            alt=""
                            className="quote-img"
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default TextCarousel;
