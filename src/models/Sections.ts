import { Link } from "./Link";
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
}

export interface SellingPointsSection {
	title: string;
	subText: string;
	sellingPoints: TextImageElement[];
}

export interface TextCarouselSection {}
