import { createContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useSafeContext } from '@/hooks/useSafeContext';

const ThemeContext = createContext();
ThemeContext.displayName = 'ThemeContext';

export const useThemeContext = () => {
    const context = useSafeContext(ThemeContext);

    return context;
};

export const ThemeProvider = ({ children, isDark, setIsDark }) => {
    const memoizedValue = useMemo(
        () => ({
            isDark,
            setIsDark
        }),
        [isDark, setIsDark]
    );

    return <ThemeContext.Provider value={memoizedValue}>{children}</ThemeContext.Provider>;
};

ThemeProvider.propTypes = {
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
    isDark: PropTypes.bool.isRequired,
    setIsDark: PropTypes.func.isRequired,
};
