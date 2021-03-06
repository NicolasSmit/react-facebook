"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = exports.Method = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _LoginStatus = _interopRequireDefault(require("./constants/LoginStatus"));

var Method = {
  GET: 'get',
  POST: 'post',
  DELETE: 'delete'
};
exports.Method = Method;

var Facebook =
/*#__PURE__*/
function () {
  function Facebook(options) {
    if (options === void 0) {
      options = {};
    }

    this.options = (0, _extends2.default)({
      domain: 'connect.facebook.net',
      version: 'v3.2',
      cookie: false,
      status: false,
      xfbml: false,
      language: 'en_US',
      frictionlessRequests: false,
      debug: false
    }, options);

    if (!this.options.appId) {
      throw new Error('You need to set appId');
    }

    if (!this.options.wait) {
      this.init();
    }
  }

  var _proto = Facebook.prototype;

  _proto.getAppId = function getAppId() {
    return this.options.appId;
  };

  _proto.init =
  /*#__PURE__*/
  function () {
    var _init = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee() {
      var _this = this;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!this.loadingPromise) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return", this.loadingPromise);

            case 2:
              this.loadingPromise = new Promise(function (resolve) {
                var _this$options = _this.options,
                    domain = _this$options.domain,
                    language = _this$options.language,
                    debug = _this$options.debug,
                    restOptions = (0, _objectWithoutPropertiesLoose2.default)(_this$options, ["domain", "language", "debug"]);

                window.fbAsyncInit = function () {
                  window.FB.init({
                    appId: restOptions.appId,
                    version: restOptions.version,
                    cookie: restOptions.cookie,
                    status: restOptions.status,
                    xfbml: restOptions.xfbml,
                    frictionlessRequests: _this.frictionlessRequests
                  });
                  resolve(window.FB);
                };

                if (window.document.getElementById('facebook-jssdk')) {
                  return;
                }

                var js = window.document.createElement('script');
                js.id = 'facebook-jssdk';
                js.async = true;
                js.defer = true;
                js.src = "https://" + domain + "/" + language + "/sdk" + (debug ? '/debug' : '') + ".js";
                window.document.body.appendChild(js);
              });
              return _context.abrupt("return", this.loadingPromise);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function init() {
      return _init.apply(this, arguments);
    }

    return init;
  }();

  _proto.process =
  /*#__PURE__*/
  function () {
    var _process = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee2(method, before, after) {
      var fb;
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (before === void 0) {
                before = [];
              }

              if (after === void 0) {
                after = [];
              }

              _context2.next = 4;
              return this.init();

            case 4:
              fb = _context2.sent;
              return _context2.abrupt("return", new Promise(function (resolve, reject) {
                fb[method].apply(fb, before.concat([function (response) {
                  if (!response) {
                    reject(new Error('Response is undefined'));
                  } else if (response.error) {
                    var _response$error = response.error,
                        code = _response$error.code,
                        type = _response$error.type,
                        message = _response$error.message;
                    var error = new Error(message);
                    error.code = code;
                    error.type = type;
                    reject(error);
                  } else {
                    resolve(response);
                  }
                }], after));
              }));

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function process(_x, _x2, _x3) {
      return _process.apply(this, arguments);
    }

    return process;
  }();

  _proto.ui =
  /*#__PURE__*/
  function () {
    var _ui = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee3(options) {
      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              return _context3.abrupt("return", this.process('ui', [options]));

            case 1:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function ui(_x4) {
      return _ui.apply(this, arguments);
    }

    return ui;
  }();

  _proto.api =
  /*#__PURE__*/
  function () {
    var _api = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee4(path, method, params) {
      return _regenerator.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              if (method === void 0) {
                method = Method.GET;
              }

              if (params === void 0) {
                params = {};
              }

              return _context4.abrupt("return", this.process('api', [path, method, params]));

            case 3:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function api(_x5, _x6, _x7) {
      return _api.apply(this, arguments);
    }

    return api;
  }();

  _proto.login =
  /*#__PURE__*/
  function () {
    var _login = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee5(opts) {
      return _regenerator.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              if (opts === void 0) {
                opts = null;
              }

              return _context5.abrupt("return", this.process('login', [], [opts]));

            case 2:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));

    function login(_x8) {
      return _login.apply(this, arguments);
    }

    return login;
  }();

  _proto.logout =
  /*#__PURE__*/
  function () {
    var _logout = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee6() {
      return _regenerator.default.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              return _context6.abrupt("return", this.process('logout'));

            case 1:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, this);
    }));

    function logout() {
      return _logout.apply(this, arguments);
    }

    return logout;
  }();

  _proto.getLoginStatus =
  /*#__PURE__*/
  function () {
    var _getLoginStatus = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee7() {
      return _regenerator.default.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              return _context7.abrupt("return", this.process('getLoginStatus'));

            case 1:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, this);
    }));

    function getLoginStatus() {
      return _getLoginStatus.apply(this, arguments);
    }

    return getLoginStatus;
  }();

  _proto.getAuthResponse =
  /*#__PURE__*/
  function () {
    var _getAuthResponse = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee8() {
      return _regenerator.default.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              return _context8.abrupt("return", this.process('getAuthResponse'));

            case 1:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8, this);
    }));

    function getAuthResponse() {
      return _getAuthResponse.apply(this, arguments);
    }

    return getAuthResponse;
  }();

  _proto.getTokenDetail =
  /*#__PURE__*/
  function () {
    var _getTokenDetail = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee9(loginResponse) {
      var response;
      return _regenerator.default.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              if (!(loginResponse.status === _LoginStatus.default.CONNECTED && loginResponse.authResponse)) {
                _context9.next = 2;
                break;
              }

              return _context9.abrupt("return", loginResponse.authResponse);

            case 2:
              _context9.next = 4;
              return this.getLoginStatus();

            case 4:
              response = _context9.sent;

              if (!(response.status === _LoginStatus.default.CONNECTED && response.authResponse)) {
                _context9.next = 7;
                break;
              }

              return _context9.abrupt("return", response.authResponse);

            case 7:
              throw new Error('Token is undefined');

            case 8:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9, this);
    }));

    function getTokenDetail(_x9) {
      return _getTokenDetail.apply(this, arguments);
    }

    return getTokenDetail;
  }();

  _proto.getProfile =
  /*#__PURE__*/
  function () {
    var _getProfile = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee10(params) {
      return _regenerator.default.wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              return _context10.abrupt("return", this.api('/me', Method.GET, params));

            case 1:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10, this);
    }));

    function getProfile(_x10) {
      return _getProfile.apply(this, arguments);
    }

    return getProfile;
  }();

  _proto.getTokenDetailWithProfile =
  /*#__PURE__*/
  function () {
    var _getTokenDetailWithProfile = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee11(params, response) {
      var tokenDetail, profile;
      return _regenerator.default.wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              _context11.next = 2;
              return this.getTokenDetail(response);

            case 2:
              tokenDetail = _context11.sent;
              _context11.next = 5;
              return this.getProfile(params);

            case 5:
              profile = _context11.sent;
              return _context11.abrupt("return", {
                profile: profile,
                tokenDetail: tokenDetail
              });

            case 7:
            case "end":
              return _context11.stop();
          }
        }
      }, _callee11, this);
    }));

    function getTokenDetailWithProfile(_x11, _x12) {
      return _getTokenDetailWithProfile.apply(this, arguments);
    }

    return getTokenDetailWithProfile;
  }();

  _proto.getToken =
  /*#__PURE__*/
  function () {
    var _getToken = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee12() {
      var authResponse;
      return _regenerator.default.wrap(function _callee12$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              _context12.next = 2;
              return this.getTokenDetail();

            case 2:
              authResponse = _context12.sent;
              return _context12.abrupt("return", authResponse.accessToken);

            case 4:
            case "end":
              return _context12.stop();
          }
        }
      }, _callee12, this);
    }));

    function getToken() {
      return _getToken.apply(this, arguments);
    }

    return getToken;
  }();

  _proto.getUserId =
  /*#__PURE__*/
  function () {
    var _getUserId = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee13() {
      var authResponse;
      return _regenerator.default.wrap(function _callee13$(_context13) {
        while (1) {
          switch (_context13.prev = _context13.next) {
            case 0:
              _context13.next = 2;
              return this.getTokenDetail();

            case 2:
              authResponse = _context13.sent;
              return _context13.abrupt("return", authResponse.userID);

            case 4:
            case "end":
              return _context13.stop();
          }
        }
      }, _callee13, this);
    }));

    function getUserId() {
      return _getUserId.apply(this, arguments);
    }

    return getUserId;
  }();

  _proto.sendInvite =
  /*#__PURE__*/
  function () {
    var _sendInvite = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee14(to, options) {
      return _regenerator.default.wrap(function _callee14$(_context14) {
        while (1) {
          switch (_context14.prev = _context14.next) {
            case 0:
              return _context14.abrupt("return", this.ui((0, _extends2.default)({
                to: to,
                method: 'apprequests'
              }, options)));

            case 1:
            case "end":
              return _context14.stop();
          }
        }
      }, _callee14, this);
    }));

    function sendInvite(_x13, _x14) {
      return _sendInvite.apply(this, arguments);
    }

    return sendInvite;
  }();

  _proto.postAction =
  /*#__PURE__*/
  function () {
    var _postAction = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee15(ogNamespace, ogAction, ogObject, ogObjectUrl, noFeedStory) {
      var url;
      return _regenerator.default.wrap(function _callee15$(_context15) {
        while (1) {
          switch (_context15.prev = _context15.next) {
            case 0:
              url = "/me/" + ogNamespace + ":" + ogAction + "?" + ogObject + "=" + encodeURIComponent(ogObjectUrl);

              if (noFeedStory === true) {
                url += '&no_feed_story=true';
              }

              return _context15.abrupt("return", this.api(url, Method.POST));

            case 3:
            case "end":
              return _context15.stop();
          }
        }
      }, _callee15, this);
    }));

    function postAction(_x15, _x16, _x17, _x18, _x19) {
      return _postAction.apply(this, arguments);
    }

    return postAction;
  }();

  _proto.getPermissions =
  /*#__PURE__*/
  function () {
    var _getPermissions = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee16() {
      var response;
      return _regenerator.default.wrap(function _callee16$(_context16) {
        while (1) {
          switch (_context16.prev = _context16.next) {
            case 0:
              _context16.next = 2;
              return this.api('/me/permissions');

            case 2:
              response = _context16.sent;
              return _context16.abrupt("return", response.data);

            case 4:
            case "end":
              return _context16.stop();
          }
        }
      }, _callee16, this);
    }));

    function getPermissions() {
      return _getPermissions.apply(this, arguments);
    }

    return getPermissions;
  }();

  _proto.hasPermissions =
  /*#__PURE__*/
  function () {
    var _hasPermissions = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee17(permissions) {
      var usersPermissions, findedPermissions;
      return _regenerator.default.wrap(function _callee17$(_context17) {
        while (1) {
          switch (_context17.prev = _context17.next) {
            case 0:
              _context17.next = 2;
              return this.getPermissions();

            case 2:
              usersPermissions = _context17.sent;
              findedPermissions = permissions.filter(function (p) {
                var currentPermission = usersPermissions.find(function (row) {
                  var permission = row.permission,
                      status = row.status;
                  return status === 'granted' && permission === p;
                });
                return !!currentPermission;
              });
              return _context17.abrupt("return", findedPermissions.length === permissions.length);

            case 5:
            case "end":
              return _context17.stop();
          }
        }
      }, _callee17, this);
    }));

    function hasPermissions(_x20) {
      return _hasPermissions.apply(this, arguments);
    }

    return hasPermissions;
  }();

  _proto.subscribe =
  /*#__PURE__*/
  function () {
    var _subscribe = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee18(eventName, callback) {
      var fb;
      return _regenerator.default.wrap(function _callee18$(_context18) {
        while (1) {
          switch (_context18.prev = _context18.next) {
            case 0:
              _context18.next = 2;
              return this.init();

            case 2:
              fb = _context18.sent;
              fb.Event.subscribe(eventName, callback);

            case 4:
            case "end":
              return _context18.stop();
          }
        }
      }, _callee18, this);
    }));

    function subscribe(_x21, _x22) {
      return _subscribe.apply(this, arguments);
    }

    return subscribe;
  }();

  _proto.unsubscribe =
  /*#__PURE__*/
  function () {
    var _unsubscribe = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee19(eventName, callback) {
      var fb;
      return _regenerator.default.wrap(function _callee19$(_context19) {
        while (1) {
          switch (_context19.prev = _context19.next) {
            case 0:
              _context19.next = 2;
              return this.init();

            case 2:
              fb = _context19.sent;
              fb.Event.unsubscribe(eventName, callback);

            case 4:
            case "end":
              return _context19.stop();
          }
        }
      }, _callee19, this);
    }));

    function unsubscribe(_x23, _x24) {
      return _unsubscribe.apply(this, arguments);
    }

    return unsubscribe;
  }();

  _proto.parse =
  /*#__PURE__*/
  function () {
    var _parse = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee20(parentNode) {
      var fb;
      return _regenerator.default.wrap(function _callee20$(_context20) {
        while (1) {
          switch (_context20.prev = _context20.next) {
            case 0:
              _context20.next = 2;
              return this.init();

            case 2:
              fb = _context20.sent;

              if (typeof parentNode === 'undefined') {
                fb.XFBML.parse();
              } else {
                fb.XFBML.parse(parentNode);
              }

            case 4:
            case "end":
              return _context20.stop();
          }
        }
      }, _callee20, this);
    }));

    function parse(_x25) {
      return _parse.apply(this, arguments);
    }

    return parse;
  }();

  _proto.getRequests =
  /*#__PURE__*/
  function () {
    var _getRequests = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee21() {
      return _regenerator.default.wrap(function _callee21$(_context21) {
        while (1) {
          switch (_context21.prev = _context21.next) {
            case 0:
              return _context21.abrupt("return", this.api('/me/apprequests'));

            case 1:
            case "end":
              return _context21.stop();
          }
        }
      }, _callee21, this);
    }));

    function getRequests() {
      return _getRequests.apply(this, arguments);
    }

    return getRequests;
  }();

  _proto.removeRequest =
  /*#__PURE__*/
  function () {
    var _removeRequest = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee22(requestID) {
      return _regenerator.default.wrap(function _callee22$(_context22) {
        while (1) {
          switch (_context22.prev = _context22.next) {
            case 0:
              return _context22.abrupt("return", this.api(requestID, Method.DELETE));

            case 1:
            case "end":
              return _context22.stop();
          }
        }
      }, _callee22, this);
    }));

    function removeRequest(_x26) {
      return _removeRequest.apply(this, arguments);
    }

    return removeRequest;
  }();

  _proto.setAutoGrow =
  /*#__PURE__*/
  function () {
    var _setAutoGrow = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee23() {
      var fb;
      return _regenerator.default.wrap(function _callee23$(_context23) {
        while (1) {
          switch (_context23.prev = _context23.next) {
            case 0:
              _context23.next = 2;
              return this.init();

            case 2:
              fb = _context23.sent;
              fb.Canvas.setAutoGrow();

            case 4:
            case "end":
              return _context23.stop();
          }
        }
      }, _callee23, this);
    }));

    function setAutoGrow() {
      return _setAutoGrow.apply(this, arguments);
    }

    return setAutoGrow;
  }();

  _proto.paySimple =
  /*#__PURE__*/
  function () {
    var _paySimple = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee24(product, quantity) {
      return _regenerator.default.wrap(function _callee24$(_context24) {
        while (1) {
          switch (_context24.prev = _context24.next) {
            case 0:
              if (quantity === void 0) {
                quantity = 1;
              }

              return _context24.abrupt("return", this.ui({
                method: 'pay',
                action: 'purchaseitem',
                product: product,
                quantity: quantity
              }));

            case 2:
            case "end":
              return _context24.stop();
          }
        }
      }, _callee24, this);
    }));

    function paySimple(_x27, _x28) {
      return _paySimple.apply(this, arguments);
    }

    return paySimple;
  }();

  _proto.pay =
  /*#__PURE__*/
  function () {
    var _pay = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee25(product, options) {
      return _regenerator.default.wrap(function _callee25$(_context25) {
        while (1) {
          switch (_context25.prev = _context25.next) {
            case 0:
              return _context25.abrupt("return", this.ui((0, _extends2.default)({
                method: 'pay',
                action: 'purchaseitem',
                product: product
              }, options)));

            case 1:
            case "end":
              return _context25.stop();
          }
        }
      }, _callee25, this);
    }));

    function pay(_x29, _x30) {
      return _pay.apply(this, arguments);
    }

    return pay;
  }();

  return Facebook;
}();
/*
  sendToFriends: function(options, callback) {
    if(!options) {
      options = {};
    }

    options.method = 'send';

    this.afterLoad(function(err, fbApi) {
      if(err) {
        return callback(err);
      }

      FB.ui(options, function(response) {
        fbApi._callCallbackByResponse(callback, response);
      });
    });
  },

  sendMessage: function(message, name, caption, description, url, imgUrl, callback) {
    this.afterLoad(function(err, fbApi) {
      if(err) {
        return callback(err);
      }

      FB.ui({
        method: 'stream.publish',
        message: message,
        attachment: {
          name: name,
          caption: caption,
          description: description,
          href: url,
          media:[{
            type: 'image',
            src:  imgUrl,
            href: url
          }]
        },
        action_links: [{
          text: 'Code',
          href: url
        }],
        user_prompt_message: message
      },
      function(response) {
        fbApi._callCallbackByResponse(callback, response);
      });
    });
  },

  sendInviteForm: function(options, callback) {
    if(typeof options === 'function') {
      callback = options;
      options = {};
    }

    this.afterLoad(function(err, fbApi) {
      if(err) {
        return callback(err);
      }

      options.method = options.method || 'apprequests';


      FB.ui(options, function(response) {
        fbApi._callCallbackByResponse(callback, response);
      });
    });
  },

  checkPageLike: function(pageID, callback) {
    this.afterLoad(function(err, fbApi) {
      if(err) {
        return callback(err);
      }

      fbApi.getUserID(function(err, userID) {
        if(err) {
          return callback(err);
        }

        var fqlQuery = `SELECT uid FROM page_fan WHERE page_id = ${pageID} and uid = ${userID}`;
        var query = FB.Data.query(fqlQuery);

        query.wait(function(rows) {
          if (rows.length === 1 && rows[0].uid === userID) {
            callback(null, true, query);
          }
          else {
            callback(null, false, query);
          }
        });
      });
    });
  },

  sendMessageToFriend: function (friendID, link, callback) {
    this.afterLoad(function(err, fbApi) {
      if(err) {
        return callback(err);
      }

      FB.ui({
        to: friendID,
        method: 'send',
        link: link
      }, function(response) {
        fbApi._callCallbackByResponse(callback, response);
      });
    });
  },

  _prepareUsers: function(data) {
    var users=[];

    for(var index in data) {
      var userData=data[index];

      var user = {
        provider_uid: 'facebook'+'_'+userData.uid,
        provider: 'facebook',
        id: userData.uid,
        name: userData.name,
        first_name: userData.first_name,
        last_name: userData.last_name,
        status: (userData.status!==null) ? userData.status : null,
        image: '//graph.facebook.com/'+userData.uid+'/picture?'
      };

      users.push(user);
    }

    return users;
  },

  getUserList: function(callback) {
    this.afterLoad(function(err, fbApi) {
      if(err) {
        return callback(err);
      }

      FB.api('fql', {
        q: `
          SELECT uid, name, first_name, last_name, online_presence, status
          FROM user
          WHERE uid IN
            ( SELECT uid2 FROM friend WHERE uid1 = me()) ORDER BY name
        `,
      }, function (response)
      {
        var users = fbApi._prepareUsers(response.data);
        callback(null, users, response);
      });
    });
  },

  postFeed: function(options, callback) {
    this.afterLoad(function(err, fbApi) {
      if(err) {
        return callback(err);
      }

      options.method='feed';

      FB.ui(options, function(response) {
        fbApi._callCallbackByResponse(callback, response);
      });
    });
  },

  //need publish_stream
  createAlbum: function(name, description, callback) {
    this.afterLoad(function(err, fbApi) {
      if(err) {
        return callback(err);
      }

      FB.api('/me/albums', 'post', {
        name: name,
        description: description
      },function(response) {
        fbApi._callCallbackByResponse(callback, response);
      });
    });
  },

  //need publish_stream
  addImageToAlbum: function(albumID, imageURL, message, callback) {
    this.afterLoad(function(err, fbApi) {
      if(err) {
        return callback(err);
      }

      FB.api('/'+albumID+'/photos', 'post', {
        message: message,
        url: imageURL
      }, function(response) {
        fbApi._callCallbackByResponse(callback, response);
      });
    });
  },

  //'user_photos'
  getAlbums: function(callback) {
    this.afterLoad(function(err, fbApi) {
      if(err) {
        return callback(err);
      }

      FB.api('/me/albums', function(response) {
        fbApi._callCallbackByResponse(callback, response);
      });
    });
  },

  //'user_photos'
  getAlbumPhotos: function(albumID, callback) {
    this.afterLoad(function(err, fbApi) {
      if(err) {
        return callback(err);
      }

      FB.api('/'+albumID+'/photos', function(response) {
        fbApi._callCallbackByResponse(callback, response);
      });
    });
  },

  //'user_photos'
  getAlbumCoverPicture: function(albumID, callback) {
    this.afterLoad(function(err, fbApi) {
      if(err) {
        return callback(err);
      }

      FB.api('/'+albumID+'/picture', function(response) {
        fbApi._callCallbackByResponse(callback, response);
      });
    });
  },

  //'publish_stream'
  postPhoto: function(photoUrl, message, callback) {
    this.afterLoad(function(err, fbApi) {
      if(err) {
        return callback(err);
      }

      FB.api('/me/photos', 'post', {
        message: message,
        url: photoUrl
      },function(response) {
        fbApi._callCallbackByResponse(callback, response);
      });
    });
  },

  getPageInfo: function(callback) {
    this.afterLoad(function(err, fbApi) {
      if(err) {
        return callback(err);
      }

      FB.Canvas.getPageInfo(function(response) {
        fbApi._callCallbackByResponse(callback, response);
      });
    });
  }
*/


exports.default = Facebook;
//# sourceMappingURL=Facebook.js.map