"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _Parser = _interopRequireDefault(require("./Parser"));

var MessageUs =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inheritsLoose2.default)(MessageUs, _PureComponent);

  function MessageUs() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = MessageUs.prototype;

  _proto.componentDidUpdate = function componentDidUpdate() {
    var handleParse = this.props.handleParse;
    handleParse();
  };

  _proto.render = function render() {
    var _this$props = this.props,
        color = _this$props.color,
        messengerAppId = _this$props.messengerAppId,
        pageId = _this$props.pageId,
        children = _this$props.children,
        size = _this$props.size;
    return _react.default.createElement("div", {
      className: "fb-messengermessageus",
      messenger_app_id: messengerAppId,
      page_id: pageId,
      color: color,
      size: size
    }, children);
  };

  return MessageUs;
}(_react.PureComponent);

(0, _defineProperty2.default)(MessageUs, "defaultProps", {
  color: undefined,
  size: undefined,
  children: undefined
});

var _default = (0, _react.forwardRef)(function (props, ref) {
  return _react.default.createElement(_Parser.default, null, function (_ref) {
    var handleParse = _ref.handleParse;
    return _react.default.createElement(MessageUs, (0, _extends2.default)({}, props, {
      handleParse: handleParse,
      ref: ref
    }));
  });
});

exports.default = _default;
//# sourceMappingURL=MessageUs.js.map