import { action, observable } from "mobx";

import * as ethers from "ethers";

import { opctAbi } from "../constants/contract";

const providers = ethers.providers;
class EthersStore {
  public rootStore;

  @observable
  public provider;
  @observable
  public ethers;
  @observable
  public web3;

  @observable
  public opct;
  @observable
  public signer;
  @observable
  public accounts: string[] = [];

  constructor(rootStore) {
    this.rootStore = rootStore;
    this.setEthers();
    this.setWeb3();
    this.setProvider();
    this.setListener();
  }

  private setListener = () => {
    this.web3.on("block", res => {
      this.setSigner();
    });
  };

  @action
  private setWeb3 = () => {
    const network = providers.networks.ropsten;
    this.web3 = new providers.Web3Provider(
      // tslint:disable-next-line:no-string-literal
      window["web3"].currentProvider,
      network
    );
    this.setSigner();
  };

  @action
  private setSigner = async () => {
    await this.web3.listAccounts().then(
      action((accounts: string[]) => {
        this.accounts = accounts;
        this.signer = this.web3.getSigner(accounts[0]);
      })
    );
    this.setOpct();
  };

  @action
  private setEthers = () => {
    this.ethers = ethers;
  };

  @action
  private setProvider() {
    const network = providers.networks.ropsten;
    this.provider = providers.getDefaultProvider(network);
  }

  private setOpct = () => {
    const address = "0xB8a7fcFBd3a59A58FA5d68944Dd870352590cCf8";

    this.opct = new ethers.Contract(address, opctAbi, this.signer);
  };
}

export default EthersStore;
