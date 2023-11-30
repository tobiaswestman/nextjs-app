import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
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

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <>
            <Header />
            <Head>
                <title>CamelonSaaS</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/logo.png" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <main>
                <Hero />
                <About />
                <SellingPoints />
                <TextCarousel />
                <ProductShowcase />
                <CommunityBanner />
                <News />
                <Productivity />
            </main>
            <Footer />
        </>
    );
}
