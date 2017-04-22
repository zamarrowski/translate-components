import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TranslateProvider extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
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
