import { useState } from 'react';
import MobileMenu from '@/components/menu/MobileMenu';
import DesktopMenu from '@/components/menu/DesktopMenu';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import Button from '@/components/ui/button';
import LogoIcon from '@/components/ui/icons/LogoIcon';
import SearchIcon from '@/components/ui/icons/SearchIcon';
import { Link, useNavigate } from 'react-router-dom';
import { MenuProvider } from '@/context/MenuContext';
import { useThemeContext } from '@/context/ThemeContext';
import LanguageMenu from '@/components/menu/LanguageMenu';

const Header = () => {
    const isMobile = useMediaQuery('(max-width: 1430px)');
    const [activeSubId, setActiveSubId] = useState('');
    const { isDark } = useThemeContext();
    const [isMobMenuOpen, setIsMobMenuOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <MenuProvider
            isMobMenuOpen={isMobMenuOpen}
            setIsMobMenuOpen={setIsMobMenuOpen}
            activeSubId={activeSubId}
            setActiveSubId={setActiveSubId}
        >
            <div className="absolute left-2/4 -translate-x-[50%] top-0 flex justify-between items-center w-full max-w-[1920px] py-5 px-11 z-[4]">
                <Link onClick={e => e.stopPropagation()} to="/">
                    <LogoIcon mainColor={isDark ? 'var(--blue-dark)' : 'var(--white)'} />
                </Link>
                <nav className="relative inline-flex items-center -z-[1]">
                    <div
                        onClick={e => {
                            e.stopPropagation();
                            setActiveSubId('');
                            setIsMobMenuOpen(false);
                        }}
                        className={`${
                            activeSubId === '' && !isMobMenuOpen ? 'invisible' : 'visible'
                        } fixed top-0 left-0 right-0 bottom-0 h-screen z-[4]`}
                    />
                    {!isMobile && <DesktopMenu />}
                    <div className="flex items-center [&>*]:mr-9 last:[&>*]:mr-0">
                        <button type="button" className="is-clickable z-[5] [&_path]:hover:stroke-blue">
                            <SearchIcon
                                className={`w-6 h-auto ${
                                    isDark ? '[&_path]:stroke-black-dark' : '[&_path]:stroke-white'
                                } transition-colors`}
                            />
                        </button>
                        <LanguageMenu menuId="langTop" />
                        <Button onClick={() => navigate('/contact-us')} additionalClasses="z-[5]">
                            Contact Us
                        </Button>
                    </div>
                    {isMobile && <MobileMenu />}
                </nav>
            </div>
        </MenuProvider>
    );
};

export default Header;
