import { Link } from 'react-router-dom';
import HeroBlock from '@/components/hero-block';
import heroImage from '/images/cargo/cargo-hero.webp';
import RightBar from '@/components/right-bar';
import Video from '@/components/ui/video';
import videoPoster from '/images/cargo/cargo-video-poster.webp';
import videoCargo from '@/assets/video/mission.mp4';
import Button from '@/components/ui/button';
import TeamIcon from '@/components/ui/icons/TeamIcon';
import ProcessIcon from '@/components/ui/icons/ProcessIcon';
import PromisingIcon from '@/components/ui/icons/PromisingIcon';
import ReliabilityIcon from '@/components/ui/icons/ReliabilityIcon';
import interestImgOne from '/images/cargo/interest-1.webp';
import interestImgTwo from '/images/cargo/interest-2.webp';
import interestImgThree from '/images/cargo/interest-3.webp';
import guideBg from '/images/guides/guide-bg.webp';
import FAQitems from '@/components/ui/faq';
import { FAQ_CARGO } from '@/constants/faqItems.constants';

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

const cardsList = [
    {
        title: 'Up to 500 tons',
        subTitle: 'in a single shipment',
    },
    {
        title: '330,000 TEU',
        subTitle: 'in 2020',
    },
    {
        title: '1',
        subTitle: 'single entry point',
    },
    {
        title: '24/7',
        subTitle: 'Availability',
    },
    {
        title: '420',
        subTitle: 'ports around the world',
    },
    {
        title: '250+',
        subTitle: 'shipping lines',
    },
];

const sublist = [
    {
        subTitle: 'Refrigerated cargo',
    },
    {
        subTitle: 'Oversized cargo',
    },
];

