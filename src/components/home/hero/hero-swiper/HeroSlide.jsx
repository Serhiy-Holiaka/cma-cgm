import { memo } from 'react';
import PropTypes from 'prop-types';

const HeroSlide = ({ video }) => {
    return (
        <div className="relative h-full w-full bg-white">
            <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full z-[2] bg-black opacity-70" />
            <video
                className="absolute w-full h-full object-cover z-[1]"
                width={1920}
                height={1080}
                src={video}
                loop
                autoPlay
                muted
            />
        </div>
    );
};

HeroSlide.propTypes = {
    video: PropTypes.string,
};

export default memo(HeroSlide);
