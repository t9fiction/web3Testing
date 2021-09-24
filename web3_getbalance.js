const Web3 = require("web3");
const rpcURL = "https://ropsten.infura.io/v3/8f0d7851dd8e4b8c80bcca17a3b17760";
const account = "0xB28EB6F6baafD0b33D64a3fdf47620849Eb2e494";
const web3 = new Web3(rpcURL);

web3.eth.getBalance(account, (err, wei) => {
    console.log("Balance in wei", wei);
    balance = web3.utils.fromWei(wei, 'ether');
    console.log("Balance in Ether", balance);
  })