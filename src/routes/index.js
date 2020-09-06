import Register from '../pages/Register';
import Login from '../pages/Login';
import Otp from '../pages/Otp';

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
  }
]

export default Routes;