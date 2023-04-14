import HeroBlock from '@/components/hero-block';
import heroImage from '/images/group/CMAgroup-hero.webp';
import RightBar from '@/components/right-bar';
import Video from '@/components/ui/video';
import videoPoster from '/images/group/biofuel-poster.webp';
import videoMission from '@/assets/video/mission.mp4';
import enegryImgOne from '/images/group/energy-1.webp';
import enegryImgTwo from '/images/group/energy-2.webp';
import enegryImgThree from '/images/group/energy-3.webp';
import clientOne from '/images/group/client-1.webp';
import clientTwo from '/images/group/client-2.webp';
import clientThree from '/images/group/client-3.webp';

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

const sublist = [
    {
        subTitle: 'Cargo care',
    },
    {
        subTitle: 'Serenity',
    },
    {
        subTitle: 'Supply chain agility',
    },
    {
        subTitle: 'Environmental services',
    },
    {
        subTitle: 'Business support',
    },
];

const CMAGroup = () => {
    return (
        <>
            <HeroBlock imgSrc={heroImage}>
                <h1 className="font-mediumWd text-[42px] leading-[130%] text-white">VGM Management at CMA CGM Group</h1>
            </HeroBlock>
            <section className="container max-w-container grid grid-cols-secondary gap-7 py-16">
                <div>
                    <h1 className="text-[42px] leading-[130%] text-black-dark">
                        Take control of the carbon footprint of your shipments
                    </h1>
                    <p className="text-base text-black-dark text-opacity-70 mt-8 mb-16">
                        Combating global warming is a strategic imperative for your business, especially with the
                        growing demand among your customers for evidence of the action you are taking. You have no doubt
                        made practical commitments to your various stakeholders that you will cut your carbon footprint.
                        And the transition within your supply chain to more environmentally-friendly cargo shipments is
                        a crucial way of meeting this goal. To support you with achieving a positive environmental
                        impact, we can provide you with solutions for analyzing, reducing and offsetting the carbon
                        footprint of your international cargo shipments.
                    </p>
                    <div className="grid grid-cols-3 gap-7">
                        <div>
                            <div className="font-semibold text-[32px] text-red flex items-center justify-center w-[92px] h-[92px] mb-6 rounded-full border border-[#e3e5eb]">
                                <span>1</span>
                            </div>
                            <p className="font-semibold text-[15px] leading-[200%]">
                                Our range of solutions for analyzing, reducing and offsetting the carbon footprint of
                                your shipments.
                            </p>
                        </div>
                        <div>
                            <div className="font-semibold text-[32px] text-red flex items-center justify-center w-[92px] h-[92px] mb-6 rounded-full border border-[#e3e5eb]">
                                <span>2</span>
                            </div>
                            <p className="font-semibold text-[15px] leading-[200%]">
                                An illustration of how you can use ground-breaking, practical solutions to make a real
                                difference to the climate and air quality.
                            </p>
                        </div>
                        <div>
                            <div className="font-semibold text-[32px] text-red flex items-center justify-center w-[92px] h-[92px] mb-6 rounded-full border border-[#e3e5eb]">
                                <span>3</span>
                            </div>
                            <p className="font-semibold text-[15px] leading-[200%]">
                                Solutions available on all our lines thanks to the Mass Balance Concept (all the
                                aggregate quantities of the various types of fuel we use are recorded, and these
                                quantities are then allocated to specific traffic movements).
                            </p>
                        </div>
                    </div>
                    <div className="h-[640px] my-16">
                        <Video sourcesList={videos} poster={videoPoster} />
                    </div>
                    <h1 className="text-[42px] leading-[130%] text-black-dark">
                        Cost-effective solutions proven to keep a tight grip on your shipping-related carbon footprint
                    </h1>
                    <p className="text-base text-black-dark text-opacity-70 mt-8 mb-16">
                        To support you with achieving your goals, we have developed services that help you take the
                        management of your environmental performance to the next level. They can help you reach your
                        carbon footprint reduction targets and provide you with an official statement from CMA CGM
                        indicating the carbon emission savings your action has delivered. If you decide to offset your
                        emissions, you will receive an official certificate showing the exact amount of carbon emissions
                        you have offset.
                    </p>
                    <div className="grid grid-cols-3 gap-7">
                        <div>
                            <h3 className="text-2xl leading-[130%] text-center">
                                Choose the lowest carbon intensity available with CLEANER ENERGY Biofuel.
                            </h3>
                            <p className="text-base text-center text-black-dark text-opacity-70 uppercase mt-8 mb-4">
                                ENVIRONMENTAL SERVICES
                            </p>
                            <p className="font-semibold text-2xl text-center text-black-dark mb-4">
                                CLEANER ENERGY biofuel
                            </p>
                            <div className="relative h-[112px]">
                                <img
                                    className="absolute w-full h-full object-cover"
                                    src={enegryImgOne}
                                    alt="Energy biofuel"
                                />
                            </div>
                            <p className="text-base text-black-dark text-opacity-70 text-center mt-4">
                                Choose the energy with the lowest carbon intensity available on the market to keep a
                                grip on your shipping-related carbon footprint. Choose shipping solutions based on
                                UCOME-powered (Used Cooking Oil Methyl Esther) ships, our second-generation biofuel, and
                                cut the carbon emissions generated by your shipments by at least 84%.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl leading-[130%] text-center">
                                Control your shipping-related carbon footprint with CLEANER ENERGY LNG
                            </h3>
                            <p className="text-base text-center text-black-dark text-opacity-70 uppercase mt-8 mb-4">
                                ENVIRONMENTAL SERVICES
                            </p>
                            <p className="font-semibold text-2xl text-center text-black-dark mb-4">
                                CLEANER ENERGY LNG
                            </p>
                            <div className="relative h-[112px]">
                                <img
                                    className="absolute w-full h-full object-cover"
                                    src={enegryImgTwo}
                                    alt="Energy biofuel"
                                />
                            </div>
                            <p className="text-base text-black-dark text-opacity-70 text-center mt-4">
                                This service delivers significant reductions in your carbon emissions of at least 25%
                                per container and massive cuts to atmospheric pollutants. Using liquefied natural gas
                                (LNG) propulsion systems, combined with guaranteed-origin biomethane can produce a
                                positive impact on public health and the environment.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl leading-[130%] text-center">
                                Offset your emissions and achieve a positive environmental impact
                            </h3>
                            <p className="text-base text-center text-black-dark text-opacity-70 uppercase mt-8 mb-4">
                                ENVIRONMENTAL SERVICES
                            </p>
                            <p className="font-semibold text-2xl text-center text-black-dark mb-4">POSITIVE OFFSET</p>
                            <div className="relative h-[112px]">
                                <img
                                    className="absolute w-full h-full object-cover"
                                    src={enegryImgThree}
                                    alt="Energy biofuel"
                                />
                            </div>
                            <p className="text-base text-black-dark text-opacity-70 text-center mt-4">
                                Offset the residual emissions of your shipments and get a certificate from CMA CGM
                                officially indicating the carbon emissions you have offset via Gold Standard, VCS and
                                other equivalent organizations. In addition, you can achieve a positive impact on local
                                communities through social-environmental projects.
                            </p>
                        </div>
                    </div>
                    <h1 className="text-[42px] leading-[130%] text-black-dark mt-16">Transition to cleaner shipping</h1>
                    <p className="text-base text-black-dark text-opacity-70 mt-8 mb-16">
                        Even though freight shipping merely accounts for 2% to 3% of global greenhouse gas emissions,
                        the sector’s emissions are set to increase with the growth in cargo shipping because it plays
                        such a crucial role and is the most cost-effective. To lead the way towards cleaner shipping, we
                        are implementing an array of game-changing initiatives to support you—whether you are a business
                        or a producer—with controlling your carbon footprint and reporting back to your own customers.
                        We can provide customized carbon emission reports analyzing the shipping-related carbon
                        footprint of all your cargo shipments, plus made-to-measure optimization studies to adjust sea
                        routes or harness intermodal solutions for door-to-door transport. Working alongside you on a
                        daily basis, we strive to make international trade more responsible. Our fleet has embarked on
                        an unprecedented energy transition to help you cut the carbon footprint of your cargo shipments.
                        Liquefied natural gas (LNG) powers some of the latest ships to join our fleet, and these vessels
                        are also equipped to run on biofuel and e-methane. We also use greener alternative fuels. In
                        addition, we are also developing next-generation lighter containers, rail and river solutions,
                        and R&D partnerships. For more details, click here.
                    </p>
                    <h1 className="text-[42px] leading-[130%] text-black-dark mb-16">Meet some clients</h1>
                    <div className="grid grid-cols-3 gap-7">
                        <div>
                            <p className="text-base text-center text-black-dark text-opacity-70 uppercase mb-4">
                                CLEANER ENERGY BIOFUEL
                            </p>
                            <p className="font-semibold text-2xl text-center text-black-dark mb-4">POSITIVE OFFSET</p>
                            <div className="relative h-[112px]">
                                <img
                                    className="absolute w-full h-full object-cover"
                                    src={clientOne}
                                    alt="Energy biofuel"
                                />
                            </div>
                            <p className="text-base text-black-dark text-opacity-70 text-center mt-4">
                                Nestlé has reduced 1,426 tons of CO2 in 2021 thanks to CLEANER ENERGY biofuel.
                            </p>
                        </div>
                        <div>
                            <p className="text-base text-center text-black-dark text-opacity-70 uppercase mb-4">
                                CLEANER ENERGY BIOFUEL
                            </p>
                            <p className="font-semibold text-2xl text-center text-black-dark mb-4">POSITIVE OFFSET</p>
                            <div className="relative h-[112px]">
                                <img
                                    className="absolute w-full h-full object-cover"
                                    src={clientTwo}
                                    alt="Energy biofuel"
                                />
                            </div>
                            <p className="text-base text-black-dark text-opacity-70 text-center mt-4">
                                Nestlé has reduced 1,426 tons of CO2 in 2021 thanks to CLEANER ENERGY biofuel.
                            </p>
                        </div>
                        <div>
                            <p className="text-base text-center text-black-dark text-opacity-70 uppercase mb-4">
                                CLEANER ENERGY BIOFUEL
                            </p>
                            <p className="font-semibold text-2xl text-center text-black-dark mb-4">POSITIVE OFFSET</p>
                            <div className="relative h-[112px]">
                                <img
                                    className="absolute w-full h-full object-cover"
                                    src={clientThree}
                                    alt="Energy biofuel"
                                />
                            </div>
                            <p className="text-base text-black-dark text-opacity-70 text-center mt-4">
                                Nestlé has reduced 1,426 tons of CO2 in 2021 thanks to CLEANER ENERGY biofuel.
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <RightBar title="CMA CGM+ services" subList={sublist} />
                </div>
            </section>
        </>
    );
};

export default CMAGroup;
