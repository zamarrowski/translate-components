'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addNewTranslations = exports.createTranslationsFile = exports.addLanguages = exports.getTexts = undefined;

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _glob = require('glob');

var _glob2 = _interopRequireDefault(_glob);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var openTag = '<Translate>';
var closeTag = '</Translate>';

exports.default = function (regexp, output, languages) {
  (0, _glob2.default)(regexp, function (err, files) {
    if (err) console.log(err);
    files.map(function (file) {
      var data = _fs2.default.readFileSync(file, 'utf8');
      var regexp = /<Translate>.[^<>]*<\/Translate>/g;
      var results = data.match(regexp);
      if (results) {
        var texts = getTexts(results, languages);
        if (_fs2.default.existsSync(output)) {
          addNewTranslations(output, texts);
        } else {
          createTranslationsFile(output, texts);
        }
      }
    });
  });
};

var getTexts = exports.getTexts = function getTexts(results, languages) {
  var texts = {};
  results.map(function (result) {
    var openTagPosition = result.indexOf(openTag);
    var closeTagPosition = result.indexOf(closeTag);
    var text = result.substr(openTagPosition + openTag.length, closeTagPosition - (closeTag.length - 1));
    texts[text] = addLanguages(languages);
  });
  return texts;
};

var addLanguages = exports.addLanguages = function addLanguages(languages) {
  if (languages && languages.length) {
    var object = {};
    languages.map(function (language) {
      object[language] = "";
    });
    return object;
  } else {
    return {};
  }
};

var createTranslationsFile = exports.createTranslationsFile = function createTranslationsFile(output, texts) {
  var template = JSON.stringify(texts, null, 2);
  _fs2.default.writeFileSync(output, template);
  console.log('Translations file created!');
};

var addNewTranslations = exports.addNewTranslations = function addNewTranslations(output, texts) {
  var data = _fs2.default.readFileSync(output, 'utf8');
  var translationsFile = JSON.parse(data);
  var newKeysText = Object.keys(texts);
  newKeysText.map(function (key) {
    if (!translationsFile[key]) {
      translationsFile[key] = texts[key];
    }
  });
  var template = JSON.stringify(translationsFile, null, 2);
  _fs2.default.writeFileSync(output, template);
  console.log('New translations added to translation file!');
};
//# sourceMappingURL=getTranslations.js.map