import { useForm } from 'react-hook-form';
import Input from '@/components/ui/form/input';
import Button from '@/components/ui/button';

const TrackingForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    // eslint-disable-next-line no-console
    const onSubmit = data => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full" noValidate>
            <div>
                <Input
                    id="bookNumber"
                    label="Container, Bill of lading or Booking Number"
                    placeholder="ex: ABCD1234567"
                    error={errors.bookNumber ? true : false}
                    helperText={errors.bookNumber && 'Field is required!'}
                    {...register('bookNumber', { required: true })}
                />
            </div>
            <p className="font-light text-[13px] leading-[130%] text-black-dark text-opacity-70 mt-4 mb-8">To track up to three containers, please enter references separated by a comma.</p>
            <Button type="submit">
                Shipment tracking
            </Button>
        </form>
    );
};

export default TrackingForm;
