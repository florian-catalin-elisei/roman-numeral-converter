const number = document.querySelector("#number");
const convertBtn = document.querySelector("#convert-btn");
const output = document.querySelector("#output");

const numerals = [
  ["M", 1000],
  ["CM", 900],
  ["D", 500],
  ["CD", 400],
  ["C", 100],
  ["XC", 90],
  ["L", 50],
  ["XL", 40],
  ["X", 10],
  ["IX", 9],
  ["V", 5],
  ["IV", 4],
  ["I", 1],
];

convertBtn.addEventListener("click", () => {
  let value = number.value;

  if (!value) {
    output.textContent = "Please enter a valid number";
  } else if (value < 0) {
    output.textContent = "Please enter a number greater than or equal to 1";
  } else if (value > 3999) {
    output.textContent = "Please enter a number less than or equal to 3999";
  } else {
    let result = "";

    for (const [roman, number] of numerals) {
      while (value >= number) {
        result += roman;
        value -= number;
      }
    }

    output.textContent = result;
  }
});
