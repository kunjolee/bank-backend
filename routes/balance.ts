import { Router } from 'express';

import { balanceController } from '../controllers/'
const router = Router();

// TODO: Queries, get, and get by id



router.post('/', balanceController.save);
router.put('/:id', balanceController.update);
router.get('/', balanceController.get);

export default router; 