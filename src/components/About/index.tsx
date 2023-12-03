import { AboutSection } from "@/models/Sections";
import Image from "next/image";
import { FC } from "react";

const About: FC<AboutSection> = ({ title, subText, imageUrl }) => {
	return (
		<div className="section about" id="about">
			<div className="container about-left">
				<h2 className="lighter-text">{title}</h2>
				<div className="accent-line accent-line-small"></div>
				<p>{subText}</p>

				<a href="https://t.ly/a3N6W" className="link" target="_blank">
					<p>
						SE VIDEON
						<img src="/images/about/play-button.svg" alt="" />
					</p>
				</a>
			</div>
			<div className="container about-right">
				<div className="right-content">
					<Image
						layout="responsive"
						width={530}
						height={308}
						src={imageUrl}
						loading="lazy"
						alt="Laptop"
					/>
					{/* <img className="about-img" src="/images/about/laptop.png" alt="" /> */}
				</div>
			</div>
		</div>
	);
};

export default About;
