import { memo, useState, useRef, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useMenuContext } from '@/context/MenuContext';
import ArrowDownIcon from '@/components/ui/icons/ArrowDownIcon';
import FlagRFIcon from '@/components/ui/icons/FlagRFIcon';
import FlagGBIcon from '@/components/ui/icons/FlagGBIcon';
import { LANGUAGE_LIST } from '@/constants/language.constats';

const LanguageMenu = ({ menuId, langList = LANGUAGE_LIST }) => {
    const btnRef = useRef(null);
    const [langId, setLangId] = useState('1gb');
    const [isOpen, setIsOpen] = useState(false);
    const [currentLang, setCurrentLang] = useState({});
    const { activeSubId, setActiveSubId, setIsMobMenuOpen } = useMenuContext();

    useEffect(() => {
        activeSubId !== menuId && isOpen && setIsOpen(false);
    }, [activeSubId, menuId, isOpen, setIsOpen]);

    useMemo(() => {
        const langProps = langList && langList.find(item => item.id === langId);
        setCurrentLang(langProps);
    }, [langId, langList]);

    const onSubMenuClick = () => {
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

    const onSubMenuItemClick = (e, id) => {
        e.stopPropagation();
        setLangId(id);
        setActiveSubId('');
    };

    return (
        <div className="relative min-w-[82px]">
            <button
                ref={btnRef}
                id={menuId}
                className={`is-clickable text-[15px] ${
                    activeSubId === menuId ? 'text-blue-dark' : 'text-black-dark'
                }  inline-flex items-center font-regular hover:text-blue-dark transition relative z-10`}
                onClick={onSubMenuClick}
                type="button"
            >
                {currentLang?.title === 'eng' ? <FlagGBIcon /> : <FlagRFIcon />}
                <span className="ml-[10px] mr-[6px] uppercase">{currentLang?.title}</span>
                <ArrowDownIcon
                    className={`${
                        activeSubId === menuId ? 'rotate-180 [&>path]:stroke-blue-dark' : 'rotate-0'
                    } transition-transform ${activeSubId === menuId && '[&>path]:stroke-blue-dark'}`}
                />
            </button>
            {langList && (
                <div
                    id={menuId}
                    className={`absolute top-[35px] left-0 z-[5] min-w-[117px] bg-white overflow-hidden transition-all duration-150 shadow-lg ${
                        activeSubId === menuId
                            ? 'translate-y-0 opacity-1 visible'
                            : '-translate-y-10 opacity-0 invisible'
                    }`}
                >
                    <ul className="relative z-[5]">
                        {langList.map(({ id, title, icon: Icon }, i) => (
                            <li key={i}>
                                <button
                                    id={id}
                                    className={`${
                                        langId === id ? 'text-blue-dark' : 'text-black-dark'
                                    } relative flex items-center font-regular text-[15px] whitespace-nowrap w-full px-[15px] py-[12px] hover:bg-gray-100 hover:text-blue-dark transition z-10`}
                                    onClick={e => onSubMenuItemClick(e, id)}
                                >
                                    <Icon />
                                    <span className="ml-[10px] uppercase">{title}</span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

LanguageMenu.propTypes = {
    langList: PropTypes.arrayOf(PropTypes.object),
    menuId: PropTypes.string.isRequired,
};

export default memo(LanguageMenu);
