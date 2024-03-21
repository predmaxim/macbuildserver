import {Router} from 'express';
import {getMe, login, register} from '../controllers/authController';
import {authCheck} from '../middlewares/authCheck';

const router = Router();

// http://localhost:5000/api/auth/register
router.post('/api/auth/register', authCheck, register);

// http://localhost:5000/api/auth/login
router.post('/api/auth/login', authCheck, login);


// http://localhost:5000/api/auth/me
router.get('/api/auth/me', authCheck, getMe);

export default router;
