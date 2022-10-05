import express, { Application } from 'express';
import cors from 'cors';

import db from '../db/connection';

import { balanceRouter, categoriesRouter, currencyRouter, usersRouter, authRouter } from '../routes/';

import { APP_PORT } from '../conf/';

class Server {

    private app: Application;
    private port: string;
    private apiPaths = {
        user: '/api/users',
        category: '/api/categories',
        balance: '/api/balance',
        currency: '/api/currency',
        auth: '/api/auth',
    };

    constructor(){
        this.app = express();
        this.port = APP_PORT;

        this.dbConnection();
        this.middlewares();   
        this.routes();
    }

    async dbConnection(){
      

        try {            
            await db.authenticate();
            console.log('Database online');
        } catch ( error ) {            
            console.log('Unable to connect to the database: ', error);
            throw new Error('Something went wrong');
        }

    }


    middlewares(){        
        // CORS
        this.app.use( cors() );

        // read body in json format
        this.app.use( express.json() );

        // Public file
        this.app.use( express.static('public') )


    }
    
    routes(){        
        this.app.use( this.apiPaths.user, usersRouter );        
        this.app.use( this.apiPaths.category, categoriesRouter );        
        this.app.use( this.apiPaths.balance, balanceRouter);
        this.app.use( this.apiPaths.currency, currencyRouter);
        this.app.use( this.apiPaths.auth, authRouter);
    }
    

    listen(){
        this.app.listen( this.port, () => {            
            console.log(`Server running on port ${this.port}`)
        })
    }



}


export default Server;