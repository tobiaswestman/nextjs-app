const Footer = () => {
    let currentYear = new Date();

    return (
        <>
            <div className="footer">&copy; {currentYear.getFullYear()} COPYRIGHT CAMELONSAAS</div>
        </>
    );
};

export default Footer;
