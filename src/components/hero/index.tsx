import { HeroSection } from "@/models/Sections";
import { FC } from "react";

const Hero: FC<HeroSection> = ({ boldText, lightText, subText, callToAction }) => {
	return (
		<div className="hero">
			<div className="hero-content">
				{boldText && lightText && (
					<h1>
						<span className="bold-text">{boldText}</span>
						<span className="lighter-text">{lightText}</span>
					</h1>
				)}
				<div className="accent-line accent-line-small"></div>
				{subText && <p>{subText}</p>}
				<br />

				{callToAction && (
					<a href={callToAction.url} target={callToAction.target} className="btn-primary">
						{callToAction.text}
					</a>
				)}
			</div>
		</div>
	);
};

export default Hero;
