import Inbox from '~/pages/Inbox';
import Meetings from '~/pages/Meetings';
import MyTask from '~/pages/MyTask';
import Projects from '~/pages/Projects';
import Settings from '~/pages/Settings';
import Standups from '~/pages/Standups';

const publicRoutes = [
    { path: '/', component: MyTask },
    { path: '/inbox', component: Inbox },
    { path: '/meetings', component: Meetings },
    { path: '/projects', component: Projects },
    { path: '/settings', component: Settings },
    { path: '/standups', component: Standups },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
