'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var openTag = '<Translate>';
var closeTag = '</Translate>';

exports.default = function (file, output, languages) {
  _fs2.default.readFile(file, 'utf8', function (err, data) {
    if (err) console.log(err);
    var regexp = /<Translate>.[^<>]*<\/Translate>/g;
    var results = data.match(regexp);
    var texts = getTexts(results, languages);
    if (_fs2.default.existsSync(output)) {
      _fs2.default.readFile(output, 'utf8', function (err, data) {
        var translationsFile = JSON.parse(data);
        var newKeysText = Object.keys(texts);
        newKeysText.map(function (key) {
          if (!translationsFile[key]) {
            translationsFile[key] = texts[key];
          }
        });
        var template = JSON.stringify(translationsFile, null, 2);
        _fs2.default.writeFile(output, template, function (err) {
          if (err) console.log(err);
          console.log('New translations added to translation file!');
        });
      });
    } else {
      var template = JSON.stringify(texts, null, 2);
      _fs2.default.writeFile(output, template, function (err) {
        if (err) console.log(err);
        console.log('Translations file created!');
      });
    }
  });
};

function getTexts(results, languages) {
  var texts = {};
  results.map(function (result) {
    var openTagPosition = result.indexOf(openTag);
    var closeTagPosition = result.indexOf(closeTag);
    var text = result.substr(openTagPosition + openTag.length, closeTagPosition - (closeTag.length - 1));
    texts[text] = addLanguages(text, languages);
  });
  return texts;
}

function addLanguages(text, languages) {
  if (languages && languages.length) {
    var object = {};
    languages.map(function (language) {
      object[language] = "";
    });
    return object;
  } else {
    return {};
  }
}
module.exports = exports['default'];
//# sourceMappingURL=getTranslations.js.map