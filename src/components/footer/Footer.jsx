import { memo } from 'react';
import { Link } from 'react-router-dom';
import Button from '@/components/ui/button';
import LogoIcon from '@/components/ui/icons/LogoIcon';
import ArrowForward from '@/components/ui/icons/ArrowForward';
import { SOCIALS_LIST } from '@/constants/socials.constants';

const Footer = () => {
    return (
        <section className="block w-full bg-black-dark py-[48px] px-11">
            <div className="max-w-container mx-auto grid grid-cols-4 gap-5 text-white">
                <div>
                    <Link onClick={e => e.stopPropagation()} to="/">
                        <LogoIcon mainColor={'var(--white)'} />
                    </Link>
                    <p className="font-light text-[13px] leading-[150%] mt-9">
                        © 2023 | CMA CGM Group <br /> Develop by Rivo Agency <br />{' '}
                        <span className="opacity-50">Version 25.1.0.b1e3333d | 3/10/2023 2:42:00 PM - 0619</span>
                    </p>
                </div>
                <div className="flex flex-col font-medium text-sm leading-[130%] [&>a]:w-max [&>a]:py-3 first:[&>a]:pt-0 hover:[&>a]:underline hover:[&>a]:underline-offset-4 [&>a]:transition-all">
                    <Link>Shipping</Link>
                    <Link>End-to-end Solutions</Link>
                    <Link>Air Freight</Link>
                    <Link>News</Link>
                    <Link>My CMA CGM</Link>
                    <Link>Find your local offices</Link>
                    <Link>To our corporate website</Link>
                </div>
                <div className="[&>a]:mb-4 last:[&>a]:mb-0">
                    <Link className="flex justify-between max-w-[360px] px-5 py-5 border border-[#e3e5eb1a] hover:border-gray-100/50 text-sm font-medium leading-[130%] transition">
                        <span>OUR VISION</span>
                        <ArrowForward />
                    </Link>
                    <Link className="flex justify-between max-w-[360px] px-5 py-5 border border-[#e3e5eb1a] hover:border-gray-100/50 text-sm font-medium leading-[130%] transition">
                        <span>SUSTAINABILITY & INNOVATION</span>
                        <ArrowForward />
                    </Link>
                    <Link className="flex justify-between max-w-[360px] px-5 py-5 border border-[#e3e5eb1a] hover:border-gray-100/50 text-sm font-medium leading-[130%] transition">
                        <span>NEWS & MEDIAS</span>
                        <ArrowForward />
                    </Link>
                    <Link className="flex justify-between max-w-[360px] px-5 py-5 border border-[#e3e5eb1a] hover:border-gray-100/50 text-sm font-medium leading-[130%] transition">
                        <span>JOIN US</span>
                        <ArrowForward />
                    </Link>
                </div>
                <div className="flex justify-center">
                    <div>
                        <p className="font-medium text-sm leading-[130%] mb-4">Follow us</p>
                        <ul className="flex mb-12">
                            {SOCIALS_LIST.map(({ icon: Icon, link }, i) => (
                                <li key={i} className="flex mr-[15px] last:mr-0">
                                    <a target="_blank" href={link} rel="noopener noreferrer nofollow noindex">
                                        <Icon />
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <p className="font-medium text-sm leading-[130%] mb-4">Join #BetterWays !</p>
                        <Button>
                            ACT
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default memo(Footer);
