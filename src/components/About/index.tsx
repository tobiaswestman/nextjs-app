import Image from 'next/image';

const About = () => {
  return (
    <div className="section about" id="about">
      <div className="container about-left">
        <h2 className="lighter-text">
          Kraftfull mjukvara
          <br />
          gratis!
        </h2>
        <div className="accent-line accent-line-small"></div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium
          minus cumque quam modi provident dicta facere soluta ab molestias
          eaque, alias sequi. Aliquid nostrum ut sit repudiandae incidunt, a
          tenetur? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Deleniti
        </p>

        <a href="https://t.ly/a3N6W" className="link" target="_blank">
          <p>
            SE VIDEON
            <img src="/images/about/play-button.svg" alt="" />
          </p>
        </a>
      </div>
      <div className="container about-right">
        <div className="right-content">
          <Image
            layout="responsive"
            width={530}
            height={308}
            src="/images/about/laptop.png"
            loading="lazy"
            alt="Laptop"
          />
          {/* <img className="about-img" src="/images/about/laptop.png" alt="" /> */}
        </div>
      </div>
    </div>
  );
};

export default About;
