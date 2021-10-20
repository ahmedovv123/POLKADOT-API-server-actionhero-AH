import * as Transactions from "./../modules/transactions";
import { Action } from "actionhero";

export class getTransactionsCount extends Action {
  constructor() {
    super();
    this.name = "getTransactionsCount";
    this.description = "I will get the count of transactions from database";
  }

  async run() {
    const count = await Transactions.getTransactionsCount();
    return { transactionsCount: count?.rows };
  }
}

export class getTransactionsFromBlock extends Action {
  constructor() {
    super();
    this.name = "getTransactionsFromBlock";
    this.description = "I will get transactions of block from database";
    this.inputs = {
      blockHash: { required: true },
    };
  }

  async run({ params }) {
    const count = await Transactions.getTransactionsFromBlock(params.blockHash);
    return { blockTransactions: count?.rows };
  }
}

export class getTransactionByHash extends Action {
  constructor() {
    super();
    this.name = "getTransactionByHash";
    this.description = "I will get transactions by hash from database";
    this.inputs = {
      transactionHash: { required: true },
    };
  }

  async run({ params }) {
    const count = await Transactions.getTransactionByHash(
      params.transactionHash
    );
    return { transaction: count?.rows };
  }
}

export class getXtransactionsAfterNth extends Action {
  constructor() {
    super();
    this.name = "getXtransactionsAfterNth";
    this.description = "I will get transactions by hash from database";
    this.inputs = {
      x: { required: true },
      n: { required: true },
    };
  }

  async run({ params }) {
    const count = await Transactions.getXtransactionsAfterNth(
      params.x,
      params.n
    );
    return { transactions: count?.rows };
  }
}
