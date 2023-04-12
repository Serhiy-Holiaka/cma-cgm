import { Link } from 'react-router-dom';
import Video from '@/components/ui/video';
import videoMission from '@/assets/video/mission.mp4';
import { MISSION_LIST, ABOUT_BLOG_LIST } from '@/constants/aboutUs.constants';
import brandImage from '/images/about-us/brands-img.webp';
import FAQitems from '@/components/ui/faq';
import { FAQ_ABOUT } from '@/constants/faqItems.constants';

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
            <div className="container max-w-container grid grid-cols-2 gap-7 py-16">
                <div className="col-span-1">
                    <h1 className="text-[42px] leading-[130%] text-black-dark">Our mission</h1>
                    <p className="text-base text-black-dark text-opacity-70 max-w-[750px] mt-8">
                        We play a pivotal role in the global trade, which is why we must create value for our
                        environment, for our customers and for our staff members. An ambition that is built around five
                        strategic pillars for our Group. Achieving the right balance and seamless interaction between
                        each of these pillars is the foundation of our growth that is essential for our sustained
                        development.
                    </p>
                </div>
            </div>
            <div className="container max-w-container grid gap-7">
                {MISSION_LIST.map(({ imageSrc, title, description }, i) => (
                    <div key={i} className="grid grid-cols-2 gap-7">
                        <div className={`relative w-full h-[460px] ${i % 2 !== 0 && 'order-1'} overflow-hidden`}>
                            <img
                                className="absolute w-full h-full object-cover"
                                width={750}
                                height={460}
                                src={imageSrc}
                                alt={title}
                            />
                        </div>
                        <div className="flex flex-col justify-center">
                            <h5 className="font-medium text-2xl text-black-dark mb-4">{title}</h5>
                            <p className="text-base text-black-dark text-opacity-70">{description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="container max-w-container grid grid-cols-2 gap-7 py-16">
                <div className="col-span-1">
                    <h1 className="text-[42px] leading-[130%] text-black-dark">Our values, our strength</h1>
                    <p className="text-base text-black-dark text-opacity-70 max-w-[750px] mt-8">
                        Since its establishment in 1978, the CMA CGM Group has continued to grow, drawing its strength
                        from its family dimension, from a long-term strategic vision and from the expertise of its teams
                        driven by a common passion. In keeping with our history and with our culture, we are driven by
                        the values that unite us. Today, we are reaffirming these values to continue our development and
                        achieve our ambitions.
                    </p>
                </div>
            </div>
            <div className="container max-w-container grid grid-cols-4 gap-7">
                {ABOUT_BLOG_LIST.map(({ imageSrc, title, description }, i) => (
                    <div key={i}>
                        <div className="relative w-full h-[300px] overflow-hidden">
                            <img
                                className="absolute w-full h-full object-cover"
                                width={360}
                                height={300}
                                src={imageSrc}
                                alt={title}
                            />
                        </div>
                        <h5 className="font-medium text-2xl text-black-dark mt-8 mb-4">{title}</h5>
                        <p className="text-base text-black-dark text-opacity-70">{description}</p>
                    </div>
                ))}
            </div>
            <div className="container max-w-container grid grid-cols-2 gap-7 py-16">
                <div className="col-span-1">
                    <h1 className="text-[42px] leading-[130%] text-black-dark">Key figures</h1>
                    <p className="text-base text-black-dark text-opacity-70 max-w-[750px] mt-8">
                        With a presence in 160 countries through 400 offices, 750 warehouses, 155,000 employees and a
                        wide fleet of 593 vessels, CMA CGM serves 420 of the world’s 521 commercial ports and operates
                        257 shipping lines.
                    </p>
                </div>
            </div>
            <div className="container max-w-container grid grid-cols-3 gap-7 font-mediumWd text-base leading-8 text-black-dark">
                <div>
                    <ul className="list-disc">
                        <li>Worldwide</li>
                        <li>160 countries</li>
                        <li>400 offices</li>
                        <li>155,000 employees</li>
                        <li>74 billion USD global revenue(in 2022)</li>
                    </ul>
                </div>
                <div>
                    <ul className="list-disc">
                        <li>Shipping</li>
                        <li>593 vessels</li>
                        <li>420 ports (out of 521 worldwide)</li>
                        <li>257 shipping lines</li>
                        <li>22 million TEUs (volume transported)</li>
                        <li>5 million TEUs (fleet’s slot capacity)</li>
                    </ul>
                </div>
                <div>
                    <ul className="list-disc">
                        <li>Logistics</li>
                        <li>750 warehouses</li>
                        <li>9 million square meters in warehouses</li>
                        <li>2.8 million tons of ground freight</li>
                        <li>0.4 million tons of airfreight</li>
                        <li>1.05 million TEUs (3PL & NVO ocean volumes)</li>
                        <li>429 000 cubic meters LCL</li>
                    </ul>
                </div>
            </div>
            <div className="container max-w-container grid grid-cols-2 gap-7 py-16">
                <div className="col-span-1">
                    <h1 className="text-[42px] leading-[130%] text-black-dark">Brands & Subsidiaries</h1>
                    <p className="text-base text-black-dark text-opacity-70 max-w-[750px] mt-8">
                        With strong family values, the CMA CGM Group is dedicated to the growth of all its stakeholders.
                        We own a diverse portfolio of brands and subsidiaries that take care of our customers and their
                        cargo wherever they are in the world, door-to-door.
                    </p>
                </div>
            </div>
            <div className="container max-w-container grid grid-cols-2 gap-7">
                <div className="relative w-full h-[460px] overflow-hidden">
                    <img
                        className="absolute w-full h-full object-cover"
                        width={750}
                        height={460}
                        src={brandImage}
                        alt="brands image"
                    />
                </div>
                <div className="flex flex-col justify-center">
                    <ul className="list-disc font-mediumWd text-base leading-8 text-black-dark pl-7">
                        <li>APL in Singapore</li>
                        <li>ANL in Oceania</li>
                        <li>CNC in the Intra-Asia market</li>
                        <li>Containerships in Europe</li>
                        <li>Comanav in North Africa</li>
                        <li>Mercosul in South America</li>
                        <li>
                            CMA Ships for vessel and crew management (Maintenance, supplies, shipbuilding projects etc.)
                        </li>
                        <li>CMA Terminals & Terminal Link (Terminal construction, acquisition and operation)</li>
                        <li>CEVA LOGISTICS</li>
                    </ul>
                    <p className="text-base text-black-dark text-opacity-70 leading-[150%] mt-8">
                        To learn more about our Group,{' '}
                        <Link className="text-[#074CE4] underline">visit our corporate website.</Link>
                    </p>
                </div>
            </div>
            <h1 className="text-[42px] leading-none text-black-dark text-center uppercase py-16">FAQ</h1>
            <div className="container max-w-container">
                <FAQitems list={FAQ_ABOUT} additionalClasses="mx-auto" />
            </div>
        </section>
    );
};

export default OurMission;
