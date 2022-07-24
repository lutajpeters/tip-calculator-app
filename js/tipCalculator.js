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
  console.log("key: ", input);
  const regex = new RegExp("Arrow*");
  //if (input === "." || input === "-" || input === "e" || input === "E") {
  if (isNaN(input) && input !== "Backspace" && !regex.test(input)) {
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

validateBillAmount = (event) => {
  const input = event.key;
  const invalid = new RegExp("[]");
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
  calulateTotalAndTip();
};

/* Tip Percentage */

/* Tip Calculation */

const setTipPerPerson = (totalTipPerPerson) => {
  document.getElementById(TIP_PER_PERSON).innerText = `$${totalTipPerPerson}`;
};

const setTotalPerPerson = (totalPerPerson) => {
  document.getElementById(TOTAL_PER_PERSON).innerText = `$${totalPerPerson}`;
};

const applyTipPercentage = (billAmount, tipPercentage) => {
  console.log("tips...");
  if (!billAmount || !tipPercentage) return "0.00";
  const tipPerPerson = billAmount * (tipPercentage / 100);
  console.log("tipPerPerson...: ", tipPerPerson);
  return tipPerPerson;
};

const calulateTotalAndTip = () => {
  const billAmount = parseFloat(document.getElementById(BILL_AMOUNT).value);
  const partySize = parseInt(document.getElementById(PARTY_SIZE).value);
  const selectedTipPercentage = parseInt(
    document.querySelector(".selected")?.dataset.tipPercentage
  );

  console.log("billAmount: ", billAmount);
  console.log("partySize: ", partySize);
  console.log("selectedTipPercentage: ", selectedTipPercentage);
  //
  const tipAmount = applyTipPercentage(billAmount, selectedTipPercentage);

  setTipPerPerson(tipAmount);
};

/* Tip Calculation */

//
/* RESET */

const resetValues = () => {
  document.getElementById(BILL_AMOUNT).value = "";
  document.getElementById(PARTY_SIZE).value = "";
  setTipPerPerson("0.00");
  setTotalPerPerson("0.00");
  removePreviousState();
};

/* RESET */
