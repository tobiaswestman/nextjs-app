interface Props {
    title: string;
}

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-content">
                <h1>
                    <span className="bold-text">CAMELON-SAAS</span>
                    <span className="lighter-text"> ÄR GRATIS</span>
                </h1>
                <div className="accent-line accent-line-small"></div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, praesentium vero
                    ipsam quis ad similique
                </p>
                <br />

                <a href="#about" className="btn-primary">
                    VISA MER
                </a>
            </div>
        </div>
    );
};

export default Hero;
