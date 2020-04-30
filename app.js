const charactersInputRange = document.getElementById('charactersInputRange');
const charactersInputNumber = document.getElementById('charactersInputNumber');

charactersInputRange.addEventListener('input', asyncInputValue);
charactersInputNumber.addEventListener('input', asyncInputValue);

function asyncInputValue(e) {
  const value = e.target.value;
  charactersInputRange.value = value;
  charactersInputNumber.value = value;
}
