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
  validate: function validate(name) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9FcnJvckhhbmRsZXIvRXJyb3JIYW5kbGVySG9va3MuanMiXSwibmFtZXMiOlsia2V5cyIsImVycm9yc0tleXMiLCJlbGVtZW50cyIsIm1lc3NhZ2VzIiwicmVxdWlyZWQiLCJlbiIsImZyIiwidHlwZSIsIm51bWJlciIsInN0cmluZyIsImVtYWlsIiwiZXJyb3JIYW5sZGVySG9va3MiLCJnZXRNZXNzYWdlcyIsImlzRW1haWwiLCJ2YWwiLCJyZWd4IiwidGVzdCIsImlzTnVtYmVyIiwic2V0RWxlbWVudCIsImlkIiwidmFsdWUiLCJnZXRFbGVtZW50IiwiZ2V0RWxlbWVudHMiLCJjbGVhckVycm9yTWVzc2FnZSIsInNldEVycm9ySW5wdXQiLCJ0cmltIiwiZGlzcGF0Y2hDaGVja2VyIiwic3RhdHVzIiwidmFsaWRhdGUiLCJuYW1lIiwiZXZlbnRCdXMiLCJlbWl0IiwidGhlbiIsImNoZWNrRGlzcGF0Y2giLCJjYWxsYmFjayIsIk9iamVjdCIsImxlbmd0aCIsImNoZWNrIiwia2V5IiwidmFsaWRhdGlvbiIsInB1c2giLCJhZGRMaXN0ZW5lciIsImdldEVycm9yTGFiZWwiLCJtZXNzYWdlIiwiY2hlY2tJbnB1dCIsImlucHV0IiwicnVsZXMiLCJsYW5nIiwiZXJyb3IiLCJzZXRFcnJvck1lc3NhZ2UiLCJ2YWxpZGF0ZURhdGEiLCJkYXRhIiwiY29udGFpbmVyTmFtZSIsImRhdGFLZXlzIiwibWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7OztBQUNBLElBQUlBLElBQUksR0FBRyxFQUFYO0FBQ0EsSUFBSUMsVUFBVSxHQUFHLEVBQWpCO0FBQ0EsSUFBSUMsUUFBUSxHQUFHLEVBQWY7QUFDQSxJQUFJQyxRQUFRLEdBQUc7QUFDYkMsRUFBQUEsUUFBUSxFQUFFO0FBQ1JDLElBQUFBLEVBQUUsRUFBRSx3QkFESTtBQUVSQyxJQUFBQSxFQUFFO0FBRk0sR0FERztBQUtiQyxFQUFBQSxJQUFJO0FBQ0ZDLElBQUFBLE1BQU0s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QnVDLElBQXJCLENBQVA7QUFDRDs7QUFDRCxXQUFPLEVBQVA7QUFDRCxHQTlFcUI7QUFnRnRCRyxFQUFBQSxZQWhGc0Isd0JBZ0ZUQyxJQWhGUyxFQWdGaUM7QUFBQSxRQUFwQ0MsYUFBb0MsdUVBQXBCLE1BQW9CO0FBQUEsUUFBYkwsSUFBYSx1RUFBTixJQUFNO0FBQ3JELFFBQUlNLFFBQVEsR0FBR2xCLE1BQU0sQ0FBQ25DLElBQVAsQ0FBWW1ELElBQVosQ0FBZjtBQUNBRSxJQUFBQSxRQUFRLENBQUNDLEdBQVQsQ0FBYyxVQUFBaEIsR0FBRyxFQUFJO0FBQ25CLFVBQUlPLEtBQUssR0FBR00sSUFBSSxDQUFDYixHQUFELENBQWhCOztBQUNBLFVBQUdPLEtBQUssQ0FBQ3pDLFFBQVQsRUFBbUI7QUFDakJ5QyxRQUFBQSxLQUFLLENBQUNHLEtBQU4sR0FBY0gsS0FBSyxDQUFDekIsS0FBTixDQUFZSyxJQUFaLE9BQXVCLEVBQXZCLEdBQTRCdEIsUUFBUSxDQUFDQyxRQUFULENBQWtCMkMsSUFBbEIsQ0FBNUIsR0FBc0QsRUFBcEU7QUFDRDs7QUFDRCxhQUFPRixLQUFQO0FBQ0QsS0FORDtBQVFBLFFBQUdPLGFBQWEsS0FBSyxNQUFyQixFQUE2QnRCLHFCQUFTQyxJQUFULENBQWNxQixhQUFkLEVBQTZCRCxJQUE3QjtBQUM3QixXQUFPQSxJQUFQO0FBQ0Q7QUE1RnFCLENBQXhCO2VBK0ZleEMsaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGV2ZW50QnVzIGZyb20gJy4uL2V2ZW50QnVzJztcbmxldCBrZXlzID0gW107XG5sZXQgZXJyb3JzS2V5cyA9IHt9O1xubGV0IGVsZW1lbnRzID0ge307XG5sZXQgbWVzc2FnZXMgPSB7XG4gIHJlcXVpcmVkOiB7XG4gICAgZW46ICd0aGlzIGZpZWxkIGlzIHJlcXVpcmVkJyxcbiAgICBmcjogYENlIGNoYW1wIGVzdCByZXF1aXNgXG4gIH0sXG4gIHR5cGU6IHtcbiAgICBudW1iZXI6IHtcbiAgICAgIGVuOiAndGhpcyBmaWVsZCBhY2NlcHQgbnVtYmVycyBvbmx5JyxcbiAgICAgIGZyOiAnQ2UgY2hhbXAgYWNjZXB0IHF1ZSBsZXMgbnVtZXJvJ1xuICAgIH0sXG4gICAgc3RyaW5nOiB7XG4gICAgICBlbjogJ3RoaXMgZmllbGQgYWNjZXB0IGNhcmFjdGVyZXMgb25seScsXG4gICAgICBmcjogJ0NlIGNoYW1wIGFjY2VwdCBxdWUgbGVzIGNhcmFjdGVyZXMnXG4gICAgfSxcbiAgICBlbWFpbDoge1xuICAgICAgZW46ICd0aGlzIGZpZWxkIHNob3VsZCBiZSBhIHZhbGlkIGVtYWlsJyxcbiAgICAgIGZyOiAnY2UgY2hhbXAgZG9pcyBldHJlIHVuIHZhbGlkZSBlbWFpbCdcbiAgICB9LFxuICAgIG51bWJlcjoge1xuICAgICAgZW46ICd0aGlzIGZpZWxkIGFjY2VwdCBvbmx5IG51bWJlcnMnLFxuICAgICAgZnI6ICdjZSBjaGFtcCBhY2NlcHRlIHF1ZSBsZXMgbnVtZXJvcydcbiAgICB9XG4gIH1cbn07XG5cbmxldCBlcnJvckhhbmxkZXJIb29rcyA9IHtcblxuICBnZXRNZXNzYWdlcygpIHtcbiAgICByZXR1cm4gbWVzc2FnZXM7XG4gIH0sXG5cbiAgaXNFbWFpbCh2YWwpIHtcbiAgICBsZXQgcmVneCA9IC9eW15cXHNAXStAW15cXHNAXStcXC5bXlxcc0BdKyQvXG4gICAgcmV0dXJuIHJlZ3gudGVzdCh2YWwpO1xuICB9LFxuXG4gIGlzTnVtYmVyKHZhbCkge1xuICAgIGxldCByZWd4ID0gL15bMC05XSskL1xuICAgIHJldHVybiByZWd4LnRlc3QodmFsKTtcbiAgfSxcblxuICBzZXRFbGVtZW50KGlkLCB2YWx1ZSkge1xuICAgIGVsZW1lbnRzW2lkXSA9IHZhbHVlO1xuICB9LFxuXG4gIGdldEVsZW1lbnQoaWQpIHtcbiAgICByZXR1cm4gZWxlbWVudHNbaWRdO1xuICB9LFxuXG4gIGdldEVsZW1lbnRzKCkge1xuICAgIHJldHVybiBlbGVtZW50cztcbiAgfSxcblxuICBjbGVhckVycm9yTWVzc2FnZSh2YWx1ZSwgc2V0RXJyb3JJbnB1dCkge1xuICAgIGlmKHZhbHVlLnRyaW0oKSAhPT0gJycpIHtcbiAgICAgIHNldEVycm9ySW5wdXQoJycpXG4gICAgfVxuICB9LFxuXG4gIGRpc3BhdGNoQ2hlY2tlcihpZCwgc3RhdHVzKSB7XG5cbiAgfSxcblxuICB2YWxpZGF0ZShuYW1lKSB7XG4gICAgZXZlbnRCdXMuZW1pdChgJHtuYW1lfVZhbHVlc2AgLCAoaWQsIHN0YXR1cykgPT4ge1xuICAgICAgc3RhdHVzID8gZXJyb3JzS2V5c1tpZF0gPSB0cnVlIDogZGVsZXRlIGVycm9yc0tleXNbaWRdO1xuICAgIH0pO1xuICAgIHJldHVybiB7XG4gICAgICB0aGVuOiBlcnJvckhhbmxkZXJIb29rcy5jaGVja0Rpc3BhdGNoXG4gICAgfVxuICB9LFxuXG4gIGNoZWNrRGlzcGF0Y2goY2FsbGJhY2spIHtcbiAgICBjYWxsYmFjayhPYmplY3Qua2V5cyhlcnJvcnNLZXlzKS5sZW5ndGggPiAwLCBlcnJvcnNLZXlzKTtcbiAgICByZXR1cm4gZXJyb3JzS2V5cztcbiAgfSxcblxuICBjaGVjayhrZXksIGNhbGxiYWNrID0ge30pIHtcbiAgICBldmVudEJ1cy5lbWl0KGtleSwgY2FsbGJhY2spO1xuICB9LFxuXG4gIHZhbGlkYXRpb24oa2V5LCBjYWxsYmFjaykge1xuICAgIGtleXMucHVzaChrZXkpO1xuICAgIGV2ZW50QnVzLmFkZExpc3RlbmVyKGtleSwgY2FsbGJhY2spXG4gIH0sXG5cbiAgZ2V0RXJyb3JMYWJlbChtZXNzYWdlKSB7XG4gICAgcmV0dXJuICg8bGFiZWwgY2xhc3NOYW1lPVwiSW5wdXRXcmFwcGVyX2V4cGxhaW5cIj57bWVzc2FnZX08L2xhYmVsPilcbiAgfSxcblxuICBjaGVja0lucHV0KGlucHV0LCBydWxlcywgbGFuZyA9ICdlbicpIHtcbiAgICBpbnB1dC5lcnJvciA9IHJ1bGVzLnJlcXVpcmVkICYmIGlucHV0LnZhbHVlID09PSAnJyA/IG1lc3NhZ2VzLnJlcXVpcmVkW2xhbmddIDogJyc7XG4gIH0sXG5cbiAgc2V0RXJyb3JNZXNzYWdlKHJ1bGVzLCB2YWx1ZSwgbGFuZyA9ICdlbicpIHtcbiAgICBpZihydWxlcy5yZXF1aXJlZCAmJiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiB2YWx1ZS50cmltKCkpID09PSAnJykge1xuICAgICAgcmV0dXJuIG1lc3NhZ2VzLnJlcXVpcmVkW2xhbmddO1xuICAgIH0gZWxzZSBpZihydWxlcy5lbWFpbCAmJiAhZXJyb3JIYW5sZGVySG9va3MuaXNFbWFpbCh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBtZXNzYWdlcy50eXBlLmVtYWlsW2xhbmddO1xuICAgIH0gZWxzZSBpZihydWxlcy5udW1iZXIgJiYgIWVycm9ySGFubGRlckhvb2tzLmlzTnVtYmVyKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIG1lc3NhZ2VzLnR5cGUubnVtYmVyW2xhbmddO1xuICAgIH1cbiAgICByZXR1cm4gJyc7XG4gIH0sXG5cbiAgdmFsaWRhdGVEYXRhKGRhdGEsIGNvbnRhaW5lck5hbWUgPSAnbm9uZScsbGFuZyA9ICdlbicpIHtcbiAgICBsZXQgZGF0YUtleXMgPSBPYmplY3Qua2V5cyhkYXRhKTtcbiAgICBkYXRhS2V5cy5tYXAoIGtleSA9PiB7XG4gICAgICBsZXQgaW5wdXQgPSBkYXRhW2tleV07XG4gICAgICBpZihpbnB1dC5yZXF1aXJlZCkge1xuICAgICAgICBpbnB1dC5lcnJvciA9IGlucHV0LnZhbHVlLnRyaW0oKSA9PT0gJycgPyBtZXNzYWdlcy5yZXF1aXJlZFtsYW5nXSA6ICcnO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGlucHV0XG4gICAgfSk7XG5cbiAgICBpZihjb250YWluZXJOYW1lICE9PSAnbm9uZScpIGV2ZW50QnVzLmVtaXQoY29udGFpbmVyTmFtZSwgZGF0YSk7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZXJyb3JIYW5sZGVySG9va3M7Il19