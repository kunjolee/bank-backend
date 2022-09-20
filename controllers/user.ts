import { Request, Response } from 'express'

export const get = ( req: Request, res: Response ) => {

    const { body } = req;


    res.json({
        msg: 'Is working from controllers',
        body
    })
}

export const save = ( req: Request, res: Response ) => {
    res.json({
        msg: 'Is working from controllers'
    })
}

