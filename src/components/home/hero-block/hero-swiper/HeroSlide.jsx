import { memo } from 'react';
import PropTypes from 'prop-types';
import TabsPane from '@/components/tab/TabsPane';

const HeroSlide = ({ video, title }) => {
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
            <div className="relative container max-w-container mx-auto h-[calc(100%-55px)] grid grid-cols-2 z-[3] gap-8">
                <div className="flex items-center">
                    <h1 className="font-mediumWd text-[42px] leading-[130%] text-white">{title}</h1>
                </div>
                <div className="flex flex-col items-end">
                    <div className="w-full max-w-[620px] mt-[38.5%] min-h-[55px] px-[30px] py-8 bg-white">
                        <TabsPane />
                    </div>
                </div>
            </div>
        </div>
    );
};

HeroSlide.propTypes = {
    video: PropTypes.string,
    title: PropTypes.string,
};

export default memo(HeroSlide);
