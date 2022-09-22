import { Sequelize } from 'sequelize';
import * as pg from 'pg';

import { DB_NAME, USER_NAME, PASS, HOST } from '../conf';


const db = new Sequelize( DB_NAME, USER_NAME, PASS, {
    host: HOST,    
    dialect: 'postgres',
    dialectModule: pg,
    // logging: 
})


export default db;