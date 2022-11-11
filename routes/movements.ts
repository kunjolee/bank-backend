import { Request, Response, Router } from 'express';
import { movementController } from '../controllers'
import { fieldsValidate, validateJWT } from '../middlewares';

const router = Router();

router.post('/', [
    validateJWT,
    fieldsValidate
],movementController.save);

export default router;