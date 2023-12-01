import React, { useState } from "react";

interface ProductCardProps {
	title: string;
	price: number;
	features: string[];
	buttonText?: string;
}

const ProductCard = ({ title, price, features, buttonText }: ProductCardProps) => (
	<div className="product-card">
		<div className="card-top">
			<div className="price-row">
				{price} <span className="small-currency">kr</span>
			</div>
			<div className="per-month-row">per månad</div>
		</div>
		<div className="label">{title}</div>
		<div className="card-bottom">
			<ul className="features-list">
				{features.map((feature, index) => (
					<li key={index}>{feature}</li>
				))}
			</ul>
			<button className="btn-primary">{buttonText}</button>
		</div>
	</div>
);

const ProductShowcase = () => {
	const productCards = [
		{
			title: "FREEMIUM",
			price: 0,
			features: [
				"1 Projekt",
				"100 MB Lagring",
				"Notification settings",
				"Password protection",
			],
		},
		{
			title: "STANDARD",
			price: 390,
			features: [
				"15 Projekt",
				"1 GB Lagring",
				"Notification settings",
				"Password protection",
			],
		},
		{
			title: "BUSINESS",
			price: 590,
			features: [
				"30 Projekt",
				"2 GB Lagring",
				"Notification settings",
				"Password protection",
			],
		},
		{
			title: "PREMIUM",
			price: 990,
			features: [
				"+99 Projekt",
				"+99 GB Lagring",
				"Notification settings",
				"Password protection",
			],
		},
	].map((card) => ({
		...card,
		buttonText: card.price === 0 ? "STARTA" : "KÖP",
	}));

	return (
		<div className="section product-showcase" id="product-showcase">
			<div className="column-container">
				<div className="container">
					<h2 className="lighter-text">Våra priser</h2>
					<div className="accent-line accent-line-small"></div>
					<p className="product-showcase-text">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium minus
						cumque quam modi provident dicta facere soluta ab molestias eaque, alias
						sequi. Aliquid nostrum ut sit repudiandae incidunt, a tenetur?
					</p>
				</div>
				{productCards.length > 0 && (
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
