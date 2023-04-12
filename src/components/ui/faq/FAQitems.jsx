import { memo, useState } from 'react';
import PropTypes from 'prop-types';
import FAQitem from './FAQitem';

const FAQitems = ({ list, additionalClasses, activeId = '1' }) => {
    const [expanded, setExpanded] = useState(activeId);

    return (
        <ul className={`block w-full max-w-[1000px] ${additionalClasses}`}>
            {list.map(item => {
                const isOpen = item.id === expanded;

                return (
                    <FAQitem
                        key={item.id}
                        title={item.title}
                        description={item.description}
                        id={item.id}
                        isOpen={isOpen}
                        setExpanded={setExpanded}
                    />
                );
            })}
        </ul>
    );
};

FAQitems.propTypes = {
    list: PropTypes.array.isRequired,
    activeId: PropTypes.number,
    additionalClasses: PropTypes.string,
};

export default memo(FAQitems);
