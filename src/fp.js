/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

const navigationBox = document.querySelector(".navigation")

// Pages

const splashPage = document.getElementById("splash-page")
const countdownPage = document.getElementById("countdown-page")
const gamePage = document.getElementById("game-page")

// Splash Page

const formBox = document.querySelector(".form")
const questionBoxes = document.querySelectorAll(".input-box")
const btnStart = document.querySelector(".btn--start")

// Countdown Page

const countdownCaption = document.querySelector(".countdown__caption")

// Game Page

const quizBox = document.querySelector(".quiz")
const btnQuizBox = document.querySelector(".btn-quiz-box")
const btnWrong = document.querySelector(".btn--wrong")
const btnRight = document.querySelector(".btn--right")

// Core

const pipe =
  (f, g) =>
  (...args) =>
    g(f(...args))

function compileResult(...fns) {
  return fns.reduce(pipe)
}

// Helpers

function getRandom(min = 0, max = 5) {
  let rand = min - 0.5 + Math.random() * (max - min + 1)
  return Math.round(rand)
}

function getCorrectEquations() {
  const firstNumber = getRandom(0, 9)
  const secondNumber = getRandom(0, 9)
  const equationValue = firstNumber * secondNumber
  const equation = `${firstNumber} x ${secondNumber} = ${equationValue}`
  return { value: equation, evaluated: true }
}

function getWrongEquations() {
  const firstNumber = getRandom(0, 9)
  const secondNumber = getRandom(0, 9)
  const equationValue = firstNumber * secondNumber
  const equations = [
    `${firstNumber + 1} x ${secondNumber} = ${equationValue}`,
    `${firstNumber} x ${secondNumber + 1} = ${equationValue}`,
    `${firstNumber + 1} x ${secondNumber} = ${equationValue + 1}`,
  ]
  const equation = equations[getRandom(0, equations.length - 1)]

  return { value: equation, evaluated: false }
}

function getEquationsArray(limit, equationsFunc) {
  const resultArr = []

  for (let i = 0; i < limit; i++) {
    resultArr.push(equationsFunc())
  }

  return resultArr
}

function getShuffleArray(arr) {
  const resultArr = [...arr]

  let currentIndex = resultArr.length,
    randomIndex

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--
    ;[resultArr[currentIndex], resultArr[randomIndex]] = [
      resultArr[randomIndex],
      resultArr[currentIndex],
    ]
  }

  return resultArr
}

function getFormatTime(time) {
  const ms = time % 1000
  let sec = Math.floor(time / 1000)
  let min = Math.floor(sec / 60)
  let hr = Math.floor(min / 60)

  sec = sec >= 60 ? sec % 60 : sec
  min = min >= 60 ? min % 60 : min

  return { ms, sec, min, hr }
}

// Middlaware

function checkTargetElem(elem) {
  return !elem.target.classList.contains("input-box")
}

function checkMarkedSelect(state) {
  return state.isMarkedSelect === ""
}

function checkBtnPlayPush(state) {
  return state.isBtnStartPush === true
}

function checkCountDownValue(state) {
  return state.countDownValue !== "0"
}

function checkQestionEnd(state) {
  return state.isQestionEnd === true
}

// Other

const questionsBox = document.querySelector(".questions")

// DOM settings

countdownCaption.textContent = 3

// Game state

let gameState = {
  isMarkedSelect: false,
  isShowCountDownPage: false,
  isShowSplashPage: true,
  isShowGamePage: false,
  isBtnStartPush: false,
  isBtnStartHidden: false,
  isQestionEnd: false,
  countDownValue: countdownCaption.textContent,
  timer: 0,
  timerFormat: null,
  timePenalty: 0,
  timeFinal: 0,
  activeQestion: 1,
  scrollPosition: 0,
  scrollToEnd: 0,
  markedValue: "",
  equationsArray: [],
  guessArray: [],
  quizResult: null,
  questionAmount: 0,
  correctEquations: 0,
  wrongEquations: 0,
}

const gameStateDefault = { ...gameState }

