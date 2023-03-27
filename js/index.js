import Controls from "./controls.js"
import Timer from "./timer.js"
import Sound from "./sounds.js"
import Events from "./events.js"
import {
  body,
  buttonThemeLight,
  buttonThemeDark,
  buttonPlay,
  buttonPause,
  buttonStop,
  cardForest,
  cardRain,
  cardCoffeeShop,
  cardFlames,
  buttonSoundForest,
  buttonSoundRain,
  buttonSoundCoffeeShop,
  buttonSoundFlames,
  minutesDisplay,
  secondsDisplay
} from "./elements.js"

const controls = Controls({
  body,
  buttonThemeLight,
  buttonThemeDark,
  buttonPlay,
  buttonPause,
  buttonStop,
  cardForest,
  cardRain,
  cardCoffeeShop,
  cardFlames,
  buttonSoundForest,
  buttonSoundRain,
  buttonSoundCoffeeShop,
  buttonSoundFlames
})

const timer = Timer ({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset
})

const sound = Sound({})

Events({controls, timer, sound})