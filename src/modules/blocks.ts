const apiConnection = require("../../nodeConnection");

const connectApi = apiConnection.getNodeConnection().then((api) => {
  return api;
});

export async function getLastBlock() {
  return connectApi.then((api) => api.rpc.chain.getBlock());
}

export async function getBlockHashByNumber(blockNumber: number) {
  return connectApi.then((api) => api.rpc.chain.getBlockHash(blockNumber));
}

export async function getBlockByHash(blockHash: string) {
  return connectApi.then((api) => api.rpc.chain.getBlock(blockHash));
}

export async function getXBlocksAfterN(x: number, n: number) {
  return connectApi.then(async (api) => {
    let i = 1;
    let blocks = [];

    while (i <= x) {
      let tempBlock = await api.rpc.chain.getBlockHash(n - i);
      blocks.push(tempBlock);
      i++;
    }

    return blocks;
  });
}
