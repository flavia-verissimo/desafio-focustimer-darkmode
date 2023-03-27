export default function Controls({
  body,
  buttonThemeLight,
  buttonThemeDark,
  buttonPlay,
  buttonPause,
  cardForest,
  cardRain,
  cardCoffeeShop,
  cardFlames
}) {
  function changeTheme() {
    buttonThemeLight.classList.toggle('hide')
    buttonThemeDark.classList.toggle('hide')
    body.classList.toggle('dark')
  }

  function play() {
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
  }

  function pause() {
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
  }

  function reset() {
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
  }

  function soundForest() {
    cardForest.classList.toggle('active')
  }

  function soundRain() {
    cardRain.classList.toggle('active')
  }

  function soundCoffeeShop() {
    cardCoffeeShop.classList.toggle('active')
  }

  function soundFlames() {
    cardFlames.classList.toggle('active')
  }

  return {
    changeTheme,
    play,
    pause,
    reset,
    soundForest,
    soundRain,
    soundCoffeeShop,
    soundFlames
  }
}