import { AboutSection } from "@/models/Sections";
import Image from "next/image";
import { FC } from "react";

const About: FC<AboutSection> = ({ title, subText, imageUrl, callToAction }) => {
	return (
		<div className="section about" id="about">
			<div className="container about-left">
				<h2 className="lighter-text">{title}</h2>
				<div className="accent-line accent-line-small"></div>
				<p>{subText}</p>
				{callToAction && (
					<a href={callToAction.url} target={callToAction.target} className="link">
						<p>
							{callToAction.text}
							<Image
								layout=""
								width={10}
								height={10}
								loading="lazy"
								src="/images/about/play-button.svg"
								alt="Play button"
							/>
						</p>
					</a>
				)}
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
				</div>
			</div>
		</div>
	);
};

export default About;
