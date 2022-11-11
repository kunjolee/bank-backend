import { Request, Response } from 'express'
import db from '../db/connection';
import { Account } from '../models'

export const save = async ( req: Request, res: Response ) => {
    const {state = '', balance=0, idUser=0 , ...rest } = req.body;
       
    try {
        
        const account = await Account.create({
           ...rest,
           idUser: (req as any).authUser.id
        });       
          
        res.status(200).json({
            msg: 'User saved successfully',
            account
        });

    } catch (error) {
        console.log('User POST ERROR',error)
        res.status(500).json({
            msg: 'Contact your admin',  
            error          
        })        
    }

}


export const getUserAccounts = async (req: Request, res: Response) => {
    
    try {
        const [ results ] = await db.query(`select "id", "accountNumber" from accounts where "idUser" = ${(req as any).authUser.id}`)

        res.status(200).json(results)
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Error in get',
            error
        })
    }

}

// Here i update only the balance
export const updateBalance = () => {

}