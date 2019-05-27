import { EventEmitter } from 'fbemitter';
let eventBus = new EventEmitter();

let EventInterface = {

  addListeners(key, callback) {
    eventBus.addListener(key, callback);
  },

  addListener(key, callback) {
    if(!this.listenerExist(key)) {
      eventBus.addListener(key, callback);
    }
  },
  
  emit(key, data) {
    eventBus.emit(key, data);
  },
  
  listenerExist(key) {
    return eventBus.listeners(key).length > 0;
  },
  
  removeListener(key) {
    if(this.listenerExist(key)) {
      delete eventBus._subscriber._subscriptionsForType[key];
    }
  },
  
  getInstance() {
    return eventBus;
  }
}

export default EventInterface;