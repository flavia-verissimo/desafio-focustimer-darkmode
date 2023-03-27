const body = document.querySelector('body')
const buttonThemeLight = document.querySelector('.theme-light')
const buttonThemeDark = document.querySelector('.theme-dark')

const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonMore = document.querySelector('.more')
const buttonLess = document.querySelector('.less')

const cardForest = document.querySelector('.card-sound-forest')
const cardRain = document.querySelector('.card-sound-rain')
const cardCoffeeShop = document.querySelector('.card-sound-coffee-shop')
const cardFlames = document.querySelector('.card-sound-flames')

const buttonSoundForest = document.querySelector('.sound-forest')
const buttonSoundRain = document.querySelector('.sound-rain')
const buttonSoundCoffeeShop = document.querySelector('.sound-coffee-shop')
const buttonSoundFlames = document.querySelector('.sound-flames')

const inputForestVolume = document.querySelector('#forest-volume')
const inputRainVolume = document.querySelector('#rain-volume')
const inputCoffeeShopVolume = document.querySelector('#coffee-shop-volume')
const inputFlamesVolume = document.querySelector('#flames-volume')

const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

export {
  body,
  buttonThemeLight,
  buttonThemeDark,
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonMore,
  buttonLess,
  cardForest,
  cardRain,
  cardCoffeeShop,
  cardFlames,
  buttonSoundForest,
  buttonSoundRain,
  buttonSoundCoffeeShop,
  buttonSoundFlames,
  inputForestVolume,
  inputRainVolume,
  inputCoffeeShopVolume,
  inputFlamesVolume,
  minutesDisplay,
  secondsDisplay
}