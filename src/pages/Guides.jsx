import HeroBlock from '@/components/hero-block';
import heroImage from '/images/guides/guides-hero-img.webp';

const Guides = () => {
    return (
        <>
            <HeroBlock imgSrc={heroImage}>
                <h1 className="font-mediumWd text-[42px] leading-[130%] text-white">VGM Management at CMA CGM Group</h1>
            </HeroBlock>
            <div>Guides</div>
        </>
    );
};

export default Guides;
