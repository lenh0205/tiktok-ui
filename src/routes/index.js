import { HeaderOnly } from '~/components/Layout';
import routesConfig from '~/config/routes';
import Following from '~/pages/Following';
import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Search from '~/pages/Search';
import Upload from '~/pages/Upload';

// Dùng cho các route không đăng nhập vẫn xem đc
const publicRoutes = [
    { path: routesConfig.home, component: Home },
    { path: routesConfig.following, component: Following },
    { path: routesConfig.Profile, component: Profile },
    { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
    { path: routesConfig.search, component: Search, layout: null },
];

// Dùng cho các route đăng nhập mới xem đc; ko thì sẽ lái sang trang login
const privateRoutes = [];

export { privateRoutes, publicRoutes };

