import React, { useState } from "react";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`navbar ${isOpen ? "open" : ""}`}>
            <div className="brand">
                <span className="logo">///</span>
                <a href="#default" className="brand-text">
                    {" "}
                    CamelonSaaS
                </a>
            </div>

            <button id="hamburger-menu" onClick={toggleMenu} className={`${isOpen ? "open" : ""}`}>
                <img src="/images/navbar/hamburger.svg" alt="" className="openIcon" />
                <img src="/images/navbar/cross.svg" alt="" className="closeIcon" />
            </button>

            <div className={`navbar-links ${isOpen ? "open" : ""}`}>
                <ul>
                    <li>
                        <a href="#home">Hem</a>
                    </li>
                    <li>
                        <a href="#about">Om oss</a>
                    </li>
                    <li>
                        <a href="#functions">Funktioner</a>
                    </li>
                    <li>
                        <a href="#product-showcase">Pris</a>
                    </li>
                    <li>
                        <a href="#news">Kontakt</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
