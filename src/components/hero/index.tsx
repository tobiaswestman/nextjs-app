interface Props {
    title: string;
}

const Hero = (Props: any) => {
    return <div>{Props.title}</div>;
};

export default Hero;
