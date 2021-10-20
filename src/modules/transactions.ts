const dbConnection = require("../../dbConnection");

const connectDb = dbConnection.getDbConnection().then((db) => {
  db.connect().then(
    console.log("Connected to PostgreSQL from Actionhero Server")
  );
  return db;
});

export async function getTransactionsCount() {
  return await connectDb.then(async (db) => {
    const result = db.query(`SELECT COUNT(*) AS count FROM transactions`);
    return result;
  });
}

export async function getTransactionsFromBlock(blockHash: string) {
  return await connectDb.then(async (db) => {
    const result = db.query(
      `SELECT * FROM transactions WHERE block_hash='${blockHash}'`
    );
    return result;
  });
}

export async function getTransactionByHash(transactionHash: string) {
  return await connectDb.then(async (db) => {
    const result = db.query(
      `SELECT * FROM transactions WHERE hash='${transactionHash}'`
    );
    return result;
  });
}

export async function getXtransactionsAfterNth(x: number, n: number) {
  return await connectDb.then(async (db) => {
    const result = db.query(
      `SELECT * FROM transactions WHERE id < ${n} AND id > ${n} - ${x} LIMIT ${x}`
    );
    return result;
  });
}
