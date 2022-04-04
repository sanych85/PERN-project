import Admin from './pages/AdminPanel';
import Basket from './pages/BasketPage';
import Shop from "./pages/Shop"
import Auth from "./pages/Auth"
import DevicePage from "./pages/DevicePAge"
import NotFoundPage from "./pages/NotFoundPage"
import { ADMIN_ROUTE, BASKET_ROUTE, SHOP_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, DEVICE_ROUTE, NOT_FOUND } from './utils/constants';

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    component: <Admin/>,
  },
  {
    path: BASKET_ROUTE,
    component: <Basket/>,
  },
];

export const publicRoutes = [
{
    path: SHOP_ROUTE,
    component: <Shop/>,
},
{
    path: LOGIN_ROUTE,
    component: <Auth/>,
},
{
    path: REGISTRATION_ROUTE,
    component: <Auth/>,
},
{
    path: DEVICE_ROUTE + '/:id',
    component: <DevicePage/>,
},
{
    path: NOT_FOUND,
    component: <NotFoundPage/>
},

];
