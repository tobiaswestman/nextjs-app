import { ArticleCard } from "@/models/ArticleCard";
import { NewsSection } from "@/models/Sections";
import Image from "next/image";

import { FC } from "react";

const ArticleElement: FC<ArticleCard> = ({ title, subText, imageUrl }) => (
	<div className="article-card">
		<div className="card-image">
			<Image fill objectFit="cover" loading="lazy" src={imageUrl} alt="Image description" />
			<div className="accent-line-slanted"></div>
		</div>
		<div className="article-card-content">
			<h3>{title}</h3>
			<p>{subText}</p>
		</div>
	</div>
);

const News: FC<NewsSection> = ({ title, subText, articles }) => {
	return (
		<div className="section news" id="news">
			<div className="column-container">
				<div className="container update-info">
					<h2 className="lighter-text">{title}</h2>
					<div className="accent-line accent-line-small"></div>
					<p className="news-text">{subText}</p>
				</div>

				{articles && articles.length > 0 && (
					<div className="grid-container">
						{articles.map((card, index) => (
							<ArticleElement key={index} {...card} />
						))}
					</div>
				)}

				<div className="show-more-container">
					<div className="show-more">
						<div className="column-container">
							<a href="#productivity">
								<p>VISA MER</p>
								<Image
									width={20}
									height={20}
									src="/images/news/down-arrow.svg"
									alt=""
									className="down-arrow"
								/>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default News;
