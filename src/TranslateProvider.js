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
      defaultLanguage: this.props.defaultLanguage,
      debugMode: this.props.debugMode
    }
  }
}

TranslateProvider.childContextTypes = {
  translations: PropTypes.string,
  defaultLanguage: PropTypes.string,
  debugMode: PropTypes.bool
}

TranslateProvider.propTypes = {
  translations: PropTypes.any,
  defaultLanguage: PropTypes.string,
  debugMode: PropTypes.bool,
  children: PropTypes.node
};

export default TranslateProvider
