import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { ThemeProvider } from '@/context/ThemeContext';

const Layout = () => {
    const { pathname } = useLocation();
    const [clickable, setClickable] = useState();
    const [isDark, setIsDark] = useState(false);

    const hide = () => {
        const time = 1000;
        setTimeout(
            () =>
                clickable.map(block => {
                    block.className = block.className.replace(' active-clickable', '');
                }),
            time
        );
    };

    useEffect(() => {
        pathname === '/' ? setIsDark(false) : setIsDark(true);
    }, [pathname]);

    useEffect(() => {
        const allWithClass = Array.from(document.getElementsByClassName('is-clickable'));
        setClickable(allWithClass);
    }, []);

    const onGlobalClick = e => {
        if (e.target.className.includes('is-clickable')) {
            return;
        } else {
            clickable.map(block => {
                block.className.includes('active-clickable')
                    ? (block.className += '')
                    : (block.className += ' active-clickable');
            });
        }
        hide();
    };

    return (
        <ThemeProvider isDark={isDark} setIsDark={setIsDark}>
            <div onClick={onGlobalClick}>
                <Header />
                <Outlet />
                <Footer />
            </div>
        </ThemeProvider>
    );
};

export default Layout;
