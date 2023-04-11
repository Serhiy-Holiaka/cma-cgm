import { NEWS_LIST } from '@/constants/home.constants';
import { Link } from 'react-router-dom';
import ArrowForward from '@/components/ui/icons/ArrowForward';
import Button from '@/components/ui/button';

const NewsBlock = () => {
    return (
        <section className="container max-w-container bg-white py-16">
            <h2 className="text-[42px] leading-[130%] text-black-dark text-center">News</h2>
            <div className="grid grid-cols-4 gap-7 my-12">
                {NEWS_LIST.map(({ title, imgSrc, date }, i) => (
                    <div className="font-medium" key={i}>
                        <div className="relative w-full h-[263px] overflow-hidden">
                            <img className="absolute w-full h-full object-cover" src={imgSrc} alt="news img" />
                        </div>
                        <p className="text-[13px] leading-none text-black-dark text-opacity-40 mt-6 mb-4">{date}</p>
                        <p className="text-2xl leading-[130%]">{title}</p>
                        <Link className="flex items-center text-[15px] text-red leading-none mt-6 hover:underline underline-offset-4 transition">
                            <span className="mr-3">Read more</span>
                            <ArrowForward className="[&>path]:stroke-red" />
                        </Link>
                    </div>
                ))}
            </div>
            <Button variant="outline" additionalClasses="mx-auto">View All News</Button>
        </section>
    );
};

export default NewsBlock;
