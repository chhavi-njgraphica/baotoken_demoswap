

const Web3 = require("web3")
const  ABI = require('./abi');
const win = window as any;
class Web3Handler {
  contract?: any;

  isMetamaskInstalled() {
    return win.ethereum && win.ethereum.isMetaMask;
  }

  isMetamaskEnabled() {
    const web3 = new Web3(win.web3.currentProvider);
    web3.eth.defaultAccount = win.ethereum.enable()[0];
    return web3.eth.defaultAccount !== undefined;
  }

  isReady() {
    return this.isMetamaskInstalled() && this.isMetamaskInstalled();
  }

  async enable() {
    await win.ethereum.enable();
  }

  async load() {
    const web3 = new Web3(win.web3.currentProvider);
    web3.eth.defaultAccount =await web3.eth.accounts[0];
    this.contract = new web3.eth.Contract(ABI,"0xfdba66f206d8fc506cb8bea3f66a677295f2907a");
  }


  async getCount(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.contract.getCount((error: any, data: any) => {
        if (error) {
          reject(error);
        } else {
          resolve(data.c[0]);
        }
      });
    });
  }

  async stake(number: number) {
    const web3 = new Web3(win.web3.currentProvider);
    const accounts = await win.ethereum.enable();
    const account = accounts[0];
    const contract = new web3.eth.Contract(ABI,"0xfdba66f206d8fc506cb8bea3f66a677295f2907a");
    var gas;
    try {

      gas = await contract.methods.stake().estimateGas({
          from: account, 
      });
      console.log("gas------------>", gas)
    } 
    catch(error){
      console.log(error);
      gas = 30000000;           
    } 
    const result = await contract.methods.stake().send({ from: account, gas: gas, value: web3.utils.toWei(number.toString(), 'ether')});
    console.log(result);   

  };

  async checkMyStake() {
    const web3 = new Web3(win.web3.currentProvider);
    const accounts = await win.ethereum.enable();
    const account = accounts[0];
    const contract = new web3.eth.Contract(ABI,"0xfdba66f206d8fc506cb8bea3f66a677295f2907a");

    const result = contract.methods.checkMyStake().call({ from: account})
    return result

  }



}
export default new Web3Handler();
