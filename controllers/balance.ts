import { Request, Response } from 'express'
import { Balance } from '../models';


// TODO: get, getById, UPdate, save
// TODO: Queries, get, and get by id


export const get = async ( req: Request,res: Response ) => {

    const ress = await Balance.findAll()

    res.json(ress)
}

export const save = async ( req: Request,res: Response ) => {
    try {
        console.log('Do you join here right')
        const balance = await Balance.create({ amount: 0 });

        res.status(200).json( balance );
        
    } catch (error) {
        console.table(error);

        res.status(500).json({
            msg: 'Error at saving your balance, consult your admin'           
        });
        
        throw new Error(`An error happened while trying to save a balance ${error}`);
        
    }
};


export const update = async ( req: Request, res: Response ) => {
    
    try {
        
        const { id = 0 } = req.params;
        const { amount = 0 } = req.body;

        const balance = await Balance.findByPk( id );

        if (!balance) {
            return res.status(400).json({
                msg: 'There is no any balance with that ID'
            });
        } 

        await balance.update({ amount });

        res.status(200).json({
            msg: 'balance updated successfully',
            balance
        });

    } catch (error) {
        console.table(error);
        
        res.status(500).json({
            msg: 'Error while updating your balance, please consult your admin'           
        });
        
        throw new Error(`An error happened while trying to save a balance ${error}`);
        
    }

};




