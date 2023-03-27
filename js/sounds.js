import {
  cardForest,
  cardRain,
  cardCoffeeShop,
  cardFlames,
  inputForestVolume,
  inputRainVolume,
  inputCoffeeShopVolume,
  inputFlamesVolume
} from "./elements.js"

export default function() {
  const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
  const bgAudioForest = new Audio("../sons/forest.wav")
  const bgAudioRain = new Audio("../sons/rain.wav")
  const bgAudioCoffeeShop = new Audio("../sons/coffee-shop.wav")
  const bgAudioFlames = new Audio("../sons/flames.wav")

  bgAudioForest.loop = true
  bgAudioRain.loop = true
  bgAudioCoffeeShop.loop = true
  bgAudioFlames.loop = true

  function pressButton() {
    buttonPressAudio.play()
  }

  function timeEnd() {
    kitchenTimer.play()
  }

  function audioForest() {
    cardForest.classList.contains('active')
    ? bgAudioForest.play()
    :bgAudioForest.pause()
  }

  function audioRain() {
    cardRain.classList.contains('active')
    ? bgAudioRain.play()
    : bgAudioRain.pause()
  }

  function audioCoffeeShop() {
    cardCoffeeShop.classList.contains('active')
    ? bgAudioCoffeeShop.play()
    : bgAudioCoffeeShop.pause()
  }

  function audioFlames() {
    cardFlames.classList.contains('active')
    ? bgAudioFlames.play()
    : bgAudioFlames.pause()
  }

  function setAudioVolume() {
    bgAudioForest.volume = inputForestVolume.ariaValue
    bgAudioRain.volume = inputRainVolume.value
    bgAudioCoffeeShop.volume = inputCoffeeShopVolume.value
    bgAudioFlames.volume = inputFlamesVolume.value
  }

  function resetForestVolume() {
    inputForestVolume.value = 0.5
  }

  function resetRainVolume() {
    inputForestVolume.value = 0.5
  }

  function resetCoffeeShopVolume() {
    inputCoffeeShopVolume.value = 0.5
  }

  function resetFlamesVolume() {
    inputFlamesVolume.value = 0.5
  }

  return {
    pressButton,
    timeEnd,
    audioForest,
    audioRain,
    audioCoffeeShop,
    audioFlames,
    setAudioVolume,
    resetForestVolume,
    resetRainVolume,
    resetCoffeeShopVolume,
    resetFlamesVolume
}
}