import { DataTypes } from 'sequelize';
import db from '../db/connection';
import { IUser } from '../interfaces';

const User = db.define<IUser>('user', {
    name: {
        allowNull: false,
        type: DataTypes.STRING
    },
    username: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
    },
    email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true
    },
    pass: {
        allowNull: false,
        type: DataTypes.STRING
    },
    address: {
        allowNull: false,
        type: DataTypes.STRING
    },
    phone: {
        allowNull: false,
        type: DataTypes.STRING
    },
    birthdate: {
        allowNull: false,
        type: DataTypes.DATEONLY,
    },
    state: {
        allowNull: false,
        type: DataTypes.INTEGER,
        defaultValue: 1
    },
})

export default User;