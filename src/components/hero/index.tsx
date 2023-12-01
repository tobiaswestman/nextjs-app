import { HeroSection } from '@/models/Sections';
import { FC } from 'react';

const Hero: FC<HeroSection> = ({
  boldText,
  lighText,
  subText,
  calToAction,
}) => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>
          <span className="bold-text">{boldText}</span>
          <span className="lighter-text">{lighText}</span>
        </h1>
        <div className="accent-line accent-line-small"></div>
        <p>{subText}</p>
        <br />

        {calToAction && (
          <a href={calToAction.url} target={calToAction.target} className="btn-primary">
            {calToAction.text}
          </a>
        )}
      </div>
    </div>
  );
};

export default Hero;
