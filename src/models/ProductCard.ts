import { Link } from "./Link";

export interface ProductCard {
    price: number;
    version: string;
    features: string[];
    callToAction: Link;
}
