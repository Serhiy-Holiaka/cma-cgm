import PropTypes from 'prop-types';

const RightBar = ({ title, subList }) => {
    return (
        <div className="px-5 py-6 shadow-custom [&>p]:font-regular [&>p]:text-[15px] [&>p]:leading-[200%] [&>p]:text-black-dark [&>p]:text-opacity-70">
            <h6 className="text-2xl mb-6">{title}</h6>
            {subList.map(({ subTitle }, i) => (
                <p key={i}>{subTitle}</p>
            ))}
        </div>
    );
};

RightBar.propTypes = {
    title: PropTypes.string,
    subList: PropTypes.arrayOf(PropTypes.object),
};

export default RightBar;
