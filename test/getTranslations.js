import test from 'ava'
import { getTexts, addLanguages } from './../lib/getTranslations'

test('addLanguages(): should return a empty objets if languages is a empty array', t => {
  let languages = []
  let result = addLanguages(languages)
  t.deepEqual({}, result)
})

test('addLanguages(): should return a objet with two properties', t => {
  let languages = ['es', 'en']
  let result = addLanguages(languages)
  t.is(Object.keys(result).length, 2)
})

test('addLanguages(): should return a object with "es" and "de" properties', t => {
  let languages = ['de', 'es']
  let result = addLanguages(languages)
  t.deepEqual({ es: "", "de": "" }, result)
})

test('getTexts(): should return a empty object if texts array is empty', t => {
  let texts = []
  let result = getTexts(texts, [])
  t.deepEqual(result, {})
})

test('getTexts(): should return a object with two properties', t => {
  let texts = [
    '<Translate>Jack Sparrow is the best!</Translate>',
    '<Translate>Where is my compass?</Translate>'
  ]
  let languages = ['es', 'en']
  let result = getTexts(texts, languages)
  t.is(Object.keys(result).length, 2)
})

test('getTexts(): should return a object with translations', t => {
  let texts = [
    '<Translate>Jack Sparrow is the best!</Translate>',
    '<Translate>Where is my compass?</Translate>'
  ]
  let result = getTexts(texts, [])
  t.deepEqual({
    'Jack Sparrow is the best!': {},
    'Where is my compass?': {}
  }, result)
})
