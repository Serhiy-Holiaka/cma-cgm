import HeroBlock from '@/components/hero-block';
import heroImage from '/images/air-freight/air-freight-hero.webp';
import flightsMapImage from '/images/air-freight/flights-map.webp';
import Button from '@/components/ui/button';
import TeamIcon from '@/components/ui/icons/TeamIcon';
import FingerUpIcon from '@/components/ui/icons/FingerUpIcon';
import PromisingIcon from '@/components/ui/icons/PromisingIcon';
import ReliabilityIcon from '@/components/ui/icons/ReliabilityIcon';

const cardsList = [
    {
        title: 'Four A330',
        subTitle: 'each carrying a payload of 61 tonnes',
    },
    {
        title: 'Two B777',
        subTitle: 'each carrying a payload of 102 tonnes',
    },
    {
        title: 'Four A350',
        subTitle: 'joining the fleet in 2025 and 2026 carrying a payload of 104 tonnes',
    },
];

const Schedule = () => {
    return (
        <>
            <HeroBlock imgSrc={heroImage}>
                <h1 className="font-mediumWd text-[42px] leading-[130%] text-white">Scheduled flights</h1>
            </HeroBlock>
            <section className="container max-w-container grid grid-cols-secondary gap-7 py-16">
                <div>
                    <h1 className="text-[42px] leading-[130%] text-black-dark">
                        CMA CGM AIR CARGO, delivering at the highest level
                    </h1>
                    <p className="text-base text-black-dark text-opacity-70 mt-8 mb-16">
                        In response to the growing demand from our customers for agile logistics solutions, the CMA CGM
                        Group launched in March 2021 CMA CGM AIR CARGO. This new operational and commercial arm
                        specialized in air freight transportation complements all the solutions we already provide for
                        our customers, enabling us to support their entire transportation and logistics chain.
                    </p>
                    <div className="relative h-[640px] my-16 overflow-hidden">
                        <img className="absolute w-full h-full object-cover" src={flightsMapImage} alt="flights map" />
                    </div>
                    <div className="grid grid-cols-3 gap-x-7 gap-y-12">
                        <div>
                            <TeamIcon />
                            <h6 className="font-medium text-2xl mt-7 mb-6">A newly created French airline</h6>
                            <p className="font-regular text-base text-black-dark text-opacity-70">
                                Based in Paris-Charles de Gaulle airport and dedicated to cargo.
                            </p>
                        </div>
                        <div>
                            <FingerUpIcon />
                            <h6 className="font-medium text-2xl mt-7 mb-6">A trusted partner</h6>
                            <p className="font-regular text-base text-black-dark text-opacity-70">
                                To deliver your cargo at the highest standards of security, safety and quality.
                            </p>
                        </div>
                        <div>
                            <ReliabilityIcon />
                            <h6 className="font-medium text-2xl mt-7 mb-6">Existing regular service</h6>
                            <p className="font-regular text-base text-black-dark text-opacity-70">
                                We apply our technical know-how to manage and ship all your oversized cargo securely,
                                with inspectors overseeing the loading and unloading operations.
                            </p>
                        </div>
                        <div>
                            <PromisingIcon />
                            <h6 className="font-medium text-2xl mt-7 mb-6">
                                Dedicated air cargo transportation service
                            </h6>
                            <p className="font-regular text-base text-black-dark text-opacity-70">
                                for certain customers, for medium to long periods of time, to meet their particular
                                needs in terms of origin and destinations.
                            </p>
                        </div>
                    </div>
                    <h1 className="text-[42px] leading-[130%] text-black-dark mt-16">
                        A dedicated fleet of 10 aircraft
                    </h1>
                    <div className="grid grid-cols-3 gap-7 my-16">
                        {cardsList.map(({ title, subTitle }, i) => (
                            <div key={i} className="flex flex-col items-center border border-gray-light py-6 px-4">
                                <h6 className="text-[32px] leading-[130%] text-center text-red mb-6">{title}</h6>
                                <p className="font-regular text-[15px] text-center text-black-dark">{subTitle}</p>
                            </div>
                        ))}
                    </div>
                    <h1 className="text-[42px] leading-[130%] text-black-dark mt-16 mb-8">Get in touch</h1>
                    <p className="text-base text-black-dark text-opacity-70">
                        France, Southern Europe, Africa - Nicolas Leleu: par.nleleu@cmacgm-aircargo.com
                        <br />
                        Germany, Austria, Switzerland, Eastern Europe, Benelux, Scandinavia, The United Kingdom, Ireland
                        - Giuseppe Tarantini: hbg.gtarantini@cma-cgm.com
                        <br />
                        Asia - Eric Qu: shg.equ@cma-cgm.com
                        <br />
                        USA and Canada - Jordan Frohlinger: eru.jfrohlinger@cma-cgm.com
                    </p>
                    <h1 className="text-[42px] leading-[130%] text-black-dark mt-16 mb-8">Legal Conditions</h1>
                    <p className="text-base text-black-dark text-opacity-70">
                        Bookings made directly or indirectly on CMA CGM Air Cargo are governed by (i) the conditions
                        displayed on the back of the Air Waybill, and (ii) our General Conditions of Carriage for Cargo.
                        <br />
                        <br />
                        By booking on our airline, you acknowledge that you have read and understood all above-mentioned
                        documents.
                    </p>
                    <h1 className="text-[42px] leading-[130%] text-black-dark mt-16 mb-8">
                        General conditions of carriage
                    </h1>
                    <p className="text-base text-black-dark text-opacity-70 mb-8">
                        You will find below the latest version of our General Conditions of Carriage for Cargo. We
                        advise you to check regularly for updates, in particular before any new booking.
                        <br />
                        <br />
                        The General Conditions of Carriage for Cargo of CMA CGM Air Cargo apply when carried on CMA CGM
                        Air Cargo.
                    </p>
                    <Button>General conditions of carriage</Button>
                </div>
            </section>
        </>
    );
};

export default Schedule;
