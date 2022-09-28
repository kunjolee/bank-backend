import { DataTypes } from 'sequelize';
import db from '../db/connection';

const User = db.define('user', {
    name: {
        type: DataTypes.STRING
    },
    username: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    pass: {
        type: DataTypes.STRING
    },
    address: {
        type: DataTypes.STRING
    },
    phone: {
        type: DataTypes.STRING
    },
    birthdate: {
        type: DataTypes.DATE
    },
    state: {
        type: DataTypes.INTEGER,
        defaultValue: 1
    },
})

export default User;