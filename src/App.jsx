import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from '@/components/layout';
import Home from '@/pages/Home';
import AboutUs from '@/pages/AboutUs';
import LocalOffices from '@/pages/LocalOffices';
import CMAGroup from '@/pages/CMAGroup';
import Guides from '@/pages/Guides';
import OversizedCargo from '@/pages/OversizedCargo';

const App = () => {
    const basePath = import.meta.env.PROD ? '/cmacgm/' : '/';
    const router = createBrowserRouter(
        [
            {
                path: '/',
                element: <Layout />,
                children: [
                    {
                        index: true,
                        element: <Home />,
                    },
                    {
                        path: 'about-us',
                        element: <AboutUs />,
                    },
                    {
                        path: 'offices',
                        element: <LocalOffices />,
                    },
                    {
                        path: 'service',
                        element: <CMAGroup />,
                    },
                    {
                        path: 'shipping-cargo',
                        element: <OversizedCargo />,
                    },
                    {
                        path: 'guides',
                        element: <Guides />,
                    },
                ],
            },
        ],
        { basename: basePath }
    );

    return <RouterProvider router={router} />;
};

export default App;
