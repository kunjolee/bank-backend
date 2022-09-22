import { Router } from 'express';

import { usersController } from '../controllers';

const router = Router();

router.get('/', usersController.get)
router.get('/:id', usersController.getById)
router.post('/', usersController.save)
router.put('/:id', usersController.update)
router.delete('/:id', usersController.deleteUser)



export default router;



