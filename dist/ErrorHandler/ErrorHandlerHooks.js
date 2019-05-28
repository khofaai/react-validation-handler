"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _simpleEventsBus = _interopRequireDefault(require("simple-events-bus"));

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
  validate: function validate(name) {
    _simpleEventsBus["default"].emit("".concat(name, "Values"), function (id, status) {
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
  check: function check(key) {
    var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _simpleEventsBus["default"].emit(key, callback);
  },
  validation: function validation(key, callback) {
    keys.push(key);

    _simpleEventsBus["default"].addListener(key, callback);
  },
  getErrorLabel: function getErrorLabel(message) {
    return _react["default"].createElement("label", {
      className: "InputWrapper_explain"
    }, message);
  },
  checkInput: function checkInput(input, rules) {
    var lang = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'en';
    input.error = rules.required && input.value === '' ? messages.required[lang] : '';
  },
  setErrorMessage: function setErrorMessage(rules, value) {
    var lang = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'en';

    if (rules.required && (typeof value === 'string' && value.trim()) === '') {
      return messages.required[lang];
    } else if (rules.email && !errorHanlderHooks.isEmail(value)) {
      return messages.type.email[lang];
    } else if (rules.number && !errorHanlderHooks.isNumber(value)) {
      return messages.type.number[lang];
    }

    return '';
  },
  validateData: function validateData(data) {
    var containerName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'none';
    var lang = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'en';
    var dataKeys = Object.keys(data);
    dataKeys.map(function (key) {
      var input = data[key];

      if (input.required) {
        input.error = input.value.trim() === '' ? messages.required[lang] : '';
      }

      return input;
    });
    if (containerName !== 'none') _simpleEventsBus["default"].emit(containerName, data);
    return data;
  }
};
var _default = errorHanlderHooks;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9FcnJvckhhbmRsZXIvRXJyb3JIYW5kbGVySG9va3MuanMiXSwibmFtZXMiOlsia2V5cyIsImVycm9yc0tleXMiLCJlbGVtZW50cyIsIm1lc3NhZ2VzIiwicmVxdWlyZWQiLCJlbiIsImZyIiwidHlwZSIsIm51bWJlciIsInN0cmluZyIsImVtYWlsIiwiZXJyb3JIYW5sZGVySG9va3MiLCJnZXRNZXNzYWdlcyIsImlzRW1haWwiLCJ2YWwiLCJyZWd4IiwidGVzdCIsImlzTnVtYmVyIiwic2V0RWxlbWVudCIsImlkIiwidmFsdWUiLCJnZXRFbGVtZW50IiwiZ2V0RWxlbWVudHMiLCJjbGVhckVycm9yTWVzc2FnZSIsInNldEVycm9ySW5wdXQiLCJ0cmltIiwidmFsaWRhdGUiLCJuYW1lIiwiZXZlbnRCdXMiLCJlbWl0Iiwic3RhdHVzIiwidGhlbiIsImNoZWNrRGlzcGF0Y2giLCJjYWxsYmFjayIsIk9iamVjdCIsImxlbmd0aCIsImNoZWNrIiwia2V5IiwidmFsaWRhdGlvbiIsInB1c2giLCJhZGRMaXN0ZW5lciIsImdldEVycm9yTGFiZWwiLCJtZXNzYWdlIiwiY2hlY2tJbnB1dCIsImlucHV0IiwicnVsZXMiLCJsYW5nIiwiZXJyb3IiLCJzZXRFcnJvck1lc3NhZ2UiLCJ2YWxpZGF0ZURhdGEiLCJkYXRhIiwiY29udGFpbmVyTmFtZSIsImRhdGFLZXlzIiwibWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7OztBQUVBLElBQUlBLElBQUksR0FBRyxFQUFYO0FBQ0EsSUFBSUMsVUFBVSxHQUFHLEVBQWpCO0FBQ0EsSUFBSUMsUUFBUSxHQUFHLEVBQWY7QUFFQSxJQUFJQyxRQUFRLEdBQUc7QUFDYkMsRUFBQUEsUUFBUSxFQUFFO0FBQ1JDLElBQUFBLEVBQUUsRUFBRSx3QkFESTtBQUVSQyxJQUFBQSxFQUFFO0FBRk0sR0FERztBQUtiQyxFQUFBQSxJQUFJO0FBQ0ZDLElBQUFBLE1BQU0sRUFBRTtBQUNOSCxNQUFBQSxF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NEVpQztBQUFBLFFBQXBDQyxhQUFvQyx1RUFBcEIsTUFBb0I7QUFBQSxRQUFiTCxJQUFhLHVFQUFOLElBQU07QUFDckQsUUFBSU0sUUFBUSxHQUFHbEIsTUFBTSxDQUFDbEMsSUFBUCxDQUFZa0QsSUFBWixDQUFmO0FBQ0FFLElBQUFBLFFBQVEsQ0FBQ0MsR0FBVCxDQUFjLFVBQUFoQixHQUFHLEVBQUk7QUFDbkIsVUFBSU8sS0FBSyxHQUFHTSxJQUFJLENBQUNiLEdBQUQsQ0FBaEI7O0FBQ0EsVUFBR08sS0FBSyxDQUFDeEMsUUFBVCxFQUFtQjtBQUNqQndDLFFBQUFBLEtBQUssQ0FBQ0csS0FBTixHQUFjSCxLQUFLLENBQUN4QixLQUFOLENBQVlLLElBQVosT0FBdUIsRUFBdkIsR0FBNEJ0QixRQUFRLENBQUNDLFFBQVQsQ0FBa0IwQyxJQUFsQixDQUE1QixHQUFzRCxFQUFwRTtBQUNEOztBQUNELGFBQU9GLEtBQVA7QUFDRCxLQU5EO0FBUUEsUUFBR08sYUFBYSxLQUFLLE1BQXJCLEVBQTZCdkIsNEJBQVNDLElBQVQsQ0FBY3NCLGFBQWQsRUFBNkJELElBQTdCO0FBQzdCLFdBQU9BLElBQVA7QUFDRDtBQXhGcUIsQ0FBeEI7ZUEyRmV2QyxpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZXZlbnRCdXMgZnJvbSAnc2ltcGxlLWV2ZW50cy1idXMnO1xuXG5sZXQga2V5cyA9IFtdO1xubGV0IGVycm9yc0tleXMgPSB7fTtcbmxldCBlbGVtZW50cyA9IHt9O1xuXG5sZXQgbWVzc2FnZXMgPSB7XG4gIHJlcXVpcmVkOiB7XG4gICAgZW46ICd0aGlzIGZpZWxkIGlzIHJlcXVpcmVkJyxcbiAgICBmcjogYENlIGNoYW1wIGVzdCByZXF1aXNgXG4gIH0sXG4gIHR5cGU6IHtcbiAgICBudW1iZXI6IHtcbiAgICAgIGVuOiAndGhpcyBmaWVsZCBhY2NlcHQgbnVtYmVycyBvbmx5JyxcbiAgICAgIGZyOiAnQ2UgY2hhbXAgYWNjZXB0IHF1ZSBsZXMgbnVtZXJvJ1xuICAgIH0sXG4gICAgc3RyaW5nOiB7XG4gICAgICBlbjogJ3RoaXMgZmllbGQgYWNjZXB0IGNhcmFjdGVyZXMgb25seScsXG4gICAgICBmcjogJ0NlIGNoYW1wIGFjY2VwdCBxdWUgbGVzIGNhcmFjdGVyZXMnXG4gICAgfSxcbiAgICBlbWFpbDoge1xuICAgICAgZW46ICd0aGlzIGZpZWxkIHNob3VsZCBiZSBhIHZhbGlkIGVtYWlsJyxcbiAgICAgIGZyOiAnY2UgY2hhbXAgZG9pcyBldHJlIHVuIHZhbGlkZSBlbWFpbCdcbiAgICB9LFxuICAgIG51bWJlcjoge1xuICAgICAgZW46ICd0aGlzIGZpZWxkIGFjY2VwdCBvbmx5IG51bWJlcnMnLFxuICAgICAgZnI6ICdjZSBjaGFtcCBhY2NlcHRlIHF1ZSBsZXMgbnVtZXJvcydcbiAgICB9XG4gIH1cbn07XG5cbmxldCBlcnJvckhhbmxkZXJIb29rcyA9IHtcblxuICBnZXRNZXNzYWdlcygpIHtcbiAgICByZXR1cm4gbWVzc2FnZXM7XG4gIH0sXG5cbiAgaXNFbWFpbCh2YWwpIHtcbiAgICBsZXQgcmVneCA9IC9eW15cXHNAXStAW15cXHNAXStcXC5bXlxcc0BdKyQvXG4gICAgcmV0dXJuIHJlZ3gudGVzdCh2YWwpO1xuICB9LFxuXG4gIGlzTnVtYmVyKHZhbCkge1xuICAgIGxldCByZWd4ID0gL15bMC05XSskL1xuICAgIHJldHVybiByZWd4LnRlc3QodmFsKTtcbiAgfSxcblxuICBzZXRFbGVtZW50KGlkLCB2YWx1ZSkge1xuICAgIGVsZW1lbnRzW2lkXSA9IHZhbHVlO1xuICB9LFxuXG4gIGdldEVsZW1lbnQoaWQpIHtcbiAgICByZXR1cm4gZWxlbWVudHNbaWRdO1xuICB9LFxuXG4gIGdldEVsZW1lbnRzKCkge1xuICAgIHJldHVybiBlbGVtZW50cztcbiAgfSxcblxuICBjbGVhckVycm9yTWVzc2FnZSh2YWx1ZSwgc2V0RXJyb3JJbnB1dCkge1xuICAgIGlmKHZhbHVlLnRyaW0oKSAhPT0gJycpIHtcbiAgICAgIHNldEVycm9ySW5wdXQoJycpXG4gICAgfVxuICB9LFxuXG4gIHZhbGlkYXRlKG5hbWUpIHtcbiAgICBldmVudEJ1cy5lbWl0KGAke25hbWV9VmFsdWVzYCAsIChpZCwgc3RhdHVzKSA9PiB7XG4gICAgICBzdGF0dXMgPyBlcnJvcnNLZXlzW2lkXSA9IHRydWUgOiBkZWxldGUgZXJyb3JzS2V5c1tpZF07XG4gICAgfSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRoZW46IGVycm9ySGFubGRlckhvb2tzLmNoZWNrRGlzcGF0Y2hcbiAgICB9XG4gIH0sXG5cbiAgY2hlY2tEaXNwYXRjaChjYWxsYmFjaykge1xuICAgIGNhbGxiYWNrKE9iamVjdC5rZXlzKGVycm9yc0tleXMpLmxlbmd0aCA+IDAsIGVycm9yc0tleXMpO1xuICAgIHJldHVybiBlcnJvcnNLZXlzO1xuICB9LFxuXG4gIGNoZWNrKGtleSwgY2FsbGJhY2sgPSB7fSkge1xuICAgIGV2ZW50QnVzLmVtaXQoa2V5LCBjYWxsYmFjayk7XG4gIH0sXG5cbiAgdmFsaWRhdGlvbihrZXksIGNhbGxiYWNrKSB7XG4gICAga2V5cy5wdXNoKGtleSk7XG4gICAgZXZlbnRCdXMuYWRkTGlzdGVuZXIoa2V5LCBjYWxsYmFjaylcbiAgfSxcblxuICBnZXRFcnJvckxhYmVsKG1lc3NhZ2UpIHtcbiAgICByZXR1cm4gKDxsYWJlbCBjbGFzc05hbWU9XCJJbnB1dFdyYXBwZXJfZXhwbGFpblwiPnttZXNzYWdlfTwvbGFiZWw+KVxuICB9LFxuXG4gIGNoZWNrSW5wdXQoaW5wdXQsIHJ1bGVzLCBsYW5nID0gJ2VuJykge1xuICAgIGlucHV0LmVycm9yID0gcnVsZXMucmVxdWlyZWQgJiYgaW5wdXQudmFsdWUgPT09ICcnID8gbWVzc2FnZXMucmVxdWlyZWRbbGFuZ10gOiAnJztcbiAgfSxcblxuICBzZXRFcnJvck1lc3NhZ2UocnVsZXMsIHZhbHVlLCBsYW5nID0gJ2VuJykge1xuICAgIGlmKHJ1bGVzLnJlcXVpcmVkICYmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHZhbHVlLnRyaW0oKSkgPT09ICcnKSB7XG4gICAgICByZXR1cm4gbWVzc2FnZXMucmVxdWlyZWRbbGFuZ107XG4gICAgfSBlbHNlIGlmKHJ1bGVzLmVtYWlsICYmICFlcnJvckhhbmxkZXJIb29rcy5pc0VtYWlsKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIG1lc3NhZ2VzLnR5cGUuZW1haWxbbGFuZ107XG4gICAgfSBlbHNlIGlmKHJ1bGVzLm51bWJlciAmJiAhZXJyb3JIYW5sZGVySG9va3MuaXNOdW1iZXIodmFsdWUpKSB7XG4gICAgICByZXR1cm4gbWVzc2FnZXMudHlwZS5udW1iZXJbbGFuZ107XG4gICAgfVxuICAgIHJldHVybiAnJztcbiAgfSxcblxuICB2YWxpZGF0ZURhdGEoZGF0YSwgY29udGFpbmVyTmFtZSA9ICdub25lJyxsYW5nID0gJ2VuJykge1xuICAgIGxldCBkYXRhS2V5cyA9IE9iamVjdC5rZXlzKGRhdGEpO1xuICAgIGRhdGFLZXlzLm1hcCgga2V5ID0+IHtcbiAgICAgIGxldCBpbnB1dCA9IGRhdGFba2V5XTtcbiAgICAgIGlmKGlucHV0LnJlcXVpcmVkKSB7XG4gICAgICAgIGlucHV0LmVycm9yID0gaW5wdXQudmFsdWUudHJpbSgpID09PSAnJyA/IG1lc3NhZ2VzLnJlcXVpcmVkW2xhbmddIDogJyc7XG4gICAgICB9XG4gICAgICByZXR1cm4gaW5wdXRcbiAgICB9KTtcblxuICAgIGlmKGNvbnRhaW5lck5hbWUgIT09ICdub25lJykgZXZlbnRCdXMuZW1pdChjb250YWluZXJOYW1lLCBkYXRhKTtcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBlcnJvckhhbmxkZXJIb29rczsiXX0=