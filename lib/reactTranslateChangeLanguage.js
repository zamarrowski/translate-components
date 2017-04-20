'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (language) {
  var reactTranslateChangeLanguage = new CustomEvent('reactTranslateChangeLanguage', { detail: language });
  window.dispatchEvent(reactTranslateChangeLanguage);
};

module.exports = exports['default'];
//# sourceMappingURL=reactTranslateChangeLanguage.js.map