import {
  buttonThemeLight,
  buttonThemeDark,
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonMore,
  buttonLess,
  buttonSoundForest,
  buttonSoundRain,
  buttonSoundCoffeeShop,
  buttonSoundFlames,
  inputForestVolume,
  inputRainVolume,
  inputCoffeeShopVolume,
  inputFlamesVolume
} from "./elements.js"

export default function ({controls, timer, sound}) {
  buttonThemeLight.addEventListener('click', function() {
    controls.changeTheme()
    sound.pressButton()
  }) 

  buttonThemeDark.addEventListener('click', function() {
    controls.changeTheme()
    sound.pressButton()
  })

  buttonPlay.addEventListener('click', function() {
    controls.play()
    timer.countdown()
    sound.pressButton()
  })

  buttonPause.addEventListener('click', function() {
    controls.pause()
    timer.hold()
    sound.pressButton()
  })

  buttonStop.addEventListener('click', function() {
    controls.reset()
    timer.reset()
    sound.pressButton()
  })

  buttonMore.addEventListener('click', function() {
    controls.reset()
    timer.more()
    sound.pressButton()
  })

  buttonLess.addEventListener('click', function() {
    controls.reset()
    timer.less()
    sound.pressButton()
  })

  buttonSoundForest.addEventListener('click', function() {
    controls.soundForest()
    sound.pressButton()
    sound.audioForest()
    sound.resetForestVolume()
  })

  buttonSoundRain.addEventListener('click', function() {
    controls.soundRain()
    sound.pressButton()
    sound.audioRain()
    sound.resetRainVolume()
  })

  buttonSoundCoffeeShop.addEventListener('click', function() {
    controls.soundCoffeeShop()
    sound.pressButton()
    sound.audioCoffeeShop()
    sound.resetCoffeeShopVolume()
  })

  buttonSoundFlames.addEventListener('click', function() {
    controls.soundFlames()
    sound.pressButton()
    sound.audioFlames()
    sound.resetFlamesVolume()
  })

  inputForestVolume.addEventListener('input', sound.setAudioVolume)
  inputRainVolume.addEventListener('input', sound.setAudioVolume)
  inputCoffeeShopVolume.addEventListener('input', sound.setAudioVolume)
  inputFlamesVolume.addEventListener('input', sound.setAudioVolume)
}