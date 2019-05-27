"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ErrorHooks = exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _ErrorHandlerHooks = _interopRequireDefault(require("./ErrorHandlerHooks"));

require("./ErrorHandler.scss");

var _eventBus = _interopRequireDefault(require("../eventBus"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
      _ref2$valueKey = _ref2.valueKey,
      valueKey = _ref2$valueKey === void 0 ? '' : _ref2$valueKey,
      _ref2$namespace = _ref2.namespace,
      namespace = _ref2$namespace === void 0 ? 'none' : _ref2$namespace,
      _ref2$value = _ref2.value,
      value = _ref2$value === void 0 ? '' : _ref2$value,
      _ref2$id = _ref2.id,
      id = _ref2$id === void 0 ? '' : _ref2$id,
      _ref2$rules = _ref2.rules,
      rules = _ref2$rules === void 0 ? {} : _ref2$rules;

  var _useState = (0, _react.useState)(true),
      _useState2 = _slicedToArray(_useState, 2),
      errorUpdate = _useState2[0],
      setErrorUpdate = _useState2[1];

  var _useState3 = (0, _react.useState)(''),
      _useState4 = _slicedToArray(_useState3, 2),
      errorMessage = _useState4[0],
      setErrorMessage = _useState4[1];

  var _useState5 = (0, _react.useState)(value),
      _useState6 = _slicedToArray(_useState5, 2),
      errorInput = _useState6[0],
      setErrorInput = _useState6[1];

  var updateErrorStatus = function updateErrorStatus(_) {
    return setErrorUpdate(false);
  };

  nameHasError[namespace] = [];
  var BodyTag = body;
  var bodyAttrs = {
    check: _ErrorHandlerHooks["default"].check,
    setErrorUpdate: updateErrorStatus,
    validate: _ErrorHandlerHooks["default"].validate
  };
  (0, _react.useEffect)(function (_) {
    if (namespace !== 'none') {
      _eventBus["default"].addListener(namespace, function (data) {
        return setErrorMessage(data[valueKey].error);
      });

      return function (_) {
        return _eventBus["default"].removeListener(namespace);
      };
    }
  }, []);
  (0, _react.useEffect)(function (_) {
    _eventBus["default"].addListeners("".concat(namespace, "Values"), function (cb) {
      var val = _ErrorHandlerHooks["default"].getElement(id);

      val = val === undefined ? '' : val;

      var err = _ErrorHandlerHooks["default"].setErrorMessage(rules, val);

      setErrorMessage(err);
      cb(id, err !== '');
    });

    return function (_) {
      return _eventBus["default"].removeListener("".concat(namespace, "Values"));
    };
  }, []);
  return _react["default"].createElement("div", {
    className: "InputWrapper".concat(errorMessage !== '' ? ' ' + errorCustomClass : '')
  }, _react["default"].createElement(BodyTag, _extends({
    updateValue: function updateValue(val) {
      _ErrorHandlerHooks["default"].setElement(id, val);

      if (val !== '' && typeof val === 'string' && val.trim() !== '') setErrorMessage('');else setErrorMessage(_ErrorHandlerHooks["default"].setErrorMessage(rules, val));
      setErrorInput(val);
      return errorInput;
    }
  }, bodyAttrs)), _react["default"].createElement(ErrorText, {
    error: errorMessage
  }));
};

var _default = ErrorHandler;
exports["default"] = _default;
var ErrorHooks = _ErrorHandlerHooks["default"];
exports.ErrorHooks = ErrorHooks;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9FcnJvckhhbmRsZXIvRXJyb3JIYW5kbGVyLmpzIl0sIm5hbWVzIjpbIm5hbWVIYXNFcnJvciIsImVycm9yQ3VzdG9tQ2xhc3MiLCJFcnJvclRleHQiLCJlcnJvciIsIkVycm9ySGFuZGxlckhvb2tzIiwiZ2V0RXJyb3JMYWJlbCIsIkVycm9ySGFuZGxlciIsImJvZHkiLCJ2YWx1ZUtleSIsIm5hbWVzcGFjZSIsInZhbHVlIiwiaWQiLCJydWxlcyIsImVycm9yVXBkYXRlIiwic2V0RXJyb3JVcGRhdGUiLCJlcnJvck1lc3NhZ2UiLCJzZXRFcnJvck1lc3NhZ2UiLCJlcnJvcklucHV0Iiwic2V0RXJyb3JJbnB1dCIsInVwZGF0ZUVycm9yU3RhdHVzIiwiXyIsIkJvZHlUYWciLCJib2R5QXR0cnMiLCJjaGVjayIsInZhbGlkYXRlIiwiZXZlbnRCdXMiLCJhZGRMaXN0ZW5lciIsImRhdGEiLCJyZW1vdmVMaXN0ZW5lciIsImFkZExpc3RlbmVycyIsImNiIiwidmFsIiwiZ2V0RWxlbWVudCIsInVuZGVmaW5lZCIsImVyciIsInNldEVsZW1lbnQiLCJ0cmltIiwiRXJyb3JIb29rcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBSUEsWUFBWSxHQUFHLEVBQW5CO0FBQ0EsSUFBTUMsZ0JBQWdCLEdBQUcsV0FBekI7O0FBQ0EsSUFBSUMsU0FBUyxHQUFHLFNBQVpBLFNBQVk7QUFBQSxNQUFFQyxLQUFGLFFBQUVBLEtBQUY7QUFBQSxTQUFhQSxLQUFLLEtBQUssRUFBVixHQUFnQkMsOEJBQWtCQyxhQUFsQixDQUFnQ0YsS0FBaEMsQ0FBaEIsR0FBeUQsRUFBdEU7QUFBQSxDQUFoQjs7QUFFQSxJQUFJRyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxRQUFpRjtBQUFBLE1BQTlFQyxJQUE4RSxTQUE5RUEsSUFBOEU7QUFBQSw2QkFBeEVDLFFBQXdFO0FBQUEsTUFBeEVBLFFBQXdFLCtC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QUFDWiw4QkFBa0JZLGVBQWxCLENBQWtDSixLQUFsQyxFQUF5Q21CLEdBQXpDLENBQUQsQ0FBZjtBQUNMYixNQUFBQSxhQUFhLENBQUNhLEdBQUQsQ0FBYjtBQUNBLGFBQU9kLFVBQVA7QUFDRDtBQU5ELEtBTU9LLFNBTlAsRUFERixFQVFFLGdDQUFDLFNBQUQ7QUFBVyxJQUFBLEtBQUssRUFBRVA7QUFBbEIsSUFSRixDQURGO0FBWUQsQ0EvQ0Q7O2VBaURlVCxZOztBQUVSLElBQU0rQixVQUFVLEdBQUdqQyw2QkFBbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBFcnJvckhhbmRsZXJIb29rcyBmcm9tICcuL0Vycm9ySGFuZGxlckhvb2tzJztcbmltcG9ydCAnLi9FcnJvckhhbmRsZXIuc2Nzcyc7XG5pbXBvcnQgZXZlbnRCdXMgZnJvbSAnLi4vZXZlbnRCdXMnO1xuXG5sZXQgbmFtZUhhc0Vycm9yID0ge307XG5jb25zdCBlcnJvckN1c3RvbUNsYXNzID0gJ2hhcy1lcnJvcic7XG5sZXQgRXJyb3JUZXh0ID0gKHtlcnJvcn0pID0+IGVycm9yICE9PSAnJyA/IChFcnJvckhhbmRsZXJIb29rcy5nZXRFcnJvckxhYmVsKGVycm9yKSk6ICcnO1xuXG5sZXQgRXJyb3JIYW5kbGVyID0gKHsgYm9keSwgdmFsdWVLZXkgPSAnJywgbmFtZXNwYWNlID0gJ25vbmUnLCB2YWx1ZSA9ICcnLCBpZCA9ICcnLCBydWxlcyA9IHt9fSkgPT4ge1xuXG4gIGxldCBbZXJyb3JVcGRhdGUsIHNldEVycm9yVXBkYXRlXSA9IHVzZVN0YXRlKHRydWUpO1xuICBsZXQgW2Vycm9yTWVzc2FnZSwgc2V0RXJyb3JNZXNzYWdlXSA9IHVzZVN0YXRlKCcnKTtcbiAgbGV0IFtlcnJvcklucHV0LCBzZXRFcnJvcklucHV0XSA9IHVzZVN0YXRlKHZhbHVlKTtcbiAgbGV0IHVwZGF0ZUVycm9yU3RhdHVzID0gXyA9PiBzZXRFcnJvclVwZGF0ZShmYWxzZSk7XG5cbiAgbmFtZUhhc0Vycm9yW25hbWVzcGFjZV0gPSBbXTtcblxuICBsZXQgQm9keVRhZyA9IGJvZHk7XG4gIGxldCBib2R5QXR0cnMgPSB7XG4gICAgY2hlY2s6IEVycm9ySGFuZGxlckhvb2tzLmNoZWNrLFxuICAgIHNldEVycm9yVXBkYXRlOiB1cGRhdGVFcnJvclN0YXR1cyxcbiAgICB2YWxpZGF0ZTogRXJyb3JIYW5kbGVySG9va3MudmFsaWRhdGVcbiAgfTtcblxuICB1c2VFZmZlY3QoIF8gPT4ge1xuICAgIGlmKG5hbWVzcGFjZSAhPT0gJ25vbmUnKSB7XG4gICAgICBldmVudEJ1cy5hZGRMaXN0ZW5lcihuYW1lc3BhY2UsIChkYXRhKSA9PiBzZXRFcnJvck1lc3NhZ2UoZGF0YVt2YWx1ZUtleV0uZXJyb3IpKTtcbiAgICAgIHJldHVybiBfID0+IGV2ZW50QnVzLnJlbW92ZUxpc3RlbmVyKG5hbWVzcGFjZSk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCBfID0+IHtcbiAgICBldmVudEJ1cy5hZGRMaXN0ZW5lcnMoYCR7bmFtZXNwYWNlfVZhbHVlc2AsIGNiID0+IHtcbiAgICAgIGxldCB2YWwgPSBFcnJvckhhbmRsZXJIb29rcy5nZXRFbGVtZW50KGlkKTtcbiAgICAgIHZhbCA9IHZhbCA9PT0gdW5kZWZpbmVkID8gJycgOiB2YWw7XG4gICAgICBsZXQgZXJyID0gRXJyb3JIYW5kbGVySG9va3Muc2V0RXJyb3JNZXNzYWdlKHJ1bGVzLCB2YWwpO1xuICAgICAgc2V0RXJyb3JNZXNzYWdlKGVycik7XG4gICAgICBjYihpZCwgZXJyICE9PSAnJyk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gXyA9PiBldmVudEJ1cy5yZW1vdmVMaXN0ZW5lcihgJHtuYW1lc3BhY2V9VmFsdWVzYCk7XG4gIH0sIFtdKTtcbiAgXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2BJbnB1dFdyYXBwZXIke2Vycm9yTWVzc2FnZSAhPT0gJycgPyAnICcrZXJyb3JDdXN0b21DbGFzcyA6ICcnfWB9PlxuICAgICAgPEJvZHlUYWcgdXBkYXRlVmFsdWU9eyB2YWwgPT4ge1xuICAgICAgICBFcnJvckhhbmRsZXJIb29rcy5zZXRFbGVtZW50KGlkLCB2YWwpO1xuICAgICAgICBpZih2YWwgIT09ICcnICYmICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJyAmJiB2YWwudHJpbSgpICE9PSAnJykpIHNldEVycm9yTWVzc2FnZSgnJylcbiAgICAgICAgZWxzZSBzZXRFcnJvck1lc3NhZ2UoRXJyb3JIYW5kbGVySG9va3Muc2V0RXJyb3JNZXNzYWdlKHJ1bGVzLCB2YWwpKTtcbiAgICAgICAgc2V0RXJyb3JJbnB1dCh2YWwpO1xuICAgICAgICByZXR1cm4gZXJyb3JJbnB1dDtcbiAgICAgIH19IHsuLi5ib2R5QXR0cnN9IC8+XG4gICAgICA8RXJyb3JUZXh0IGVycm9yPXtlcnJvck1lc3NhZ2V9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVycm9ySGFuZGxlclxuXG5leHBvcnQgY29uc3QgRXJyb3JIb29rcyA9IEVycm9ySGFuZGxlckhvb2tzOyJdfQ==