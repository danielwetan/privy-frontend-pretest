import Register from '../pages/Register';
import Login from '../pages/Login';
import Otp from '../pages/Otp';
import Profile from '../pages/Profile';
import PageNotFound from '../pages/PageNotFound';

const Routes = [
  {
    name: 'Register',
    path: '/auth/register',
    component: Register,
  },
  {
    name: 'Login',
    path: '/auth/login',
    component: Login,
  },
  {
    name: 'Otp',
    path: '/auth/otp',
    component: Otp,
  },
  {
    name: 'Profile',
    path: '/profile',
    component: Profile,
  },
  {
    name: 'PageNotFound',
    path: '*',
    component: PageNotFound,
  }
]

export default Routes;