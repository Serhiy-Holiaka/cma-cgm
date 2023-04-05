import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Button = forwardRef(
    ({ children, actionType = 'button', variant='colored', additionalClasses, onClick, ...rest }, ref) => {
        const variantStyle = variant === 'outline' ? 'bg-white text-black-dark' : 'bg-red text-white';
        const handleClick =
            typeof onClick === 'function'
                ? e => {
                    e.stopPropagation();
                    onClick();
                }
                : null;

        return (
            <button
                ref={ref}
                type={actionType}
                className={`is-clickable font-medium flex justify-center items-center px-10 py-[15px] min-w-[115px] h-[51px] text-[15px] ${variantStyle} transition hover:shadow-md active:translate-y-[2px] ${additionalClasses}`}
                onClick={handleClick}
                {...rest}
            >
                {children}
            </button>
        );
    }
);

Button.displayName = 'Button';

Button.propTypes = {
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
    actionType: PropTypes.string,
    onClick: PropTypes.func,
    variant: PropTypes.oneOf(['colored', 'outline']),
    additionalClasses: PropTypes.string,
};

export default Button;
