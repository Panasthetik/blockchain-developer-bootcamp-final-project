require("dotenv").config();

import Web3 from "web3";


let web3;

if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
    window.ethereum.request({ method: "eth_requestAccounts"});

    web3 = new Web3(window.ethereum);

} else {

    const provider = new Web3.providers.HttpProvider(
    
       `https://kovan.infura.io/v3/${process.env.INFURA_API_KEY}` 
    
   /*
       `https://ropsten.infura.io/v3/${process.env.INFURA_API_KEY}`
    */
       );
    web3 = new Web3(provider);
}
export default web3;