import HeroBlock from '@/components/hero-block';
import heroImage from '/images/logistics/logistic-services-hero.webp';
import Button from '@/components/ui/button';

const LogisticServices = () => {
    return (
        <>
            <HeroBlock imgSrc={heroImage}>
                <h1 className="font-mediumWd text-[42px] leading-[130%] text-white">Logistics Solutions</h1>
            </HeroBlock>
            <section className="container max-w-container grid grid-cols-secondary gap-7 py-16">
                <div>
                    <h1 className="text-[42px] leading-[130%] text-black-dark">
                        Logistics services that create value at each stage of your supply chain
                    </h1>
                    <p className="text-base text-black-dark text-opacity-70 my-8">
                        Logistics play an essential role in your business. They are a strategic priority for your
                        company and a major way of enhancing performance. With our subsidiary CEVA Logistics, CMA CGM
                        offers logistics services that address all your supply chain concerns.
                        <br />- The right logistics solution for each business sector Our skills extend to the main
                        sectors: automotive, retail, energy, healthcare, technology, industry and aerospace.
                        <br />- A dedicated team of logistics experts for each sector Our specialists provide their
                        expertise to come up with the most appropriate solution with minimum fuss, regardless of the
                        size of your company or your business sector.
                        <br />- Logistics services spanning the globe
                        <br />
                        Our team of dedicated experts ensure quick and reliable solutions whatever the circumstances in
                        160 countries at 1,000 sites.
                        <br />
                        Our staff members design and implement cargo and contract logistics solutions meeting the
                        highest market standards. With operations in 160 countries at over 1,000 sites, they work with
                        companies of all sizes in the main business sectors: automotive, retail, e-commerce, energy,
                        health, technology, industry and aerospace, and events logistics. They offer a broad range of
                        logistics services to meet all your needs.
                    </p>
                    <Button>Find out about all our ligistics services</Button>
                    <h1 className="text-[42px] leading-[130%] text-black-dark mt-16">
                        Partial load logistics services
                    </h1>
                    <p className="text-base text-black-dark text-opacity-70 my-8">
                        Are you looking for a logistics solution to send your finished products to a client or transport
                        your goods between your different production plants? Find out about our weekly door-to-door
                        logistics services for LCL (Less than Container Load) partial loads. These reliable and secure
                        services mean you can send your goods with optimum flexibility, regardless of size or
                        destination. Our 289 carriers serve more than 10,000 port connections all over the world.
                    </p>
                    <Button>Find out about all our ligistics services</Button>
                    <h1 className="text-[42px] leading-[130%] text-black-dark mt-16">Air cargo logistics service</h1>
                    <p className="text-base text-black-dark text-opacity-70 my-8">
                        All over the world, our air cargo experts offer quick and reliable logistics solutions. On a
                        worldwide and local level, they address all your business concerns via four ranges of high
                        value-added logistics services. They are committed to supporting you whatever the circumstances,
                        protecting the integrity of your supply chain by chartering flights to meet your urgent needs.
                    </p>
                    <Button>Find out about all our ligistics services</Button>
                    <h1 className="text-[42px] leading-[130%] text-black-dark mt-16">Land cargo logistics service</h1>
                    <p className="text-base text-black-dark text-opacity-70 my-8">
                        Secure your supply chain by using quick, reliable and competitive logistics services, with our
                        road and rail freight services available worldwide. On the road, we rely on our network of
                        partners and our control towers. Our cutting-edge technologies guarantee the most efficient
                        itinerary and real-time tracking of your goods. Our aim is to cut your direct and indirect costs
                        by making the process simpler. Our rail logistics services also provide effective and
                        sustainable alternatives to air cargo and shipping. From China to Duisburg and all over western
                        Europe, our services are available year round, with frequent departures and seamless
                        connections.
                    </p>
                    <Button>Find out about all our ligistics services</Button>
                    <h1 className="text-[42px] leading-[130%] text-black-dark mt-16">Contract logistics</h1>
                    <p className="text-base text-black-dark text-opacity-70 my-8">
                        With more than 750 warehouses worldwide, we offer a comprehensive range of integrated contract
                        logistics services and solutions. No matter what your company’s geographical reach or the
                        complexity of your business and organization, we design, execute and monitor your supply chain
                        strategy. Our aim is to do everything to enable you to keep your promises to your clients.
                    </p>
                    <Button>Find out about all our ligistics services</Button>
                    <h1 className="text-[42px] leading-[130%] text-black-dark mt-16">
                        Logistics services par excellence with CEVA Lead Logistics
                    </h1>
                    <p className="text-base text-black-dark text-opacity-70 my-8">
                        With CEVA Lead Logistics, we transform your entire supply chain, with our sights set on
                        excellence. Our experts work closely with you to obtain in-depth understanding of your business
                        strategy and define bespoke solutions. We make available our cutting-edge technological
                        infrastructures, data management expertise and passion for innovation, in order to provide you
                        with real added value.
                    </p>
                    <Button>Find out about all our ligistics services</Button>
                    <h1 className="text-[42px] leading-[130%] text-black-dark mt-16">Customs brokerage</h1>
                    <p className="text-base text-black-dark text-opacity-70 my-8">
                        Benefit from our logistics services brokers’ expertise in tariff and customs legislation and
                        regulations for both imports and exports. They take care of import and export documents and
                        manage the calculation and payment of duties, taxes and other charges, all over the world.
                    </p>
                    <Button>Find out about all our ligistics services</Button>
                </div>
            </section>
        </>
    );
};

export default LogisticServices;
