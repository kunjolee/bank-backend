import dotenv from 'dotenv';
dotenv.config();

export const DB_NAME= process.env.DATABASE || '';
export const USER_NAME= process.env.USER_NAME || '';
export const PASS= process.env.PASSWORD || '';
export const PORT= process.env.PORT || '';
export const HOST= process.env.HOST || '';
