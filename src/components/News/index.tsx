interface ArticleProps {
    headline: string;
    subText: string;
    imageUrl: string;
}

const ArticleElement = ({ headline, subText, imageUrl }: ArticleProps) => (
    <div className="article-card">
        <div className="card-image">
            <img src={imageUrl} alt="Image description" />
            <div className="accent-line-slanted"></div>
        </div>
        <div className="article-card-content">
            <h3>{headline}</h3>
            <p>{subText}</p>
        </div>
    </div>
);

const News = () => {
    const Articles = [
        {
            headline: "1. LOREM IPSUMA DOLOR SIT",
            subText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia minima",
            imageUrl: "images/news/yosemite.jpeg",
        },
        {
            headline: "2. LOREM IPSUMA DOLOR SIT",
            subText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia minima",
            imageUrl: "images/news/newyork.jpeg",
        },
        {
            headline: "3. LOREM IPSUMA DOLOR SIT",
            subText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia minima",
            imageUrl: "images/news/lake.png",
        },
        {
            headline: "4. LOREM IPSUMA DOLOR SIT",
            subText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia minima",
            imageUrl: "images/news/tree.jpeg",
        },
        {
            headline: "5. LOREM IPSUMA DOLOR SIT",
            subText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia minima",
            imageUrl: "images/news/umbrella.jpeg",
        },
        {
            headline: "6. LOREM IPSUMA DOLOR SIT",
            subText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia minima",
            imageUrl: "images/news/flowers.jpeg",
        },
    ];

    return (
        <div className="section news" id="news">
            <div className="column-container">
                <div className="container update-info">
                    <h2 className="lighter-text">Våra senaste uppdateringar</h2>
                    <div className="accent-line accent-line-small"></div>
                    <p className="news-text">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium minus
                        cumque quam modi provident dicta facere soluta ab molestias eaque, alias
                        sequi. Aliquid nostrum ut sit repudiandae incidunt, a tenetur?
                    </p>
                </div>
                <div className="grid-container">
                    {Articles.map((card, index) => (
                        <ArticleElement key={index} {...card} />
                    ))}
                </div>
                <div className="show-more-container">
                    <div className="show-more">
                        <div className="column-container">
                            <a href="#productivity">
                                <p>VISA MER</p>

                                <img
                                    src="/images/news/down-arrow.svg"
                                    alt=""
                                    className="down-arrow"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;
