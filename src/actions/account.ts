import * as Accounts from './../modules/accounts';
import { Action } from "actionhero";

export class getAccountsCount extends Action {

    constructor() {
        super();
        this.name = "getAccountsCount";
        this.description = "I will get the count of account from database";
      }

    async run() {
        const count = await Accounts.getAccountsCount(); 
        return count;
    }
}

export class getAccountTransactionsCount extends Action {

    constructor() {
        super();
        this.name = "getAccountTransactionsCount";
        this.description = "I will get the count of account from database";
        this.inputs = {
            accountId: { required: true}
        };
      }

    async run({ params }) {
        const count = await Accounts.getAccountTransactionsCount(params.accountId); 
        return count?.rows;
    }
}

export class getAccountTransactions extends Action {

    constructor() {
        super();
        this.name = "getAccountTransactions";
        this.description = "I will get transactions of account from database";
        this.inputs = {
            accountId: { required: true}
        };
      }

    async run({ params }) {
        const result = await Accounts.getAccountTransactions(params.accountId); 
        return { accountTransactions: result?.rows };
    }
}

export class getAccountBalance extends Action {

    constructor() {
        super();
        this.name = "getAccountBalance";
        this.description = "I will get account balance";
        this.inputs = {
            accountId: { required: true}
        };
      }

    async run({ params }) {
        const result = await Accounts.getAccountBalance(params.accountId); 
        return { accountBalance: result};
    }
}

