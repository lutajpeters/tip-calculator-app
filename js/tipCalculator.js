/* Element IDs */

const PARTY_SIZE = "partySize";
const BILL_AMOUNT = "billAmount";
const CUSTOM_TIP = "customTip";
const ERROR_MESSAGE = "errorMessage";
const TIP_PER_PERSON = "tipPerPerson";
const TOTAL_PER_PERSON = "totalPerPerson";

/* Elements IDs */

/* Field Validation */

const isPartySizeValid = (partySize) => {
  if (parseInt(partySize) < 1 || partySize.length === 0) return false;
  return true;
};

const displayErrorMessage = () => {
  document.getElementById(PARTY_SIZE).style.border =
    "1px solid var(--error-color)";
  document.getElementById(ERROR_MESSAGE).style.display = "block";
};

const removeErrorMessage = () => {
  document.getElementById(PARTY_SIZE).style.border =
    "1px solid var(--strong-cyan)";
  document.getElementById(ERROR_MESSAGE).style.display = "none";
};

const removeLeadingZeros = (inputValue) => {
  document.getElementById(PARTY_SIZE).value = inputValue.toString();
};

const preventInvalidInput = (event) => {
  const input = event.key;
  const invalid = new RegExp("[^0-9]");
  if (invalid.test(input)) {
    event.preventDefault();
  }
};

const validatePartySize = (event) => {
  const inputValue = event.target.value;
  if (!isPartySizeValid(inputValue)) return displayErrorMessage();
  removeLeadingZeros(parseInt(inputValue));
  removeErrorMessage();
};

validateBillAmount = (event) => {
  const input = event.key;
  const invalid = new RegExp("[^0-9.]");
  if (invalid.test(input)) {
    event.preventDefault();
  }
};

/* Field Validation */

/* Tip Percentage */

const removePreviousState = () => {
  const buttons = document.querySelectorAll(".tip-options > button");
  buttons.forEach((button) => {
    button.classList.remove("selected");
  });
};

const updateButtonState = (event) => {
  removePreviousState();
  const buttonID = event.target.id;
  let selectedButton = document.getElementById(buttonID);
  selectedButton.classList.add("selected");
};

/* Tip Percentage */

/* RESET */

const resetValues = () => {
  document.getElementById(BILL_AMOUNT).value = "0";
  document.getElementById(PARTY_SIZE).value = "0";
  setTipPerPerson("0.00");
  setTotalPerPerson("0.00");
  removePreviousState();
};

/* RESET */

/* Tip Calculation */

const setTipPerPerson = (totalTipPerPerson) => {
  document.getElementById(TIP_PER_PERSON).innerText = `$${totalTipPerPerson}`;
};

const setTotalPerPerson = (totalPerPerson) => {
  document.getElementById(TOTAL_PER_PERSON).innerText = `$${totalPerPerson}`;
};

/* Tip Calculation */

//
