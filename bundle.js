/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./tipCalculator.js":
/*!**************************!*\
  !*** ./tipCalculator.js ***!
  \**************************/
/***/ (() => {

eval("/* Element IDs */\r\n\r\nconst PARTY_SIZE = \"partySize\";\r\nconst BILL_AMOUNT = \"billAmount\";\r\nconst CUSTOM_TIP = \"customTip\";\r\nconst ERROR_MESSAGE = \"errorMessage\";\r\nconst TIP_PER_PERSON = \"tipPerPerson\";\r\nconst TOTAL_PER_PERSON = \"totalPerPerson\";\r\n\r\n/* Elements IDs */\r\n\r\n/* Field Validation */\r\n\r\nconst isPartySizeValid = (partySize) => {\r\n  if (parseInt(partySize) < 1 || partySize.length === 0) return false;\r\n  return true;\r\n};\r\n\r\nconst displayErrorMessage = () => {\r\n  document.getElementById(PARTY_SIZE).style.border =\r\n    \"1px solid var(--error-color)\";\r\n  document.getElementById(ERROR_MESSAGE).style.display = \"block\";\r\n};\r\n\r\nconst removeErrorMessage = () => {\r\n  document.getElementById(PARTY_SIZE).style.border =\r\n    \"1px solid var(--strong-cyan)\";\r\n  document.getElementById(ERROR_MESSAGE).style.display = \"none\";\r\n};\r\n\r\nconst removeLeadingZeros = (inputValue) => {\r\n  document.getElementById(PARTY_SIZE).value = inputValue.toString();\r\n};\r\n\r\nconst preventInvalidInput = (event) => {\r\n  const input = event.key;\r\n  const regex = new RegExp(\"[e+-.]\", \"i\");\r\n  if (regex.test(input)) {\r\n    event.preventDefault();\r\n  }\r\n};\r\n\r\nconst validatePartySize = (event) => {\r\n  const inputValue = event.target.value;\r\n  if (!isPartySizeValid(inputValue)) return displayErrorMessage();\r\n  removeLeadingZeros(parseInt(inputValue));\r\n  removeErrorMessage();\r\n  calulateTotalAndTip();\r\n};\r\n\r\nconst validateDecimalInput = (event) => {\r\n  const input = event.key;\r\n  const invalid = new RegExp(\"[e+-]\", \"i\");\r\n  if (invalid.test(input)) {\r\n    event.preventDefault();\r\n  }\r\n};\r\n\r\n/* Field Validation */\r\n\r\n/* Tip Percentage */\r\n\r\nconst removePreviousState = () => {\r\n  const buttons = document.querySelectorAll(\".tip-options > button\");\r\n  buttons.forEach((button) => {\r\n    button.classList.remove(\"selected\");\r\n  });\r\n};\r\n\r\nconst updateButtonState = (event) => {\r\n  removePreviousState();\r\n  document.getElementById(CUSTOM_TIP).value = \"\";\r\n  const buttonID = event.target.id;\r\n  let selectedButton = document.getElementById(buttonID);\r\n  selectedButton.classList.add(\"selected\");\r\n  calulateTotalAndTip();\r\n};\r\n\r\n\r\nconst handleFocus = () => {\r\n  removePreviousState();\r\n}\r\n\r\n/* Tip Percentage */\r\n\r\n/* Tip Calculation */\r\n\r\nconst setTipPerPerson = (totalTipPerPerson) => {\r\n  document.getElementById(TIP_PER_PERSON).innerText = `$${totalTipPerPerson}`;\r\n};\r\n\r\nconst setTotalPerPerson = (totalPerPerson) => {\r\n  document.getElementById(TOTAL_PER_PERSON).innerText = `$${totalPerPerson}`;\r\n};\r\n\r\nconst applyTipPercentage = (billAmount, tipPercentage) => {\r\n  const tip = tipPercentage || document.getElementById(CUSTOM_TIP).value;\r\n  if (!billAmount || !tip) return 0;\r\n  const tipPerPerson = billAmount * (tip / 100);\r\n  return tipPerPerson;\r\n};\r\n\r\nconst calulateTotal = (billAmount, tipPerPerson, partySize) => {\r\n    if(!billAmount || !tipPerPerson || !partySize) return 0;\r\n    const total = parseFloat((billAmount / partySize) + tipPerPerson);\r\n    return total;\r\n}\r\n\r\nconst calulateTotalAndTip = () => {\r\n  const billAmount = parseFloat(document.getElementById(BILL_AMOUNT).value);\r\n  const partySize = parseInt(document.getElementById(PARTY_SIZE).value);\r\n  const selectedTipPercentage = parseInt(\r\n    document.querySelector(\".selected\")?.dataset.tipPercentage\r\n  );\r\n  //\r\n  const tipAmount = applyTipPercentage(billAmount, selectedTipPercentage);\r\n  const totalPerPerson = calulateTotal(billAmount, tipAmount, partySize);\r\n\r\n  setTipPerPerson(tipAmount.toFixed(2));\r\n  setTotalPerPerson(totalPerPerson.toFixed(2));\r\n};\r\n\r\n/* Tip Calculation */\r\n\r\n//\r\n/* RESET */\r\n\r\nconst resetValues = () => {\r\n  document.getElementById(BILL_AMOUNT).value = \"\";\r\n  document.getElementById(PARTY_SIZE).value = \"\";\r\n  setTipPerPerson(\"0.00\");\r\n  setTotalPerPerson(\"0.00\");\r\n  removePreviousState();\r\n};\r\n\r\n/* RESET */\r\n\n\n//# sourceURL=webpack://tip-calculator-app/./tipCalculator.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./tipCalculator.js"]();
/******/ 	
/******/ })()
;