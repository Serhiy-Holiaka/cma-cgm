import { useState, useEffect } from 'react';
import MobileMenu from '@/components/menu/MobileMenu';
import DesktopMenu from '@/components/menu/DesktopMenu';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import Button from '@/components/ui/button';
import LogoIcon from '@/components/ui/icons/LogoIcon';
import SearchIcon from '@/components/ui/icons/SearchIcon';
import { Link, useNavigate } from 'react-router-dom';
import { MenuProvider } from '@/context/MenuContext';
import { useDocumentLockScrollY } from '@/hooks/useDocumentLockScrollY';
import LanguageMenu from '@/components/menu/LanguageMenu';

const Header = () => {
    const isMobile = useMediaQuery('(max-width: 1000px)');
    const [activeSubId, setActiveSubId] = useState('');
    const { lockScrollY, unlockScrollY } = useDocumentLockScrollY();
    const navigate = useNavigate();

    useEffect(() => {
        activeSubId ? lockScrollY() : unlockScrollY();
    }, [activeSubId, lockScrollY, unlockScrollY]);

    return (
        <MenuProvider activeSubId={activeSubId} setActiveSubId={setActiveSubId}>
            <div className="relative flex justify-between items-center max-w-[1920px] py-5 px-11 z-[4]">
                <Link onClick={e => e.stopPropagation()} to="/">
                    <LogoIcon />
                </Link>
                <nav className="relative inline-flex items-center -z-[1]">
                    {!isMobile && <DesktopMenu />}
                    <div className="flex items-center [&>*]:mr-9 last:[&>*]:mr-0">
                        <button type="button" className="is-clickable z-[5]"><SearchIcon className="w-6 h-auto" /></button>
                        <LanguageMenu menuId="langTop" />
                        <Button onClick={() => navigate('/contact-us')} additionalClasses="z-[5]">Contact Us</Button>
                    </div>
                    {isMobile && <MobileMenu />}
                </nav>
            </div>
        </MenuProvider>
    );
};

export default Header;
