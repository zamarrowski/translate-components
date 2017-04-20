import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Translate extends Component {
  constructor(props, context) {
    super()
    this.translations = JSON.parse(context.translations)
    this.defaultLanguage = context.defaultLanguage
    this.state = {
      language: this.defaultLanguage
    }
  }

  componentDidMount() {
    window.addEventListener('reactTranslateChangeLanguage', this._changeLanguage.bind(this))
  }

  render() {
    return (
      <span>{this._getText(this.props.children)}</span>
    )
  }

  _getText(text) {
    if (this.state.language != this.defaultLanguage) {
      return this.translations[text][this.state.language]
    } else {
      return text
    }
  }

  _changeLanguage(event) {
    this.setState({ language: event.detail })
  }

}

Translate.contextTypes = {
  translations: PropTypes.string,
  defaultLanguage: PropTypes.string
}

export default Translate
