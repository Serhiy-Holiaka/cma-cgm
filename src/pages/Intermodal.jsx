import { Link } from 'react-router-dom';
import HeroBlock from '@/components/hero-block';
import heroImage from '/images/logistics/intermodal-hero.webp';
import RightBar from '@/components/right-bar';
import Video from '@/components/ui/video';
import videoPoster from '/images/logistics/intermodal-video-poster.webp';
import videoCargo from '@/assets/video/mission.mp4';
import Button from '@/components/ui/button';
import FAQitems from '@/components/ui/faq';
import { FAQ_INTERMODAL } from '@/constants/faqItems.constants';

const videos = [
    {
        src: videoCargo,
        type: 'video/mp4',
    },
    {
        src: videoCargo,
        type: 'video/mp4',
    },
];

const sublist = [
    {
        subTitle: 'Africa',
    },
    {
        subTitle: 'Asia',
    },
    {
        subTitle: 'Latin America',
    },
    {
        subTitle: 'Europe',
    },
    {
        subTitle: 'India',
    },
    {
        subTitle: 'Middle East',
    },
    {
        subTitle: 'North America',
    },
    {
        subTitle: 'Oceania',
    },
];

const Intermodal = () => {
    return (
        <>
            <HeroBlock imgSrc={heroImage}>
                <h1 className="font-mediumWd text-[42px] leading-[130%] text-white">Intermodal Solutions</h1>
            </HeroBlock>
            <section className="container max-w-container grid xl:grid-cols-secondary gap-7 py-16">
                <div className="order-2 xl:order-1">
                    <h1 className="text-[42px] leading-[130%] text-black-dark">
                        Integrated and sustainable door-to-door intermodal freight transport solutions
                    </h1>
                    <p className="text-base text-black-dark text-opacity-70 mt-8 mb-16">
                        Several modes of transport are often needed to carry your products from their place of origin to
                        their final destination. The challenge for your business is finding effective and interconnected
                        intermodal freight transport solutions. We provide help with high quality and environmentally
                        friendly transportation solutions. As a world market leader in shipping and logistics, we have
                        developed a dedicated door-to-door service: CMA CGM Intermodal combining train, barge and truck,
                        following on from our shipping services.
                    </p>
                    <div className="h-[640px] my-16">
                        <Video sourcesList={videos} poster={videoPoster} />
                    </div>
                    <h1 className="text-[42px] leading-[130%] text-black-dark mt-16 mb-8">
                        Door-to-door with complete peace of mind with our intermodal freight transport solutions
                    </h1>
                    <p className="text-base text-black-dark text-opacity-70 mb-8">
                        We draw on the full strength of our land-based infrastructure to offer you the best intermodal
                        freight transport services. The coverage of our land-based infrastructures all over the world
                        and the density of our regional connections means that your goods can reliably be{' '}
                        <Link className="underline">delivered to local markets.</Link>
                    </p>
                    <ul className="list-disc font-mediumWd text-base leading-8 text-black-dark pl-8">
                        <li>160 countries</li>
                        <li>438 inland terminals</li>
                        <li>755 agencies worldwide</li>
                        <li>7.2m TEU transported by intermodal services in 2020</li>
                        <li>70% of volumes carried by environmentally friendly modes of transport.</li>
                    </ul>
                    <h1 className="text-[42px] leading-[130%] text-black-dark mt-16 mb-8">
                        Secure and reliable intermodal freight transport anywhere in the world, including to and from
                        landlocked countries
                    </h1>
                    <ul className="list-disc font-mediumWd text-base leading-8 text-black-dark pl-8">
                        <li>Africa</li>
                        <li>Asia</li>
                        <li>Latin America</li>
                        <li>Europe</li>
                        <li>India</li>
                        <li>Middle East</li>
                        <li>North America</li>
                        <li>Asia-Pacific</li>
                    </ul>
                    <h1 className="text-[42px] leading-[130%] text-black-dark mt-16 mb-8">
                        Intermodal freight transport services dedicated to serving your operational excellence
                    </h1>
                    <p className="text-base text-black-dark text-opacity-70 mb-8">
                        All over the world, CMA CGM Intermodal’s teams work with you to come up with the best solution
                        for your business and help you to achieve operational excellence.
                    </p>
                    <ul className="list-disc font-mediumWd text-base leading-8 text-black-dark pl-8">
                        <li>A single point of contact, with Intermodal expert teams all over the world,</li>
                        <li>Bespoke solutions to meet all your needs,</li>
                        <li>Facilities available on all continents,</li>
                        <li>Door-to-door or inland depot service, depending on your needs,</li>
                        <li>
                            <Link className="text-[#074CE4] text-opacity-70 underline">Priority treatment</Link> of your
                            cargos.
                        </li>
                    </ul>
                    <h1 className="text-[42px] leading-[130%] text-black-dark mt-16 mb-8">
                        Sustainable intermodal freight transport solutions that reduce your carbon footprint
                    </h1>
                    <p className="text-base text-black-dark text-opacity-70 mb-8">
                        Combating climate change is a major strategic concern and implementing intermodal freight
                        transport solutions helps to control your carbon footprint. In addition to our clean shipping
                        solutions, our intermodal freight transport services put you at a real advantage in order to
                        achieve your goals in terms of reducing your carbon footprint in relation to freight
                        transportation.
                    </p>
                    <ul className="list-disc font-mediumWd text-base leading-8 text-black-dark pl-8">
                        <li>Dedicated trains and barges to reduce your carbon footprint,</li>
                        <li>Optimized itineraries to limit fuel consumption,</li>
                        <li>Priority given to the most environmentally friendly modes of transport.</li>
                    </ul>
                    <h1 className="text-[42px] leading-[130%] text-black-dark mt-16 mb-8">
                        Visibility, saving time and lower costs: 3 advantages of CMA CGM’s door-to-door service
                    </h1>
                    <p className="text-base text-black-dark text-opacity-70 mb-8">
                        Make savings with our intermodal freight transport solutions and access additional services in
                        order to go even further in optimizing your <Link className="underline">logistics chain.</Link>
                    </p>
                    <ul className="list-disc font-mediumWd text-base leading-8 text-black-dark pl-8 mb-8">
                        <li>
                            Through bill of lading: just one travel document covering transportation by both land and
                            sea,
                        </li>
                        <li>Preferential detention and demurrage charges,</li>
                        <li>Customs clearance service available on request,</li>
                        <li>Simplified booking and tracking using My CMA CGM,</li>
                        <li>Protect the value of your goods with the SERENITY cargo value guarantee,</li>
                        <li>TRAXENS tracking including for land transportation.</li>
                    </ul>
                    <Button>Download our broshure</Button>
                    <div>
                        <h1 className="text-[42px] leading-none text-black-dark text-center uppercase py-16">FAQ</h1>
                        <div className="container max-w-container">
                            <FAQitems list={FAQ_INTERMODAL} />
                        </div>
                    </div>
                </div>
                <div className="order-1 xl:order-2">
                    <RightBar title="Intermodal solutions" subList={sublist} />
                </div>
            </section>
        </>
    );
};

export default Intermodal;
