interface SellingPointProps {
	title: string;
	imageUrl: string;
}

const SellingPointElement = ({ title, imageUrl }: SellingPointProps) => (
	<div className="function-container">
		<div className="icon-circle">
			<img src={imageUrl} alt="" />
		</div>

		<div>
			<p>{title}</p>
		</div>
	</div>
);

const SellingPoints = () => {
	const SellingPointElements = [
		{
			title: "HELT FLEXIBEL",
			imageUrl: "images/sellingPoints/flexible-icon.svg",
		},
		{
			title: "GRATIS NEDLADDNING",
			imageUrl: "images/sellingPoints/download-icon.svg",
		},
		{
			title: "MODERN DESIGN",
			imageUrl: "images/sellingPoints/design-icon.svg",
		},
		{
			title: "100% RESPONSIV",
			imageUrl: "images/sellingPoints/responsive-icon.svg",
		},
	];

	return (
		<div className="section functions" id="functions">
			<div className="column-container">
				<div className="container">
					<h2 className="lighter-text">Funktioner</h2>
					<div className="accent-line accent-line-small"></div>
					<p className="functions-text">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium minus
						cumque quam modi provident dicta facere soluta ab molestias eaque, alias
						sequi. Aliquid nostrum ut sit repudiandae incidunt, a tenetur?
					</p>
				</div>
				{SellingPointElements.length > 0 && (
					<div className="row">
						{SellingPointElements.map((card, index) => (
							<SellingPointElement key={index} {...card} />
						))}
					</div>
				)}
			</div>
		</div>
	);
};

export default SellingPoints;
