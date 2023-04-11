import Video from '@/components/ui/video';
import videoMission from '@/assets/video/mission.mp4';

const videos = [
    {
        src: videoMission,
        type: 'video/mp4',
    },
    {
        src: videoMission,
        type: 'video/mp4',
    },
];

const OurMission = () => {
    return (
        <section className="py-16">
            <div className="container max-w-container grid grid-cols-2 gap-7">
                <div className="flex flex-col justify-center">
                    <h1 className="text-[42px] leading-[130%] text-black-dark">
                        BETTER WAYS, making supply chains more sustainable every day
                    </h1>
                    <p className="text-base text-black-dark text-opacity-70 max-w-[750px] mt-8 mb-16">
                        The CMA CGM Group’s mission is to contribute to sustainable globalization through better
                        balanced international trade that fosters both economic and social development while respecting
                        the integrity of all men and women and the planet.
                    </p>
                </div>
                <div className="h-[430px]">
                    <Video sourcesList={videos} />
                </div>
            </div>
        </section>
    );
};

export default OurMission;