// Function for game

function setMarkedValue(state) {
  const target = state.markedValue
  const value = target.querySelector("input").id

  return Object.assign({}, state, { markedValue: value })
}

function removeMarkerSelect(state) {
  questionBoxes.forEach((elem) => elem.classList.remove("input-box--active"))

  return Object.assign({}, state, { isMarkedSelect: false })
}

function setMarkerSelect(state) {
  const elem = document.getElementById(`${state.markedValue}`)
  elem.parentElement.classList.add("input-box--active")

  return Object.assign({}, state, { isMarkedSelect: true })
}

function setQuestionAmount(state) {
  const value = Number(state.markedValue.split("-")[1])

  return Object.assign({}, state, { questionAmount: value })
}

function setEquations(state) {
  const correct = getRandom(1, state.questionAmount)
  const incorrect = state.questionAmount - correct

  return Object.assign({}, state, {
    correctEquations: correct,
    wrongEquations: incorrect,
  })
}

function setEquationsArray(state) {
  const correctArray = getEquationsArray(
    state.correctEquations,
    getCorrectEquations
  )
  const wrongArray = getEquationsArray(state.wrongEquations, getWrongEquations)

  const equationsArray = [...correctArray, ...wrongArray]

  return Object.assign({}, state, { equationsArray })
}

function setShuffleEquationsArray(state) {
  const shuffleArray = getShuffleArray(state.equationsArray)

  return Object.assign({}, state, { equationsArray: shuffleArray })
}

function hideSplashPage(state) {
  splashPage.hidden = true

  return Object.assign({}, state, {
    isShowSplashPage: false,
  })
}

function showSplashPage(state) {
  splashPage.hidden = false

  return Object.assign({}, state, {
    isShowSplashPage: true,
  })
}

function disabledBtnStart(state) {
  btnStart.disabled = true

  return Object.assign({}, state, { isBtnStartPush: true })
}

function hideCountDownPage(state) {
  countdownPage.hidden = true

  return Object.assign({}, state, {
    isShowCountDownPage: false,
  })
}

function hideBtnStart(state) {
  btnStart.hidden = true

  return Object.assign({}, state, { isBtnStartHidden: true })
}

function showCountDownPage(state) {
  countdownPage.hidden = false

  return Object.assign({}, state, {
    isShowCountDownPage: true,
  })
}

function showGamePage(state) {
  gamePage.hidden = false

  return Object.assign({}, state, {
    isShowGamePage: true,
  })
}

function showBtnQuiz(state) {
  btnQuizBox.classList.add("btn-quiz-box--active")

  return Object.assign({}, state, { isBtnQuizShow: true })
}

function startTimer(state) {
  new Promise((resolve) => {
    let timer = state.timer
    const intervalValue = 10

    const clearTimer = setInterval(() => {
      if (gameState.isQestionEnd) {
        clearInterval(clearTimer)
        resolve(timer)
      }
      timer += intervalValue
    }, intervalValue)
  }).then((time) => stopTimer(time))

  return Object.assign({}, state)
}

function setCountDown(state) {
  new Promise((resolve) => {
    let value = state.countDownValue

    ;(function count() {
      if (value === -1) {
        resolve(value)
        return
      }

      setTimeout(function () {
        value -= 1
        countdownCaption.textContent = value
        count()
      }, 1000)
    })()
  }).then(() => {
    runGame()
  })

  return Object.assign({}, state, { countDownValue: "0" })
}

function addEquationsToDOM(state) {
  const box = document.createElement("div")

  state.equationsArray.forEach((eq, index) => {
    const item = document.createElement("p")
    item.classList.add("quiz__item")

    if (index === 0) {
      item.classList.add("quiz__item--active")
    }

    item.textContent = eq.value

    box.appendChild(item)
  })

  quizBox.appendChild(box)

  return Object.assign({}, state)
}

function setScrollValues(state) {
  const elemScrollHeight = navigationBox.scrollHeight
  const elemClientHeight = navigationBox.clientHeight
  const scrollToEnd = elemScrollHeight - elemClientHeight

  return Object.assign({}, state, { scrollToEnd })
}

