import { memo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import PropTypes from 'prop-types';
import ArrowDownIcon from '@/components/ui/icons/ArrowDownIcon';

const AccordionItem = ({ title, description, id, isOpen, setExpanded }) => {
    const setExpandedHandler = e => {
        e.stopPropagation();
        setExpanded(isOpen ? false : id);
    };

    const setExpandedByKeyboardHandler = e => {
        e.stopPropagation();
        if (e.key === 'Enter') {
            setExpandedHandler();
        }
    };

    const preventClickHandler = e => {
        e.stopPropagation();
    };

    return (
        <li className="[&>button]:pb-5">
            <button
                className="w-full text-left transition-all"
                tabIndex={0}
                type="button"
                onKeyDown={setExpandedByKeyboardHandler}
                onClick={setExpandedHandler}
            >
                <div className="flex justify-between items-baseline">
                    <h5 className="text-xl text-black-dark">{title}</h5>
                    <ArrowDownIcon
                        className={`w-[14px] h-[10px] ${
                            isOpen ? 'rotate-180' : 'rotate-0'
                        } transition-transform duration-300`}
                    />
                </div>
                <AnimatePresence initial={false}>
                    {isOpen && (
                        <motion.div
                            className="overflow-hidden"
                            initial={{ height: 0 }}
                            animate={{
                                height: 'auto',
                                transition: { type: 'linear', duration: 0.3 },
                            }}
                            exit={{
                                height: 0,
                                transition: { type: 'linear', duration: 0.3 },
                            }}
                            onClick={preventClickHandler}
                        >
                            <p className="pt-4">{description}</p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </button>
        </li>
    );
};

AccordionItem.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.string,
    isOpen: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    setExpanded: PropTypes.func,
};

export default memo(AccordionItem);
