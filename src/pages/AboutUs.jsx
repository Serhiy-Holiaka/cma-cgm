import HeroBlock from '@/components/hero-block';
import OurMission from '@/components/about-us';
import video from '@/assets/video/slide_one.mp4';

const AboutUs = () => {
    return (
        <>
            <HeroBlock videoSrc={video}>
                <h1 className="font-mediumWd text-[42px] leading-[130%] text-white">CMA CGM Group</h1>
            </HeroBlock>
            <OurMission />
        </>
    );
};

export default AboutUs;
