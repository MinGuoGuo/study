'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _webpackHotMiddleware = require('webpack-hot-middleware');

var _webpackHotMiddleware2 = _interopRequireDefault(_webpackHotMiddleware);

var _webpack = require('atool-build/lib/webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _path = require('path');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _middleware = null;

exports.default = {
  'middleware': function middleware() {
    var compiler = this.get('compiler');
    if (!compiler) {
      throw new Error('[error] must used together with dora-plugin-webpack');
    }

    return regeneratorRuntime.mark(function _callee(next) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!_middleware) {
                _middleware = (0, _webpackHotMiddleware2.default)(compiler);
              }
              _context.next = 3;
              return _middleware.bind(null, this.req, this.res);

            case 3:
              _context.next = 5;
              return next;

            case 5:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    });
  },
  'webpack.updateConfig.finally': function webpackUpdateConfigFinally(webpackConfig) {
    var port = this.port;

    var hotEntry = 'webpack-hot-middleware/client?path=http://127.0.0.1:' + port + '/__webpack_hmr';
    // 修改 entry, 加上 webpack-hot-middleware/client
    webpackConfig.entry = Object.keys(webpackConfig.entry).reduce(function (memo, key) {
      memo[key] = [hotEntry].concat(webpackConfig.entry[key]);
      return memo;
    }, {});

    // 修改 babel-loader 参数
    if (webpackConfig.babel) {
      webpackConfig.babel.presets.push(require.resolve('babel-preset-react-hmre'));
    }

    // Hot reload plugin
    webpackConfig.plugins.push(new _webpack2.default.HotModuleReplacementPlugin());

    // Fallback resolve path for npm2
    webpackConfig.resolve.fallback = webpackConfig.resolve.fallback || [];
    webpackConfig.resolve.fallback.push((0, _path.join)(__dirname, '../node_modules'));

    return webpackConfig;
  }
};
module.exports = exports['default'];