import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import TabButton from '@/components/ui/tab';
import HeroBlock from '@/components/hero-block';
import heroImage from '/images/local-offices/offices-hero-img.webp';
import Input from '@/components/ui/form/input';
import { useDebounce } from '@/hooks/useDebounce';
import { COUNTRIES_LIST } from '@/constants/countries.constants';
import Button from '@/components/ui/button';
import featurePhoto from '/images/local-offices/offices-left-img.webp';
import servicePhoto from '/images/local-offices/offices-right-img.webp';

const LocalOffices = () => {
    const [countries, setCountries] = useState(COUNTRIES_LIST);
    const [searchString, setSearchString] = useState('');
    const debouncedValue = useDebounce(searchString, 500);
    const [isLoading, setIsLoading] = useState(false);
    const [tab, setTab] = useState('');

    const handleSearch = e => {
        let inputValue = e.target.value;

        if (inputValue.length < 2) {
            setSearchString('');
            return;
        }

        setIsLoading(true);
        setSearchString(inputValue.toLowerCase().trim());
    };

    useEffect(() => {
        setIsLoading(false);
        if (debouncedValue === null) {
            setCountries(COUNTRIES_LIST);
        }

        const find = COUNTRIES_LIST.filter(item => item.name.toLowerCase().includes(debouncedValue));

        setCountries(find);
    }, [debouncedValue]);

    return (
        <>
            <HeroBlock imgSrc={heroImage}>
                <div className="flex justify-between items-center w-full">
                    <h1 className="font-mediumWd text-[42px] leading-[130%] text-white">Local Offices</h1>
                    <div className="w-full max-w-[750px]">
                        <Input
                            additionalClasses="[&>label]:text-white [&>label]:mb-[10px]"
                            id="country"
                            label="Search a country"
                            placeholder="Country or region"
                            onChange={handleSearch}
                        />
                    </div>
                </div>
            </HeroBlock>
            <section className="container max-w-container min-h-[350px] py-16">
                <div className="border-b border-b-[#D9D9D9] mb-6 scrollbar-hidden overflow-x-auto">
                    <div className="flex justify-between w-[980px] [&>button]:capitalize [&>button]:underline-offset-[22px] pb-[16px]">
                        <TabButton isActive={tab === ''} onClick={() => setTab('')}>
                            All
                        </TabButton>
                        <TabButton isActive={tab === 'af'} onClick={() => setTab('af')}>
                            Africa
                        </TabButton>
                        <TabButton isActive={tab === 'as'} onClick={() => setTab('as')}>
                            Asia
                        </TabButton>
                        <TabButton isActive={tab === 'cca'} onClick={() => setTab('cca')}>
                            Car & Cntr America
                        </TabButton>
                        <TabButton isActive={tab === 'eu'} onClick={() => setTab('eu')}>
                            Europe
                        </TabButton>
                        <TabButton isActive={tab === 'mt'} onClick={() => setTab('mt')}>
                            Mediterranean
                        </TabButton>
                        <TabButton isActive={tab === 'me'} onClick={() => setTab('me')}>
                            Middle East
                        </TabButton>
                        <TabButton isActive={tab === 'na'} onClick={() => setTab('na')}>
                            North America
                        </TabButton>
                        <TabButton isActive={tab === 'oc'} onClick={() => setTab('oc')}>
                            Oceania
                        </TabButton>
                        <TabButton isActive={tab === 'sa'} onClick={() => setTab('sa')}>
                            South America
                        </TabButton>
                    </div>
                </div>
                <AnimatePresence>
                    {isLoading ? (
                        <div className="flex items-center justify-center h-full w-full text-xl text-black-dark text-opacity-50">
                            Loading...
                        </div>
                    ) : countries.length ? (
                        <div className="columns-5 max-w-[1270px]">
                            {countries.map(({ name }, i) => {
                                return (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0 }}
                                        animate={{
                                            opacity: 1,
                                            transition: { delay: 0.03 + i * 0.01, type: 'ease' },
                                        }}
                                        className="min-w-[200px] max-w-[230px]"
                                    >
                                        <p className="font-regular text-[15px] leading-[200%] text-black-dark text-opacity-70">
                                            {name}
                                        </p>
                                    </motion.div>
                                );
                            })}
                        </div>
                    ) : (
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{
                                opacity: 1,
                                transition: { delay: 0.2, type: 'ease' },
                            }}
                            className="flex items-center justify-center h-full w-full text-xl"
                        >
                            Nothing found!
                        </motion.p>
                    )}
                </AnimatePresence>
            </section>
            <section className="container max-w-container bg-white pb-16 grid grid-cols-2 gap-7">
                <div>
                    <div className="relative w-full h-[500px]">
                        <img
                            width={750}
                            height={500}
                            className="absolute w-full h-full object-cover"
                            src={featurePhoto}
                            alt="signin img"
                        />
                    </div>
                    <p className="font-medium text-2xl leading-[130%] mt-8">
                        CMA CGM Mobile App: new design, new features
                    </p>
                    <p className="text-base text-black-dark text-opacity-70 max-w-[750px] my-8">
                        Track your container shipments, learn about vessel and voyage schedules, get routing
                        information, and read the latest CMA CGM news on this revamped app available in 5 languages.
                    </p>
                    <Button>Download The App</Button>
                </div>
                <div>
                    <div className="relative w-full h-[500px]">
                        <img
                            width={750}
                            height={500}
                            className="absolute w-full h-full object-cover"
                            src={servicePhoto}
                            alt="signin img"
                        />
                    </div>
                    <p className="font-medium text-2xl leading-[130%] mt-8">
                        Have questions? We’ve got you covered. Discover My Customer Service portal and save time!
                    </p>
                    <p className="text-base text-black-dark text-opacity-70 max-w-[750px] my-8">
                        Use our new digital platform to quickly and easily find the answers to your questions regarding
                        your shipment, CMA CGM Group services and much more.
                    </p>
                    <Button>Visit My Customer Service</Button>
                </div>
            </section>
        </>
    );
};

export default LocalOffices;
