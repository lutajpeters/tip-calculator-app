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
  if (input === "." || input === "-") {
    event.preventDefault();
  }
};

const validatePartySize = (event) => {
  const inputValue = event.target.value;
  if (!isPartySizeValid(inputValue)) return displayErrorMessage();
  removeLeadingZeros(parseInt(inputValue));
  removeErrorMessage();
};

/* Field Validation */

//
