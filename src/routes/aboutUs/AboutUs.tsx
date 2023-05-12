import "./AboutUs.scss";

const AboutUs = () => {
    return (
        <div className="about-us">
            <div className="about-us__section">
                <span className="about-us__header">ABOUT US</span>
                <p>
                    <span>
                        Welcome to our online shirt store! We may not sell real products, but we
                        take our virtual shirts seriously.
                    </span>
                </p>
                <p>
                    <span>
                        At our company, we believe that fashion should be accessible to everyone.
                        That&apos;s why we&apos;ve created this online store to showcase our passion
                        for stylish, affordable shirts. Our web developer, Maxime Cesare-Zurek, is
                        dedicated to bringing you the best online shopping experience possible.
                    </span>
                </p>
                <p>
                    <span>
                        From our trendy graphic tees to our classic button-ups, we&apos;ve got
                        something for everyone. Our shirts are made with high-quality materials and
                        are designed to look great on anyone. We&apos;re constantly updating our
                        inventory with new styles, so be sure to check back often!
                    </span>
                </p>
                <p>
                    <span>
                        Thank you for choosing our shirt store for your online shopping needs. We
                        appreciate your business!
                    </span>
                </p>
            </div>
            <img
                alt="About Us"
                className="about-us__banner-image"
                src="/images/about-us-banner.jpg"
            />
        </div>
    );
};

export default AboutUs;
