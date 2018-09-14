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

  constructor(rootStore) {
    this.rootStore = rootStore;
    this.setEthers();
    this.setWeb3();
    this.setProvider();
    this.setOpct();
  }

  @action
  private setWeb3 = () => {
    const network = providers.networks.ropsten;
    this.web3 = new providers.Web3Provider(
      // tslint:disable-next-line:no-string-literal
      window["web3"].currentProvider,
      network
    );
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
    const address = "0xd57c9Bc8Bb17cbD5c385b02F715A497d6f69f324";

    this.opct = new ethers.Contract(address, opctAbi, this.web3);
  };
}

export default EthersStore;
