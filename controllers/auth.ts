import { Response } from 'express';
import { Op } from 'sequelize';
import bcryptjs from 'bcryptjs'
import { generateJWT } from '../helpers';
import { IAuth,CustomRequest, IUser } from '../interfaces';
import { User } from '../models';

export const login = async (req: CustomRequest<IAuth>, res: Response) => {
    try {
        
        const { email='', username='', pass='' } = req.body;

        const user = await User.findOne({ 
            where: {
                [Op.or]: [
                    { email },
                    { username }
                ]          
            },
         });

         if (!user) {
            return res.status(400).json({
                msg: `User not founded`
            });
         };

         if (!bcryptjs.compareSync(pass, user.pass)) {
            return res.status(400).json({
                msg: 'Invalid authentication - user credentials do not coincide'
            })
         }
   
        const token = await generateJWT(user.id, user.username, user.email)
      
        res.status(200).json({
            ok: true,
            user,
            msg: 'authenticated successfully',
            token
        });
        
    } catch (error) {
        console.log('Something wront happend while trying to authenticate', error);
        res.status(500).json({
            ok: false,
            msg: 'Something wront happend while trying to authenticate'
        })
    }
}