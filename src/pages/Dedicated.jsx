import HeroBlock from '@/components/hero-block';
import heroImage from '/images/air-freight/dedicated-hero.webp';
import RightBar from '@/components/right-bar';
import Button from '@/components/ui/button';
import TeamIcon from '@/components/ui/icons/TeamIcon';
import FingerUpIcon from '@/components/ui/icons/FingerUpIcon';
import ReliabilityIcon from '@/components/ui/icons/ReliabilityIcon';
import operationOne from '/images/air-freight/operationOne.webp';
import operationTwo from '/images/air-freight/operationTwo.webp';
import operationThree from '/images/air-freight/operationThree.webp';

const sublist = [
    {
        subTitle: 'Refrigerated cargo',
    },
    {
        subTitle: 'Oversized cargo',
    },
];

const Dedicated = () => {
    return (
        <>
            <HeroBlock imgSrc={heroImage}>
                <h1 className="font-mediumWd text-[42px] leading-[130%] text-white">Dedicated flights</h1>
            </HeroBlock>
            <section className="container max-w-container grid grid-cols-secondary gap-7 py-16">
                <div>
                    <h1 className="text-[42px] leading-[130%] text-black-dark">
                        CMA CGM AIR CARGO, an agile solution for your urgent transportation needs
                    </h1>
                    <p className="text-base text-black-dark text-opacity-70 mt-8">
                        Our dedicated flight service is here to help with your urgent and specific transportation needs
                        all over the world. We offer flexible, tailor-made and rapid solutions to deliver your freight.
                    </p>
                    <h1 className="text-[42px] leading-[130%] text-black-dark my-16">
                        Taking care of your goods from end-to-end
                    </h1>
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
                    </div>
                    <h1 className="text-[42px] leading-[130%] text-black-dark mt-16">
                        A seamless service to manage your cargo
                    </h1>
                    <p className="text-base text-black-dark text-opacity-70 my-8">
                        Our team of experts strive to offer a proactive and customized response to all your specific
                        needs, in terms of loading capacity, ground transportation or anything else.
                        <br />
                        <br />
                        We can transport any kind of cargo meeting industry IATA standards, including for example:
                    </p>

                    <h1 className="text-[42px] leading-[130%] text-black-dark my-16">Our latest operations</h1>
                    <div className="grid grid-cols-3 gap-7">
                        <div>
                            <p className="text-base text-center text-black-dark text-opacity-70 uppercase mb-4">
                                HUMANITARIAN RELIEF
                            </p>
                            <p className="font-semibold text-[22px] text-center text-black-dark mb-4">March 2022</p>
                            <div className="relative h-[112px]">
                                <img
                                    className="absolute w-full h-full object-cover"
                                    src={operationOne}
                                    alt="Energy biofuel"
                                />
                            </div>
                            <p className="text-base text-black-dark text-opacity-70 text-center mt-4">
                                Operation to help the Ukrainian civilian population with 55 tons of emergency equipment
                                to Poland for the CDCS.
                            </p>
                        </div>
                        <div>
                            <p className="text-base text-center text-black-dark text-opacity-70 uppercase mb-4">
                                LIVE ANIMALS
                            </p>
                            <p className="font-semibold text-[22px] text-center text-black-dark mb-4">February 2022</p>
                            <div className="relative h-[112px]">
                                <img
                                    className="absolute w-full h-full object-cover"
                                    src={operationTwo}
                                    alt="Energy biofuel"
                                />
                            </div>
                            <p className="text-base text-black-dark text-opacity-70 text-center mt-4">
                                Bary, Faruk, Valdo & Ukarma travel First Class on CMA CGM AIR CARGO!
                            </p>
                        </div>
                        <div>
                            <p className="text-base text-center text-black-dark text-opacity-70 uppercase mb-4">
                                PHARMA
                            </p>
                            <p className="font-semibold text-[22px] text-center text-black-dark mb-4">January 2022</p>
                            <div className="relative h-[112px]">
                                <img
                                    className="absolute w-full h-full object-cover"
                                    src={operationThree}
                                    alt="Energy biofuel"
                                />
                            </div>
                            <p className="text-base text-black-dark text-opacity-70 text-center mt-4">
                                4 flights from China, each transporting more than 2 million Covid tests
                            </p>
                        </div>
                    </div>
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
                        General conditions of carriage for Cargo
                    </h1>
                    <p className="text-base text-black-dark text-opacity-70 mb-8">
                        You will find below the latest version of our General Conditions of Carriage for Cargo. We
                        advise you to check regularly for updates, in particular before any new booking.
                        <br />
                        <br />
                        The General Conditions of Carriage for Cargo of CMA CGM Air Cargo apply when carried on CMA CGM
                        Air Cargo.
                    </p>
                    <Button>General conditions of carriage for cargo</Button>
                </div>
                <div>
                    <RightBar title="Special Cargo" subList={sublist} />
                </div>
            </section>
        </>
    );
};

export default Dedicated;
