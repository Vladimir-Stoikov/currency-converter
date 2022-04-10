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
  convertState(start, end) {
    this.convertedState = this.state / 80;
  }
}

export default new Store();
