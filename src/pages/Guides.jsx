import HeroBlock from '@/components/hero-block';
import heroImage from '/images/guides/guides-hero-img.webp';
import methodOne from '/images/guides/method-1.webp';
import methodTwo from '/images/guides/method-2.webp';
import RightBar from '@/components/right-bar';
import { Link } from 'react-router-dom';
import Button from '@/components/ui/button';
import guideBg from '/images/guides/guide-bg.webp';
import FAQitems from '@/components/ui/faq';
import { FAQ_GUIDE } from '@/constants/faqItems.constants';

const sublist = [
    {
        subTitle: 'Vessel Certificates',
    },
    {
        subTitle: 'Customs',
    },
    {
        subTitle: 'CMA CGM Terms and Conditions',
    },
];

const Guides = () => {
    return (
        <>
            <HeroBlock imgSrc={heroImage}>
                <h1 className="font-mediumWd text-[42px] leading-[130%] text-white">VGM Management at CMA CGM Group</h1>
            </HeroBlock>
            <section className="container max-w-container grid xl:grid-cols-secondary gap-7 pt-16">
                <div className="order-2 xl:order-1">
                    <h4 className="font-medium text-2xl leading-[150%] text-black-dark mb-16">
                        <Link className="font-mediumWd underline underline-offset-4 text-blue">CMA CGM Group</Link> we
                        take utmost care to ensure the safe transportation of your cargo. We are also committed to
                        provide a safe working environment for our staff at both sea and landside when guarding and
                        transporting your goods.
                    </h4>
                    <h1 className="text-[42px] leading-[130%] text-black-dark">What is Verified Gross Mass?</h1>
                    <p className="text-base text-black-dark text-opacity-70 mt-8 mb-16">
                        The International Maritime Organization (IMO) has amended the SOLAS (Safety of Life at Sea)
                        convention under regulation 2 of chapter VI which mandates the declaration of the Verified Gross
                        Mass (VGM) of a packed container before loading on board vessels within a prescribed cut-off
                        date / time to the shipping line and / or port terminal authorities. Effective 1st July 2016,
                        the regulation stipulates the use of two approved methods to declare the VGM for each container
                        by the shipper or his representative. As per the regulation, either of the two approved methods
                        must be used to declare the verified gross mass:
                    </p>
                    <div className="grid grid-cols-3 gap-7 font-medium">
                        <div className="col-start-1">
                            <div className="relative w-full h-[230px] overflow-hidden">
                                <img className="absolute w-full h-full object-cover" src={methodOne} alt="method 1" />
                            </div>
                            <p className="text-[13px] leading-none text-red uppercase my-6">Method 1</p>
                            <p className="text-2xl text-black-dark leading-[130%]">
                                Real weight of the container including tare when cargo is packed
                            </p>
                        </div>
                        <div className="col-start-2">
                            <div className="relative w-full h-[230px] overflow-hidden">
                                <img className="absolute w-full h-full object-cover" src={methodTwo} alt="method 2" />
                            </div>
                            <p className="text-[13px] leading-none text-red uppercase my-6">Method 2</p>
                            <p className="text-2xl text-black-dark leading-[130%]">
                                Addition of the whole cargo including packing and the tare weight of the container
                            </p>
                        </div>
                    </div>
                    <h1 className="text-[42px] leading-[130%] text-black-dark mt-16">
                        VGM Submission: CMA CGM Offers Organized Procedures for Minimum Hassle
                    </h1>
                    <p className="text-base text-black-dark text-opacity-70 mt-8 mb-16">
                        At CMA CGM, we bring full compliance measures on VGM requirements with minimum controls. We
                        gather the VGM information, compile and submit the same to the terminals. Shippers can provide
                        VGM information of their containers on their Shipping Instructions (SI) or through a separate
                        submission. We can accept this information from our eBusiness portal, EDI and using Market
                        Places (INTTRA, GTNexus and CargoSmart).
                    </p>
                    <h1 className="text-[42px] leading-[130%] text-black-dark">
                        CMA CGM eBusiness offers efficient VGM declaration
                    </h1>
                    <p className="text-base text-black-dark text-opacity-70 mt-8 mb-16">
                        CMA CGM offers an efficient method to declare the VGM. The CMA CGM eBusiness platform provides
                        the ability to electronically transmit the VGM. The eVGM can be transmitted along with the
                        Shipping Instructions or independently once the booking is confirmed.
                        <br />
                        All our Shippers with an eBusiness account can avail our eVGM service online, we will also offer
                        the service to companies authorized by shippers for managing the VGM submission.
                        <br />
                        CMA CGM eBusiness eVGM offers a comprehensive dashboard view along with an active online
                        verification process, ensures an error free VGM submission. Shippers can rely on our single
                        window system for real time view on SOLAS compliance.
                    </p>
                </div>
                <div className="order-1 xl:order-2">
                    <RightBar title="Guides" subList={sublist} />
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
                        CMA CGM eBusiness offers efficient VGM declaration
                    </h2>
                    <Button>Contact</Button>
                </div>
            </section>
            <section className="pb-16">
                <h1 className="text-[42px] leading-none text-black-dark text-center uppercase py-16">FAQ</h1>
                <div className="container max-w-container">
                    <FAQitems list={FAQ_GUIDE} additionalClasses="mx-auto" />
                </div>
            </section>
        </>
    );
};

export default Guides;
