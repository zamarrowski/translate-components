# translate-components 
translate-component provides a super simple translation for React. Write your application in your language and use translate-component to annotate which texts should be translated.

# Features
* Write in your language.
* Instant translations without having to refresh your browser.
* Easy to use.
* Support for create-react-app.

# Install
```
npm install --save translate-component
```
# How to use
```
//index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { TranslateProvider } from 'translate-component'
import './index.css';
import translations from './translations'

ReactDOM.render(
  <TranslateProvider translations={translations} defaultLanguage={'en'}>
    <App />
  </TranslateProvider>,
  document.getElementById('root')
);
```
Wrap your application with TranslateProvider, pass the translations and the default language of your application.

```
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Translate from 'translate-component'
import { reactTranslateChangeLanguage } from 'translate-components'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2><Translate>Welcome to React</Translate></h2>
        </div>
        <p className="App-intro">
          <Translate>To get started, edit</Translate> <code>src/App.js</code> <Translate>and save to reload.</Translate>
        </p>
        <div>
          <button onClick={reactTranslateChangeLanguage.bind(this, 'en')}>
            English
          </button>
          <button onClick={reactTranslateChangeLanguage.bind(this, 'es')}>
            Spanish
          </button>
          <button onClick={reactTranslateChangeLanguage.bind(this, 'de')}>
            Germany
          </button>
        </div>
      </div>
    );
  }
}

export default App;
```

Use ```Translate``` component to wrap the text you want to translate. 
Use ```reactTranslateChangeLanguage``` to change the language of your application. Pass to ```reactTranslateChangeLanguage``` function, as first argument, the language. This translate instantly your application!

Of course, you need to have a translation file to pass it to TranslateProvider like this:
```
export default {
  "Welcome to React": {
    "es": "Bienvenido a React",
    "de": "Willkommen in React"
  },
  "To get started, edit": {
    "es": "Para empezar, edita",
    "de": "Um loszulegen, bearbeiten"
  },
  "and save to reload.": {
    "es": "y guarda para refrescar la pagina",
    "de": "und speichern neu zu laden."
  }
}
```
