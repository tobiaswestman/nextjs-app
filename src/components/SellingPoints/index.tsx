import { SellingPointsSection } from "@/models/Sections";
import { TextImageElement } from "@/models/TextImageElement";
import { FC } from "react";

// interface SellingPointProps {
// 	title: string;
// 	imageUrl: string;
// }

// const SellingPointElement = ({ text, imageUrl }: SellingPointsSection["sellingPoints"]) => (
// 	<div className="function-container">
// 		<div className="icon-circle">
// 			<img src={imageUrl} alt="" />
// 		</div>

// 		<div>
// 			<p>{text}</p>
// 		</div>
// 	</div>
// );

interface SellingPointProps {
	sellingPoint: TextImageElement;
}

const SellingPointElement: FC<SellingPointProps> = ({ sellingPoint }) => (
	<div className="function-container">
		<div className="icon-circle">
			<img src={sellingPoint.imageUrl} alt={sellingPoint.text} />
		</div>

		<div>
			<p>{sellingPoint.text}</p>
		</div>
	</div>
);

const SellingPoints: FC<SellingPointsSection> = ({ title, subText, sellingPoints }) => {
	return (
		<div className="section functions" id="functions">
			<div className="column-container">
				<div className="container">
					<h2 className="lighter-text">{title}</h2>
					<div className="accent-line accent-line-small"></div>
					<p className="functions-text">{subText}</p>
				</div>
				{sellingPoints && sellingPoints.length > 0 && (
					<div className="row">
						{sellingPoints.map((point, index) => (
							<SellingPointElement key={index} sellingPoint={point} />
						))}
					</div>
				)}
			</div>
		</div>
	);
};

export default SellingPoints;

// const SellingPoints: FC<SellingPointsSection> = ({ title, subText }) => {
// 	// const SellingPointElements = [
// 	// 	{
// 	// 		title: "HELT FLEXIBEL",
// 	// 		imageUrl: "images/sellingPoints/flexible-icon.svg",
// 	// 	},
// 	// 	{
// 	// 		title: "GRATIS NEDLADDNING",
// 	// 		imageUrl: "images/sellingPoints/download-icon.svg",
// 	// 	},
// 	// 	{
// 	// 		title: "MODERN DESIGN",
// 	// 		imageUrl: "images/sellingPoints/design-icon.svg",
// 	// 	},
// 	// 	{
// 	// 		title: "100% RESPONSIV",
// 	// 		imageUrl: "images/sellingPoints/responsive-icon.svg",
// 	// 	},
// 	// ];

// 	return (
// 		<div className="section functions" id="functions">
// 			<div className="column-container">
// 				<div className="container">
// 					<h2 className="lighter-text">Funktioner</h2>
// 					<div className="accent-line accent-line-small"></div>
// 					<p className="functions-text">
// 						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium minus
// 						cumque quam modi provident dicta facere soluta ab molestias eaque, alias
// 						sequi. Aliquid nostrum ut sit repudiandae incidunt, a tenetur?
// 					</p>
// 				</div>
// 				{SellingPoints.length > 0 && (
// 					<div className="row">
// 						{SellingPoints.map((card, index) => (
// 							<SellingPointElement key={index} {...card} />
// 						))}
// 					</div>
// 				)}
// 			</div>
// 		</div>
// 	);
// };

// export default SellingPoints;
