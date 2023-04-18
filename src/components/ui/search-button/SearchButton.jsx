import { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { AnimatePresence, motion } from 'framer-motion';
import { useThemeContext } from '@/context/ThemeContext';
import { useMenuContext } from '@/context/MenuContext';
import { useForm, Controller } from 'react-hook-form';
import Input from '@/components/ui/form/input';
import CustomSelect from '@/components/ui/form/select/CustomSelect';
import Button from '@/components/ui/button';
import SearchIcon from '@/components/ui/icons/SearchIcon';

const optionsList = [
    { value: 'cma-cgm', label: 'CMA CGM' },
    { value: 'logistics', label: 'Logistics' },
    { value: 'shipping', label: 'Shipping' },
];

const SearchButton = ({ menuId }) => {
    const btnRef = useRef(null);
    const { isDark } = useThemeContext();
    const { activeSubId, setActiveSubId, setIsMobMenuOpen } = useMenuContext();
    const [isOpen, setIsOpen] = useState(false);
    const {
        register,
        control,
        handleSubmit,
        formState: { errors },
    } = useForm();

    // eslint-disable-next-line no-console
    const onSubmit = data => console.log(data);

    useEffect(() => {
        activeSubId !== menuId && isOpen && setIsOpen(false);
    }, [activeSubId, menuId, isOpen, setIsOpen]);

    const onSearchClick = () => {
        const activeId = btnRef.current.id;
        if (activeId && !isOpen) {
            setActiveSubId(activeId);
            setIsOpen(true);
            setIsMobMenuOpen(false);
        } else {
            setActiveSubId('');
            setIsOpen(false);
        }
    };

    return (
        <div className="relative">
            <button
                ref={btnRef}
                id={menuId}
                type="button"
                onClick={onSearchClick}
                className="is-clickable z-[5] [&_path]:hover:stroke-blue"
            >
                <SearchIcon
                    className={`w-6 h-auto ${
                        isDark ? '[&_path]:stroke-black-dark' : '[&_path]:stroke-white'
                    } transition-colors`}
                />
            </button>
            <AnimatePresence initial={false}>
                {activeSubId === menuId && (
                    <motion.div
                        initial={{ y: -10, opacity: 0 }}
                        animate={{
                            y: 0,
                            opacity: 1,
                            transition: { type: 'linear', duration: 0.15 },
                        }}
                        exit={{
                            y: -10,
                            opacity: 0,
                            transition: { type: 'linear', duration: 0.15 },
                        }}
                        className="absolute top-[35px] -right-[115px] z-[5] w-[490px] py-8 px-[30px] bg-white shadow-md"
                    >
                        <div className="relativew-0 h-0 before:absolute before:-top-[3px] before:right-[122px] before:rotate-45 before:w-3 before:h-3 before:bg-white" />
                        <h6 className="font-medium text-2xl text-black-dark mb-8">Search</h6>
                        <form onSubmit={handleSubmit(onSubmit)} className="w-full" noValidate>
                            <div className="mb-6">
                                <Input
                                    id="search"
                                    placeholder="Type your request"
                                    error={errors.search ? true : false}
                                    helperText={errors.search && 'Field is required!'}
                                    {...register('search', { required: true })}
                                />
                            </div>
                            <div className="mb-6">
                                <Controller
                                    control={control}
                                    name="select"
                                    defaultValue={optionsList[0]}
                                    render={({ field: { ref, value, ...rest } }) => {
                                        return (
                                            <CustomSelect inputRef={ref} value={value} id="select" instanceId="select" options={optionsList} {...rest} />
                                        );
                                    }}
                                />
                            </div>
                            <Button type="submit">Search</Button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

SearchButton.propTypes = {
    menuId: PropTypes.string.isRequired,
};

export default SearchButton;
