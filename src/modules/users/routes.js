import router from 'reactor/router';
import Users from './components/Users';
import Login from './components/Login';
import Guardian from './middleware/guardian';
import ReverseGuardian from './middleware/reverse-guardian';
import Register from 'modules/users/components/register';
router.add('/users', Users, Guardian);
router.add('/login', Login, ReverseGuardian);
router.add('/register',Register);