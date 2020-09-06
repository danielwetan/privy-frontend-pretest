import Register from '../pages/Register';
import Login from '../pages/Login';

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
  }
]

export default Routes;