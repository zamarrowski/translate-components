import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Translate extends Component {
  constructor(props, context) {
    super()
    this.translations = JSON.parse(context.translations)
    this.defaultLanguage = context.defaultLanguage
    this.debugMode = context.debugMode
    this.useRawText = props.useRawText // useful to bind the text inside input placeholder, inside <option> elements, or when a <span> cannot be used
    this.state = {
      language: this.defaultLanguage
    }
  }

  componentDidMount() {
    window.addEventListener('reactTranslateChangeLanguage', this._changeLanguage.bind(this))
  }

  componentWillUnmount() {
    window.removeEventListener('reactTranslateChangeLanguage', this._changeLanguage.bind(this))
  }

  render() {
    return (
      this.useRawText
        ? this._getText(this.props.children)
        : <span style={this._getDebugModeStyles(this.props.children)}>{this._getText(this.props.children)}</span>
    )
  }

  _getText(text) {
    if (this.state.language !== this.defaultLanguage && text) {
      if (this.translations[text] && this.translations[text][this.state.language]) {
        return this.translations[text][this.state.language]
      } else {
        return text
      }
    } else if (this.translations[text] && this.translations[text][this.state.language]) {
      return this.translations[text][this.state.language]
    }
    else {
      return text
    }
  }

  _changeLanguage(event) {
    this.setState({ language: event.detail })
  }

  _getDebugModeStyles(text) {
    if (this.debugMode && text && (!this.translations[text] || (!this.translations[text][this.state.language] && this.state.language != this.defaultLanguage))) {
      return { backgroundColor: 'yellow' }
    }
    return {}
  }

}

Translate.contextTypes = {
  translations: PropTypes.string,
  defaultLanguage: PropTypes.string,
  debugMode: PropTypes.bool
}

Translate.propTypes = {
  translations: PropTypes.object,
  defaultLanguage: PropTypes.string,
  debugMode: PropTypes.bool,
  useRawText: PropTypes.bool,
  children: PropTypes.node
};

export default Translate
