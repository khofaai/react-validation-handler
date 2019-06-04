"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _simpleEventsBus = _interopRequireDefault(require("simple-events-bus"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var errorsKeys = {};
var elements = {};
var messages = {
  required: {
    en: 'this field is required',
    fr: "Ce champ est requis"
  },
  equalTo: {
    fr: 'Ce champs doit être similaire à : ',
    en: 'this field should be like : '
  },
  type: {
    number: {
      en: 'this field accept numbers only',
      fr: 'Ce champ accept que les numero'
    },
    email: {
      en: 'this field should be a valid email',
      fr: 'ce champ dois etre un valide email'
    }
  }
};

var emitValidation = function emitValidation(eventName) {
  _simpleEventsBus["default"].emit(eventName, function (id, status) {
    status ? errorsKeys[id] = true : delete errorsKeys[id];
  });

  return {
    then: errorHanlderHooks.checkDispatch
  };
};

var errorHanlderHooks = {
  getMessages: function getMessages() {
    return messages;
  },
  isEmail: function isEmail(val) {
    var regx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regx.test(val);
  },
  isEqualto: function isEqualto(val, ref) {
    return val === elements[ref];
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
  clearErrorMessage: function clearErrorMessage(value, setErrorInput) {
    if (value.trim() !== '') {
      setErrorInput('');
    }
  },
  check: function check(id) {
    return emitValidation("".concat(id, "Value"));
  },
  validate: function validate(name) {
    return emitValidation("".concat(name, "Values"));
  },
  checkDispatch: function checkDispatch(callback) {
    callback(Object.keys(errorsKeys).length > 0, errorsKeys);
    return errorsKeys;
  },
  getErrorLabel: function getErrorLabel(message) {
    return _react["default"].createElement("label", {
      className: "InputWrapper_explain"
    }, message);
  },
  setErrorMessage: function setErrorMessage(rules, value) {
    var lang = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'en';

    if (rules.required && (typeof value === 'string' && value.trim()) === '') {
      return messages.required[lang];
    }

    if (rules.email && !errorHanlderHooks.isEmail(value)) {
      return messages.type.email[lang];
    }

    if (rules.number && !errorHanlderHooks.isNumber(value)) {
      return messages.type.number[lang];
    }

    if (rules.equalTo && !errorHanlderHooks.isEqualto(value, rules.equalTo)) {
      var label = rules.equalToLabel ? rules.equalToLabel : rules.equalTo;
      return "".concat(messages.equalTo[lang], " ").concat(label);
    }

    return '';
  }
};
var _default = errorHanlderHooks;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9FcnJvckhhbmRsZXIvRXJyb3JIYW5kbGVySG9va3MuanMiXSwibmFtZXMiOlsiZXJyb3JzS2V5cyIsImVsZW1lbnRzIiwibWVzc2FnZXMiLCJyZXF1aXJlZCIsImVuIiwiZnIiLCJlcXVhbFRvIiwidHlwZSIsIm51bWJlciIsImVtYWlsIiwiZW1pdFZhbGlkYXRpb24iLCJldmVudE5hbWUiLCJldmVudEJ1cyIsImVtaXQiLCJpZCIsInN0YXR1cyIsInRoZW4iLCJlcnJvckhhbmxkZXJIb29rcyIsImNoZWNrRGlzcGF0Y2giLCJnZXRNZXNzYWdlcyIsImlzRW1haWwiLCJ2YWwiLCJyZWd4IiwidGVzdCIsImlzRXF1YWx0byIsInJlZiIsImlzTnVtYmVyIiwic2V0RWxlbWVudCIsInZhbHVlIiwiZ2V0RWxlbWVudCIsImNsZWFyRXJyb3JNZXNzYWdlIiwic2V0RXJyb3JJbnB1dCIsInRyaW0iLCJjaGVjayIsInZhbGlkYXRlIiwibmFtZSIsImNhbGxiYWNrIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsImdldEVycm9yTGFiZWwiLCJtZXNzYWdlIiwic2V0RXJyb3JNZXNzYWdlIiwicnVsZXMiLCJsYW5nIiwibGFiZWwiLCJlcXVhbFRvTGFiZWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQUVBLElBQUlBLFVBQVUsR0FBRyxFQUFqQjtBQUNBLElBQUlDLFFBQVEsR0FBRyxFQUFmO0FBRUEsSUFBSUMsUUFBUSxHQUFHO0FBQ2JDLEVBQUFBLFFBQVEsRUFBRTtBQUNSQyxJQUFBQSxFQUFFLEVBQUUsd0JBREk7QUFFUkMsSUFBQUEsRUFBRTtBQUZNLEdBREc7QUFLYkMsRUFBQUEsT0FBTyxFQUFFO0FBQ1BELElBQUFBLEVBQUUsRUFBRSxvQ0FERztBQUVQRCxJQUFBQSxFQUFFLEVBQUU7QUFGRyxHQUxJO0FBU2JHLEVBQUFBLElBQUksRUFBRTtBQUNKQyxJQUFBQSxNQUFNLEVBQUU7QUFDTkosTUFBQUEsRUFBRSxFQUFF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QUNJLElBQU4sRUFBOUIsTUFBZ0QsRUFBckUsRUFBeUU7QUFDdkUsYUFBTzlCLFFBQVEsQ0FBQ0MsUUFBVCxDQUFrQnlDLElBQWxCLENBQVA7QUFDRDs7QUFDRCxRQUFHRCxLQUFLLENBQUNsQyxLQUFOLElBQWUsQ0FBQ1EsaUJBQWlCLENBQUNHLE9BQWxCLENBQTBCUSxLQUExQixDQUFuQixFQUFxRDtBQUNuRCxhQUFPMUIsUUFBUSxDQUFDSyxJQUFULENBQWNFLEtBQWQsQ0FBb0JtQyxJQUFwQixDQUFQO0FBQ0Q7O0FBQ0QsUUFBR0QsS0FBSyxDQUFDbkMsTUFBTixJQUFnQixDQUFDUyxpQkFBaUIsQ0FBQ1MsUUFBbEIsQ0FBMkJFLEtBQTNCLENBQXBCLEVBQXVEO0FBQ3JELGFBQU8xQixRQUFRLENBQUNLLElBQVQsQ0FBY0MsTUFBZCxDQUFxQm9DLElBQXJCLENBQVA7QUFDRDs7QUFDRCxRQUFHRCxLQUFLLENBQUNyQyxPQUFOLElBQWlCLENBQUNXLGlCQUFpQixDQUFDTyxTQUFsQixDQUE0QkksS0FBNUIsRUFBbUNlLEtBQUssQ0FBQ3JDLE9BQXpDLENBQXJCLEVBQXdFO0FBQ3RFLFVBQUl1QyxLQUFLLEdBQUdGLEtBQUssQ0FBQ0csWUFBTixHQUFxQkgsS0FBSyxDQUFDRyxZQUEzQixHQUEwQ0gsS0FBSyxDQUFDckMsT0FBNUQ7QUFDQSx1QkFBVUosUUFBUSxDQUFDSSxPQUFULENBQWlCc0MsSUFBakIsQ0FBVixjQUFvQ0MsS0FBcEM7QUFDRDs7QUFDRCxXQUFPLEVBQVA7QUFDRDtBQWxFcUIsQ0FBeEI7ZUFxRWU1QixpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZXZlbnRCdXMgZnJvbSAnc2ltcGxlLWV2ZW50cy1idXMnO1xuXG5sZXQgZXJyb3JzS2V5cyA9IHt9O1xubGV0IGVsZW1lbnRzID0ge307XG5cbmxldCBtZXNzYWdlcyA9IHtcbiAgcmVxdWlyZWQ6IHtcbiAgICBlbjogJ3RoaXMgZmllbGQgaXMgcmVxdWlyZWQnLFxuICAgIGZyOiBgQ2UgY2hhbXAgZXN0IHJlcXVpc2BcbiAgfSxcbiAgZXF1YWxUbzoge1xuICAgIGZyOiAnQ2UgY2hhbXBzIGRvaXQgw6p0cmUgc2ltaWxhaXJlIMOgIDogJyxcbiAgICBlbjogJ3RoaXMgZmllbGQgc2hvdWxkIGJlIGxpa2UgOiAnLFxuICB9LFxuICB0eXBlOiB7XG4gICAgbnVtYmVyOiB7XG4gICAgICBlbjogJ3RoaXMgZmllbGQgYWNjZXB0IG51bWJlcnMgb25seScsXG4gICAgICBmcjogJ0NlIGNoYW1wIGFjY2VwdCBxdWUgbGVzIG51bWVybydcbiAgICB9LFxuICAgIGVtYWlsOiB7XG4gICAgICBlbjogJ3RoaXMgZmllbGQgc2hvdWxkIGJlIGEgdmFsaWQgZW1haWwnLFxuICAgICAgZnI6ICdjZSBjaGFtcCBkb2lzIGV0cmUgdW4gdmFsaWRlIGVtYWlsJ1xuICAgIH1cbiAgfVxufTtcblxuY29uc3QgZW1pdFZhbGlkYXRpb24gPSBldmVudE5hbWUgPT4ge1xuICBldmVudEJ1cy5lbWl0KGV2ZW50TmFtZSwgKGlkLCBzdGF0dXMpID0+IHtcbiAgICBzdGF0dXMgPyBlcnJvcnNLZXlzW2lkXSA9IHRydWUgOiBkZWxldGUgZXJyb3JzS2V5c1tpZF07XG4gIH0pO1xuICByZXR1cm4ge1xuICAgIHRoZW46IGVycm9ySGFubGRlckhvb2tzLmNoZWNrRGlzcGF0Y2hcbiAgfVxufVxuXG5sZXQgZXJyb3JIYW5sZGVySG9va3MgPSB7XG5cbiAgZ2V0TWVzc2FnZXMoKSB7XG4gICAgcmV0dXJuIG1lc3NhZ2VzO1xuICB9LFxuXG4gIGlzRW1haWwodmFsKSB7XG4gICAgbGV0IHJlZ3ggPSAvXlteXFxzQF0rQFteXFxzQF0rXFwuW15cXHNAXSskL1xuICAgIHJldHVybiByZWd4LnRlc3QodmFsKTtcbiAgfSxcblxuICBpc0VxdWFsdG8odmFsLCByZWYpIHtcbiAgICByZXR1cm4gdmFsID09PSBlbGVtZW50c1tyZWZdO1xuICB9LFxuXG4gIGlzTnVtYmVyKHZhbCkge1xuICAgIGxldCByZWd4ID0gL15bMC05XSskL1xuICAgIHJldHVybiByZWd4LnRlc3QodmFsKTtcbiAgfSxcblxuICBzZXRFbGVtZW50KGlkLCB2YWx1ZSkge1xuICAgIGVsZW1lbnRzW2lkXSA9IHZhbHVlO1xuICB9LFxuXG4gIGdldEVsZW1lbnQoaWQpIHtcbiAgICByZXR1cm4gZWxlbWVudHNbaWRdO1xuICB9LFxuXG4gIGNsZWFyRXJyb3JNZXNzYWdlKHZhbHVlLCBzZXRFcnJvcklucHV0KSB7XG4gICAgaWYodmFsdWUudHJpbSgpICE9PSAnJykge1xuICAgICAgc2V0RXJyb3JJbnB1dCgnJylcbiAgICB9XG4gIH0sXG5cbiAgY2hlY2soaWQpIHtcbiAgICByZXR1cm4gZW1pdFZhbGlkYXRpb24oYCR7aWR9VmFsdWVgKTtcbiAgfSxcblxuICB2YWxpZGF0ZShuYW1lKSB7XG4gICAgcmV0dXJuIGVtaXRWYWxpZGF0aW9uKGAke25hbWV9VmFsdWVzYCk7XG4gIH0sXG5cbiAgY2hlY2tEaXNwYXRjaChjYWxsYmFjaykge1xuICAgIGNhbGxiYWNrKE9iamVjdC5rZXlzKGVycm9yc0tleXMpLmxlbmd0aCA+IDAsIGVycm9yc0tleXMpO1xuICAgIHJldHVybiBlcnJvcnNLZXlzO1xuICB9LFxuXG4gIGdldEVycm9yTGFiZWwobWVzc2FnZSkge1xuICAgIHJldHVybiAoPGxhYmVsIGNsYXNzTmFtZT1cIklucHV0V3JhcHBlcl9leHBsYWluXCI+e21lc3NhZ2V9PC9sYWJlbD4pXG4gIH0sXG5cbiAgc2V0RXJyb3JNZXNzYWdlKHJ1bGVzLCB2YWx1ZSwgbGFuZyA9ICdlbicpIHtcbiAgICBpZihydWxlcy5yZXF1aXJlZCAmJiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiB2YWx1ZS50cmltKCkpID09PSAnJykge1xuICAgICAgcmV0dXJuIG1lc3NhZ2VzLnJlcXVpcmVkW2xhbmddO1xuICAgIH0gXG4gICAgaWYocnVsZXMuZW1haWwgJiYgIWVycm9ySGFubGRlckhvb2tzLmlzRW1haWwodmFsdWUpKSB7XG4gICAgICByZXR1cm4gbWVzc2FnZXMudHlwZS5lbWFpbFtsYW5nXTtcbiAgICB9XG4gICAgaWYocnVsZXMubnVtYmVyICYmICFlcnJvckhhbmxkZXJIb29rcy5pc051bWJlcih2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBtZXNzYWdlcy50eXBlLm51bWJlcltsYW5nXTtcbiAgICB9XG4gICAgaWYocnVsZXMuZXF1YWxUbyAmJiAhZXJyb3JIYW5sZGVySG9va3MuaXNFcXVhbHRvKHZhbHVlLCBydWxlcy5lcXVhbFRvKSkge1xuICAgICAgbGV0IGxhYmVsID0gcnVsZXMuZXF1YWxUb0xhYmVsID8gcnVsZXMuZXF1YWxUb0xhYmVsIDogcnVsZXMuZXF1YWxUbztcbiAgICAgIHJldHVybiBgJHttZXNzYWdlcy5lcXVhbFRvW2xhbmddfSAke2xhYmVsfWA7XG4gICAgfVxuICAgIHJldHVybiAnJztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBlcnJvckhhbmxkZXJIb29rczsiXX0=