const OversizedCargo = () => {
    return (
        <>
            <HeroBlock imgSrc={heroImage}>
                <h1 className="font-mediumWd text-[42px] leading-[130%] text-white">Special Cargo</h1>
            </HeroBlock>
            <section className="container max-w-container grid grid-cols-secondary gap-7 py-16">
                <div>
                    <h1 className="text-[42px] leading-[130%] text-black-dark">
                        Have CMA CGM ship your oversized cargo
                    </h1>
                    <p className="text-base text-black-dark text-opacity-70 mt-8 mb-16">
                        Shipping heavy equipment, industrial machinery, or fragile and oversized cargo requires special
                        expertise. Oversized cargo is cargo that is unusually large and cannot be shipped in a standard
                        container. Our specialist teams are on hand to help you ship any type of oversized product
                        anywhere in the world. We can mix and match our end-to-end, bespoke solutions and our loading
                        and unloading capacity at 420 ports with versatile and flexible service offerings to deliver a
                        secure service.
                        <br />
                        <br />
                        CMA CGM’s Project Cargo division, exceeding your highest expectations
                    </p>
                    <div className="h-[640px] my-16">
                        <Video sourcesList={videos} poster={videoPoster} />
                    </div>
                    <div className="flex items-center justify-between mb-12">
                        <h1 className="text-[42px] leading-[130%] text-black-dark">Why choose us?</h1>
                        <Button>Download our broshure</Button>
                    </div>
                    <div className="grid grid-cols-3 gap-x-7 gap-y-12">
                        <div>
                            <TeamIcon />
                            <h6 className="font-medium text-2xl mt-7 mb-6">A dedicated team</h6>
                            <p className="font-regular text-base text-black-dark text-opacity-70">
                                An integrated approach to shipping oversized cargo (from RFQ to execution) overseen by a
                                dedicated project leader for each operation: 7 expert teams around the world can provide
                                you with the best advice, then plan and execute your project.
                            </p>
                        </div>
                        <div>
                            <ProcessIcon />
                            <h6 className="font-medium text-2xl mt-7 mb-6">A dedicated team</h6>
                            <p className="font-regular text-base text-black-dark text-opacity-70">
                                A technical engineering department integrated within the Project Cargo team can design
                                technical solutions to ship all your oversized cargo. These encompass the lifting and
                                stowage plan, the securing plan and calculations, and the delivery method.
                            </p>
                        </div>
                        <div>
                            <ReliabilityIcon />
                            <h6 className="font-medium text-2xl mt-7 mb-6">A dedicated team</h6>
                            <p className="font-regular text-base text-black-dark text-opacity-70">
                                We apply our technical know-how to manage and ship all your oversized cargo securely,
                                with inspectors overseeing the loading and unloading operations.
                            </p>
                        </div>
                        <div>
                            <PromisingIcon />
                            <h6 className="font-medium text-2xl mt-7 mb-6">A dedicated team</h6>
                            <p className="font-regular text-base text-black-dark text-opacity-70">
                                Our specialist teams are on hand in Europe, China, Brazil, the United States, the Middle
                                East and Singapore. They have access to a fleet of over 500 ships and over 200 shipping
                                services covering 420 ports, with weekly departures, numerous rotations and short and
                                reliable transit times.
                            </p>
                        </div>
                    </div>
                    <h1 className="text-[42px] leading-[130%] text-black-dark mt-16 mb-8">
                        Our Out of Gauge solution is perfect for your slightly oversized cargo
                    </h1>
                    <p className="text-base text-black-dark text-opacity-70 mb-8">
                        Size permitting, your oversized cargo is loaded onto a single{' '}
                        <Link className="text-[#074CE4] text-opacity-70 underline">
                            open-top or flat-rack container:
                        </Link>
                    </p>
                    <ul className="list-disc font-mediumWd text-base leading-8 text-black-dark pl-8">
                        <li>Guaranteed stowage below deck</li>
                        <li>Availability of equipment (up to 47mt)</li>
                        <li>Flat-Rail accepted</li>
                        <li>Door-to-door shipment</li>
                    </ul>
                    <p className="text-base text-black-dark text-opacity-70 leading-[150%] my-8">
                        Read more about a number of{' '}
                        <Link className="text-[#074CE4] text-opacity-70 underline">
                            Out Of Gauge shipments we have carried out successfully for our customers
                        </Link>{' '}
                        and work out which solution best fits your project.
                    </p>
                    <Button>Contact our team</Button>
                    <h1 className="text-[42px] leading-[130%] text-black-dark mt-16 mb-8">
                        Our Breakbulk solution: ideal for your oversized cargo
                    </h1>
                    <p className="text-base text-black-dark text-opacity-70 mb-8">
                        Do you want to ship oversized cargo that significantly exceeds the usual standard sizes? We can
                        offer an alternative to conventional shipments. Your cargo is loaded onto a bed of flat-rack
                        containers. Your operation is overseen from start to finish by its own expert project leader.
                        Their role is to:
                    </p>
                    <ul className="list-disc font-mediumWd text-base leading-8 text-black-dark pl-8">
                        <li>
                            Analyze the technical feasibility and complete the financial study upon receipt of the RFQ
                        </li>
                        <li>
                            Execute and coordinate loading and unloading operations, including stowage, handling and
                            securing
                        </li>
                        <li>Coordinate the supervision of operations by inspectors</li>
                        <li>With the support of the Project Cargo Engineer designing the technical solutions</li>
                    </ul>
                    <p className="text-base text-black-dark text-opacity-70 leading-[150%] my-8">
                        Find out more about a number of{' '}
                        <Link className="text-[#074CE4] text-opacity-70 underline">
                            Breakbulk shipments completed for our customers
                        </Link>{' '}
                        and work out which solution best fits your project.
                    </p>
                    <Button>Contact our team</Button>
                    <h1 className="text-[42px] leading-[130%] text-black-dark mt-16">
                        Outstanding expertise for your oversized cargo
                    </h1>
                    <div className="grid grid-cols-3 gap-7 my-16">
                        {cardsList.map(({ title, subTitle }, i) => (
                            <div key={i} className="flex flex-col items-center border border-gray-light py-6 px-4">
                                <h6 className="text-[32px] leading-[130%] text-center text-red mb-6">{title}</h6>
                                <p className="font-regular text-[15px] text-center text-black-dark">{subTitle}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-base text-black-dark text-opacity-70 mb-8">
                        The Group complies with all international regulations such as those contained in the
                        International Convention for the Safety of Life at Sea (SOLAS) and its amendments, in particular
                        the IMO Code of Safe Practice for Cargo Stowage and Securing (CSS Code) and its Annex 13.
                    </p>
                    <div className="inline-flex gap-7">
                        <Button>SOLAS</Button>
                        <Button>Safe practice for cargo stowage</Button>
                    </div>
                    <h1 className="text-[42px] leading-[130%] text-black-dark my-16">You may be interested in...</h1>
                    <div className="grid grid-cols-3 gap-7">
                        <div>
                            <p className="text-base text-center text-black-dark text-opacity-70 uppercase mb-4">
                                GUARANTEE
                            </p>
                            <p className="font-semibold text-[22px] text-center text-black-dark mb-4">
                                SERENITY cargo value guarantee
                            </p>
                            <div className="relative h-[112px]">
                                <img
                                    className="absolute w-full h-full object-cover"
                                    src={interestImgOne}
                                    alt="Energy biofuel"
                                />
                            </div>
                            <p className="text-base text-black-dark text-opacity-70 text-center mt-4">
                                A revolutionary approach to handling claims in case of damage to your cargo.
                            </p>
                        </div>
                        <div>
                            <p className="text-base text-center text-black-dark text-opacity-70 uppercase mb-4">
                                GUARANTEE
                            </p>
                            <p className="font-semibold text-[22px] text-center text-black-dark mb-4">
                                SERENITY container guarantee
                            </p>
                            <div className="relative h-[112px]">
                                <img
                                    className="absolute w-full h-full object-cover"
                                    src={interestImgTwo}
                                    alt="Energy biofuel"
                                />
                            </div>
                            <p className="text-base text-black-dark text-opacity-70 text-center mt-4">
                                Reduce the negative impacts on your business if accidental and unforeseen damages occur
                                to our containers while under your responsibility.
                            </p>
                        </div>
                        <div>
                            <p className="text-base text-center text-black-dark text-opacity-70 uppercase mb-4">
                                GUARANTEE
                            </p>
                            <p className="font-semibold text-[22px] text-center text-black-dark mb-4">
                                SERENITY container guarantee
                            </p>
                            <div className="relative h-[112px]">
                                <img
                                    className="absolute w-full h-full object-cover"
                                    src={interestImgThree}
                                    alt="Energy biofuel"
                                />
                            </div>
                            <p className="text-base text-black-dark text-opacity-70 text-center mt-4">
                                Reduce the negative impacts on your business if accidental and unforeseen damages occur
                                to our containers while under your responsibility.
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <RightBar title="CMA CGM+ services" subList={sublist} />
                </div>
            </section>
            <section className="relative max-w-[1920px] h-[500px] mx-auto">
                <img
                    className="absolute w-full h-full object-cover z-[1]"
                    width={1920}
                    height={500}
                    src={guideBg}
                    alt="guidebg-image"
                />
                <div className="absolute w-full h-full bg-black-dark opacity-50 z-[2]" />
                <div className="relative container flex flex-col items-center justify-center h-full max-w-[780px] mx-auto z-[3]">
                    <h2 className="text-[42px] leading-[130%] text-white text-center mb-8">
                        Contact the CMA CGM Project Cargo Team
                    </h2>
                    <Button>Send an email</Button>
                </div>
            </section>
            <section className="pb-16">
                <h1 className="text-[42px] leading-none text-black-dark text-center uppercase py-16">FAQ</h1>
                <div className="container max-w-container">
                    <FAQitems list={FAQ_CARGO} additionalClasses="mx-auto" />
                </div>
            </section>
        </>
    );
};

export default OversizedCargo;
