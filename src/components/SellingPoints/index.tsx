import { SellingPointsSection } from "@/models/Sections";
import { TextImageElement } from "@/models/TextImageElement";
import Image from "next/image";
import { FC } from "react";

interface SellingPointProps {
	sellingPoint: TextImageElement;
}

const SellingPointElement: FC<SellingPointProps> = ({ sellingPoint }) => (
	<div className="function-container">
		<div className="icon-circle">
			<Image
				layout=""
				width={10}
				height={10}
				loading="lazy"
				src={sellingPoint.imageUrl}
				alt={sellingPoint.text}
			/>
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
					{title && <h2 className="lighter-text">{title}</h2>}
					<div className="accent-line accent-line-small"></div>
					{subText && <p className="functions-text">{subText}</p>}
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
