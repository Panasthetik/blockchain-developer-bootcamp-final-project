import web3 from './web3';
import CurationStation from './client/src/contracts/CurationStation.json';

const instance = new web3.eth.Contract (
    CurationStation.abi,

/*
KOVAN:
*/

    '0x9361Aa54CFe5C9EaeDCCb9d2a87b52De67dE7AE5'

/*
ROPSTEN:

/*
    '0x095098aBAC9Bc22E2b09D122d3b55F5D00Bf4b42'
*/
    );

export default instance;
