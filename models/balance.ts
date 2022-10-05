import { DataType, DataTypes } from 'sequelize';
import db from '../db/connection';

const Balance = db.define('balance', {
    amount: {
        type: DataTypes.FLOAT,
        allowNull: false
    } 
});

export default Balance;