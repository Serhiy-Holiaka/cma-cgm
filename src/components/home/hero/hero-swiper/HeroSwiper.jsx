import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper';
import HeroSlider from './HeroSlide';
import { HERO_SLIDER_LIST } from '@/constants/slider.constants';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const HeroSwiper = () => {
    let progressBar = document.querySelector('.progress-bar');
    const onAutoplayTimeLeft = (s, time, progress) => {
        console.log(s);
        let activeBar = document.querySelector('.active-point > .progress-bar');
        if (activeBar) {
            activeBar.style.setProperty('transform', `translateX(${Math.round(progress * 100 * -1)}%)`);
        }
    };
    useEffect(() => {
        if (progressBar) {
            progressBar.setProperty('transform', 'translateX(-101%)');
        }
    }, [progressBar]);

    return (
        <div className="relative w-full h-full ml-auto">
            <Swiper
                modules={[Autoplay, EffectFade, Pagination]}
                slidesPerView={1}
                autoplay={{
                    delay: 10000,
                    disableOnInteraction: true,
                    pauseOnMouseEnter: true,
                }}
                effect="fade"
                loop={true}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                pagination={{
                    clickable: true,
                    el: '#paginationHolder',
                    bulletClass: 'bullet-custom',
                    bulletActiveClass: 'active-point',
                    renderBullet: function (index, className) {
                        return `<div class='relative ${className} w-full h-full overflow-hidden'><span class="progress-bar absolute left-0 -translate-x-[101%] w-full bg-purple-700 h-full transition-all"></span><span id="progressContent">${index}</span></div>`;
                    },
                }}
                className="h-full"
            >
                {HERO_SLIDER_LIST.map(({ video }, i) => (
                    <SwiperSlide key={i}>
                        <HeroSlider video={video} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div
                id="paginationHolder"
                className="absolute !bottom-0 !left-2/4 !-translate-x-2/4 !w-full max-w-container flex h-[55px] gap-1 z-[3]"
            />
        </div>
    );
};

export default HeroSwiper;
