import { Router } from "express";
import { currencyController } from "../controllers";

const router = Router();


router.get('/', currencyController.get);


export default router;