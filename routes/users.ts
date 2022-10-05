import { Router } from 'express';
import { body, check } from 'express-validator';


import { usersController } from '../controllers';
import { existUserById, existUserEmail } from '../helpers/db-validations';
import { fieldsValidate } from '../middlewares';

const router = Router();

router.get('/', usersController.get);



router.get('/:id', [
    check('id').custom( existUserById )
] ,usersController.getById);


router.post(
    '/',
    [
        body('name', 'Name is required').notEmpty(),
        body('username', 'Username is required').notEmpty(),
        body('email', 'Invalid email').isEmail(),
        body('email').custom( existUserEmail ),
        body('pass', 'Password is required').notEmpty(),
        body('pass', 'password should be at least 6 characters').isLength({ min: 6}),
        body('address', 'Address is required').notEmpty(),
        body('phone', 'Phone is required').notEmpty(),
        body('birthdate', 'Birthdate is required').notEmpty(),
        body('birthdate', 'Is not a valid date').isDate(),
        fieldsValidate
    ], 
    usersController.save
);



router.put('/:id', [
    
], usersController.update);
router.delete('/:id', [], usersController.deleteUser);



export default router;



