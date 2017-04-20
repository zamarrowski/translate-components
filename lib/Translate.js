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

var Translate = function (_Component) {
  _inherits(Translate, _Component);

  function Translate(props, context) {
    _classCallCheck(this, Translate);

    var _this = _possibleConstructorReturn(this, (Translate.__proto__ || Object.getPrototypeOf(Translate)).call(this));

    _this.translations = JSON.parse(context.translations);
    _this.defaultLanguage = context.defaultLanguage;
    _this.state = {
      language: _this.defaultLanguage
    };
    return _this;
  }

  _createClass(Translate, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('reactTranslateChangeLanguage', this._changeLanguage.bind(this));
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'span',
        null,
        this._getText(this.props.children)
      );
    }
  }, {
    key: '_getText',
    value: function _getText(text) {
      if (this.state.language != this.defaultLanguage && text) {
        if (this.translations[text] && this.translations[text][this.state.language]) {
          return this.translations[text][this.state.language];
        } else {
          return text;
        }
      } else {
        return text;
      }
    }
  }, {
    key: '_changeLanguage',
    value: function _changeLanguage(event) {
      this.setState({ language: event.detail });
    }
  }]);

  return Translate;
}(_react.Component);

Translate.contextTypes = {
  translations: _propTypes2.default.string,
  defaultLanguage: _propTypes2.default.string
};

exports.default = Translate;
module.exports = exports['default'];
//# sourceMappingURL=Translate.js.map