import web3 from './web3';
import CurationStation from './build/contracts/CurationStation.json';

const instance = new web3.eth.Contract (
    CurationStation.abi,


/*
PASTE DEPLOYED GANACHE CONTRACT INSTANCE HERE:
*/

    '0x4D1460eCcead962770875eA3C7087006D9f180c7'

    );

export default instance;
