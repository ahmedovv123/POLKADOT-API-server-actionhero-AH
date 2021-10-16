import * as Blocks from './../modules/blocks';
import { chatRoom, Action } from "actionhero";

export class getLastBlock extends Action {

    constructor() {
        super();
        this.name = "getLastBlock";
        this.description = "I will get last block from node";
      }

    async run() {
        return await Blocks.getLastBlock();
    }
}

export class getBlockHashByNumber extends Action {
    constructor() {
        super();
        this.name = 'getBlockHashByNumber';
        this.description = "I will get block hash by block number";
        this.inputs = {
            blockNumber: { required: true}
        };
    }

    async run({ params }) {
        return { blockHash: await Blocks.getBlockHashByNumber(params.blockNumber) }
        
    }
}


export class getBlockByHash extends Action {
    constructor() {
        super();
        this.name = 'getBlockByHash';
        this.description = "I will get block by hash";
        this.inputs = {
            blockHash: { required: true}
        };
    }

    async run({ params }) {
        const result = await Blocks.getBlockByHash(params.blockHash);
        return {result}
    }
}

export class getXBlocksAfterN extends Action {
    constructor() {
        super();
        this.name = 'getXBlocksAfterN';
        this.description = "I will get X blocks after Nth";
        this.inputs = {
            x: { required: true},
            n: {required: true}
        };
    }

    async run({ params }) {
        const result = await Blocks.getXBlocksAfterN(params.x, params.n);
        return {result};
    }
}