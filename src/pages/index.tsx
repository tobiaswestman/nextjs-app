import Head from "next/head";

// Components
import Hero from "@/components/Hero";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import About from "@/components/About";
import SellingPoints from "@/components/SellingPoints";
import TextCarousel from "@/components/TextCarousel";
import ProductShowcase from "@/components/ProductShowcase";
import CommunityBanner from "@/components/CommunityBanner";
import News from "@/components/News";
import Productivity from "@/components/Productivity";

// Models
import {
    AboutSection,
    HeroSection,
    ProductShowcaseSection,
    SellingPointsSection,
    TextCarouselSection,
    CommunityBannerSection,
    NewsSection,
    ProductivitySection,
} from "@/models/Sections";

export default function Home() {
    // Denna data kommer senare att hämtas från CMS och skickas in i sektionskomponenterna
    const heroSection: HeroSection = {
        boldText: "CAMELON-SAAS",
        lightText: " ÄR GRATIS",
        subText:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, praesentium vero ipsam quis ad similique",
        callToAction: {
            url: "#about",
            text: "LÄS MER",
            target: "_self",
        },
    };

    const aboutSection: AboutSection = {
        title: "Kraftfull mjukvara \n gratis!",
        subText:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium minus cumque quam modi provident dicta facere soluta ab molestias eaque, alias sequi. Aliquid nostrum ut sit repudiandae incidunt, a tenetur? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti",
        imageUrl: "/images/about/laptop.png",
        callToAction: {
            url: "https://t.ly/a3N6W",
            text: "SE VIDEON",
            target: "target",
        },
    };

    const sellingPointsSection: SellingPointsSection = {
        title: "Funktioner",
        subText:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium minus cumque quam modi provident dicta facere soluta ab molestias eaque, alias sequi. Aliquid nostrum ut sit repudiandae incidunt, a tenetur?",
        sellingPoints: [
            {
                text: "HELT FLEXIBEL",
                imageUrl: "images/sellingPoints/flexible-icon.svg",
            },
            {
                text: "GRATIS NEDLADDNING",
                imageUrl: "images/sellingPoints/download-icon.svg",
            },
            {
                text: "MODERN DESIGN",
                imageUrl: "images/sellingPoints/design-icon.svg",
            },
            {
                text: "100% RESPONSIV",
                imageUrl: "images/sellingPoints/responsive-icon.svg",
            },
        ],
    };

    const textCarouselSection: TextCarouselSection = {
        texts: [
            "1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur perferendis blanditiis, aperiam voluptas libero pariatur delectus cumquerecusandae. Ipsam aliquam quisquam molestias unde. Veritatis eum, deserunt",
            "2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur perferendis blanditiis, aperiam voluptas libero pariatur delectus cumquerecusandae. Ipsam aliquam quisquam molestias unde. Veritatis eum, deserunt",
            "3. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur perferendis blanditiis, aperiam voluptas libero pariatur delectus cumquerecusandae. Ipsam aliquam quisquam molestias unde. Veritatis eum, deserunt",
            "4. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur perferendis blanditiis, aperiam voluptas libero pariatur delectus cumquerecusandae. Ipsam aliquam quisquam molestias unde. Veritatis eum, deserunt",
        ],
    };

    const productShowcaseSection: ProductShowcaseSection = {
        title: "Våra priser",
        subText:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium minus cumque quam modi provident dicta facere soluta ab molestias eaque, alias sequi. Aliquid nostrum ut sit repudiandae incidunt, a tenetur?",
        productCards: [
            {
                price: 0,
                version: "FREEMIUM",
                features: [
                    "1 Projekt",
                    "100 MB Lagring",
                    "Notification settings",
                    "Password protection",
                ],
            },
            {
                price: 390,
                version: "STANDARD",
                features: [
                    "15 Projekt",
                    "1 GB Lagring",
                    "Notification settings",
                    "Password protection",
                ],
            },
            {
                price: 590,
                version: "BUSINESS",
                features: [
                    "30 Projekt",
                    "2 GB Lagring",
                    "Notification settings",
                    "Password protection",
                ],
            },
            {
                price: 990,
                version: "PREMIUM",
                features: [
                    "+99 Projekt",
                    "+99 GB Lagring",
                    "Notification settings",
                    "Password protection",
                ],
            },
        ].map((card) => ({
            ...card,
            callToAction: {
                url: "#about",
                text: card.price === 0 ? "STARTA" : "KÖP",
                target: "_self",
            },
        })),
    };

    const communityBannerSection: CommunityBannerSection = {
        lightText1: "BLI EN DEL AV VÅRAT",
        boldText: " COMMUNITY ",
        lightText2: "IDAG",
        callToAction: {
            url: "#news",
            text: "JAJAMÄN",
            target: "_self",
        },
    };

    const newsSection: NewsSection = {
        title: "Våra senaste uppdateringar",
        subText:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium minus cumque quam modi provident dicta facere soluta ab molestias eaque, alias sequi. Aliquid nostrum ut sit repudiandae incidunt, a tenetur?",
        articles: [
            {
                title: "1. LOREM IPSUMA DOLOR SIT",
                subText:
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia minima",
                imageUrl: "/images/news/yosemite.jpeg",
            },
            {
                title: "2. LOREM IPSUMA DOLOR SIT",
                subText:
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia minima",
                imageUrl: "/images/news/newyork.jpeg",
            },
            {
                title: "3. LOREM IPSUMA DOLOR SIT",
                subText:
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia minima",
                imageUrl: "/images/news/lake.png",
            },
            {
                title: "4. LOREM IPSUMA DOLOR SIT",
                subText:
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia minima",
                imageUrl: "/images/news/tree.jpeg",
            },
            {
                title: "5. LOREM IPSUMA DOLOR SIT",
                subText:
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia minima",
                imageUrl: "/images/news/umbrella.jpeg",
            },
            {
                title: "6. LOREM IPSUMA DOLOR SIT",
                subText:
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia minima",
                imageUrl: "/images/news/flowers.jpeg",
            },
        ],
    };

    const productivitySection: ProductivitySection = {
        title: "Ökad produktivitet",
        subText:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius fuga ratione repellendus commodi, optio illum id odit dolores! Labore debitis cum provident ullam quaerat sapiente, fuga inventore asperiores reprehenderit a quia ducimus assumenda est fugiat vero deserunt eligendi perferendis totam temporibus culpa natus soluta. Molestias distinctio neque placeat minima esse.",
        callToAction: {
            url: "#functions",
            text: "LÄS MER",
            target: "_self",
        },
    };

    return (
        <>
            <Header />
            <Head>
                <title>CamelonSaaS - Home Page</title>
                <meta name="description" content="Generated by create next app" />
            </Head>
            <main>
                <Hero {...heroSection} />
                <About {...aboutSection} />
                <SellingPoints {...sellingPointsSection} />
                <TextCarousel {...textCarouselSection} />
                <ProductShowcase {...productShowcaseSection} />
                <CommunityBanner {...communityBannerSection} />
                <News {...newsSection} />
                <Productivity {...productivitySection} />
            </main>
            <Footer />
        </>
    );
}
