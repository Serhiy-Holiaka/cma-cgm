import { createContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useSafeContext } from '@/hooks/useSafeContext';

const MenuContext = createContext();
MenuContext.displayName = 'MenuContext';

export const useMenuContext = () => {
    const context = useSafeContext(MenuContext);

    return context;
};

export const MenuProvider = ({ children, activeSubId, setActiveSubId }) => {
    const memoizedValue = useMemo(
        () => ({
            activeSubId,
            setActiveSubId,
        }),
        [activeSubId, setActiveSubId]
    );

    return <MenuContext.Provider value={memoizedValue}>{children}</MenuContext.Provider>;
};

MenuProvider.propTypes = {
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
    activeSubId: PropTypes.string.isRequired,
    setActiveSubId: PropTypes.func.isRequired,
};
