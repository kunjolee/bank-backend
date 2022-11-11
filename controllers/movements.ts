import { Request, Response } from 'express'
import { Movement } from '../models/'

export const save = async (req: Request, res: Response) => {
    try {
        const { state, ...rest } = req.body
    
        const movement = await Movement.create({
            ...rest,
            idUser: (req as any).authUser.id
        });
    
        res.json({
            msg: 'Movement saved successfully',
            movement
        })
        
    } catch (error) {
        console.log('Movement POST ERROR',error)
        res.status(500).json({
            msg: 'Contact your admin',  
            error          
        })        
    }


}