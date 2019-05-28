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
    if (containerName !== 'none') _eventBus["default"].emit(containerName, data);
    return data;
  }
};
var _default = errorHanlderHooks;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9FcnJvckhhbmRsZXIvRXJyb3JIYW5kbGVySG9va3MuanMiXSwibmFtZXMiOlsia2V5cyIsImVycm9yc0tleXMiLCJlbGVtZW50cyIsIm1lc3NhZ2VzIiwicmVxdWlyZWQiLCJlbiIsImZyIiwidHlwZSIsIm51bWJlciIsInN0cmluZyIsImVtYWlsIiwiZXJyb3JIYW5sZGVySG9va3MiLCJnZXRNZXNzYWdlcyIsImlzRW1haWwiLCJ2YWwiLCJyZWd4IiwidGVzdCIsImlzTnVtYmVyIiwic2V0RWxlbWVudCIsImlkIiwidmFsdWUiLCJnZXRFbGVtZW50IiwiZ2V0RWxlbWVudHMiLCJjbGVhckVycm9yTWVzc2FnZSIsInNldEVycm9ySW5wdXQiLCJ0cmltIiwiZGlzcGF0Y2hDaGVja2VyIiwic3RhdHVzIiwiZGlzcGF0Y2giLCJuYW1lIiwiZXZlbnRCdXMiLCJlbWl0IiwidGhlbiIsImNoZWNrRGlzcGF0Y2giLCJjYWxsYmFjayIsIk9iamVjdCIsImxlbmd0aCIsInZhbGlkYXRlIiwibWFwIiwia2V5IiwidmFsaWRhdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJjaGVjayIsInB1c2giLCJhZGRMaXN0ZW5lciIsImdldEVycm9yTGFiZWwiLCJtZXNzYWdlIiwiY2hlY2tJbnB1dCIsImlucHV0IiwicnVsZXMiLCJsYW5nIiwiZXJyb3IiLCJzZXRFcnJvck1lc3NhZ2UiLCJ2YWxpZGF0ZURhdGEiLCJkYXRhIiwiY29udGFpbmVyTmFtZSIsImRhdGFLZXlzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7OztBQUNBLElBQUlBLElBQUksR0FBRyxFQUFYO0FBQ0EsSUFBSUMsVUFBVSxHQUFHLEVBQWpCO0FBQ0EsSUFBSUMsUUFBUSxHQUFHLEVBQWY7QUFDQSxJQUFJQyxRQUFRLEdBQUc7QUFDYkMsRUFBQUEsUUFBUSxFQUFFO0FBQ1JDLElBQUFBLEVBQUUsRUFBRSx3QkFESTtBQUVSQyxJQUFBQSxFQUFFO0FBRk0sR0FERztBQUtiQyxF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c291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBldmVudEJ1cyBmcm9tICcuLi9ldmVudEJ1cyc7XG5sZXQga2V5cyA9IFtdO1xubGV0IGVycm9yc0tleXMgPSB7fTtcbmxldCBlbGVtZW50cyA9IHt9O1xubGV0IG1lc3NhZ2VzID0ge1xuICByZXF1aXJlZDoge1xuICAgIGVuOiAndGhpcyBmaWVsZCBpcyByZXF1aXJlZCcsXG4gICAgZnI6IGBDZSBjaGFtcCBlc3QgcmVxdWlzYFxuICB9LFxuICB0eXBlOiB7XG4gICAgbnVtYmVyOiB7XG4gICAgICBlbjogJ3RoaXMgZmllbGQgYWNjZXB0IG51bWJlcnMgb25seScsXG4gICAgICBmcjogJ0NlIGNoYW1wIGFjY2VwdCBxdWUgbGVzIG51bWVybydcbiAgICB9LFxuICAgIHN0cmluZzoge1xuICAgICAgZW46ICd0aGlzIGZpZWxkIGFjY2VwdCBjYXJhY3RlcmVzIG9ubHknLFxuICAgICAgZnI6ICdDZSBjaGFtcCBhY2NlcHQgcXVlIGxlcyBjYXJhY3RlcmVzJ1xuICAgIH0sXG4gICAgZW1haWw6IHtcbiAgICAgIGVuOiAndGhpcyBmaWVsZCBzaG91bGQgYmUgYSB2YWxpZCBlbWFpbCcsXG4gICAgICBmcjogJ2NlIGNoYW1wIGRvaXMgZXRyZSB1biB2YWxpZGUgZW1haWwnXG4gICAgfSxcbiAgICBudW1iZXI6IHtcbiAgICAgIGVuOiAndGhpcyBmaWVsZCBhY2NlcHQgb25seSBudW1iZXJzJyxcbiAgICAgIGZyOiAnY2UgY2hhbXAgYWNjZXB0ZSBxdWUgbGVzIG51bWVyb3MnXG4gICAgfVxuICB9XG59O1xuXG5sZXQgZXJyb3JIYW5sZGVySG9va3MgPSB7XG5cbiAgZ2V0TWVzc2FnZXMoKSB7XG4gICAgcmV0dXJuIG1lc3NhZ2VzO1xuICB9LFxuXG4gIGlzRW1haWwodmFsKSB7XG4gICAgbGV0IHJlZ3ggPSAvXlteXFxzQF0rQFteXFxzQF0rXFwuW15cXHNAXSskL1xuICAgIHJldHVybiByZWd4LnRlc3QodmFsKTtcbiAgfSxcblxuICBpc051bWJlcih2YWwpIHtcbiAgICBsZXQgcmVneCA9IC9eWzAtOV0rJC9cbiAgICByZXR1cm4gcmVneC50ZXN0KHZhbCk7XG4gIH0sXG5cbiAgc2V0RWxlbWVudChpZCwgdmFsdWUpIHtcbiAgICBlbGVtZW50c1tpZF0gPSB2YWx1ZTtcbiAgfSxcblxuICBnZXRFbGVtZW50KGlkKSB7XG4gICAgcmV0dXJuIGVsZW1lbnRzW2lkXTtcbiAgfSxcblxuICBnZXRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gZWxlbWVudHM7XG4gIH0sXG5cbiAgY2xlYXJFcnJvck1lc3NhZ2UodmFsdWUsIHNldEVycm9ySW5wdXQpIHtcbiAgICBpZih2YWx1ZS50cmltKCkgIT09ICcnKSB7XG4gICAgICBzZXRFcnJvcklucHV0KCcnKVxuICAgIH1cbiAgfSxcblxuICBkaXNwYXRjaENoZWNrZXIoaWQsIHN0YXR1cykge1xuXG4gIH0sXG5cbiAgZGlzcGF0Y2gobmFtZSkge1xuICAgIGV2ZW50QnVzLmVtaXQoYCR7bmFtZX1WYWx1ZXNgICwgKGlkLCBzdGF0dXMpID0+IHtcbiAgICAgIHN0YXR1cyA/IGVycm9yc0tleXNbaWRdID0gdHJ1ZSA6IGRlbGV0ZSBlcnJvcnNLZXlzW2lkXTtcbiAgICB9KTtcbiAgICByZXR1cm4ge1xuICAgICAgdGhlbjogZXJyb3JIYW5sZGVySG9va3MuY2hlY2tEaXNwYXRjaFxuICAgIH1cbiAgfSxcblxuICBjaGVja0Rpc3BhdGNoKGNhbGxiYWNrKSB7XG4gICAgY2FsbGJhY2soT2JqZWN0LmtleXMoZXJyb3JzS2V5cykubGVuZ3RoID4gMCwgZXJyb3JzS2V5cyk7XG4gICAgcmV0dXJuIGVycm9yc0tleXM7XG4gIH0sXG5cbiAgdmFsaWRhdGUoKSB7XG4gICAga2V5cy5tYXAoa2V5ID0+IHtcbiAgICAgIHJldHVybiBlcnJvckhhbmxkZXJIb29rcy52YWxpZGF0aW9uKGtleSwgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygndmFsaWRhdGUgcnVubmluZyBmb3IgOiAnLCB7a2V5fSlcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9LFxuXG4gIGNoZWNrKGtleSwgY2FsbGJhY2sgPSB7fSkge1xuICAgIGV2ZW50QnVzLmVtaXQoa2V5LCBjYWxsYmFjayk7XG4gIH0sXG5cbiAgdmFsaWRhdGlvbihrZXksIGNhbGxiYWNrKSB7XG4gICAga2V5cy5wdXNoKGtleSk7XG4gICAgZXZlbnRCdXMuYWRkTGlzdGVuZXIoa2V5LCBjYWxsYmFjaylcbiAgfSxcblxuICBnZXRFcnJvckxhYmVsKG1lc3NhZ2UpIHtcbiAgICByZXR1cm4gKDxsYWJlbCBjbGFzc05hbWU9XCJJbnB1dFdyYXBwZXJfZXhwbGFpblwiPnttZXNzYWdlfTwvbGFiZWw+KVxuICB9LFxuXG4gIGNoZWNrSW5wdXQoaW5wdXQsIHJ1bGVzLCBsYW5nID0gJ2VuJykge1xuICAgIGlucHV0LmVycm9yID0gcnVsZXMucmVxdWlyZWQgJiYgaW5wdXQudmFsdWUgPT09ICcnID8gbWVzc2FnZXMucmVxdWlyZWRbbGFuZ10gOiAnJztcbiAgfSxcblxuICBzZXRFcnJvck1lc3NhZ2UocnVsZXMsIHZhbHVlLCBsYW5nID0gJ2VuJykge1xuICAgIGlmKHJ1bGVzLnJlcXVpcmVkICYmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHZhbHVlLnRyaW0oKSkgPT09ICcnKSB7XG4gICAgICByZXR1cm4gbWVzc2FnZXMucmVxdWlyZWRbbGFuZ107XG4gICAgfSBlbHNlIGlmKHJ1bGVzLmVtYWlsICYmICFlcnJvckhhbmxkZXJIb29rcy5pc0VtYWlsKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIG1lc3NhZ2VzLnR5cGUuZW1haWxbbGFuZ107XG4gICAgfSBlbHNlIGlmKHJ1bGVzLm51bWJlciAmJiAhZXJyb3JIYW5sZGVySG9va3MuaXNOdW1iZXIodmFsdWUpKSB7XG4gICAgICByZXR1cm4gbWVzc2FnZXMudHlwZS5udW1iZXJbbGFuZ107XG4gICAgfVxuICAgIHJldHVybiAnJztcbiAgfSxcblxuICB2YWxpZGF0ZURhdGEoZGF0YSwgY29udGFpbmVyTmFtZSA9ICdub25lJyxsYW5nID0gJ2VuJykge1xuICAgIGxldCBkYXRhS2V5cyA9IE9iamVjdC5rZXlzKGRhdGEpO1xuICAgIGRhdGFLZXlzLm1hcCgga2V5ID0+IHtcbiAgICAgIGxldCBpbnB1dCA9IGRhdGFba2V5XTtcbiAgICAgIGlmKGlucHV0LnJlcXVpcmVkKSB7XG4gICAgICAgIGlucHV0LmVycm9yID0gaW5wdXQudmFsdWUudHJpbSgpID09PSAnJyA/IG1lc3NhZ2VzLnJlcXVpcmVkW2xhbmddIDogJyc7XG4gICAgICB9XG4gICAgICByZXR1cm4gaW5wdXRcbiAgICB9KTtcblxuICAgIGlmKGNvbnRhaW5lck5hbWUgIT09ICdub25lJykgZXZlbnRCdXMuZW1pdChjb250YWluZXJOYW1lLCBkYXRhKTtcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBlcnJvckhhbmxkZXJIb29rczsiXX0=