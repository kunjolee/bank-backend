import jwt from 'jsonwebtoken';
import { JWT_PRIVATE_KEY } from '../conf';

export const generateJWT = (uid: string, username: string, email: string) => {

    return new Promise(( resolve, reject ) => {

        const options = {
            expiresIn: '3h'
        }
        
        const payload = {
            uid,
            username,
            email
        };
        
        jwt.sign(payload , JWT_PRIVATE_KEY, options , (err, token) => {
        
            if (err) {
                console.log(err);
                reject('Something wrong happend while trying to generate your token');
            }

            resolve(token);

        });

    });
}




