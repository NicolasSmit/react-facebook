"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _FacebookProvider = require("./FacebookProvider");

var Initialize =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2.default)(Initialize, _Component);

  function Initialize() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = Initialize.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.prepare();
  };

  _proto.prepare =
  /*#__PURE__*/
  function () {
    var _prepare = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee() {
      var _this$props, onReady, handleInit, api;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this$props = this.props, onReady = _this$props.onReady, handleInit = _this$props.handleInit;
              _context.next = 3;
              return handleInit();

            case 3:
              api = _context.sent;

              if (onReady) {
                onReady(api);
              }

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function prepare() {
      return _prepare.apply(this, arguments);
    }

    return prepare;
  }();

  _proto.render = function render() {
    var _this$props2 = this.props,
        children = _this$props2.children,
        isReady = _this$props2.isReady,
        api = _this$props2.api;
    var childrenProps = {
      isReady: isReady,
      api: api
    };

    if (typeof children === 'function') {
      return children(childrenProps);
    }

    return children;
  };

  return Initialize;
}(_react.Component);

(0, _defineProperty2.default)(Initialize, "defaultProps", {
  onReady: undefined,
  api: undefined
});

var _default = (0, _react.forwardRef)(function (props, ref) {
  return _react.default.createElement(_FacebookProvider.FacebookContext.Consumer, null, function (_ref) {
    var handleInit = _ref.handleInit,
        isReady = _ref.isReady,
        api = _ref.api;
    return _react.default.createElement(Initialize, (0, _extends2.default)({}, props, {
      handleInit: handleInit,
      isReady: isReady,
      api: api,
      ref: ref
    }));
  });
});

exports.default = _default;
//# sourceMappingURL=Initialize.js.map