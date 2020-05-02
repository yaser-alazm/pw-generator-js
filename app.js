const charactersInputRange = document.getElementById('charactersInputRange');
const charactersInputNumber = document.getElementById('charactersInputNumber');
const includeUpperCaseElm = document.getElementById('includeUppercase');
const includeNumbersElm = document.getElementById('includeNumbers');
const includeSymbolsElm = document.getElementById('includeSymbols');
const pwGeneratorForm = document.getElementById('generate-form');
const pwPlaceholder = document.getElementById('pw-placeholder');

const UPPER_CHAR_CODE = arrayFromLowToHigh(65, 90);
const LOWER_CHAR_CODE = arrayFromLowToHigh(97, 122);
const NUMBER_CHAR_CODE = arrayFromLowToHigh(97, 122);
const SYMBOLS_CHAR_CODE = arrayFromLowToHigh(33, 47)
  .concat(arrayFromLowToHigh(58, 64))
  .concat(arrayFromLowToHigh(91, 96))
  .concat(arrayFromLowToHigh(123, 126));

charactersInputRange.addEventListener('input', asyncInputValue);
charactersInputNumber.addEventListener('input', asyncInputValue);
pwGeneratorForm.addEventListener('submit', passwordGenerator);

function passwordGenerator(e) {
  e.preventDefault();
  const charactersInput = charactersInputNumber.value;
  const includeUpperCase = includeUpperCaseElm.checked;
  const includeNumbers = includeNumbersElm.checked;
  const includeSymbols = includeSymbolsElm.checked;

  password = generate(
    charactersInput,
    includeUpperCase,
    includeNumbers,
    includeSymbols,
  );
  // console.log('password', password);
  // alert(password);
  pwPlaceholder.innerText = password;
}

function asyncInputValue(e) {
  const value = e.target.value;
  charactersInputRange.value = value;
  charactersInputNumber.value = value;
}

function arrayFromLowToHigh(low, high) {
  const array = [];
  for (let i = low; i <= high; i++) {
    array.push(i);
  }
  return array;
}

const generate = (chars, upper, nums, syms) => {
  let charCodesArr = LOWER_CHAR_CODE;

  if (upper) charCodesArr = charCodesArr.concat(UPPER_CHAR_CODE);
  if (nums) charCodesArr = charCodesArr.concat(NUMBER_CHAR_CODE);
  if (syms) charCodesArr = charCodesArr.concat(SYMBOLS_CHAR_CODE);

  const passwordChars = [];
  for (let i = 0; i < chars; i++) {
    const charCode =
      charCodesArr[Math.floor(Math.random() * charCodesArr.length)];
    passwordChars.push(String.fromCharCode(charCode));
  }

  return passwordChars.join('');
};
