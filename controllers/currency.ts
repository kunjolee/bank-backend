import { Request, Response} from 'express'
import { Currency } from '../models'


export const get = async (req: Request, res: Response) => {
    const currency = await Currency.findAll();

    res.status(200).json(currency);
    return currency;
}


