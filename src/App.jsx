import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from '@/components/layout';
import Home from '@/pages/Home';
import AboutUs from '@/pages/AboutUs';
import LocalOffices from '@/pages/LocalOffices';
import Guides from '@/pages/Guides';

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
