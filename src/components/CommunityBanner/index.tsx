import { CommunityBannerSection } from "@/models/Sections";
import { FC } from "react";

const CommunityBanner: FC<CommunityBannerSection> = ({
	lightText1,
	boldText,
	lightText2,
	callToAction,
}) => {
	return (
		<div className="banner-content section community-banner">
			<h1>
				<span>{lightText1}</span>
				<span className="bold-text">{boldText}</span>
				<span>{lightText2}</span>
			</h1>
			{callToAction && (
				<a
					href={callToAction.url}
					target={callToAction.target}
					className="btn-primary btn-secondary"
				>
					{callToAction.text}
				</a>
			)}
		</div>
	);
};

export default CommunityBanner;
