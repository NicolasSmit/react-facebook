"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _react = _interopRequireWildcard(require("react"));

var _Initialize = _interopRequireDefault(require("./Initialize"));

var _Subscribe = _interopRequireDefault(require("./Subscribe"));

function getLoginStatus(_x) {
  return _getLoginStatus.apply(this, arguments);
}

function _getLoginStatus() {
  _getLoginStatus = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee2(api) {
    var response;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return api.getLoginStatus();

          case 2:
            response = _context2.sent;
            return _context2.abrupt("return", response.status);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));
  return _getLoginStatus.apply(this, arguments);
}

var Status =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2.default)(Status, _Component);

  function Status() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      loading: true
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleReady",
    /*#__PURE__*/
    function () {
      var _ref = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(api) {
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.t0 = _this;
                _context.next = 3;
                return getLoginStatus(api);

              case 3:
                _context.t1 = _context.sent;
                _context.t2 = {
                  status: _context.t1,
                  loading: false
                };

                _context.t0.setState.call(_context.t0, _context.t2);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x2) {
        return _ref.apply(this, arguments);
      };
    }());
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleStatusChange", function (response) {
      _this.setState({
        status: response.status,
        loading: false
      });
    });
    return _this;
  }

  var _proto = Status.prototype;

  _proto.render = function render() {
    var children = this.props.children;
    var _this$state = this.state,
        status = _this$state.status,
        loading = _this$state.loading;
    return _react.default.createElement(_Initialize.default, {
      onReady: this.handleReady
    }, _react.default.createElement(_Subscribe.default, {
      event: "auth.statusChange",
      onChange: this.handleStatusChange
    }, children({
      status: status,
      loading: loading
    })));
  };

  return Status;
}(_react.Component);

exports.default = Status;
//# sourceMappingURL=Status.js.map