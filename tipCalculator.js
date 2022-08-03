/* Element IDs */

const PARTY_SIZE = "partySize";
const BILL_AMOUNT = "billAmount";
const CUSTOM_TIP = "customTip";
const ERROR_MESSAGE = "errorMessage";
const TIP_PER_PERSON = "tipPerPerson";
const TOTAL_PER_PERSON = "totalPerPerson";

const tipButtons = document.querySelectorAll(".tip-options > button");
const resetButton = document.getElementById("resetButton");
const partySizeElement = document.getElementById(PARTY_SIZE);
const billAmountElement = document.getElementById(BILL_AMOUNT);
const customTipElement = document.getElementById(CUSTOM_TIP);
const errorMessageElement = document.getElementById(ERROR_MESSAGE);
const tipPerPersonElement = document.getElementById(TIP_PER_PERSON);
const totalPerPersonElement = document.getElementById(TOTAL_PER_PERSON);

/* Elements IDs */

/* Field Validation */

const isPartySizeValid = (partySize) => {
  if (parseInt(partySize) < 1 || partySize.length === 0) return false;
  return true;
};

const displayErrorMessage = () => {
  partySizeElement.style.border = "1px solid var(--error-color)";
  errorMessageElement.style.display = "block";
};

const removeErrorMessage = () => {
  partySizeElement.style.border = "1px solid var(--strong-cyan)";
  errorMessageElement.style.display = "none";
};

const removeLeadingZeros = (inputValue) => {
  partySizeElement.value = inputValue.toString();
};

const preventInvalidInput = (event) => {
  const input = event.key;
  const regex = new RegExp("[e+-.]", "i");
  if (regex.test(input)) {
    event.preventDefault();
  }
};

const validatePartySize = (event) => {
  const inputValue = event.target.value;
  if (!isPartySizeValid(inputValue)) return displayErrorMessage();
  removeLeadingZeros(parseInt(inputValue));
  removeErrorMessage();
  calulateTotalAndTip();
};

const validateDecimalInput = (event) => {
  const input = event.key;
  const invalid = new RegExp("[e+-]", "i");
  if (invalid.test(input)) {
    event.preventDefault();
  }
};

/* Field Validation */

/* Tip Percentage */

const removePreviousState = () => {
  tipButtons.forEach((button) => {
    button.classList.remove("selected");
  });
};

const updateButtonState = (event) => {
  removePreviousState();
  customTipElement.value = "";
  const buttonID = event.target.id;
  let selectedButton = document.getElementById(buttonID);
  selectedButton.classList.add("selected");
  calulateTotalAndTip();
};

const handleFocus = () => {
  removePreviousState();
};

/* Tip Percentage */

/* Tip Calculation */

const enableReset = () => {
  resetButton.classList.add("tip-action-button-active");
  resetButton.removeAttribute("disabled")
}

const disableReset = () => {
  resetButton.classList.remove("tip-action-button-active");
  resetButton.setAttribute("disabled", true);
}

const setTipPerPerson = (totalTipPerPerson) => {
  tipPerPersonElement.innerText = `$${totalTipPerPerson}`;
};

const setTotalPerPerson = (totalPerPerson) => {
  totalPerPersonElement.innerText = `$${totalPerPerson}`;
};

const applyTipPercentage = (billAmount, tipPercentage) => {
  const tip = tipPercentage || customTipElement.value;
  if (!billAmount || !tip) return 0;
  const tipPerPerson = billAmount * (tip / 100);
  return tipPerPerson;
};

const calulateTotal = (billAmount, tipPerPerson, partySize) => {
  if (!billAmount || !tipPerPerson || !partySize) return 0;
  const total = parseFloat((billAmount / partySize) + tipPerPerson);
  return total;
};

const calulateTotalAndTip = () => {
  enableReset();
  const billAmount = parseFloat(billAmountElement.value);
  const partySize = parseInt(partySizeElement.value);
  const selectedTipPercentage = parseInt(
    document.querySelector(".selected")?.dataset.tipPercentage
  );
  //
  const tipAmount = applyTipPercentage(billAmount, selectedTipPercentage);
  const totalPerPerson = calulateTotal(billAmount, tipAmount, partySize);

  setTipPerPerson(tipAmount.toFixed(2));
  setTotalPerPerson(totalPerPerson.toFixed(2));
};

/* Tip Calculation */

//
/* RESET */

const resetValues = () => {
  billAmountElement.value = "";
  partySizeElement.value = "";
  customTipElement.value = "";
  setTipPerPerson("0.00");
  setTotalPerPerson("0.00");
  removePreviousState();
  disableReset();
};

/* RESET */
