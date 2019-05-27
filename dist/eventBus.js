"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _fbemitter = require("fbemitter");

var eventBus = new _fbemitter.EventEmitter();
var EventInterface = {
  addListeners: function addListeners(key, callback) {
    eventBus.addListener(key, callback);
  },
  addListener: function addListener(key, callback) {
    if (!this.listenerExist(key)) {
      eventBus.addListener(key, callback);
    }
  },
  emit: function emit(key, data) {
    eventBus.emit(key, data);
  },
  listenerExist: function listenerExist(key) {
    return eventBus.listeners(key).length > 0;
  },
  removeListener: function removeListener(key) {
    if (this.listenerExist(key)) {
      delete eventBus._subscriber._subscriptionsForType[key];
    }
  },
  getInstance: function getInstance() {
    return eventBus;
  }
};
var _default = EventInterface;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ldmVudEJ1cy5qcyJdLCJuYW1lcyI6WyJldmVudEJ1cyIsIkV2ZW50RW1pdHRlciIsIkV2ZW50SW50ZXJmYWNlIiwiYWRkTGlzdGVuZXJzIiwia2V5IiwiY2FsbGJhY2siLCJhZGRMaXN0ZW5lciIsImxpc3RlbmVyRXhpc3QiLCJlbWl0IiwiZGF0YSIsImxpc3RlbmVycyIsImxlbmd0aCIsInJlbW92ZUxpc3RlbmVyIiwiX3N1YnNjcmliZXIiLCJfc3Vic2NyaXB0aW9uc0ZvclR5cGUiLCJnZXRJbnN0YW5jZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBLElBQUlBLFFBQVEsR0FBRyxJQUFJQyx1QkFBSixFQUFmO0FBRUEsSUFBSUMsY0FBYyxHQUFHO0FBRW5CQyxFQUFBQSxZQUZtQix3QkFFTkMsR0FGTSxFQUVEQyxRQUZDLEVBRVM7QUFDMUJMLElBQUFBLFFBQVEsQ0FBQ00sV0FBVCxDQUFxQkYsR0FBckIsRUFBMEJDLFFBQTFCO0FBQ0QsR0FKa0I7QUFNbkJDLEVBQUFBLFdBTm1CLHVCQU1QRixHQU5PLEVBTUZDLFFBTkUsRUFNUTtBQUN6QixRQUFHLENBQUMsS0FBS0UsYUFBTCxDQUFtQkgsR0FBbkIsQ0FBSixFQUE2QjtBQUMzQkosTUFBQUEsUUFBUSxDQUFDTSxXQUFULENBQXFCRixHQUFyQixFQUEwQkMsUUFBMUI7QUFDRDtBQUNGLEdBVmtCO0FBWW5CRyxFQUFBQSxJQVptQixnQkFZZEosR0FaYyxFQVlUSyxJQVpTLEVBWUg7QUFDZFQsSUFBQUEsUUFBUSxDQUFDUSxJQUFULENBQWNKLEdBQWQsRUFBbUJLLElBQW5CO0FBQ0QsR0Fka0I7QUFnQm5CRixFQUFBQSxhQWhCbUIseUJBZ0JMSCxHQWhCSyxFQWdCQTtBQUNqQixXQUFPSixRQUFRLENBQUNVLFNBQVQsQ0FBbUJOLEdBQW5CLEVBQXdCTyxNQUF4QixHQUFpQyxDQUF4QztBQUNELEdBbEJrQjtBQW9CbkJDLEVBQUFBLGNBcEJtQiwwQkFvQkpSLEdBcEJJLEVBb0JDO0FBQ2xCLFFBQUcsS0FBS0csYUFBTCxDQUFtQkgsR0FBbkIsQ0FBSCxFQUE0QjtBQUMxQixhQUFPSixRQUFRLENBQUNhLFdBQVQsQ0FBcUJDLHFCQUFyQixDQUEyQ1YsR0FBM0MsQ0FBUDtBQUNEO0FBQ0YsR0F4QmtCO0FBMEJuQlcsRUFBQUEsV0ExQm1CLHlCQTBCTDtBQUNaLFdBQU9mLFFBQVA7QUFDRDtBQTVCa0IsQ0FBckI7ZUErQmVFLGMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tICdmYmVtaXR0ZXInO1xubGV0IGV2ZW50QnVzID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5sZXQgRXZlbnRJbnRlcmZhY2UgPSB7XG5cbiAgYWRkTGlzdGVuZXJzKGtleSwgY2FsbGJhY2spIHtcbiAgICBldmVudEJ1cy5hZGRMaXN0ZW5lcihrZXksIGNhbGxiYWNrKTtcbiAgfSxcblxuICBhZGRMaXN0ZW5lcihrZXksIGNhbGxiYWNrKSB7XG4gICAgaWYoIXRoaXMubGlzdGVuZXJFeGlzdChrZXkpKSB7XG4gICAgICBldmVudEJ1cy5hZGRMaXN0ZW5lcihrZXksIGNhbGxiYWNrKTtcbiAgICB9XG4gIH0sXG4gIFxuICBlbWl0KGtleSwgZGF0YSkge1xuICAgIGV2ZW50QnVzLmVtaXQoa2V5LCBkYXRhKTtcbiAgfSxcbiAgXG4gIGxpc3RlbmVyRXhpc3Qoa2V5KSB7XG4gICAgcmV0dXJuIGV2ZW50QnVzLmxpc3RlbmVycyhrZXkpLmxlbmd0aCA+IDA7XG4gIH0sXG4gIFxuICByZW1vdmVMaXN0ZW5lcihrZXkpIHtcbiAgICBpZih0aGlzLmxpc3RlbmVyRXhpc3Qoa2V5KSkge1xuICAgICAgZGVsZXRlIGV2ZW50QnVzLl9zdWJzY3JpYmVyLl9zdWJzY3JpcHRpb25zRm9yVHlwZVtrZXldO1xuICAgIH1cbiAgfSxcbiAgXG4gIGdldEluc3RhbmNlKCkge1xuICAgIHJldHVybiBldmVudEJ1cztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFdmVudEludGVyZmFjZTsiXX0=