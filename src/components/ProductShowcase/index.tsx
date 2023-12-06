import { ProductCard as ProductCardModel } from "@/models/ProductCard";
import { ProductShowcaseSection } from "@/models/Sections";
import React, { FC } from "react";

const ProductCard: FC<ProductCardModel> = ({ price, version, features, callToAction }) => (
    <div className="product-card">
        <div className="card-top">
            <div className="price-row">
                {price} <span className="small-currency">kr</span>
            </div>
            <div className="per-month-row">per månad</div>
        </div>
        <div className="label">{version}</div>
        <div className="card-bottom">
            {features && (
                <ul className="features-list">
                    {features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>
            )}
            {callToAction && (
                <a href={callToAction.url} target={callToAction.target} className="btn-primary">
                    {callToAction.text}
                </a>
            )}
        </div>
    </div>
);

const ProductShowcase: FC<ProductShowcaseSection> = ({ title, subText, productCards }) => {
    return (
        <div className="section product-showcase" id="product-showcase">
            <div className="column-container">
                <div className="container">
                    {title && <h2 className="lighter-text">{title}</h2>}
                    <div className="accent-line accent-line-small"></div>
                    {subText && <p className="product-showcase-text">{subText}</p>}
                </div>
                {productCards && productCards.length > 0 && (
                    <div className="row">
                        {productCards.map((card, index) => (
                            <ProductCard key={index} {...card} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductShowcase;
