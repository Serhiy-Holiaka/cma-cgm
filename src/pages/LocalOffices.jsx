import HeroBlock from '@/components/hero-block';
import heroImage from '/images/local-offices/offices-hero-img.webp';
import Input from '@/components/ui/form/input';

const LocalOffices = () => {
    return (
        <HeroBlock imgSrc={heroImage}>
            <div className="flex justify-between items-center w-full">
                <h1 className="font-mediumWd text-[42px] leading-[130%] text-white">Local Offices</h1>
                <div className="w-full max-w-[750px]">
                    <Input additionalClasses="[&>label]:text-white [&>label]:mb-[10px]" id="country" label="Search a country" placeholder="Country or region" />
                </div>
            </div>
        </HeroBlock>
    );
};

export default LocalOffices;
