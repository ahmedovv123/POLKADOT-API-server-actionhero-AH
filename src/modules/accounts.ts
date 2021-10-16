const apiConnection = require('../../nodeConnection');

const connectApi = apiConnection.getNodeConnection().then((api) => {
    return api;
});