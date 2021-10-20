import * as dotenv from 'dotenv';
const { Client } = require("pg");

let client;

dotenv.config();

const getDbConnection = async () => {

    if(client) return client;

    const newClient = new Client({
        host: process.env.DB_HOST || "localhost",
        user: process.env.DB_USER || "postgres",
        port: process.env.DB_PORT || "5432",
        password: process.env.DB_PASS || "root",
        database: process.env.DB_DATABASE || "polkadot_explorer",
    });

    
    return newClient;

}

module.exports = {getDbConnection};
