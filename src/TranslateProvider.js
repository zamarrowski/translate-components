import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TranslateProvider extends Component {
  render() {
    return this.props.children
  }

  getChildContext() {
    return {
      translations: JSON.stringify(this.props.translations),
      defaultLanguage: this.props.defaultLanguage
    }
  }
}

TranslateProvider.childContextTypes = {
  translations: PropTypes.string,
  defaultLanguage: PropTypes.string
}

export default TranslateProvider
