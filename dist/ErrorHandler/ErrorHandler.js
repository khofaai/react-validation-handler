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

  var _useState = (0, _react.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      errorMessage = _useState2[0],
      setErrorMessage = _useState2[1];

  var _useState3 = (0, _react.useState)(value),
      _useState4 = _slicedToArray(_useState3, 2),
      errorInput = _useState4[0],
      setErrorInput = _useState4[1];

  nameHasError[namespace] = [];
  var BodyTag = body;
  var bodyAttrs = {
    check: _ErrorHandlerHooks["default"].check,
    validate: _ErrorHandlerHooks["default"].validate
  };
  (0, _react.useEffect)(function (_) {
    _simpleEventsBus["default"].addListeners("".concat(namespace, "Values"), function (cb) {
      var val = _ErrorHandlerHooks["default"].getElement(id);

      val = val === undefined ? '' : val;

      var err = _ErrorHandlerHooks["default"].setErrorMessage(rules, val);

      setErrorMessage(err);
      cb(id, err !== '');
    });

    return function (_) {
      return _simpleEventsBus["default"].removeListener("".concat(namespace, "Values"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9FcnJvckhhbmRsZXIvRXJyb3JIYW5kbGVyLmpzIl0sIm5hbWVzIjpbIm5hbWVIYXNFcnJvciIsImVycm9yQ3VzdG9tQ2xhc3MiLCJFcnJvclRleHQiLCJlcnJvciIsIkVycm9ySGFuZGxlckhvb2tzIiwiZ2V0RXJyb3JMYWJlbCIsIkVycm9ySGFuZGxlciIsImJvZHkiLCJuYW1lc3BhY2UiLCJ2YWx1ZSIsImlkIiwicnVsZXMiLCJyZXF1aXJlZCIsImVycm9yTWVzc2FnZSIsInNldEVycm9yTWVzc2FnZSIsImVycm9ySW5wdXQiLCJzZXRFcnJvcklucHV0IiwiQm9keVRhZyIsImJvZHlBdHRycyIsImNoZWNrIiwidmFsaWRhdGUiLCJfIiwiZXZlbnRCdXMiLCJhZGRMaXN0ZW5lcnMiLCJjYiIsInZhbCIsImdldEVsZW1lbnQiLCJ1bmRlZmluZWQiLCJlcnIiLCJyZW1vdmVMaXN0ZW5lciIsInVwZGF0ZVZhbHVlIiwic2V0RWxlbWVudCIsInRyaW0iLCJFcnJvckhvb2tzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxZQUFZLEdBQUcsRUFBbkI7QUFDQSxJQUFNQyxnQkFBZ0IsR0FBRyxXQUF6Qjs7QUFDQSxJQUFJQyxTQUFTLEdBQUcsU0FBWkEsU0FBWTtBQUFBLE1BQUVDLEtBQUYsUUFBRUEsS0FBRjtBQUFBLFNBQWFBLEtBQUssS0FBSyxFQUFWLEdBQWdCQyw4QkFBa0JDLGFBQWxCLENBQWdDRixLQUFoQyxDQUFoQixHQUF5RCxFQUF0RTtBQUFBLENBQWhCOztBQUVBLElBQUlHLFlBQVksR0FBRyxTQUFmQSxZQUFlLFFBQWdGO0FBQUEsTUFBN0VDLElBQTZFLFNBQTdFQSxJQUE2RTtBQUFBLDhCQUF2RUMsU0FBdUU7QUFBQSxNQUF2RUEsU0FBdUUsZ0NBQTNELE1BQTJEO0FBQUEsMEJBQW5EQyxLQUFtRDtBQUFBLE1BQW5EQSxLQUFtRCw0QkFBM0MsRUFBMkM7QUFBQSx1QkFBdkNDLEVBQXVDO0FBQUEsTUFBdkNBLEVBQXVDLHlCQUFsQyxFQUFrQztBQUFBLDBCQUE5QkMsS0FBOEI7QUFBQSxNQUE5QkEsS0FBOEIsNEJBQXRCO0FBQUNDLElBQUFBLFFBQVEsRUFBRTtBQUFYLEdBQXNCOztBQUFBLGtCQUUzRCxxQkFBUyxFQUFULENBRjJEO0FBQUE7QUFBQSxNQUU1RkMsWUFGNEY7QUFBQSxNQUU5RUMsZUFGOEU7O0FBQUEsbUJBRy9ELHFCQUFTTCxLQUFULENBSCtEO0FBQUE7QUFBQSxNQUc1Rk0sVUFINEY7QUFBQSxNQUdoRkMsYUFIZ0Y7O0FBS2pHaEIsRUFBQUEsWUFBWSxDQUFDUSxTQUFELENBQVosR0FBMEIsRUFBMUI7QUFFQSxNQUFJUyxPQUFPLEdBQUdWLElBQWQ7QUFDQSxNQUFJVyxTQUFTLEdBQUc7QUFDZEMsSUFBQUEsS0FBSyxFQUFFZiw4QkFBa0JlLEtBRFg7QUFFZEMsSUFBQUEsUUFBUSxFQUFFaEIsOEJBQWtCZ0I7QUFGZCxHQUFoQjtBQUtBLHdCQUFXLFVBQUFDLENBQUMsRUFBSTtBQUNkQyxnQ0FBU0MsWUFBVCxXQUF5QmYsU0FBekIsYUFBNEMsVUFBQWdCLEVBQUUsRUFBSTtBQUNoRCxVQUFJQyxHQUFHLEdBQUdyQiw4QkFBa0JzQixVQUFsQixDQUE2QmhCLEVBQTdCLENBQVY7O0FBQ0FlLE1BQUFBLEdBQUcsR0FBR0EsR0FBRyxLQUFLRSxTQUFSLEdBQW9CLEVBQXBCLEdBQXlCRixHQUEvQjs7QUFDQSxVQUFJRyxHQUFHLEdBQUd4Qiw4QkFBa0JVLGVBQWxCLENBQWtDSCxLQUFsQyxFQUF5Q2MsR0FBekMsQ0FBVjs7QUFDQVgsTUFBQUEsZUFBZSxDQUFDYyxHQUFELENBQWY7QUFDQUosTUFBQUEsRUFBRSxDQUFDZCxFQUFELEVBQUtrQixHQUFHLEtBQUssRUFBYixDQUFGO0FBQ0QsS0FORDs7QUFRQSxXQUFPLFVBQUFQLENBQUM7QUFBQSxhQUFJQyw0QkFBU08sY0FBVCxXQUEyQnJCLFNBQTNCLFlBQUo7QUFBQSxLQUFSO0FBQ0QsR0FWRCxFQVVHLEVBVkg7O0FBWUEsTUFBSXNCLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUFMLEdBQUcsRUFBSTtBQUN2QnJCLGtDQUFrQjJCLFVBQWxCLENBQTZCckIsRUFBN0IsRUFBaUNlLEdBQWpDOztBQUNBLFFBQUdBLEdBQUcsS0FBSyxFQUFSLElBQWUsT0FBT0EsR0FBUCxLQUFlLFFBQWYsSUFBMkJBLEdBQUcsQ0FBQ08sSUFBSixPQUFlLEVBQTVELEVBQWlFbEIsZUFBZSxDQUFDLEVBQUQsQ0FBZixDQUFqRSxLQUNLQSxlQUFlLENBQUNWLDhCQUFrQlUsZUFBbEIsQ0FBa0NILEtBQWxDLEVBQXlDYyxHQUF6QyxDQUFELENBQWY7QUFDTFQsSUFBQUEsYUFBYSxDQUFDUyxHQUFELENBQWI7QUFDQSxXQUFPVixVQUFQO0FBQ0QsR0FORDs7QUFRQSxTQUNFO0FBQUssSUFBQSxTQUFTLHdCQUFpQkYsWUFBWSxLQUFLLEVBQWpCLEdBQXNCLE1BQUlaLGdCQUExQixHQUE2QyxFQUE5RDtBQUFkLEtBQ0UsZ0NBQUMsT0FBRCxlQUFhaUIsU0FBYjtBQUF3QixJQUFBLFdBQVcsRUFBRVk7QUFBckMsS0FERixFQUVFLGdDQUFDLFNBQUQ7QUFBVyxJQUFBLEtBQUssRUFBRWpCO0FBQWxCLElBRkYsQ0FERjtBQU1ELENBdkNEOztlQXlDZVAsWTs7QUFFUixJQUFNMkIsVUFBVSxHQUFHN0IsNkJBQW5CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRXJyb3JIYW5kbGVySG9va3MgZnJvbSAnLi9FcnJvckhhbmRsZXJIb29rcyc7XG5pbXBvcnQgJy4vRXJyb3JIYW5kbGVyLmNzcyc7XG5pbXBvcnQgZXZlbnRCdXMgZnJvbSAnc2ltcGxlLWV2ZW50cy1idXMnO1xuXG5sZXQgbmFtZUhhc0Vycm9yID0ge307XG5jb25zdCBlcnJvckN1c3RvbUNsYXNzID0gJ2hhcy1lcnJvcic7XG5sZXQgRXJyb3JUZXh0ID0gKHtlcnJvcn0pID0+IGVycm9yICE9PSAnJyA/IChFcnJvckhhbmRsZXJIb29rcy5nZXRFcnJvckxhYmVsKGVycm9yKSk6ICcnO1xuXG5sZXQgRXJyb3JIYW5kbGVyID0gKHsgYm9keSwgbmFtZXNwYWNlID0gJ25vbmUnLCB2YWx1ZSA9ICcnLCBpZCA9ICcnLCBydWxlcyA9IHtyZXF1aXJlZDogdHJ1ZX19KSA9PiB7XG5cbiAgbGV0IFtlcnJvck1lc3NhZ2UsIHNldEVycm9yTWVzc2FnZV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGxldCBbZXJyb3JJbnB1dCwgc2V0RXJyb3JJbnB1dF0gPSB1c2VTdGF0ZSh2YWx1ZSk7XG5cbiAgbmFtZUhhc0Vycm9yW25hbWVzcGFjZV0gPSBbXTtcblxuICBsZXQgQm9keVRhZyA9IGJvZHk7XG4gIGxldCBib2R5QXR0cnMgPSB7XG4gICAgY2hlY2s6IEVycm9ySGFuZGxlckhvb2tzLmNoZWNrLFxuICAgIHZhbGlkYXRlOiBFcnJvckhhbmRsZXJIb29rcy52YWxpZGF0ZVxuICB9O1xuXG4gIHVzZUVmZmVjdCggXyA9PiB7XG4gICAgZXZlbnRCdXMuYWRkTGlzdGVuZXJzKGAke25hbWVzcGFjZX1WYWx1ZXNgLCBjYiA9PiB7XG4gICAgICBsZXQgdmFsID0gRXJyb3JIYW5kbGVySG9va3MuZ2V0RWxlbWVudChpZCk7XG4gICAgICB2YWwgPSB2YWwgPT09IHVuZGVmaW5lZCA/ICcnIDogdmFsO1xuICAgICAgbGV0IGVyciA9IEVycm9ySGFuZGxlckhvb2tzLnNldEVycm9yTWVzc2FnZShydWxlcywgdmFsKTtcbiAgICAgIHNldEVycm9yTWVzc2FnZShlcnIpO1xuICAgICAgY2IoaWQsIGVyciAhPT0gJycpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIF8gPT4gZXZlbnRCdXMucmVtb3ZlTGlzdGVuZXIoYCR7bmFtZXNwYWNlfVZhbHVlc2ApO1xuICB9LCBbXSk7XG5cbiAgbGV0IHVwZGF0ZVZhbHVlID0gdmFsID0+IHtcbiAgICBFcnJvckhhbmRsZXJIb29rcy5zZXRFbGVtZW50KGlkLCB2YWwpO1xuICAgIGlmKHZhbCAhPT0gJycgJiYgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnICYmIHZhbC50cmltKCkgIT09ICcnKSkgc2V0RXJyb3JNZXNzYWdlKCcnKVxuICAgIGVsc2Ugc2V0RXJyb3JNZXNzYWdlKEVycm9ySGFuZGxlckhvb2tzLnNldEVycm9yTWVzc2FnZShydWxlcywgdmFsKSk7XG4gICAgc2V0RXJyb3JJbnB1dCh2YWwpO1xuICAgIHJldHVybiBlcnJvcklucHV0O1xuICB9XG4gIFxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgSW5wdXRXcmFwcGVyJHtlcnJvck1lc3NhZ2UgIT09ICcnID8gJyAnK2Vycm9yQ3VzdG9tQ2xhc3MgOiAnJ31gfT5cbiAgICAgIDxCb2R5VGFnIHsuLi5ib2R5QXR0cnN9IHVwZGF0ZVZhbHVlPXt1cGRhdGVWYWx1ZX0gLz5cbiAgICAgIDxFcnJvclRleHQgZXJyb3I9e2Vycm9yTWVzc2FnZX0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRXJyb3JIYW5kbGVyXG5cbmV4cG9ydCBjb25zdCBFcnJvckhvb2tzID0gRXJyb3JIYW5kbGVySG9va3M7Il19