'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TranslateProvider = function (_Component) {
  _inherits(TranslateProvider, _Component);

  function TranslateProvider() {
    _classCallCheck(this, TranslateProvider);

    return _possibleConstructorReturn(this, (TranslateProvider.__proto__ || Object.getPrototypeOf(TranslateProvider)).apply(this, arguments));
  }

  _createClass(TranslateProvider, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        this.props.children
      );
    }
  }, {
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        translations: JSON.stringify(this.props.translations),
        defaultLanguage: this.props.defaultLanguage,
        debugMode: this.props.debugMode
      };
    }
  }]);

  return TranslateProvider;
}(_react.Component);

TranslateProvider.childContextTypes = {
  translations: _propTypes2.default.string,
  defaultLanguage: _propTypes2.default.string,
  debugMode: _propTypes2.default.bool
};

TranslateProvider.propTypes = {
  translations: _propTypes2.default.any,
  defaultLanguage: _propTypes2.default.string,
  debugMode: _propTypes2.default.bool,
  children: _propTypes2.default.node
};

exports.default = TranslateProvider;
module.exports = exports['default'];
//# sourceMappingURL=TranslateProvider.js.map