import { makeAutoObservable } from 'mobx';

class Store {
  state = 0;
  convertedState = 0;
  constructor() {
    makeAutoObservable(this);
  }

  changeState(newState) {
    this.state = newState;
  }
  convertState(ratio) {
    this.convertedState = Math.floor((this.state / ratio) * 100) / 100;
  }
}

export default new Store();
