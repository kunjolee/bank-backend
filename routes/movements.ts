import { Router } from 'express';
import { movementController } from '../controllers'
import { fieldsValidate, validateJWT } from '../middlewares';

const router = Router();

router.post('/', [
    validateJWT,
    fieldsValidate
],movementController.save);

router.get('/', [
    validateJWT,
    fieldsValidate
],movementController.getHistoryMovements);

export default router;