import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper';
import HeroSlider from './HeroSlide';
import { HERO_SLIDER_LIST } from '@/constants/slider.constants';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const HeroSwiper = () => {
    return (
        <div className="relative w-full h-full ml-auto">
            <Swiper
                modules={[Autoplay, EffectFade, Pagination]}
                slidesPerView={1}
                autoplay={false/*{
                    delay: 5000,
                    disableOnInteraction: true,
                    pauseOnMouseEnter: true,
                }*/}
                effect="fade"
                loop={true}
                pagination={true}
                className="h-full"
            >
                {HERO_SLIDER_LIST.map(({ video }, i) => (
                    <SwiperSlide key={i}>
                        <HeroSlider video={video} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default HeroSwiper;
