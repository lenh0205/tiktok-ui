import { HeaderOnly } from '~/components/Layout';
import Following from '~/pages/Following';
import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Search from '~/pages/Search';
import Upload from '~/pages/Upload';

// Dùng cho các route không đăng nhập vẫn xem đc
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/@:nickname', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null },
];

// Dùng cho các route đăng nhập mới xem đc; ko thì sẽ lái sang trang login
const privateRoutes = [];

export { privateRoutes, publicRoutes };
