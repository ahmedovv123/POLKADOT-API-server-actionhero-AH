const apiConnection = require('../../nodeConnection');

const connectApi = apiConnection.getNodeConnection().then((api) => {
    return api;
});

const dbConnection = require("../../dbConnection");

const connectDb = dbConnection.getDbConnection().then((db) => {
    db.connect().then(console.log("Connected to PostgreSQL from Actionhero Server"));
    return db;
});

export async function getAccountsCount() {
    return await connectDb.then(async db => { 
        const result = await db.query(`SELECT COUNT(DISTINCT recipient)+COUNT(DISTINCT sender) AS count FROM transactions`);
        return result.rows;
    })
}

export async function getAccountTransactionsCount(accountId: string){
    return await connectDb.then(async db => {
        const result = db.query(`SELECT COUNT(*) AS count FROM transactions WHERE sender='${accountId}' OR recipient='${accountId}'`);
        return result;
    })
}

export async function getAccountTransactions(accountId: string) {
    return await connectDb.then(async db => {
        const result = db.query(`SELECT * FROM transactions WHERE recipient='${accountId}' OR sender='${accountId}'`);
        return result;
    })
}

export async function getAccountBalance(accountId: string) {
    return connectApi.then(api => api.query.system.account(accountId));
}