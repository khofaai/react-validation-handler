"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ErrorHooks = exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _ErrorHandlerHooks = _interopRequireDefault(require("./ErrorHandlerHooks"));

require("./ErrorHandler.css");

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
      rules = _ref2$rules === void 0 ? {
    required: true
  } : _ref2$rules;

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

  var updateValue = function updateValue(val) {
    _ErrorHandlerHooks["default"].setElement(id, val);

    if (val !== '' && typeof val === 'string' && val.trim() !== '') setErrorMessage('');else setErrorMessage(_ErrorHandlerHooks["default"].setErrorMessage(rules, val));
    setErrorInput(val);
    return errorInput;
  };

  return _react["default"].createElement("div", {
    className: "InputWrapper".concat(errorMessage !== '' ? ' ' + errorCustomClass : '')
  }, _react["default"].createElement(BodyTag, _extends({}, bodyAttrs, {
    updateValue: updateValue
  })), _react["default"].createElement(ErrorText, {
    error: errorMessage
  }));
};

var _default = ErrorHandler;
exports["default"] = _default;
var ErrorHooks = _ErrorHandlerHooks["default"];
exports.ErrorHooks = ErrorHooks;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9FcnJvckhhbmRsZXIvRXJyb3JIYW5kbGVyLmpzIl0sIm5hbWVzIjpbIm5hbWVIYXNFcnJvciIsImVycm9yQ3VzdG9tQ2xhc3MiLCJFcnJvclRleHQiLCJlcnJvciIsIkVycm9ySGFuZGxlckhvb2tzIiwiZ2V0RXJyb3JMYWJlbCIsIkVycm9ySGFuZGxlciIsImJvZHkiLCJ2YWx1ZUtleSIsIm5hbWVzcGFjZSIsInZhbHVlIiwiaWQiLCJydWxlcyIsInJlcXVpcmVkIiwiZXJyb3JVcGRhdGUiLCJzZXRFcnJvclVwZGF0ZSIsImVycm9yTWVzc2FnZSIsInNldEVycm9yTWVzc2FnZSIsImVycm9ySW5wdXQiLCJzZXRFcnJvcklucHV0IiwidXBkYXRlRXJyb3JTdGF0dXMiLCJfIiwiQm9keVRhZyIsImJvZHlBdHRycyIsImNoZWNrIiwidmFsaWRhdGUiLCJldmVudEJ1cyIsImFkZExpc3RlbmVycyIsImNiIiwidmFsIiwiZ2V0RWxlbWVudCIsInVuZGVmaW5lZCIsImVyciIsInJlbW92ZUxpc3RlbmVyIiwidXBkYXRlVmFsdWUiLCJzZXRFbGVtZW50IiwidHJpbSIsIkVycm9ySG9va3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQUlBLFlBQVksR0FBRyxFQUFuQjtBQUNBLElBQU1DLGdCQUFnQixHQUFHLFdBQXpCOztBQUNBLElBQUlDLFNBQVMsR0FBRyxTQUFaQSxTQUFZO0FBQUEsTUFBRUMsS0FBRixRQUFFQSxLQUFGO0FBQUEsU0FBYUEsS0FBSyxLQUFLLEVBQVYsR0FBZ0JDLDhCQUFrQkMsYUFBbEIsQ0FBZ0NGLEtBQWhDLENBQWhCLEdBQXlELEVBQXRFO0FBQUEsQ0FBaEI7O0FBRUEsSUFBSUcsWUFBWSxHQUFHLFNBQWZBLFlBQWUsUUFBK0Y7QUFBQSxNQUE1RkMsSUFBNEYsU0FBNUZBLElBQTRGO0FBQUEsNkJBQXRGQyxRQUFzRjtBQUFBLE1BQXRGQSxRQUFz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UixJQUFNK0IsVUFBVSxHQUFHakMsNkJBQW5CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRXJyb3JIYW5kbGVySG9va3MgZnJvbSAnLi9FcnJvckhhbmRsZXJIb29rcyc7XG5pbXBvcnQgJy4vRXJyb3JIYW5kbGVyLmNzcyc7XG5pbXBvcnQgZXZlbnRCdXMgZnJvbSAnLi4vZXZlbnRCdXMnO1xuXG5sZXQgbmFtZUhhc0Vycm9yID0ge307XG5jb25zdCBlcnJvckN1c3RvbUNsYXNzID0gJ2hhcy1lcnJvcic7XG5sZXQgRXJyb3JUZXh0ID0gKHtlcnJvcn0pID0+IGVycm9yICE9PSAnJyA/IChFcnJvckhhbmRsZXJIb29rcy5nZXRFcnJvckxhYmVsKGVycm9yKSk6ICcnO1xuXG5sZXQgRXJyb3JIYW5kbGVyID0gKHsgYm9keSwgdmFsdWVLZXkgPSAnJywgbmFtZXNwYWNlID0gJ25vbmUnLCB2YWx1ZSA9ICcnLCBpZCA9ICcnLCBydWxlcyA9IHtyZXF1aXJlZDogdHJ1ZX19KSA9PiB7XG5cbiAgbGV0IFtlcnJvclVwZGF0ZSwgc2V0RXJyb3JVcGRhdGVdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGxldCBbZXJyb3JNZXNzYWdlLCBzZXRFcnJvck1lc3NhZ2VdID0gdXNlU3RhdGUoJycpO1xuICBsZXQgW2Vycm9ySW5wdXQsIHNldEVycm9ySW5wdXRdID0gdXNlU3RhdGUodmFsdWUpO1xuICBsZXQgdXBkYXRlRXJyb3JTdGF0dXMgPSBfID0+IHNldEVycm9yVXBkYXRlKGZhbHNlKTtcblxuICBuYW1lSGFzRXJyb3JbbmFtZXNwYWNlXSA9IFtdO1xuXG4gIGxldCBCb2R5VGFnID0gYm9keTtcbiAgbGV0IGJvZHlBdHRycyA9IHtcbiAgICBjaGVjazogRXJyb3JIYW5kbGVySG9va3MuY2hlY2ssXG4gICAgc2V0RXJyb3JVcGRhdGU6IHVwZGF0ZUVycm9yU3RhdHVzLFxuICAgIHZhbGlkYXRlOiBFcnJvckhhbmRsZXJIb29rcy52YWxpZGF0ZVxuICB9O1xuXG4gIHVzZUVmZmVjdCggXyA9PiB7XG4gICAgZXZlbnRCdXMuYWRkTGlzdGVuZXJzKGAke25hbWVzcGFjZX1WYWx1ZXNgLCBjYiA9PiB7XG4gICAgICBsZXQgdmFsID0gRXJyb3JIYW5kbGVySG9va3MuZ2V0RWxlbWVudChpZCk7XG4gICAgICB2YWwgPSB2YWwgPT09IHVuZGVmaW5lZCA/ICcnIDogdmFsO1xuICAgICAgbGV0IGVyciA9IEVycm9ySGFuZGxlckhvb2tzLnNldEVycm9yTWVzc2FnZShydWxlcywgdmFsKTtcbiAgICAgIHNldEVycm9yTWVzc2FnZShlcnIpO1xuICAgICAgY2IoaWQsIGVyciAhPT0gJycpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIF8gPT4gZXZlbnRCdXMucmVtb3ZlTGlzdGVuZXIoYCR7bmFtZXNwYWNlfVZhbHVlc2ApO1xuICB9LCBbXSk7XG5cbiAgbGV0IHVwZGF0ZVZhbHVlID0gdmFsID0+IHtcbiAgICBFcnJvckhhbmRsZXJIb29rcy5zZXRFbGVtZW50KGlkLCB2YWwpO1xuICAgIGlmKHZhbCAhPT0gJycgJiYgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnICYmIHZhbC50cmltKCkgIT09ICcnKSkgc2V0RXJyb3JNZXNzYWdlKCcnKVxuICAgIGVsc2Ugc2V0RXJyb3JNZXNzYWdlKEVycm9ySGFuZGxlckhvb2tzLnNldEVycm9yTWVzc2FnZShydWxlcywgdmFsKSk7XG4gICAgc2V0RXJyb3JJbnB1dCh2YWwpO1xuICAgIHJldHVybiBlcnJvcklucHV0O1xuICB9XG4gIFxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgSW5wdXRXcmFwcGVyJHtlcnJvck1lc3NhZ2UgIT09ICcnID8gJyAnK2Vycm9yQ3VzdG9tQ2xhc3MgOiAnJ31gfT5cbiAgICAgIDxCb2R5VGFnIHsuLi5ib2R5QXR0cnN9IHVwZGF0ZVZhbHVlPXt1cGRhdGVWYWx1ZX0gLz5cbiAgICAgIDxFcnJvclRleHQgZXJyb3I9e2Vycm9yTWVzc2FnZX0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRXJyb3JIYW5kbGVyXG5cbmV4cG9ydCBjb25zdCBFcnJvckhvb2tzID0gRXJyb3JIYW5kbGVySG9va3M7Il19