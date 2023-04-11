import video from '@/assets/video/slide_one.mp4';

const AboutUsHero = () => {
    return (
        <section className="bg-white">
            <div className="relative h-[370px] mt-[112px] flex">
                <video
                    className="absolute w-full h-full object-cover z-[1]"
                    width={1920}
                    height={370}
                    src={video}
                    loop
                    autoPlay
                    muted
                />
                <div className="absolute w-full h-full bg-gradient-to-b from-transparent to-black-dark opacity-80 z-[2]" />
                <div className="relative container flex items-center max-w-container z-[3]">
                    <h1 className="font-mediumWd text-[42px] leading-[130%] text-white">CMA CGM Group</h1>
                </div>
            </div>
        </section>
    );
};

export default AboutUsHero;
