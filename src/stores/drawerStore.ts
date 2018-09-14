import { action, observable } from "mobx";

class DrawerStore {
  public rootStore;

  @observable
  public open = false;

  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @action
  public toggle = () => {
    this.open = !this.open;
  };

  @action
  public drawerClose = () => {
    this.open = false;
  };
}

export default DrawerStore;
