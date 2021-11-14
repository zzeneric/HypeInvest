import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// home routing
const HomeDefault = Loadable(lazy(() => import('views/home/home')));

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('views/utilities/Search')));
// sample page routing
const DocPage = Loadable(lazy(() => import('views/documentation')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <HomeDefault />
        },
        {
            path: '/dashboard',
            element: <DashboardDefault />
        },
        {
            path: '/search/',
            element: <UtilsTypography />
        },
        {
            path: '/documentation/',
            element: <DocPage />
        }
    ]
};

export default MainRoutes;
