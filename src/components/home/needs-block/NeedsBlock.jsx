import { Link } from 'react-router-dom';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import ArrowForward from '@/components/ui/icons/ArrowForward';
import { NEEDS_LIST } from '@/constants/home.constants';

const NeedsBlock = () => {
    const isHide = useMediaQuery('(max-width: 1590px)');

    return (
        <section className="container max-w-container bg-white pt-16">
            <h2 className="text-[42px] leading-[130%] text-black-dark">What are your needs?</h2>
            <p className="text-base text-black-dark text-opacity-70 max-w-[750px] mt-8 mb-16">
                We operate in over 160 countries through 755 agencies, we design and implement intelligent solutions to
                take care of your cargo right across the supply chain
            </p>
            <div className="grid gap-[30px]">
                {NEEDS_LIST.map(({ category, list }, index) => {
                    return (
                        <div key={index} className="grid grid-cols-2 gap-[30px]">
                            {list.map(({ imgSrc, title }, i) => (
                                <div
                                    key={i}
                                    className="relative"
                                >
                                    <div className="relative flex items-end justify-center h-[375px] w-full [&>img]:hover:scale-105 [&>a]:hover:underline transition overflow-hidden">
                                        <img
                                            className="absolute w-full h-full object-cover transition-transform duration-700"
                                            width={750}
                                            height={375}
                                            src={imgSrc}
                                            alt="needs card"
                                        />
                                        <div className="absolute w-full h-full bg-gradient-to-b from-transparent to-black-dark" />
                                        <Link className="relative font-medium text-2xl leading-none text-white uppercase flex items-center mb-8 transition-all">
                                            <span className="mr-4">{title}</span>
                                            <ArrowForward />
                                        </Link>
                                    </div>
                                    {(i === 0 && !isHide) && <div className="absolute top-2/4 -left-20 -translate-y-1/2 -rotate-90 w-[100px] font-medium text-[15px] text-center leading-none text-red uppercase">{category}</div>}
                                </div>
                            ))}
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default NeedsBlock;
