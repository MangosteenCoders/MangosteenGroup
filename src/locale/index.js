import { MANGOSTEEN_LANGUAGE } from '../tools/constants'
import { en } from './En'
import { ru } from './Ru'
import { uz } from './Uz'

export const getLanguage = () => {
  return localStorage.getItem(MANGOSTEEN_LANGUAGE)
}

export const getText = word => {
  return getLanguage() === 'en' ? en[word] : getLanguage() === 'uz' ? uz[word] : ru[word]
}