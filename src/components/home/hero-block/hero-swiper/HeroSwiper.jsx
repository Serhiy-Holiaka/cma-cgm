import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper';
import HeroSlider from './HeroSlide';
import { HERO_SLIDER_LIST } from '@/constants/slider.constants';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const HeroSwiper = () => {
    const onAutoplayTimeLeft = (s, time, progress) => {
        let activeBar = document.querySelector('.active-point > .progress-bar');
        if (activeBar) {
            activeBar.style.setProperty('transform', `translateX(${Math.round(progress * 100 * -1)}%)`);
        }
    };

    return (
        <div className="relative w-full h-full ml-auto">
            <Swiper
                modules={[Autoplay, EffectFade, Pagination]}
                slidesPerView={1}
                autoplay={{
                    delay: 7000,
                    disableOnInteraction: false,
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
                        return `<div class='holder relative ${className} w-full h-full overflow-hidden border-l border-l-[#191D23] first:border-l-transparent'><span class="progress-bar -translate-x-[101%] transition-all"></span><span id="progressContent" class="relative flex items-center justify-center w-full h-full font-medium text-[15px] leading-none text-white z-[1]">${HERO_SLIDER_LIST[index].paginStep}</span></div>`;
                    },
                }}
                className="h-full"
            >
                {HERO_SLIDER_LIST.map(({ video, title }, i) => (
                    <SwiperSlide key={i}>
                        <HeroSlider video={video} title={title} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div
                id="paginationHolder"
                className="absolute !bottom-0 !left-2/4 bg-black-dark !-translate-x-2/4 !w-full max-w-container flex h-[55px] gap-[1px] z-[3]"
            />
        </div>
    );
};

export default HeroSwiper;
