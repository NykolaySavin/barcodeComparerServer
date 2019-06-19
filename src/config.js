import dotenv from 'dotenv';
dotenv.config();
const env = process.env;
module.exports = {
    api:{
        port:env.API_PORT
    },
    logLevel:env.LOG_LEVEL,
    db: {
        host: env.MYSQL_HOST,
        port: env.MYSQL_PORT,
        databaseName: env.MYSQL_DB,
        username: env.MYSQL_USER,
        password: env.MYSQL_PASSWORD,
    },
};
