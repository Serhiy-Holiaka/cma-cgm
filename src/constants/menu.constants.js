export const MENU_LIST = [
    {
        name: 'About us',
        href: '/about',
    },
    {
        name: 'Find your local offices',
        href: '/offices',
    },
    {
        name: 'My Customer Service',
        href: '/service',
    },
    {
        name: 'Guides',
        href: '/guides',
    },
    {
        name: 'Shipping',
        id: '1a',
        subMenu: [
            {
                name: 'ACT with CMA CGM+',
                href: '/shipping-act',
            },
            {
                name: 'Oversized cargo',
                href: '/shipping-cargo',
            },
        ],
    },
    {
        name: 'Logistics',
        id: '2a',
        subMenu: [
            {
                name: 'Logistics services',
                href: '/logistics-services',
            },
            {
                name: 'Intermodal solutions',
                href: '/logistics-solution',
            },
        ],
    },
    {
        name: 'Air freight',
        id: '3a',
        subMenu: [
            {
                name: 'Schedule flight',
                href: '/schedule-flight',
            },
            {
                name: 'Dedicated flight',
                href: '/dedicated-flight',
            }
        ],
    },
];
