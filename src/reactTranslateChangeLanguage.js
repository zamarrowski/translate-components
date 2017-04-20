export default language => {
  let reactTranslateChangeLanguage = new CustomEvent('reactTranslateChangeLanguage', { detail: language })
  window.dispatchEvent(reactTranslateChangeLanguage)
}
