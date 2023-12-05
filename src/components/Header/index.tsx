import React, { useState } from "react";
import Image from "next/image";

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className={`navbar ${isOpen ? "open" : ""}`}>
			<div className="brand">
				<span className="logo">///</span>
				<a href="#default" className="brand-text" target="_self">
					{" "}
					CamelonSaaS
				</a>
			</div>

			<button id="hamburger-menu" onClick={toggleMenu} className={`${isOpen ? "open" : ""}`}>
				<Image
					width={50}
					height={50}
					src="/images/navbar/hamburger.svg"
					alt=""
					className="openIcon"
				/>
				<Image
					width={50}
					height={50}
					src="/images/navbar/cross.svg"
					alt=""
					className="closeIcon"
				/>
			</button>

			<div className={`navbar-links ${isOpen ? "open" : ""}`}>
				<ul>
					<li>
						<a href="#home" target="_self">
							Hem
						</a>
					</li>
					<li>
						<a href="#about" target="_self">
							Om oss
						</a>
					</li>
					<li>
						<a href="#functions" target="_self">
							Funktioner
						</a>
					</li>
					<li>
						<a href="#product-showcase" target="_self">
							Pris
						</a>
					</li>
					<li>
						<a href="#news" target="_self">
							Kontakt
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Header;
