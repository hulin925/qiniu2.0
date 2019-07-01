import Login from '@/views/Login';
import Home from '@/views/Home';
import Register from '@/views/Register';
import getBackPassword from '@/views/getBackPassword';
import qiniu from '@/views/qiniu';

export default[
    {
        path:'/Login',
        name:'Login',
        component:Login,
    },
    {
        path:'/Home',
        name:'Home',
        component:Home,
    },
    {
        path:'/Register',
        name:'Register',
        component:Register
    },
    {
        path:'/getBackPassword',
        name:'getBackPassword',
        component:getBackPassword
    },
    {
        path:'/',
        name:'qiniu',
        component:qiniu
    }
]
