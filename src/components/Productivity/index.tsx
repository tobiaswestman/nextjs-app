import { ProductivitySection } from "@/models/Sections";
import { FC } from "react";

const Productivity: FC<ProductivitySection> = ({ title, subText, callToAction }) => {
    return (
        <div className="productivity" id="productivity">
            <div className="hero-content">
                {title && (
                    <h1>
                        <span className="lighter-text">{title}</span>
                    </h1>
                )}
                <div className="accent-line accent-line-small"></div>
                {subText && <p>{subText}</p>}
                {callToAction && (
                    <a href={callToAction.url} target={callToAction.target} className="btn-primary">
                        {callToAction.text}
                    </a>
                )}
            </div>
        </div>
    );
};

export default Productivity;
