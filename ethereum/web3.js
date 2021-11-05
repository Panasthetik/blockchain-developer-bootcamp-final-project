import Web3 from "web3";

let web3;

if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
    window.ethereum.request({ method: "eth_requestAccounts"});

    web3 = new Web3(window.ethereum);

} else {

    const provider = new Web3.providers.HttpProvider(
    
/*
FOR KOVAN (paste in your Infura URL/API here) :
*/
       'https://kovan.infura.io/v3/<YOUR_INFURA_API_KEY>' 
/*
FOR ROPSTEN (paste in your Infura URL/API here) :
*/
/*
       'https://ropsten.infura.io/v3/<YOUR_INFURA_API_KEY>'
*/
       );
    web3 = new Web3(provider);
}
export default web3;