import { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { NavLink, useLocation } from 'react-router-dom';
import { useMenuContext } from '@/context/MenuContext';
import ArrowDownIcon from '@/components/ui/icons/ArrowDownIcon';

const MenuLinkMobile = ({ children, href, id, subMenu }) => {
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
                } flex items-center font-regular leading-none text-[15px] justify-center w-full py-[15px] hover:bg-gray-100 hover:text-blue-dark transition relative z-10`}
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
                    className={`relative rounded-lg z-[5] bg-white overflow-hidden transition-all duration-150 border-y border-y-neutral-50 ${
                        activeSubId === id
                            ? 'translate-y-0 opacity-1 visible h-auto'
                            : '-translate-y-10 opacity-0 invisible h-0'
                    }`}
                >
                    <ul className="relative z-[5]">
                        {subMenu.map(({ name, href }, i) => (
                            <li key={i}>
                                <NavLink
                                    className={({ isActive }) =>
                                        `${
                                            isActive ? 'text-blue-dark' : 'text-black-dark'
                                        } relative block font-regular leading-none text-[15px] whitespace-nowrap py-[12px] hover:bg-gray-100 hover:text-blue-dark transition z-10`
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
                } relative is-clickable flex justify-center font-regular leading-none text-[15px] py-[15px] hover:bg-gray-100 hover:text-blue-dark transition z-10`
            }
            to={href}
        >
            {children}
        </NavLink>
    );
};

MenuLinkMobile.propTypes = {
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
    href: PropTypes.string,
    subMenu: PropTypes.arrayOf(PropTypes.object),
    id: PropTypes.string,
};

export default MenuLinkMobile;
