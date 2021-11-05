import web3 from './web3';
import CurationStation from './build/CurationStation.json';

const instance = new web3.eth.Contract (
    CurationStation.abi,

/*
KOVAN:
*/

    '0x0000000000000000000000000000000000000000'

/*
ROPSTEN:

/*
    '0x0000000000000000000000000000000000000000'
*/
    );

export default instance;
