"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ErrorHooks = exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _ErrorHandlerHooks = _interopRequireDefault(require("./ErrorHandlerHooks"));

require("./ErrorHandler.css");

var _simpleEventsBus = _interopRequireDefault(require("simple-events-bus"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var nameHasError = {};
var errorCustomClass = 'has-error';

var ErrorText = function ErrorText(_ref) {
  var error = _ref.error;
  return error !== '' ? _ErrorHandlerHooks["default"].getErrorLabel(error) : '';
};

var ErrorHandler = function ErrorHandler(_ref2) {
  var body = _ref2.body,
      namespace = _ref2.namespace,
      value = _ref2.value,
      id = _ref2.id,
      _ref2$rules = _ref2.rules,
      rules = _ref2$rules === void 0 ? {
    required: true
  } : _ref2$rules;

  var _useState = (0, _react.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      errorMessage = _useState2[0],
      setErrorMessage = _useState2[1];

  var _useState3 = (0, _react.useState)(value),
      _useState4 = _slicedToArray(_useState3, 2),
      errorInput = _useState4[0],
      setErrorInput = _useState4[1];

  var BodyTag = body;
  nameHasError[namespace] = [];

  var checkValidation = function checkValidation(cb) {
    var val = _ErrorHandlerHooks["default"].getElement(id);

    val = val === undefined ? '' : val;

    var err = _ErrorHandlerHooks["default"].setErrorMessage(rules, val);

    setErrorMessage(err);
    cb(id, err !== '');
  };

  (0, _react.useEffect)(function (_) {
    _simpleEventsBus["default"].addListeners("".concat(namespace, "Values"), checkValidation);

    _simpleEventsBus["default"].addListener("".concat(id, "Value"), checkValidation);

    return function (_) {
      return _simpleEventsBus["default"].removeListener("".concat(id, "Value"));
    };
  }, []);

  var updateValue = function updateValue(val) {
    _ErrorHandlerHooks["default"].setElement(id, val);

    if (val !== '' && typeof val === 'string' && val.trim() !== '') setErrorMessage('');else setErrorMessage(_ErrorHandlerHooks["default"].setErrorMessage(rules, val));
    setErrorInput(val);
    return errorInput;
  };

  return _react["default"].createElement("div", {
    className: "InputWrapper".concat(errorMessage !== '' ? ' ' + errorCustomClass : '')
  }, _react["default"].createElement(BodyTag, {
    updateValue: updateValue
  }), _react["default"].createElement(ErrorText, {
    error: errorMessage
  }));
};

var _default = ErrorHandler;
exports["default"] = _default;
var ErrorHooks = _ErrorHandlerHooks["default"];
exports.ErrorHooks = ErrorHooks;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9FcnJvckhhbmRsZXIvRXJyb3JIYW5kbGVyLmpzIl0sIm5hbWVzIjpbIm5hbWVIYXNFcnJvciIsImVycm9yQ3VzdG9tQ2xhc3MiLCJFcnJvclRleHQiLCJlcnJvciIsIkVycm9ySGFuZGxlckhvb2tzIiwiZ2V0RXJyb3JMYWJlbCIsIkVycm9ySGFuZGxlciIsImJvZHkiLCJuYW1lc3BhY2UiLCJ2YWx1ZSIsImlkIiwicnVsZXMiLCJyZXF1aXJlZCIsImVycm9yTWVzc2FnZSIsInNldEVycm9yTWVzc2FnZSIsImVycm9ySW5wdXQiLCJzZXRFcnJvcklucHV0IiwiQm9keVRhZyIsImNoZWNrVmFsaWRhdGlvbiIsImNiIiwidmFsIiwiZ2V0RWxlbWVudCIsInVuZGVmaW5lZCIsImVyciIsIl8iLCJldmVudEJ1cyIsImFkZExpc3RlbmVycyIsImFkZExpc3RlbmVyIiwicmVtb3ZlTGlzdGVuZXIiLCJ1cGRhdGVWYWx1ZSIsInNldEVsZW1lbnQiLCJ0cmltIiwiRXJyb3JIb29rcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7OztBQUVBLElBQUlBLFlBQVksR0FBRyxFQUFuQjtBQUNBLElBQU1DLGdCQUFnQixHQUFHLFdBQXpCOztBQUNBLElBQUlDLFNBQVMsR0FBRyxTQUFaQSxTQUFZO0FBQUEsTUFBRUMsS0FBRixRQUFFQSxLQUFGO0FBQUEsU0FBYUEsS0FBSyxLQUFLLEVBQVYsR0FBZ0JDLDhCQUFrQkMsYUFBbEIsQ0FBZ0NGLEtBQWhDLENBQWhCLEdBQXlELEVBQXRFO0FBQUEsQ0FBaEI7O0FBRUEsSUFBSUcsWUFBWSxHQUFHLFNBQWZBLFlBQWUsUUFBNkQ7QUFBQSxNQUExREMsSUFBMEQsU0FBMURBLElBQTBEO0FBQUEsTUFBcERDLFNBQW9ELFNBQXBEQSxTQUFvRDtBQUFBLE1BQXpDQyxLQUF5QyxTQUF6Q0EsS0FBeUM7QUFBQSxNQUFsQ0MsRUFBa0MsU0FBbENBLEVBQWtDO0FBQUEsMEJBQTlCQyxLQUE4QjtBQUFBLE1BQTlCQSxLQUE4Qiw0QkFBdEI7QUFBQ0MsSUFBQUEsUUFBUSxFQUFFO0FBQVgsR0FBc0I7O0FBQUEsa0JBRXhDLHFCQUFTLEVBQVQsQ0FGd0M7QUFBQTtBQUFBLE1BRXpFQyxZQUZ5RTtBQUFBLE1BRTNEQyxlQUYyRDs7QUFBQSxtQkFHNUMscUJBQVNMLEtBQVQsQ0FINEM7QUFBQTtBQUFBLE1BR3pFTSxVQUh5RTtBQUFBLE1BRzdEQyxhQUg2RDs7QUFJOUUsTUFBSUMsT0FBTyxHQUFHVixJQUFkO0FBRUFQLEVBQUFBLFlBQVksQ0FBQ1EsU0FBRCxDQUFaLEdBQTBCLEVBQTFCOztBQUVBLE1BQU1VLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQUMsRUFBRSxFQUFJO0FBQzVCLFFBQUlDLEdBQUcsR0FBR2hCLDhCQUFrQmlCLFVBQWxCLENBQTZCWCxFQUE3QixDQUFWOztBQUNBVSxJQUFBQSxHQUFHLEdBQUdBLEdBQUcsS0FBS0UsU0FBUixHQUFvQixFQUFwQixHQUF5QkYsR0FBL0I7O0FBQ0EsUUFBSUcsR0FBRyxHQUFHbkIsOEJBQWtCVSxlQUFsQixDQUFrQ0gsS0FBbEMsRUFBeUNTLEdBQXpDLENBQVY7O0FBQ0FOLElBQUFBLGVBQWUsQ0FBQ1MsR0FBRCxDQUFmO0FBQ0FKLElBQUFBLEVBQUUsQ0FBQ1QsRUFBRCxFQUFLYSxHQUFHLEtBQUssRUFBYixDQUFGO0FBQ0QsR0FORDs7QUFRQSx3QkFBVyxVQUFBQyxDQUFDLEVBQUk7QUFDZEMsZ0NBQVNDLFlBQVQsV0FBeUJsQixTQUF6QixhQUE0Q1UsZUFBNUM7O0FBRUFPLGdDQUFTRSxXQUFULFdBQXdCakIsRUFBeEIsWUFBbUNRLGVBQW5DOztBQUVBLFdBQU8sVUFBQU0sQ0FBQztBQUFBLGFBQUlDLDRCQUFTRyxjQUFULFdBQTJCbEIsRUFBM0IsV0FBSjtBQUFBLEtBQVI7QUFDRCxHQU5ELEVBTUcsRUFOSDs7QUFRQSxNQUFJbUIsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQVQsR0FBRyxFQUFJO0FBQ3ZCaEIsa0NBQWtCMEIsVUFBbEIsQ0FBNkJwQixFQUE3QixFQUFpQ1UsR0FBakM7O0FBQ0EsUUFBR0EsR0FBRyxLQUFLLEVBQVIsSUFBZSxPQUFPQSxHQUFQLEtBQWUsUUFBZixJQUEyQkEsR0FBRyxDQUFDVyxJQUFKLE9BQWUsRUFBNUQsRUFBaUVqQixlQUFlLENBQUMsRUFBRCxDQUFmLENBQWpFLEtBQ0tBLGVBQWUsQ0FBQ1YsOEJBQWtCVSxlQUFsQixDQUFrQ0gsS0FBbEMsRUFBeUNTLEdBQXpDLENBQUQsQ0FBZjtBQUNMSixJQUFBQSxhQUFhLENBQUNJLEdBQUQsQ0FBYjtBQUNBLFdBQU9MLFVBQVA7QUFDRCxHQU5EOztBQVFBLFNBQ0U7QUFBSyxJQUFBLFNBQVMsd0JBQWlCRixZQUFZLEtBQUssRUFBakIsR0FBc0IsTUFBSVosZ0JBQTFCLEdBQTZDLEVBQTlEO0FBQWQsS0FDRSxnQ0FBQyxPQUFEO0FBQVMsSUFBQSxXQUFXLEVBQUU0QjtBQUF0QixJQURGLEVBRUUsZ0NBQUMsU0FBRDtBQUFXLElBQUEsS0FBSyxFQUFFaEI7QUFBbEIsSUFGRixDQURGO0FBTUQsQ0F0Q0Q7O2VBd0NlUCxZOztBQUVSLElBQU0wQixVQUFVLEdBQUc1Qiw2QkFBbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBFcnJvckhhbmRsZXJIb29rcyBmcm9tICcuL0Vycm9ySGFuZGxlckhvb2tzJztcbmltcG9ydCAnLi9FcnJvckhhbmRsZXIuY3NzJztcbmltcG9ydCBldmVudEJ1cyBmcm9tICdzaW1wbGUtZXZlbnRzLWJ1cyc7XG5cbmxldCBuYW1lSGFzRXJyb3IgPSB7fTtcbmNvbnN0IGVycm9yQ3VzdG9tQ2xhc3MgPSAnaGFzLWVycm9yJztcbmxldCBFcnJvclRleHQgPSAoe2Vycm9yfSkgPT4gZXJyb3IgIT09ICcnID8gKEVycm9ySGFuZGxlckhvb2tzLmdldEVycm9yTGFiZWwoZXJyb3IpKTogJyc7XG5cbmxldCBFcnJvckhhbmRsZXIgPSAoeyBib2R5LCBuYW1lc3BhY2UsIHZhbHVlLCBpZCwgcnVsZXMgPSB7cmVxdWlyZWQ6IHRydWV9fSkgPT4ge1xuXG4gIGxldCBbZXJyb3JNZXNzYWdlLCBzZXRFcnJvck1lc3NhZ2VdID0gdXNlU3RhdGUoJycpO1xuICBsZXQgW2Vycm9ySW5wdXQsIHNldEVycm9ySW5wdXRdID0gdXNlU3RhdGUodmFsdWUpO1xuICBsZXQgQm9keVRhZyA9IGJvZHk7XG5cbiAgbmFtZUhhc0Vycm9yW25hbWVzcGFjZV0gPSBbXTtcblxuICBjb25zdCBjaGVja1ZhbGlkYXRpb24gPSBjYiA9PiB7XG4gICAgbGV0IHZhbCA9IEVycm9ySGFuZGxlckhvb2tzLmdldEVsZW1lbnQoaWQpO1xuICAgIHZhbCA9IHZhbCA9PT0gdW5kZWZpbmVkID8gJycgOiB2YWw7XG4gICAgbGV0IGVyciA9IEVycm9ySGFuZGxlckhvb2tzLnNldEVycm9yTWVzc2FnZShydWxlcywgdmFsKTtcbiAgICBzZXRFcnJvck1lc3NhZ2UoZXJyKTtcbiAgICBjYihpZCwgZXJyICE9PSAnJyk7XG4gIH1cblxuICB1c2VFZmZlY3QoIF8gPT4ge1xuICAgIGV2ZW50QnVzLmFkZExpc3RlbmVycyhgJHtuYW1lc3BhY2V9VmFsdWVzYCwgY2hlY2tWYWxpZGF0aW9uKTtcbiAgICBcbiAgICBldmVudEJ1cy5hZGRMaXN0ZW5lcihgJHtpZH1WYWx1ZWAsIGNoZWNrVmFsaWRhdGlvbik7XG5cbiAgICByZXR1cm4gXyA9PiBldmVudEJ1cy5yZW1vdmVMaXN0ZW5lcihgJHtpZH1WYWx1ZWApO1xuICB9LCBbXSk7XG5cbiAgbGV0IHVwZGF0ZVZhbHVlID0gdmFsID0+IHtcbiAgICBFcnJvckhhbmRsZXJIb29rcy5zZXRFbGVtZW50KGlkLCB2YWwpO1xuICAgIGlmKHZhbCAhPT0gJycgJiYgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnICYmIHZhbC50cmltKCkgIT09ICcnKSkgc2V0RXJyb3JNZXNzYWdlKCcnKVxuICAgIGVsc2Ugc2V0RXJyb3JNZXNzYWdlKEVycm9ySGFuZGxlckhvb2tzLnNldEVycm9yTWVzc2FnZShydWxlcywgdmFsKSk7XG4gICAgc2V0RXJyb3JJbnB1dCh2YWwpO1xuICAgIHJldHVybiBlcnJvcklucHV0O1xuICB9XG4gIFxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgSW5wdXRXcmFwcGVyJHtlcnJvck1lc3NhZ2UgIT09ICcnID8gJyAnK2Vycm9yQ3VzdG9tQ2xhc3MgOiAnJ31gfT5cbiAgICAgIDxCb2R5VGFnIHVwZGF0ZVZhbHVlPXt1cGRhdGVWYWx1ZX0gLz5cbiAgICAgIDxFcnJvclRleHQgZXJyb3I9e2Vycm9yTWVzc2FnZX0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRXJyb3JIYW5kbGVyXG5cbmV4cG9ydCBjb25zdCBFcnJvckhvb2tzID0gRXJyb3JIYW5kbGVySG9va3M7Il19