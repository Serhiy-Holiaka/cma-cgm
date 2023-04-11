import Button from '@/components/ui/button';
import signInPhoto from '/images/signin.webp';
import servicePhoto from '/images/service.webp';

const ServiceBlock = () => {
    return (
        <section className="container max-w-container bg-white pb-16 grid grid-cols-2 gap-7">
            <div>
                <div className="relative w-full h-[500px]">
                    <img width={750} height={500} className="absolute w-full h-full object-cover" src={signInPhoto} alt="signin img" />
                </div>
                <p className="font-medium text-2xl leading-[130%] my-8">The fastest digital solution to book and manage your shipments</p>
                <Button>Sign In</Button>
            </div>
            <div>
                <div className="relative w-full h-[500px]">
                    <img width={750} height={500} className="absolute w-full h-full object-cover" src={servicePhoto} alt="signin img" />
                </div>
                <p className="font-medium text-2xl leading-[130%] my-8">Any questions? We’ve got you covered. Discover My Customer Service portal and get your answers!</p>
                <Button>My Customer Service</Button>
            </div>
        </section>
    );
};

export default ServiceBlock;
