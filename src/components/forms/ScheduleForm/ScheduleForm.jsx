import { useForm } from 'react-hook-form';
import Input from '@/components/ui/form/input';
import Button from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ScheduleForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    // eslint-disable-next-line no-console
    const onSubmit = data => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full" noValidate>
            <div className="mb-4">
                <Input
                    id="place_loading"
                    label="Place of Loading"
                    placeholder="Place of Loading"
                    error={errors.place_loading ? true : false}
                    helperText={errors.place_loading && 'Field is required!'}
                    {...register('place_loading', { required: true })}
                />
            </div>
            <div className="mb-8">
                <Input
                    id="place_discharge"
                    label="Place of Discharge"
                    placeholder="Place of Discharge"
                    error={errors.place_discharge ? true : false}
                    helperText={errors.place_discharge && 'Field is required!'}
                    {...register('place_discharge', { required: true })}
                />
            </div>
            <Button type="submit">Search</Button>
            <Link className="block font-regular text-[15px] leading-[130%] text-black-dark underline mt-8">Advanced Search</Link>
        </form>
    );
};

export default ScheduleForm;
