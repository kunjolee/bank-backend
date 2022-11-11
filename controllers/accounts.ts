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
export const updateBalance = async (req: Request, res: Response) => {
    try {
        const { type, amount, idAccount } = req.body

        let query = '';

            if(type==='EXPENSES'){

                const [ results ] = await db.query(`select balance from accounts where id = ${idAccount}`)
                const [ myBalance ] = results;
                
                if (amount > (myBalance as any).balance) {
                    
                    return res.status(200).json({
                        msg: `Can't create an expense greater than your balance ${(myBalance as any).balance}`,
                        ok: false,
                        amount,
                        myBalance: (myBalance as any).balance
                    })
                }     

                query = `update accounts set balance = balance - ${amount} where id = ${idAccount}`
            } else {
                query = `update accounts set balance = balance + ${amount} where id = ${idAccount}`
            }
            
            await db.query(query);
    
            res.status(200).json({
                msg: 'Balance updated successfully',
                ok: true
            })
            
            
        } catch (error) {
            console.log('Error updating balance')    
    }
}