import express, { Application } from 'express';
import cors from 'cors';
import { userRouter } from '../routes/';

class Server {

    private app: Application;
    private port: string;
    private apiPaths = {
        user: '/api/user'
    };

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '8081';
        
        this.middlewares();   
        this.routes();
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
        this.app.use(this.apiPaths.user, userRouter);        
    }


    listen(){
        this.app.listen( this.port, () => {
            console.log(`Server running on port ${this.port}`)
        })
    }



}


export default Server;