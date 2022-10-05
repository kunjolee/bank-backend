import { Request, Response } from 'express';
import Category from '../models/category';


export const get = async (req: Request, res: Response) => {

    const categories = await Category.findAll() 
   
    res.status(200).json(categories);

}






