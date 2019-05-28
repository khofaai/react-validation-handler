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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9FcnJvckhhbmRsZXIvRXJyb3JIYW5kbGVyLmpzIl0sIm5hbWVzIjpbIm5hbWVIYXNFcnJvciIsImVycm9yQ3VzdG9tQ2xhc3MiLCJFcnJvclRleHQiLCJlcnJvciIsIkVycm9ySGFuZGxlckhvb2tzIiwiZ2V0RXJyb3JMYWJlbCIsIkVycm9ySGFuZGxlciIsImJvZHkiLCJuYW1lc3BhY2UiLCJ2YWx1ZSIsImlkIiwicnVsZXMiLCJyZXF1aXJlZCIsImVycm9yTWVzc2FnZSIsInNldEVycm9yTWVzc2FnZSIsImVycm9ySW5wdXQiLCJzZXRFcnJvcklucHV0IiwiQm9keVRhZyIsIl8iLCJldmVudEJ1cyIsImFkZExpc3RlbmVycyIsImNiIiwidmFsIiwiZ2V0RWxlbWVudCIsInVuZGVmaW5lZCIsImVyciIsInJlbW92ZUxpc3RlbmVyIiwidXBkYXRlVmFsdWUiLCJzZXRFbGVtZW50IiwidHJpbSIsIkVycm9ySG9va3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxZQUFZLEdBQUcsRUFBbkI7QUFDQSxJQUFNQyxnQkFBZ0IsR0FBRyxXQUF6Qjs7QUFDQSxJQUFJQyxTQUFTLEdBQUcsU0FBWkEsU0FBWTtBQUFBLE1BQUVDLEtBQUYsUUFBRUEsS0FBRjtBQUFBLFNBQWFBLEtBQUssS0FBSyxFQUFWLEdBQWdCQyw4QkFBa0JDLGFBQWxCLENBQWdDRixLQUFoQyxDQUFoQixHQUF5RCxFQUF0RTtBQUFBLENBQWhCOztBQUVBLElBQUlHLFlBQVksR0FBRyxTQUFmQSxZQUFlLFFBQTZEO0FBQUEsTUFBMURDLElBQTBELFNBQTFEQSxJQUEwRDtBQUFBLE1BQXBEQyxTQUFvRCxTQUFwREEsU0FBb0Q7QUFBQSxNQUF6Q0MsS0FBeUMsU0FBekNBLEtBQXlDO0FBQUEsTUFBbENDLEVBQWtDLFNBQWxDQSxFQUFrQztBQUFBLDBCQUE5QkMsS0FBOEI7QUFBQSxNQUE5QkEsS0FBOEIsNEJBQXRCO0FBQUNDLElBQUFBLFFBQVEsRUFBRTtBQUFYLEdBQXNCOztBQUFBLGtCQUV4QyxxQkFBUyxFQUFULENBRndDO0FBQUE7QUFBQSxNQUV6RUMsWUFGeUU7QUFBQSxNQUUzREMsZUFGMkQ7O0FBQUEsbUJBRzVDLHFCQUFTTCxLQUFULENBSDRDO0FBQUE7QUFBQSxNQUd6RU0sVUFIeUU7QUFBQSxNQUc3REMsYUFINkQ7O0FBSTlFLE1BQUlDLE9BQU8sR0FBR1YsSUFBZDtBQUVBUCxFQUFBQSxZQUFZLENBQUNRLFNBQUQsQ0FBWixHQUEwQixFQUExQjtBQUVBLHdCQUFXLFVBQUFVLENBQUMsRUFBSTtBQUNkQyxnQ0FBU0MsWUFBVCxXQUF5QlosU0FBekIsYUFBNEMsVUFBQWEsRUFBRSxFQUFJO0FBQ2hELFVBQUlDLEdBQUcsR0FBR2xCLDhCQUFrQm1CLFVBQWxCLENBQTZCYixFQUE3QixDQUFWOztBQUNBWSxNQUFBQSxHQUFHLEdBQUdBLEdBQUcsS0FBS0UsU0FBUixHQUFvQixFQUFwQixHQUF5QkYsR0FBL0I7O0FBQ0EsVUFBSUcsR0FBRyxHQUFHckIsOEJBQWtCVSxlQUFsQixDQUFrQ0gsS0FBbEMsRUFBeUNXLEdBQXpDLENBQVY7O0FBQ0FSLE1BQUFBLGVBQWUsQ0FBQ1csR0FBRCxDQUFmO0FBQ0FKLE1BQUFBLEVBQUUsQ0FBQ1gsRUFBRCxFQUFLZSxHQUFHLEtBQUssRUFBYixDQUFGO0FBQ0QsS0FORDs7QUFRQSxXQUFPLFVBQUFQLENBQUM7QUFBQSxhQUFJQyw0QkFBU08sY0FBVCxXQUEyQmxCLFNBQTNCLFlBQUo7QUFBQSxLQUFSO0FBQ0QsR0FWRCxFQVVHLEVBVkg7O0FBWUEsTUFBSW1CLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUFMLEdBQUcsRUFBSTtBQUN2QmxCLGtDQUFrQndCLFVBQWxCLENBQTZCbEIsRUFBN0IsRUFBaUNZLEdBQWpDOztBQUNBLFFBQUdBLEdBQUcsS0FBSyxFQUFSLElBQWUsT0FBT0EsR0FBUCxLQUFlLFFBQWYsSUFBMkJBLEdBQUcsQ0FBQ08sSUFBSixPQUFlLEVBQTVELEVBQWlFZixlQUFlLENBQUMsRUFBRCxDQUFmLENBQWpFLEtBQ0tBLGVBQWUsQ0FBQ1YsOEJBQWtCVSxlQUFsQixDQUFrQ0gsS0FBbEMsRUFBeUNXLEdBQXpDLENBQUQsQ0FBZjtBQUNMTixJQUFBQSxhQUFhLENBQUNNLEdBQUQsQ0FBYjtBQUNBLFdBQU9QLFVBQVA7QUFDRCxHQU5EOztBQVFBLFNBQ0U7QUFBSyxJQUFBLFNBQVMsd0JBQWlCRixZQUFZLEtBQUssRUFBakIsR0FBc0IsTUFBSVosZ0JBQTFCLEdBQTZDLEVBQTlEO0FBQWQsS0FDRSxnQ0FBQyxPQUFEO0FBQVMsSUFBQSxXQUFXLEVBQUUwQjtBQUF0QixJQURGLEVBRUUsZ0NBQUMsU0FBRDtBQUFXLElBQUEsS0FBSyxFQUFFZDtBQUFsQixJQUZGLENBREY7QUFNRCxDQWxDRDs7ZUFvQ2VQLFk7O0FBRVIsSUFBTXdCLFVBQVUsR0FBRzFCLDZCQUFuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEVycm9ySGFuZGxlckhvb2tzIGZyb20gJy4vRXJyb3JIYW5kbGVySG9va3MnO1xuaW1wb3J0ICcuL0Vycm9ySGFuZGxlci5jc3MnO1xuaW1wb3J0IGV2ZW50QnVzIGZyb20gJ3NpbXBsZS1ldmVudHMtYnVzJztcblxubGV0IG5hbWVIYXNFcnJvciA9IHt9O1xuY29uc3QgZXJyb3JDdXN0b21DbGFzcyA9ICdoYXMtZXJyb3InO1xubGV0IEVycm9yVGV4dCA9ICh7ZXJyb3J9KSA9PiBlcnJvciAhPT0gJycgPyAoRXJyb3JIYW5kbGVySG9va3MuZ2V0RXJyb3JMYWJlbChlcnJvcikpOiAnJztcblxubGV0IEVycm9ySGFuZGxlciA9ICh7IGJvZHksIG5hbWVzcGFjZSwgdmFsdWUsIGlkLCBydWxlcyA9IHtyZXF1aXJlZDogdHJ1ZX19KSA9PiB7XG5cbiAgbGV0IFtlcnJvck1lc3NhZ2UsIHNldEVycm9yTWVzc2FnZV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGxldCBbZXJyb3JJbnB1dCwgc2V0RXJyb3JJbnB1dF0gPSB1c2VTdGF0ZSh2YWx1ZSk7XG4gIGxldCBCb2R5VGFnID0gYm9keTtcblxuICBuYW1lSGFzRXJyb3JbbmFtZXNwYWNlXSA9IFtdO1xuXG4gIHVzZUVmZmVjdCggXyA9PiB7XG4gICAgZXZlbnRCdXMuYWRkTGlzdGVuZXJzKGAke25hbWVzcGFjZX1WYWx1ZXNgLCBjYiA9PiB7XG4gICAgICBsZXQgdmFsID0gRXJyb3JIYW5kbGVySG9va3MuZ2V0RWxlbWVudChpZCk7XG4gICAgICB2YWwgPSB2YWwgPT09IHVuZGVmaW5lZCA/ICcnIDogdmFsO1xuICAgICAgbGV0IGVyciA9IEVycm9ySGFuZGxlckhvb2tzLnNldEVycm9yTWVzc2FnZShydWxlcywgdmFsKTtcbiAgICAgIHNldEVycm9yTWVzc2FnZShlcnIpO1xuICAgICAgY2IoaWQsIGVyciAhPT0gJycpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIF8gPT4gZXZlbnRCdXMucmVtb3ZlTGlzdGVuZXIoYCR7bmFtZXNwYWNlfVZhbHVlc2ApO1xuICB9LCBbXSk7XG5cbiAgbGV0IHVwZGF0ZVZhbHVlID0gdmFsID0+IHtcbiAgICBFcnJvckhhbmRsZXJIb29rcy5zZXRFbGVtZW50KGlkLCB2YWwpO1xuICAgIGlmKHZhbCAhPT0gJycgJiYgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnICYmIHZhbC50cmltKCkgIT09ICcnKSkgc2V0RXJyb3JNZXNzYWdlKCcnKVxuICAgIGVsc2Ugc2V0RXJyb3JNZXNzYWdlKEVycm9ySGFuZGxlckhvb2tzLnNldEVycm9yTWVzc2FnZShydWxlcywgdmFsKSk7XG4gICAgc2V0RXJyb3JJbnB1dCh2YWwpO1xuICAgIHJldHVybiBlcnJvcklucHV0O1xuICB9XG4gIFxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgSW5wdXRXcmFwcGVyJHtlcnJvck1lc3NhZ2UgIT09ICcnID8gJyAnK2Vycm9yQ3VzdG9tQ2xhc3MgOiAnJ31gfT5cbiAgICAgIDxCb2R5VGFnIHVwZGF0ZVZhbHVlPXt1cGRhdGVWYWx1ZX0gLz5cbiAgICAgIDxFcnJvclRleHQgZXJyb3I9e2Vycm9yTWVzc2FnZX0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRXJyb3JIYW5kbGVyXG5cbmV4cG9ydCBjb25zdCBFcnJvckhvb2tzID0gRXJyb3JIYW5kbGVySG9va3M7Il19