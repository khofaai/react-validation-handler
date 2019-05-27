"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _eventBus = _interopRequireDefault(require("../eventBus"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var keys = [];
var errorsKeys = {};
var elements = {};
var messages = {
  required: {
    en: 'this field is required',
    fr: "Ce champ est requis"
  },
  type: _defineProperty({
    number: {
      en: 'this field accept numbers only',
      fr: 'Ce champ accept que les numero'
    },
    string: {
      en: 'this field accept caracteres only',
      fr: 'Ce champ accept que les caracteres'
    },
    email: {
      en: 'this field should be a valid email',
      fr: 'ce champ dois etre un valide email'
    }
  }, "number", {
    en: 'this field accept only numbers',
    fr: 'ce champ accepte que les numeros'
  })
};
var errorHanlderHooks = {
  getMessages: function getMessages() {
    return messages;
  },
  isEmail: function isEmail(val) {
    var regx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regx.test(val);
  },
  isNumber: function isNumber(val) {
    var regx = /^[0-9]+$/;
    return regx.test(val);
  },
  setElement: function setElement(id, value) {
    elements[id] = value;
  },
  getElement: function getElement(id) {
    return elements[id];
  },
  getElements: function getElements() {
    return elements;
  },
  clearErrorMessage: function clearErrorMessage(value, setErrorInput) {
    if (value.trim() !== '') {
      setErrorInput('');
    }
  },
  dispatchChecker: function dispatchChecker(id, status) {},
  dispatch: function dispatch(name) {
    _eventBus["default"].emit("".concat(name, "Values"), function (id, status) {
      status ? errorsKeys[id] = true : delete errorsKeys[id];
    });

    return {
      then: errorHanlderHooks.checkDispatch
    };
  },
  checkDispatch: function checkDispatch(callback) {
    callback(Object.keys(errorsKeys).length > 0, errorsKeys);
    return errorsKeys;
  },
  validate: function validate() {
    keys.map(function (key) {
      return errorHanlderHooks.validation(key, function () {
        console.log('validate running for : ', {
          key: key
        });
      });
    });
  },
  check: function check(key) {
    var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _eventBus["default"].emit(key, callback);
  },
  validation: function validation(key, callback) {
    keys.push(key);

    _eventBus["default"].addListener(key, callback);
  },
  getErrorLabel: function getErrorLabel(message) {
    return _react["default"].createElement("label", {
      className: "InputWrapper_explain"
    }, message);
  },
  checkInput: function checkInput(input, rules) {
    var lang = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'fr';
    input.error = rules.required && input.value === '' ? messages.required[lang] : '';
  },
  setErrorMessage: function setErrorMessage(rules, value) {
    if (rules.required && (typeof value === 'string' && value.trim()) === '') {
      return messages.required.fr;
    } else if (rules.email && !errorHanlderHooks.isEmail(value)) {
      return messages.type.email.fr;
    } else if (rules.number && !errorHanlderHooks.isNumber(value)) {
      return messages.type.number.fr;
    }

    return '';
  },
  validateData: function validateData(data) {
    var containerName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'none';
    var lang = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'fr';
    var dataKeys = Object.keys(data);
    dataKeys.map(function (key) {
      var input = data[key];

      if (input.required) {
        input.error = input.value.trim() === '' ? messages.required[lang] : '';
      }

      return input;
    });
    if (containerName !== 'none') _eventBus["default"].emit(containerName, data);
    return data;
  }
};
var _default = errorHanlderHooks;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9FcnJvckhhbmRsZXIvRXJyb3JIYW5kbGVySG9va3MuanMiXSwibmFtZXMiOlsia2V5cyIsImVycm9yc0tleXMiLCJlbGVtZW50cyIsIm1lc3NhZ2VzIiwicmVxdWlyZWQiLCJlbiIsImZyIiwidHlwZSIsIm51bWJlciIsInN0cmluZyIsImVtYWlsIiwiZXJyb3JIYW5sZGVySG9va3MiLCJnZXRNZXNzYWdlcyIsImlzRW1haWwiLCJ2YWwiLCJyZWd4IiwidGVzdCIsImlzTnVtYmVyIiwic2V0RWxlbWVudCIsImlkIiwidmFsdWUiLCJnZXRFbGVtZW50IiwiZ2V0RWxlbWVudHMiLCJjbGVhckVycm9yTWVzc2FnZSIsInNldEVycm9ySW5wdXQiLCJ0cmltIiwiZGlzcGF0Y2hDaGVja2VyIiwic3RhdHVzIiwiZGlzcGF0Y2giLCJuYW1lIiwiZXZlbnRCdXMiLCJlbWl0IiwidGhlbiIsImNoZWNrRGlzcGF0Y2giLCJjYWxsYmFjayIsIk9iamVjdCIsImxlbmd0aCIsInZhbGlkYXRlIiwibWFwIiwia2V5IiwidmFsaWRhdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJjaGVjayIsInB1c2giLCJhZGRMaXN0ZW5lciIsImdldEVycm9yTGFiZWwiLCJtZXNzYWdlIiwiY2hlY2tJbnB1dCIsImlucHV0IiwicnVsZXMiLCJsYW5nIiwiZXJyb3IiLCJzZXRFcnJvck1lc3NhZ2UiLCJ2YWxpZGF0ZURhdGEiLCJkYXRhIiwiY29udGFpbmVyTmFtZSIsImRhdGFLZXlzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7OztBQUNBLElBQUlBLElBQUksR0FBRyxFQUFYO0FBQ0EsSUFBSUMsVUFBVSxHQUFHLEVBQWpCO0FBQ0EsSUFBSUMsUUFBUSxHQUFHLEVBQWY7QUFDQSxJQUFJQyxRQUFRLEdBQUc7QUFDYkMsRUFBQUEsUUFBUSxFQUFFO0FBQ1JDLElBQUFBLEVBQUUsRUFBRSx3QkFESTtBQUVSQyxJQUFBQSxFQUFFO0FBRk0sR0FERztBQUtiQyxFQUFBQSxJQUFJO0FBQ0ZDLElBQUFBLE1BQU0sRUFBRTtBQUNOSCxNQUFBQSxFQUFFLEVBQUUsZ0NBREU7QUFFTkMsTUFBQUEsRUFBRSxFQUFFO0FBRkUsS0FETjtBQUtGRyxJQUFBQSxNQUFNLEVBQUU7QUFDTkosTUFBQUEsRUFBRSxFQUFFLG1DQURFO0FBRU5DLE1BQUFBLEVBQUUsRUFBRTtBQUZFLEtBTE47QUFTRkksSUFBQUEsS0FBSyxFQUFFO0FBQ0xMLE1BQUFBLEVBQUUsRUFBRSxvQ0FEQztBQUVMQyxNQUFBQSxFQUFFLEVBQUU7QUFGQztBQVRMLGVBYU07QUFDTkQsSUFBQUEsRUFBRSxFQUFFLGdDQURFO0FBRU5DLElBQUFBLEVBQUUsRUFBRTtBQUZFLEdBYk47QUFMUyxDQUFmO0FBeUJBLElBQUlLLGlCQUFpQixHQUFHO0FBRXRCQyxFQUFBQSxXQUZzQix5QkFFUjtBQUNaLFdBQU9ULFFBQVA7QUFDRCxHQUpxQjtBQU10QlUsRUFBQUEsT0FOc0IsbUJBTWRDLEdBTmMsRUFNVDtBQUNYLFFBQUlDLElBQUksR0FBRyw0QkFBWDtBQUNBLFdBQU9BLElBQUksQ0FBQ0MsSUFBTCxDQUFVRixHQUFWLENBQVA7QUFDRCxHQVRxQjtBQVd0QkcsRUFBQUEsUUFYc0Isb0JBV2JILEdBWGEsRUFXUjtBQUNaLFFBQUlDLElBQUksR0FBRyxVQUFYO0FBQ0EsV0FBT0EsSUFBSSxDQUFDQyxJQUFMLENBQVVGLEdBQVYsQ0FBUDtBQUNELEdBZHFCO0FBZ0J0QkksRUFBQUEsVUFoQnNCLHNCQWdCWEMsRUFoQlcsRUFnQlBDLEtBaEJPLEVBZ0JBO0FBQ3BCbEIsSUFBQUEsUUFBUSxDQUFDaUIsRUFBRCxDQUFSLEdBQWVDLEtBQWY7QUFDRCxHQWxCcUI7QUFvQnRCQyxFQUFBQSxVQXBCc0Isc0JBb0JYRixFQXBCVyxFQW9CUDtBQUNiLFdBQU9qQixRQUFRLENBQUNpQixFQUFELENBQWY7QUFDRCxHQXRCcUI7QUF3QnRCRyxFQUFBQSxXQXhCc0IseUJBd0JSO0FBQ1osV0FBT3BCLFFBQVA7QUFDRCxHQTFCcUI7QUE0QnRCcUIsRUFBQUEsaUJBNUJzQiw2QkE0QkpILEtBNUJJLEVBNEJHSSxhQTVCSCxFQTRCa0I7QUFDdEMsUUFBR0osS0FBSyxDQUFDSyxJQUFOLE9BQWlCLEVBQXBCLEVBQXdCO0FBQ3RCRCxNQUFBQSxhQUFhLENBQUMsRUFBRCxDQUFiO0FBQ0Q7QUFDRixHQWhDcUI7QUFrQ3RCRSxFQUFBQSxlQWxDc0IsMkJBa0NOUCxFQWxDTSxFQWtDRlEsTUFsQ0UsRUFrQ00sQ0FFM0IsQ0FwQ3FCO0FBc0N0QkMsRUFBQUEsUUF0Q3NCLG9CQXNDYkMsSUF0Q2EsRUFzQ1A7QUFDYkMseUJBQVNDLElBQVQsV0FBaUJGLElBQWpCLGFBQWdDLFVBQUNWLEVBQUQsRUFBS1EsTUFBTCxFQUFnQjtBQUM5Q0EsTUFBQUEsTUFBTSxHQUFHMUIsVUFBVSxDQUFDa0IsRUFBRCxDQUFWLEdBQWlCLElBQXBCLEdBQTJCLE9BQU9sQixVQUFVLENBQUNrQixFQUFELENBQWxEO0FBQ0QsS0FGRDs7QUFHQSxXQUFPO0FBQ0xhLE1BQUFBLElBQUksRUFBRXJCLGlCQUFpQixDQUFDc0I7QUFEbkIsS0FBUDtBQUdELEdBN0NxQjtBQStDdEJBLEVBQUFBLGFBL0NzQix5QkErQ1JDLFFBL0NRLEVBK0NFO0FBQ3RCQSxJQUFBQSxRQUFRLENBQUNDLE1BQU0sQ0FBQ25DLElBQVAsQ0FBWUMsVUFBWixFQUF3Qm1DLE1BQXhCLEdBQWlDLENBQWxDLEVBQXFDbkMsVUFBckMsQ0FBUjtBQUNBLFdBQU9BLFVBQVA7QUFDRCxHQWxEcUI7QUFvRHRCb0MsRUFBQUEsUUFwRHNCLHNCQW9EWDtBQUNUckMsSUFBQUEsSUFBSSxDQUFDc0MsR0FBTCxDQUFTLFVBQUFDLEdBQUcsRUFBSTtBQUNkLGFBQU81QixpQkFBaUIsQ0FBQzZCLFVBQWxCLENBQTZCRCxHQUE3QixFQUFrQyxZQUFNO0FBQzdDRSxRQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSx5QkFBWixFQUF1QztBQUFDSCxVQUFBQSxHQUFHLEVBQUhBO0FBQUQsU0FBdkM7QUFDRCxPQUZNLENBQVA7QUFHRCxLQUpEO0FBS0QsR0ExRHFCO0FBNER0QkksRUFBQUEsS0E1RHNCLGlCQTREaEJKLEdBNURnQixFQTRESTtBQUFBLFFBQWZMLFFBQWUsdUVBQUosRUFBSTs7QUFDeEJKLHlCQUFTQyxJQUFULENBQWNRLEdBQWQsRUFBbUJMLFFBQW5CO0FBQ0QsR0E5RHFCO0FBZ0V0Qk0sRUFBQUEsVUFoRXNCLHNCQWdFWEQsR0FoRVcsRUFnRU5MLFFBaEVNLEVBZ0VJO0FBQ3hCbEMsSUFBQUEsSUFBSSxDQUFDNEMsSUFBTCxDQUFVTCxHQUFWOztBQUNBVCx5QkFBU2UsV0FBVCxDQUFxQk4sR0FBckIsRUFBMEJMLFFBQTFCO0FBQ0QsR0FuRXFCO0FBcUV0QlksRUFBQUEsYUFyRXNCLHlCQXFFUkMsT0FyRVEsRUFxRUM7QUFDckIsV0FBUTtBQUFPLE1BQUEsU0FBUyxFQUFDO0FBQWpCLE9BQXlDQSxPQUF6QyxDQUFSO0FBQ0QsR0F2RXFCO0FBeUV0QkMsRUFBQUEsVUF6RXNCLHNCQXlFWEMsS0F6RVcsRUF5RUpDLEtBekVJLEVBeUVnQjtBQUFBLFFBQWJDLElBQWEsdUVBQU4sSUFBTTtBQUNwQ0YsSUFBQUEsS0FBSyxDQUFDRyxLQUFOLEdBQWNGLEtBQUssQ0FBQzlDLFFBQU4sSUFBa0I2QyxLQUFLLENBQUM3QixLQUFOLEtBQWdCLEVBQWxDLEdBQXVDakIsUUFBUSxDQUFDQyxRQUFULENBQWtCK0MsSUFBbEIsQ0FBdkMsR0FBaUUsRUFBL0U7QUFDRCxHQTNFcUI7QUE2RXRCRSxFQUFBQSxlQTdFc0IsMkJBNkVOSCxLQTdFTSxFQTZFQzlCLEtBN0VELEVBNkVRO0FBQzVCLFFBQUc4QixLQUFLLENBQUM5QyxRQUFOLElBQWtCLENBQUMsT0FBT2dCLEtBQVAsS0FBaUIsUUFBakIsSUFBNkJBLEtBQUssQ0FBQ0ssSUFBTixFQUE5QixNQUFnRCxFQUFyRSxFQUF5RTtBQUN2RSxhQUFPdEIsUUFBUSxDQUFDQyxRQUFULENBQWtCRSxFQUF6QjtBQUNELEtBRkQsTUFFTyxJQUFHNEMsS0FBSyxDQUFDeEMsS0FBTixJQUFlLENBQUNDLGlCQUFpQixDQUFDRSxPQUFsQixDQUEwQk8sS0FBMUIsQ0FBbkIsRUFBcUQ7QUFDMUQsYUFBT2pCLFFBQVEsQ0FBQ0ksSUFBVCxDQUFjRyxLQUFkLENBQW9CSixFQUEzQjtBQUNELEtBRk0sTUFFQSxJQUFHNEMsS0FBSyxDQUFDMUMsTUFBTixJQUFnQixDQUFDRyxpQkFBaUIsQ0FBQ00sUUFBbEIsQ0FBMkJHLEtBQTNCLENBQXBCLEVBQXVEO0FBQzVELGFBQU9qQixRQUFRLENBQUNJLElBQVQsQ0FBY0MsTUFBZCxDQUFxQkYsRUFBNUI7QUFDRDs7QUFDRCxXQUFPLEVBQVA7QUFDRCxHQXRGcUI7QUF3RnRCZ0QsRUFBQUEsWUF4RnNCLHdCQXdGVEMsSUF4RlMsRUF3RmlDO0FBQUEsUUFBcENDLGFBQW9DLHVFQUFwQixNQUFvQjtBQUFBLFFBQWJMLElBQWEsdUVBQU4sSUFBTTtBQUNyRCxRQUFJTSxRQUFRLEdBQUd0QixNQUFNLENBQUNuQyxJQUFQLENBQVl1RCxJQUFaLENBQWY7QUFDQUUsSUFBQUEsUUFBUSxDQUFDbkIsR0FBVCxDQUFjLFVBQUFDLEdBQUcsRUFBSTtBQUNuQixVQUFJVSxLQUFLLEdBQUdNLElBQUksQ0FBQ2hCLEdBQUQsQ0FBaEI7O0FBQ0EsVUFBR1UsS0FBSyxDQUFDN0MsUUFBVCxFQUFtQjtBQUNqQjZDLFFBQUFBLEtBQUssQ0FBQ0csS0FBTixHQUFjSCxLQUFLLENBQUM3QixLQUFOLENBQVlLLElBQVosT0FBdUIsRUFBdkIsR0FBNEJ0QixRQUFRLENBQUNDLFFBQVQsQ0FBa0IrQyxJQUFsQixDQUE1QixHQUFzRCxFQUFwRTtBQUNEOztBQUNELGFBQU9GLEtBQVA7QUFDRCxLQU5EO0FBUUEsUUFBR08sYUFBYSxLQUFLLE1BQXJCLEVBQTZCMUIscUJBQVNDLElBQVQsQ0FBY3lCLGFBQWQsRUFBNkJELElBQTdCO0FBQzdCLFdBQU9BLElBQVA7QUFDRDtBQXBHcUIsQ0FBeEI7ZUF1R2U1QyxpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZXZlbnRCdXMgZnJvbSAnLi4vZXZlbnRCdXMnO1xubGV0IGtleXMgPSBbXTtcbmxldCBlcnJvcnNLZXlzID0ge307XG5sZXQgZWxlbWVudHMgPSB7fTtcbmxldCBtZXNzYWdlcyA9IHtcbiAgcmVxdWlyZWQ6IHtcbiAgICBlbjogJ3RoaXMgZmllbGQgaXMgcmVxdWlyZWQnLFxuICAgIGZyOiBgQ2UgY2hhbXAgZXN0IHJlcXVpc2BcbiAgfSxcbiAgdHlwZToge1xuICAgIG51bWJlcjoge1xuICAgICAgZW46ICd0aGlzIGZpZWxkIGFjY2VwdCBudW1iZXJzIG9ubHknLFxuICAgICAgZnI6ICdDZSBjaGFtcCBhY2NlcHQgcXVlIGxlcyBudW1lcm8nXG4gICAgfSxcbiAgICBzdHJpbmc6IHtcbiAgICAgIGVuOiAndGhpcyBmaWVsZCBhY2NlcHQgY2FyYWN0ZXJlcyBvbmx5JyxcbiAgICAgIGZyOiAnQ2UgY2hhbXAgYWNjZXB0IHF1ZSBsZXMgY2FyYWN0ZXJlcydcbiAgICB9LFxuICAgIGVtYWlsOiB7XG4gICAgICBlbjogJ3RoaXMgZmllbGQgc2hvdWxkIGJlIGEgdmFsaWQgZW1haWwnLFxuICAgICAgZnI6ICdjZSBjaGFtcCBkb2lzIGV0cmUgdW4gdmFsaWRlIGVtYWlsJ1xuICAgIH0sXG4gICAgbnVtYmVyOiB7XG4gICAgICBlbjogJ3RoaXMgZmllbGQgYWNjZXB0IG9ubHkgbnVtYmVycycsXG4gICAgICBmcjogJ2NlIGNoYW1wIGFjY2VwdGUgcXVlIGxlcyBudW1lcm9zJ1xuICAgIH1cbiAgfVxufTtcblxubGV0IGVycm9ySGFubGRlckhvb2tzID0ge1xuXG4gIGdldE1lc3NhZ2VzKCkge1xuICAgIHJldHVybiBtZXNzYWdlcztcbiAgfSxcblxuICBpc0VtYWlsKHZhbCkge1xuICAgIGxldCByZWd4ID0gL15bXlxcc0BdK0BbXlxcc0BdK1xcLlteXFxzQF0rJC9cbiAgICByZXR1cm4gcmVneC50ZXN0KHZhbCk7XG4gIH0sXG5cbiAgaXNOdW1iZXIodmFsKSB7XG4gICAgbGV0IHJlZ3ggPSAvXlswLTldKyQvXG4gICAgcmV0dXJuIHJlZ3gudGVzdCh2YWwpO1xuICB9LFxuXG4gIHNldEVsZW1lbnQoaWQsIHZhbHVlKSB7XG4gICAgZWxlbWVudHNbaWRdID0gdmFsdWU7XG4gIH0sXG5cbiAgZ2V0RWxlbWVudChpZCkge1xuICAgIHJldHVybiBlbGVtZW50c1tpZF07XG4gIH0sXG5cbiAgZ2V0RWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIGVsZW1lbnRzO1xuICB9LFxuXG4gIGNsZWFyRXJyb3JNZXNzYWdlKHZhbHVlLCBzZXRFcnJvcklucHV0KSB7XG4gICAgaWYodmFsdWUudHJpbSgpICE9PSAnJykge1xuICAgICAgc2V0RXJyb3JJbnB1dCgnJylcbiAgICB9XG4gIH0sXG5cbiAgZGlzcGF0Y2hDaGVja2VyKGlkLCBzdGF0dXMpIHtcblxuICB9LFxuXG4gIGRpc3BhdGNoKG5hbWUpIHtcbiAgICBldmVudEJ1cy5lbWl0KGAke25hbWV9VmFsdWVzYCAsIChpZCwgc3RhdHVzKSA9PiB7XG4gICAgICBzdGF0dXMgPyBlcnJvcnNLZXlzW2lkXSA9IHRydWUgOiBkZWxldGUgZXJyb3JzS2V5c1tpZF07XG4gICAgfSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRoZW46IGVycm9ySGFubGRlckhvb2tzLmNoZWNrRGlzcGF0Y2hcbiAgICB9XG4gIH0sXG5cbiAgY2hlY2tEaXNwYXRjaChjYWxsYmFjaykge1xuICAgIGNhbGxiYWNrKE9iamVjdC5rZXlzKGVycm9yc0tleXMpLmxlbmd0aCA+IDAsIGVycm9yc0tleXMpO1xuICAgIHJldHVybiBlcnJvcnNLZXlzO1xuICB9LFxuXG4gIHZhbGlkYXRlKCkge1xuICAgIGtleXMubWFwKGtleSA9PiB7XG4gICAgICByZXR1cm4gZXJyb3JIYW5sZGVySG9va3MudmFsaWRhdGlvbihrZXksICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ3ZhbGlkYXRlIHJ1bm5pbmcgZm9yIDogJywge2tleX0pXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSxcblxuICBjaGVjayhrZXksIGNhbGxiYWNrID0ge30pIHtcbiAgICBldmVudEJ1cy5lbWl0KGtleSwgY2FsbGJhY2spO1xuICB9LFxuXG4gIHZhbGlkYXRpb24oa2V5LCBjYWxsYmFjaykge1xuICAgIGtleXMucHVzaChrZXkpO1xuICAgIGV2ZW50QnVzLmFkZExpc3RlbmVyKGtleSwgY2FsbGJhY2spXG4gIH0sXG5cbiAgZ2V0RXJyb3JMYWJlbChtZXNzYWdlKSB7XG4gICAgcmV0dXJuICg8bGFiZWwgY2xhc3NOYW1lPVwiSW5wdXRXcmFwcGVyX2V4cGxhaW5cIj57bWVzc2FnZX08L2xhYmVsPilcbiAgfSxcblxuICBjaGVja0lucHV0KGlucHV0LCBydWxlcywgbGFuZyA9ICdmcicpIHtcbiAgICBpbnB1dC5lcnJvciA9IHJ1bGVzLnJlcXVpcmVkICYmIGlucHV0LnZhbHVlID09PSAnJyA/IG1lc3NhZ2VzLnJlcXVpcmVkW2xhbmddIDogJyc7XG4gIH0sXG5cbiAgc2V0RXJyb3JNZXNzYWdlKHJ1bGVzLCB2YWx1ZSkge1xuICAgIGlmKHJ1bGVzLnJlcXVpcmVkICYmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHZhbHVlLnRyaW0oKSkgPT09ICcnKSB7XG4gICAgICByZXR1cm4gbWVzc2FnZXMucmVxdWlyZWQuZnI7XG4gICAgfSBlbHNlIGlmKHJ1bGVzLmVtYWlsICYmICFlcnJvckhhbmxkZXJIb29rcy5pc0VtYWlsKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIG1lc3NhZ2VzLnR5cGUuZW1haWwuZnI7XG4gICAgfSBlbHNlIGlmKHJ1bGVzLm51bWJlciAmJiAhZXJyb3JIYW5sZGVySG9va3MuaXNOdW1iZXIodmFsdWUpKSB7XG4gICAgICByZXR1cm4gbWVzc2FnZXMudHlwZS5udW1iZXIuZnI7XG4gICAgfVxuICAgIHJldHVybiAnJztcbiAgfSxcblxuICB2YWxpZGF0ZURhdGEoZGF0YSwgY29udGFpbmVyTmFtZSA9ICdub25lJyxsYW5nID0gJ2ZyJykge1xuICAgIGxldCBkYXRhS2V5cyA9IE9iamVjdC5rZXlzKGRhdGEpO1xuICAgIGRhdGFLZXlzLm1hcCgga2V5ID0+IHtcbiAgICAgIGxldCBpbnB1dCA9IGRhdGFba2V5XTtcbiAgICAgIGlmKGlucHV0LnJlcXVpcmVkKSB7XG4gICAgICAgIGlucHV0LmVycm9yID0gaW5wdXQudmFsdWUudHJpbSgpID09PSAnJyA/IG1lc3NhZ2VzLnJlcXVpcmVkW2xhbmddIDogJyc7XG4gICAgICB9XG4gICAgICByZXR1cm4gaW5wdXRcbiAgICB9KTtcblxuICAgIGlmKGNvbnRhaW5lck5hbWUgIT09ICdub25lJykgZXZlbnRCdXMuZW1pdChjb250YWluZXJOYW1lLCBkYXRhKTtcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBlcnJvckhhbmxkZXJIb29rczsiXX0=