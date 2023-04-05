import { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { NavLink, useLocation } from 'react-router-dom';
import { useMenuContext } from '@/context/MenuContext';
import ArrowDownIcon from '@/components/ui/icons/ArrowDownIcon';

const MenuLink = ({ children, href, id, subMenu }) => {
    const linkRef = useRef(null);
    const { pathname } = useLocation();
    const { activeSubId, setActiveSubId } = useMenuContext();
    const [isOpen, setIsOpen] = useState(false);
    const [linkActive, setLinkActive] = useState(false);

    useEffect(() => {
        (activeSubId !== id && isOpen) && setIsOpen(false);
    }, [activeSubId, id, isOpen, setIsOpen]);

    useEffect(() => {
        const hrefArr = subMenu && subMenu.map(item => item.href);
        pathname && hrefArr && setLinkActive(hrefArr.includes(pathname));
    }, [pathname, subMenu]);

    const onSubClick = () => {
        const activeId = linkRef.current.id;
        if (activeId && !isOpen) {
            setActiveSubId(activeId);
            setIsOpen(true);
        } else {
            setActiveSubId('');
            setIsOpen(false);
        }
    };

    return subMenu ? (
        <div className="relative">
            <button
                ref={linkRef}
                id={id}
                className={`is-clickable text-[15px] ${
                    activeSubId === id || linkActive ? 'text-blue-dark' : 'text-black-dark'
                }  inline-flex items-center font-regular hover:text-blue-dark transition relative z-10`}
                onClick={onSubClick}
                type="button"
            >
                {children}
                <ArrowDownIcon
                    className={`${
                        activeSubId === id ? 'rotate-180 [&>path]:stroke-blue-dark' : 'rotate-0'
                    } ml-1 transition-transform ${linkActive && '[&>path]:stroke-blue-dark'}`}
                />
            </button>
            {subMenu && (
                <div
                    id={id}
                    className={`absolute top-[35px] left-0 z-[5] min-w-[204px] bg-white overflow-hidden transition-all duration-150 shadow-lg ${
                        activeSubId === id ? 'translate-y-0 opacity-1 visible' : '-translate-y-10 opacity-0 invisible'
                    }`}
                >
                    <ul className="relative z-[5]">
                        {subMenu.map(({ name, href }, i) => (
                            <li key={i}>
                                <NavLink
                                    className={({ isActive }) =>
                                        `${
                                            isActive ? 'text-blue-dark' : 'text-black-dark'
                                        } relative flex items-center font-regular text-[15px] leading-none whitespace-nowrap px-[15px] py-[15px] hover:bg-gray-100 hover:text-blue-dark transition z-10`
                                    }
                                    onClick={e => {
                                        e.stopPropagation();
                                        setActiveSubId('');
                                    }}
                                    to={href}
                                >
                                    {name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    ) : (
        <NavLink
            id={id}
            onClick={e => {
                e.stopPropagation();
                setActiveSubId('');
            }}
            className={({ isActive }) =>
                `${
                    isActive ? 'text-blue-dark' : 'text-black-dark'
                } relative is-clickable font-regular text-[15px] desktop:py-1 py-[26px] hover:text-blue-dark transition z-10`
            }
            to={href}
        >
            {children}
        </NavLink>
    );
};

MenuLink.propTypes = {
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
    href: PropTypes.string,
    subMenu: PropTypes.arrayOf(PropTypes.object),
    id: PropTypes.string,
};

export default MenuLink;
