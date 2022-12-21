import {Router} from 'express';
import {Endpoints} from '../enums/endpoints';
import UserController from '../controllers/userController';
import authMiddleware from '../middleware/authMiddleware';


const router = Router();

router.post(Endpoints.REGISTRATION, UserController.registration );
router.post(Endpoints.LOGIN, UserController.login );
router.get(Endpoints.AUTH, authMiddleware, UserController.check );

export default router;
