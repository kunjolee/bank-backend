import express, { Application } from 'express';
import cors from 'cors';

import db from '../db/connection';
import { usersRouter } from '../routes/';
import { PORT } from '../conf/';

class Server {

    private app: Application;
    private port: string;
    private apiPaths = {
        user: '/api/users'
    };

    constructor(){
        this.app = express();
        this.port = PORT;
        
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
        this.app.use(this.apiPaths.user, usersRouter);        
    }
    

    listen(){
        this.app.listen( this.port, () => {            
            console.log(`Server running on port ${this.port}`)
        })
    }



}


export default Server;