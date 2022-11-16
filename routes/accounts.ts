import { Router } from 'express';
import { accountController } from '../controllers';
import { fieldsValidate, validateJWT } from '../middlewares';

const router = Router();

router.post('/', [
    validateJWT,
    fieldsValidate
], accountController.save);

router.get('/',[
    validateJWT,
    fieldsValidate
], accountController.getUserAccounts);

router.put('/balance',[
    validateJWT,
    fieldsValidate
], accountController.updateBalance);

router.put('/balance/:accountNumber',[
    validateJWT,
    fieldsValidate
], accountController.updateBalanceByAccount);

export default router;