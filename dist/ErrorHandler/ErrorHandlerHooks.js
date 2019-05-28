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
  getErrorLabel: function getErrorLabel(message) {
    return _react["default"].createElement("label", {
      className: "InputWrapper_explain"
    }, message);
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
  }
};
var _default = errorHanlderHooks;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9FcnJvckhhbmRsZXIvRXJyb3JIYW5kbGVySG9va3MuanMiXSwibmFtZXMiOlsiZXJyb3JzS2V5cyIsImVsZW1lbnRzIiwibWVzc2FnZXMiLCJyZXF1aXJlZCIsImVuIiwiZnIiLCJ0eXBlIiwibnVtYmVyIiwiZW1haWwiLCJlcnJvckhhbmxkZXJIb29rcyIsImdldE1lc3NhZ2VzIiwiaXNFbWFpbCIsInZhbCIsInJlZ3giLCJ0ZXN0IiwiaXNOdW1iZXIiLCJzZXRFbGVtZW50IiwiaWQiLCJ2YWx1ZSIsImdldEVsZW1lbnQiLCJjbGVhckVycm9yTWVzc2FnZSIsInNldEVycm9ySW5wdXQiLCJ0cmltIiwidmFsaWRhdGUiLCJuYW1lIiwiZXZlbnRCdXMiLCJlbWl0Iiwic3RhdHVzIiwidGhlbiIsImNoZWNrRGlzcGF0Y2giLCJjYWxsYmFjayIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJnZXRFcnJvckxhYmVsIiwibWVzc2FnZSIsInNldEVycm9yTWVzc2FnZSIsInJ1bGVzIiwibGFuZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7O0FBRUEsSUFBSUEsVUFBVSxHQUFHLEVBQWpCO0FBQ0EsSUFBSUMsUUFBUSxHQUFHLEVBQWY7QUFFQSxJQUFJQyxRQUFRLEdBQUc7QUFDYkMsRUFBQUEsUUFBUSxFQUFFO0FBQ1JDLElBQUFBLEVBQUUsRUFBRSx3QkFESTtBQUVSQyxJQUFBQSxFQUFFO0FBRk0sR0FERztBQUtiQyxFQUFBQSxJQUFJLEVBQUU7QUFDSkMsSUFBQUEsTUFBTSxFQUFFO0FBQ05ILE1BQUFBLEVBQUUsRUFBRSxnQ0FERTtBQUVOQyxNQUFBQSxFQUFFLEVBQUU7QUFGRSxLQURKO0FBS0pHLElBQUFBLEtBQUssRUFBRTtBQUNMSixNQUFBQSxFQUFFLEVBQUUsb0NBREM7QUFFTEMsTUFBQUEsRUFBRSxFQUFFO0FBRkM7QUFMSDtBQUxPLENBQWY7QUFpQkEsSUFBSUksaUJBQWlCLEdBQUc7QUFFdEJDLEVBQUFBLFdBRnNCLHlCQUVSO0FBQ1osV0FBT1IsUUFBUDtBQUNELEdBSnFCO0FBTXRCUyxFQUFBQSxPQU5zQixtQkFNZEMsR0FOYyxFQU1UO0FBQ1gsUUFBSUMsSUFBSSxHQUFHLDRCQUFYO0FBQ0EsV0FBT0EsSUFBSSxDQUFDQyxJQUFMLENBQVVGLEdBQVYsQ0FBUDtBQUNELEdBVHFCO0FBV3RCRyxFQUFBQSxRQVhzQixvQkFXYkgsR0FYYSxFQVdSO0FBQ1osUUFBSUMsSUFBSSxHQUFHLFVBQVg7QUFDQSxXQUFPQSxJQUFJLENBQUNDLElBQUwsQ0FBVUYsR0FBVixDQUFQO0FBQ0QsR0FkcUI7QUFnQnRCSSxFQUFBQSxVQWhCc0Isc0JBZ0JYQyxFQWhCVyxFQWdCUEMsS0FoQk8sRUFnQkE7QUFDcEJqQixJQUFBQSxRQUFRLENBQUNnQixFQUFELENBQVIsR0FBZUMsS0FBZjtBQUNELEdBbEJxQjtBQW9CdEJDLEVBQUFBLFVBcEJzQixzQkFvQlhGLEVBcEJXLEVBb0JQO0FBQ2IsV0FBT2hCLFFBQVEsQ0FBQ2dCLEVBQUQsQ0FBZjtBQUNELEdBdEJxQjtBQXdCdEJHLEVBQUFBLGlCQXhCc0IsNkJBd0JKRixLQXhCSSxFQXdCR0csYUF4QkgsRUF3QmtCO0FBQ3RDLFFBQUdILEtBQUssQ0FBQ0ksSUFBTixPQUFpQixFQUFwQixFQUF3QjtBQUN0QkQsTUFBQUEsYUFBYSxDQUFDLEVBQUQsQ0FBYjtBQUNEO0FBQ0YsR0E1QnFCO0FBOEJ0QkUsRUFBQUEsUUE5QnNCLG9CQThCYkMsSUE5QmEsRUE4QlA7QUFDYkMsZ0NBQVNDLElBQVQsV0FBaUJGLElBQWpCLGFBQWdDLFVBQUNQLEVBQUQsRUFBS1UsTUFBTCxFQUFnQjtBQUM5Q0EsTUFBQUEsTUFBTSxHQUFHM0IsVUFBVSxDQUFDaUIsRUFBRCxDQUFWLEdBQWlCLElBQXBCLEdBQTJCLE9BQU9qQixVQUFVLENBQUNpQixFQUFELENBQWxEO0FBQ0QsS0FGRDs7QUFHQSxXQUFPO0FBQ0xXLE1BQUFBLElBQUksRUFBRW5CLGlCQUFpQixDQUFDb0I7QUFEbkIsS0FBUDtBQUdELEdBckNxQjtBQXVDdEJBLEVBQUFBLGFBdkNzQix5QkF1Q1JDLFFBdkNRLEVBdUNFO0FBQ3RCQSxJQUFBQSxRQUFRLENBQUNDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZaEMsVUFBWixFQUF3QmlDLE1BQXhCLEdBQWlDLENBQWxDLEVBQXFDakMsVUFBckMsQ0FBUjtBQUNBLFdBQU9BLFVBQVA7QUFDRCxHQTFDcUI7QUE0Q3RCa0MsRUFBQUEsYUE1Q3NCLHlCQTRDUkMsT0E1Q1EsRUE0Q0M7QUFDckIsV0FBUTtBQUFPLE1BQUEsU0FBUyxFQUFDO0FBQWpCLE9BQXlDQSxPQUF6QyxDQUFSO0FBQ0QsR0E5Q3FCO0FBZ0R0QkMsRUFBQUEsZUFoRHNCLDJCQWdETkMsS0FoRE0sRUFnRENuQixLQWhERCxFQWdEcUI7QUFBQSxRQUFib0IsSUFBYSx1RUFBTixJQUFNOztBQUN6QyxRQUFHRCxLQUFLLENBQUNsQyxRQUFOLElBQWtCLENBQUMsT0FBT2UsS0FBUCxLQUFpQixRQUFqQixJQUE2QkEsS0FBSyxDQUFDSSxJQUFOLEVBQTlCLE1BQWdELEVBQXJFLEVBQXlFO0FBQ3ZFLGFBQU9wQixRQUFRLENBQUNDLFFBQVQsQ0FBa0JtQyxJQUFsQixDQUFQO0FBQ0QsS0FGRCxNQUVPLElBQUdELEtBQUssQ0FBQzdCLEtBQU4sSUFBZSxDQUFDQyxpQkFBaUIsQ0FBQ0UsT0FBbEIsQ0FBMEJPLEtBQTFCLENBQW5CLEVBQXFEO0FBQzFELGFBQU9oQixRQUFRLENBQUNJLElBQVQsQ0FBY0UsS0FBZCxDQUFvQjhCLElBQXBCLENBQVA7QUFDRCxLQUZNLE1BRUEsSUFBR0QsS0FBSyxDQUFDOUIsTUFBTixJQUFnQixDQUFDRSxpQkFBaUIsQ0FBQ00sUUFBbEIsQ0FBMkJHLEtBQTNCLENBQXBCLEVBQXVEO0FBQzVELGFBQU9oQixRQUFRLENBQUNJLElBQVQsQ0FBY0MsTUFBZCxDQUFxQitCLElBQXJCLENBQVA7QUFDRDs7QUFDRCxXQUFPLEVBQVA7QUFDRDtBQXpEcUIsQ0FBeEI7ZUE0RGU3QixpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZXZlbnRCdXMgZnJvbSAnc2ltcGxlLWV2ZW50cy1idXMnO1xuXG5sZXQgZXJyb3JzS2V5cyA9IHt9O1xubGV0IGVsZW1lbnRzID0ge307XG5cbmxldCBtZXNzYWdlcyA9IHtcbiAgcmVxdWlyZWQ6IHtcbiAgICBlbjogJ3RoaXMgZmllbGQgaXMgcmVxdWlyZWQnLFxuICAgIGZyOiBgQ2UgY2hhbXAgZXN0IHJlcXVpc2BcbiAgfSxcbiAgdHlwZToge1xuICAgIG51bWJlcjoge1xuICAgICAgZW46ICd0aGlzIGZpZWxkIGFjY2VwdCBudW1iZXJzIG9ubHknLFxuICAgICAgZnI6ICdDZSBjaGFtcCBhY2NlcHQgcXVlIGxlcyBudW1lcm8nXG4gICAgfSxcbiAgICBlbWFpbDoge1xuICAgICAgZW46ICd0aGlzIGZpZWxkIHNob3VsZCBiZSBhIHZhbGlkIGVtYWlsJyxcbiAgICAgIGZyOiAnY2UgY2hhbXAgZG9pcyBldHJlIHVuIHZhbGlkZSBlbWFpbCdcbiAgICB9XG4gIH1cbn07XG5cbmxldCBlcnJvckhhbmxkZXJIb29rcyA9IHtcblxuICBnZXRNZXNzYWdlcygpIHtcbiAgICByZXR1cm4gbWVzc2FnZXM7XG4gIH0sXG5cbiAgaXNFbWFpbCh2YWwpIHtcbiAgICBsZXQgcmVneCA9IC9eW15cXHNAXStAW15cXHNAXStcXC5bXlxcc0BdKyQvXG4gICAgcmV0dXJuIHJlZ3gudGVzdCh2YWwpO1xuICB9LFxuXG4gIGlzTnVtYmVyKHZhbCkge1xuICAgIGxldCByZWd4ID0gL15bMC05XSskL1xuICAgIHJldHVybiByZWd4LnRlc3QodmFsKTtcbiAgfSxcblxuICBzZXRFbGVtZW50KGlkLCB2YWx1ZSkge1xuICAgIGVsZW1lbnRzW2lkXSA9IHZhbHVlO1xuICB9LFxuXG4gIGdldEVsZW1lbnQoaWQpIHtcbiAgICByZXR1cm4gZWxlbWVudHNbaWRdO1xuICB9LFxuXG4gIGNsZWFyRXJyb3JNZXNzYWdlKHZhbHVlLCBzZXRFcnJvcklucHV0KSB7XG4gICAgaWYodmFsdWUudHJpbSgpICE9PSAnJykge1xuICAgICAgc2V0RXJyb3JJbnB1dCgnJylcbiAgICB9XG4gIH0sXG5cbiAgdmFsaWRhdGUobmFtZSkge1xuICAgIGV2ZW50QnVzLmVtaXQoYCR7bmFtZX1WYWx1ZXNgICwgKGlkLCBzdGF0dXMpID0+IHtcbiAgICAgIHN0YXR1cyA/IGVycm9yc0tleXNbaWRdID0gdHJ1ZSA6IGRlbGV0ZSBlcnJvcnNLZXlzW2lkXTtcbiAgICB9KTtcbiAgICByZXR1cm4ge1xuICAgICAgdGhlbjogZXJyb3JIYW5sZGVySG9va3MuY2hlY2tEaXNwYXRjaFxuICAgIH1cbiAgfSxcblxuICBjaGVja0Rpc3BhdGNoKGNhbGxiYWNrKSB7XG4gICAgY2FsbGJhY2soT2JqZWN0LmtleXMoZXJyb3JzS2V5cykubGVuZ3RoID4gMCwgZXJyb3JzS2V5cyk7XG4gICAgcmV0dXJuIGVycm9yc0tleXM7XG4gIH0sXG5cbiAgZ2V0RXJyb3JMYWJlbChtZXNzYWdlKSB7XG4gICAgcmV0dXJuICg8bGFiZWwgY2xhc3NOYW1lPVwiSW5wdXRXcmFwcGVyX2V4cGxhaW5cIj57bWVzc2FnZX08L2xhYmVsPilcbiAgfSxcblxuICBzZXRFcnJvck1lc3NhZ2UocnVsZXMsIHZhbHVlLCBsYW5nID0gJ2VuJykge1xuICAgIGlmKHJ1bGVzLnJlcXVpcmVkICYmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHZhbHVlLnRyaW0oKSkgPT09ICcnKSB7XG4gICAgICByZXR1cm4gbWVzc2FnZXMucmVxdWlyZWRbbGFuZ107XG4gICAgfSBlbHNlIGlmKHJ1bGVzLmVtYWlsICYmICFlcnJvckhhbmxkZXJIb29rcy5pc0VtYWlsKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIG1lc3NhZ2VzLnR5cGUuZW1haWxbbGFuZ107XG4gICAgfSBlbHNlIGlmKHJ1bGVzLm51bWJlciAmJiAhZXJyb3JIYW5sZGVySG9va3MuaXNOdW1iZXIodmFsdWUpKSB7XG4gICAgICByZXR1cm4gbWVzc2FnZXMudHlwZS5udW1iZXJbbGFuZ107XG4gICAgfVxuICAgIHJldHVybiAnJztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBlcnJvckhhbmxkZXJIb29rczsiXX0=