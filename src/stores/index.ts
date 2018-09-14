import { configure } from "mobx";

import DrawerStore from "./drawerStore";
import EthersStore from "./ethersStore";

configure({ enforceActions: true });

class RootStore {
  public drawerStore;
  public ethersStore;

  constructor() {
    this.drawerStore = new DrawerStore(this);
    this.ethersStore = new EthersStore(this);
  }
}

const rootStore = new RootStore();

export default rootStore;
