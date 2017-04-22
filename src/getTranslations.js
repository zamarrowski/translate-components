import fs from 'fs'

const openTag = '<Translate>'
const closeTag = '</Translate>'

export default (file, output, languages) => {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) console.log(err)
    let regexp = /<Translate>.[^<>]*<\/Translate>/g
    let results = data.match(regexp)
    let texts = getTexts(results, languages)
    const template = `export default ${JSON.stringify(texts, null, 2)}`
    fs.writeFile(output, template, err => {
      if (err) console.log(err)
      console.log('Translations file created!')
    })
  })
}

function getTexts(results, languages) {
  let texts = {}
  results.map(result => {
    let openTagPosition = result.indexOf(openTag)
    let closeTagPosition = result.indexOf(closeTag)
    let text = result.substr(openTagPosition + openTag.length, closeTagPosition - (closeTag.length - 1))
    texts[text] = addLanguages(text, languages)
  })
  return texts
}

function addLanguages(text, languages) {
  if (languages && languages.length) {
    let object = {}
    languages.map(language => {
      object[language] = ""
    })
    return object
  } else {
    return {}
  }
}
