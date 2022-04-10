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
  convertState(startRatio, endRatio) {
    this.convertedState = Math.floor((this.state / startRatio) * endRatio * 1000) / 1000;
  }
}

export default new Store();
