import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from '@/components/layout';
import Home from '@/pages/Home';
import AboutUs from '@/pages/AboutUs';
import LocalOffices from '@/pages/LocalOffices';

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
                ],
            },
        ],
        { basename: basePath }
    );

    return <RouterProvider router={router} />;
};

export default App;