function setGuess(state, guess) {
  state.guessArray.push(guess)

  return Object.assign({}, state)
}

function scrollForm(state) {
  value = state.scrollPosition

  if (state.scrollPosition < state.scrollToEnd) {
    value += 60
  } else {
    value = state.scrollToEnd
  }

  navigationBox.scrollTo({
    top: value,
    left: 0,
    behavior: "smooth",
  })

  return Object.assign({}, state, { scrollPosition: value })
}

function setActiveQestion(state) {
  let activeQestion = state.activeQestion
  const prevQestion = document.querySelector(".quiz__item--active")
  const nextQestion = document.querySelector(
    ".quiz__item--active + .quiz__item"
  )

  if (activeQestion === state.questionAmount) {
    activeQestion = null
    state.isQestionEnd = true
    prevQestion.classList.remove("quiz__item--active")
  } else {
    activeQestion += 1
    prevQestion.classList.remove("quiz__item--active")
    nextQestion.classList.add("quiz__item--active")
  }

  return Object.assign({}, state, { activeQestion })
}

function disableBtnGuess(state) {
  if (state.isQestionEnd) {
    btnWrong.disabled = "true"
    btnRight.disabled = "true"
  }

  return Object.assign({}, state)
}

function setFormatGameTime(state) {
  const time = state.timeFinal
  const timerFormat = getFormatTime(time)

  return Object.assign({}, state, { timerFormat })
}

function setQuizResult(state) {
  let wrongGuess = 0
  let rightGuess = 0

  state.equationsArray.forEach((item, index) => {
    if (item.evaluated === state.guessArray[index]) {
      rightGuess += 1
    } else {
      wrongGuess += 1
    }
  })

  return Object.assign({}, state, { quizResult: { wrongGuess, rightGuess } })
}

function setResultTime(state) {
  const penalty = 500

  const timeFinal = state.timer + state.quizResult.wrongGuess * penalty

  return Object.assign({}, state, { timeFinal })
}

// Mutations

function setResult(state) {
  gameState = { ...state }
}

// Game

function selectQuestion(evt) {
  if (checkTargetElem(evt)) return

  compileResult(
    setMarkedValue,
    removeMarkerSelect,
    setMarkerSelect,
    setQuestionAmount,
    setEquations,
    setEquationsArray,
    setShuffleEquationsArray,
    setResult
  )(
    Object.assign({}, gameState, {
      markedValue: evt.target,
    })
  )
}

function startRound() {
  if (checkMarkedSelect(gameState)) return
  if (checkBtnPlayPush(gameState)) return

  compileResult(
    disabledBtnStart,
    hideSplashPage,
    showCountDownPage,
    setCountDown,
    setResult
  )(Object.assign({}, gameState))
}

function runGame() {
  if (checkCountDownValue(gameState)) return

  compileResult(
    hideCountDownPage,
    hideBtnStart,
    addEquationsToDOM,
    showGamePage,
    setScrollValues,
    showBtnQuiz,
    startTimer,
    setResult
  )(Object.assign({}, gameState))
}

function btnGuessPush(guess) {
  if (checkQestionEnd(gameState)) return

  compileResult(
    setGuess,
    scrollForm,
    setActiveQestion,
    disableBtnGuess,
    setResult
  )(Object.assign({}, gameState), guess)
}

function stopTimer(time) {
  compileResult(
    setQuizResult,
    setResultTime,
    setFormatGameTime,
    setResult
  )(Object.assign({}, gameState, { timer: time }))

  console.log(gameState)
}

// Listeners

// Remove default submit form

formBox.addEventListener("submit", (evt) => evt.preventDefault())

// Select question

questionsBox.addEventListener("click", selectQuestion)

// Start round btn

btnStart.addEventListener("click", startRound)

// Plaer Guess

btnWrong.addEventListener("click", () => btnGuessPush(false))
btnRight.addEventListener("click", () => btnGuessPush(true))
