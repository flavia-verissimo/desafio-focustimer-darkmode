import sounds from "./sounds.js"

export default function Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls
}) {
    let timerTimeOut
    let minutes = Number(minutesDisplay.textContent)

    function upadateDisplay(minutes, seconds) {
      minutesDisplay.textContent = String(minutes).padStart(2, "0")
      secondsDisplay.textContent = String(seconds).padStart(2, "0")
    }

    function reset() {
      upadateDisplay(minutes, 0)
      clearTimeout(timerTimeOut)
    }

    function countdown() {
      timerTimeOut = setTimeout (function() {
        let seconds = Number(secondsDisplay.textContent)
        let minutes = Number(minutesDisplay.textContent)
        let isFinished = minutes <= 0 && seconds <= 0

        upadateDisplay(minutes, 0)

        if (isFinished) {
          resetControls()
          upadateDisplay(minutes, 0)
          sounds().timeEnd()
          return
        }

        if (seconds <= 0) {
          seconds = 60
          --minutes
        }

        upadateDisplay(minutes, String(seconds -1))

        countdown()
      }, 1000)
    }

    function hold() {
      clearTimeout(timerTimeOut)
    }

    function more() {
      minutes += 5
      reset()
    }

    function less() {
      minutes >= 5 ? minutes -=5 : minutes = 0
      reset()
    }

    return {
      upadateDisplay,
      reset,
      countdown,
      hold,
      more,
      less
    }
}
