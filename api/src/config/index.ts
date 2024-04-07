import dotenv from 'dotenv';
dotenv.config();

export default {
    mongodb: process.env.DATABASE_URL,
    port: process.env.PORT
}