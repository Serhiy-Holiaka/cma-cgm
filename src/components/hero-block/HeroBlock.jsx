import PropTypes from 'prop-types';

const HeroBlock = ({ children, videoSrc, imgSrc }) => {
    return (
        <section className="bg-white">
            <div className="relative h-[370px] mt-[112px] flex">
                {videoSrc && <video
                    className="absolute w-full h-full object-cover z-[1]"
                    width={1920}
                    height={370}
                    src={videoSrc}
                    preload="metadata"
                    loop
                    autoPlay
                    muted
                />}
                {imgSrc && <img
                    className="absolute w-full h-full object-cover z-[1]"
                    width={1920}
                    height={370}
                    src={imgSrc}
                    alt="hero-image"
                />}
                <div className="absolute w-full h-full bg-gradient-to-b from-transparent to-black-dark opacity-80 z-[2]" />
                <div className="relative container flex items-center max-w-container z-[3]">{children}</div>
            </div>
        </section>
    );
};

HeroBlock.propTypes = {
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
    videoSrc: PropTypes.string,
    imgSrc: PropTypes.string
};

export default HeroBlock;
