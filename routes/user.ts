import { Router } from 'express';
import { userController } from '../controllers';

const router = Router();

router.get('/', userController.get)
router.post('/', userController.save)



export default router;



