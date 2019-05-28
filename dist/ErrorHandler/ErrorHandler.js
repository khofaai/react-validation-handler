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

  var BodyTag = body;
  nameHasError[namespace] = [];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9FcnJvckhhbmRsZXIvRXJyb3JIYW5kbGVyLmpzIl0sIm5hbWVzIjpbIm5hbWVIYXNFcnJvciIsImVycm9yQ3VzdG9tQ2xhc3MiLCJFcnJvclRleHQiLCJlcnJvciIsIkVycm9ySGFuZGxlckhvb2tzIiwiZ2V0RXJyb3JMYWJlbCIsIkVycm9ySGFuZGxlciIsImJvZHkiLCJuYW1lc3BhY2UiLCJ2YWx1ZSIsImlkIiwicnVsZXMiLCJyZXF1aXJlZCIsImVycm9yTWVzc2FnZSIsInNldEVycm9yTWVzc2FnZSIsImVycm9ySW5wdXQiLCJzZXRFcnJvcklucHV0IiwiQm9keVRhZyIsIl8iLCJldmVudEJ1cyIsImFkZExpc3RlbmVycyIsImNiIiwidmFsIiwiZ2V0RWxlbWVudCIsInVuZGVmaW5lZCIsImVyciIsInJlbW92ZUxpc3RlbmVyIiwidXBkYXRlVmFsdWUiLCJzZXRFbGVtZW50IiwidHJpbSIsIkVycm9ySG9va3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxZQUFZLEdBQUcsRUFBbkI7QUFDQSxJQUFNQyxnQkFBZ0IsR0FBRyxXQUF6Qjs7QUFDQSxJQUFJQyxTQUFTLEdBQUcsU0FBWkEsU0FBWTtBQUFBLE1BQUVDLEtBQUYsUUFBRUEsS0FBRjtBQUFBLFNBQWFBLEtBQUssS0FBSyxFQUFWLEdBQWdCQyw4QkFBa0JDLGFBQWxCLENBQWdDRixLQUFoQyxDQUFoQixHQUF5RCxFQUF0RTtBQUFBLENBQWhCOztBQUVBLElBQUlHLFlBQVksR0FBRyxTQUFmQSxZQUFlLFFBQWdGO0FBQUEsTUFBN0VDLElBQTZFLFNBQTdFQSxJQUE2RTtBQUFBLDhCQUF2RUMsU0FBdUU7QUFBQSxNQUF2RUEsU0FBdUUsZ0NBQTNELE1BQTJEO0FBQUEsMEJBQW5EQyxLQUFtRDtBQUFBLE1BQW5EQSxLQUFtRCw0QkFBM0MsRUFBMkM7QUFBQSx1QkFBdkNDLEVBQXVDO0FBQUEsTUFBdkNBLEVBQXVDLHlCQUFsQyxFQUFrQztBQUFBLDBCQUE5QkMsS0FBOEI7QUFBQSxNQUE5QkEsS0FBOEIsNEJBQXRCO0FBQUNDLElBQUFBLFFBQVEsRUFBRTtBQUFYLEdBQXNCOztBQUFBLGtCQUUzRCxxQkFBUyxFQUFULENBRjJEO0FBQUE7QUFBQSxNQUU1RkMsWUFGNEY7QUFBQSxNQUU5RUMsZUFGOEU7O0FBQUEsbUJBRy9ELHFCQUFTTCxLQUFULENBSCtEO0FBQUE7QUFBQSxNQUc1Rk0sVUFINEY7QUFBQSxNQUdoRkMsYUFIZ0Y7O0FBSWpHLE1BQUlDLE9BQU8sR0FBR1YsSUFBZDtBQUVBUCxFQUFBQSxZQUFZLENBQUNRLFNBQUQsQ0FBWixHQUEwQixFQUExQjtBQUVBLHdCQUFXLFVBQUFVLENBQUMsRUFBSTtBQUNkQyxnQ0FBU0MsWUFBVCxXQUF5QlosU0FBekIsYUFBNEMsVUFBQWEsRUFBRSxFQUFJO0FBQ2hELFVBQUlDLEdBQUcsR0FBR2xCLDhCQUFrQm1CLFVBQWxCLENBQTZCYixFQUE3QixDQUFWOztBQUNBWSxNQUFBQSxHQUFHLEdBQUdBLEdBQUcsS0FBS0UsU0FBUixHQUFvQixFQUFwQixHQUF5QkYsR0FBL0I7O0FBQ0EsVUFBSUcsR0FBRyxHQUFHckIsOEJBQWtCVSxlQUFsQixDQUFrQ0gsS0FBbEMsRUFBeUNXLEdBQXpDLENBQVY7O0FBQ0FSLE1BQUFBLGVBQWUsQ0FBQ1csR0FBRCxDQUFmO0FBQ0FKLE1BQUFBLEVBQUUsQ0FBQ1gsRUFBRCxFQUFLZSxHQUFHLEtBQUssRUFBYixDQUFGO0FBQ0QsS0FORDs7QUFRQSxXQUFPLFVBQUFQLENBQUM7QUFBQSxhQUFJQyw0QkFBU08sY0FBVCxXQUEyQmxCLFNBQTNCLFlBQUo7QUFBQSxLQUFSO0FBQ0QsR0FWRCxFQVVHLEVBVkg7O0FBWUEsTUFBSW1CLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUFMLEdBQUcsRUFBSTtBQUN2QmxCLGtDQUFrQndCLFVBQWxCLENBQTZCbEIsRUFBN0IsRUFBaUNZLEdBQWpDOztBQUNBLFFBQUdBLEdBQUcsS0FBSyxFQUFSLElBQWUsT0FBT0EsR0FBUCxLQUFlLFFBQWYsSUFBMkJBLEdBQUcsQ0FBQ08sSUFBSixPQUFlLEVBQTVELEVBQWlFZixlQUFlLENBQUMsRUFBRCxDQUFmLENBQWpFLEtBQ0tBLGVBQWUsQ0FBQ1YsOEJBQWtCVSxlQUFsQixDQUFrQ0gsS0FBbEMsRUFBeUNXLEdBQXpDLENBQUQsQ0FBZjtBQUNMTixJQUFBQSxhQUFhLENBQUNNLEdBQUQsQ0FBYjtBQUNBLFdBQU9QLFVBQVA7QUFDRCxHQU5EOztBQVFBLFNBQ0U7QUFBSyxJQUFBLFNBQVMsd0JBQWlCRixZQUFZLEtBQUssRUFBakIsR0FBc0IsTUFBSVosZ0JBQTFCLEdBQTZDLEVBQTlEO0FBQWQsS0FDRSxnQ0FBQyxPQUFEO0FBQVMsSUFBQSxXQUFXLEVBQUUwQjtBQUF0QixJQURGLEVBRUUsZ0NBQUMsU0FBRDtBQUFXLElBQUEsS0FBSyxFQUFFZDtBQUFsQixJQUZGLENBREY7QUFNRCxDQWxDRDs7ZUFvQ2VQLFk7O0FBRVIsSUFBTXdCLFVBQVUsR0FBRzFCLDZCQUFuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEVycm9ySGFuZGxlckhvb2tzIGZyb20gJy4vRXJyb3JIYW5kbGVySG9va3MnO1xuaW1wb3J0ICcuL0Vycm9ySGFuZGxlci5jc3MnO1xuaW1wb3J0IGV2ZW50QnVzIGZyb20gJ3NpbXBsZS1ldmVudHMtYnVzJztcblxubGV0IG5hbWVIYXNFcnJvciA9IHt9O1xuY29uc3QgZXJyb3JDdXN0b21DbGFzcyA9ICdoYXMtZXJyb3InO1xubGV0IEVycm9yVGV4dCA9ICh7ZXJyb3J9KSA9PiBlcnJvciAhPT0gJycgPyAoRXJyb3JIYW5kbGVySG9va3MuZ2V0RXJyb3JMYWJlbChlcnJvcikpOiAnJztcblxubGV0IEVycm9ySGFuZGxlciA9ICh7IGJvZHksIG5hbWVzcGFjZSA9ICdub25lJywgdmFsdWUgPSAnJywgaWQgPSAnJywgcnVsZXMgPSB7cmVxdWlyZWQ6IHRydWV9fSkgPT4ge1xuXG4gIGxldCBbZXJyb3JNZXNzYWdlLCBzZXRFcnJvck1lc3NhZ2VdID0gdXNlU3RhdGUoJycpO1xuICBsZXQgW2Vycm9ySW5wdXQsIHNldEVycm9ySW5wdXRdID0gdXNlU3RhdGUodmFsdWUpO1xuICBsZXQgQm9keVRhZyA9IGJvZHk7XG5cbiAgbmFtZUhhc0Vycm9yW25hbWVzcGFjZV0gPSBbXTtcblxuICB1c2VFZmZlY3QoIF8gPT4ge1xuICAgIGV2ZW50QnVzLmFkZExpc3RlbmVycyhgJHtuYW1lc3BhY2V9VmFsdWVzYCwgY2IgPT4ge1xuICAgICAgbGV0IHZhbCA9IEVycm9ySGFuZGxlckhvb2tzLmdldEVsZW1lbnQoaWQpO1xuICAgICAgdmFsID0gdmFsID09PSB1bmRlZmluZWQgPyAnJyA6IHZhbDtcbiAgICAgIGxldCBlcnIgPSBFcnJvckhhbmRsZXJIb29rcy5zZXRFcnJvck1lc3NhZ2UocnVsZXMsIHZhbCk7XG4gICAgICBzZXRFcnJvck1lc3NhZ2UoZXJyKTtcbiAgICAgIGNiKGlkLCBlcnIgIT09ICcnKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBfID0+IGV2ZW50QnVzLnJlbW92ZUxpc3RlbmVyKGAke25hbWVzcGFjZX1WYWx1ZXNgKTtcbiAgfSwgW10pO1xuXG4gIGxldCB1cGRhdGVWYWx1ZSA9IHZhbCA9PiB7XG4gICAgRXJyb3JIYW5kbGVySG9va3Muc2V0RWxlbWVudChpZCwgdmFsKTtcbiAgICBpZih2YWwgIT09ICcnICYmICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJyAmJiB2YWwudHJpbSgpICE9PSAnJykpIHNldEVycm9yTWVzc2FnZSgnJylcbiAgICBlbHNlIHNldEVycm9yTWVzc2FnZShFcnJvckhhbmRsZXJIb29rcy5zZXRFcnJvck1lc3NhZ2UocnVsZXMsIHZhbCkpO1xuICAgIHNldEVycm9ySW5wdXQodmFsKTtcbiAgICByZXR1cm4gZXJyb3JJbnB1dDtcbiAgfVxuICBcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YElucHV0V3JhcHBlciR7ZXJyb3JNZXNzYWdlICE9PSAnJyA/ICcgJytlcnJvckN1c3RvbUNsYXNzIDogJyd9YH0+XG4gICAgICA8Qm9keVRhZyB1cGRhdGVWYWx1ZT17dXBkYXRlVmFsdWV9IC8+XG4gICAgICA8RXJyb3JUZXh0IGVycm9yPXtlcnJvck1lc3NhZ2V9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVycm9ySGFuZGxlclxuXG5leHBvcnQgY29uc3QgRXJyb3JIb29rcyA9IEVycm9ySGFuZGxlckhvb2tzOyJdfQ==