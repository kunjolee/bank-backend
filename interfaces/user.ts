import { Model } from "sequelize";

export interface IUser extends Model{
    id: string,
    name: string;
    username: string;
    email: string;
    pass: string;
    address: string;
    phone: string;
    birthdate: string;
    state: number;    
}   

