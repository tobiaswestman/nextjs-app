import { ArticleCard } from "./ArticleCard";
import { Link } from "./Link";
import { ProductCard } from "./ProductCard";
import { TextImageElement } from "./TextImageElement";

export interface HeroSection {
	boldText: string;
	lightText: string;
	subText: string;
	callToAction: Link;
}

export interface AboutSection {
	title: string;
	subText: string;
	imageUrl: string;
	callToAction: Link;
}

export interface SellingPointsSection {
	title: string;
	subText: string;
	sellingPoints: TextImageElement[];
}

export interface TextCarouselSection {
	texts: string[];
}

export interface ProductShowcaseSection {
	title: string;
	subText: string;
	productCards: ProductCard[];
}

export interface CommunityBannerSection {
	//text byts mot rich text editoru i umbraco
	lightText1: string;
	boldText: string;
	lightText2: string;

	callToAction: Link;
}

export interface NewsSection {
	title: string;
	subText: string;
	articles: ArticleCard[];
}

export interface ProductivitySection {
	title: string;
	subText: string;
	callToAction: Link;
}
