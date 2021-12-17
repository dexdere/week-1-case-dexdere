var body = document.querySelector("body");
var inputNumber = document.querySelector("input");
var result = document.querySelector(".result");
var luhn = document.querySelector(".luhn");
var allResult = document.querySelector("p");

var inputNumberValue;
var numberSplit;
var convertToNumber;

var checkLength;
var checkNumber;
var checkSumNumber;
var checkLastNumber;
var checkSameNumber;
var checkAll;

var checkLuhnAlgorithm;

//Gerekli dönüştürme işlemlerini yapıyor.
function converter() {
  inputNumberValue = document.querySelector("input").value;
  valueReplace = inputNumberValue.replaceAll("-", "");
  numberSplit = valueReplace.split("");
  convertToNumber = numberSplit.map((a) => parseInt(a));
}

//İstenen kontrolleri yapıp değişkenlere "true" yada "false" değerini atıyor.
function checker() {
  checkLength = valueReplace.length === 16 ? true : false;
  checkNumber = !isNaN(Number(valueReplace)) ? true : false;
  checkSumNumber = convertToNumber.reduce((a, b) => a + b) > 16 ? true : false;
  checkLastNumber =
    valueReplace[valueReplace.length - 1] % 2 === 0 ? true : false;
  convertToNumber.sort((a, b) => a - b);
  checkSameNumber =
    convertToNumber[0] === convertToNumber[convertToNumber.length - 1]
      ? false
      : true;
  checkAll =
    checkLength &&
    checkNumber &&
    checkLastNumber &&
    checkSumNumber &&
    checkSameNumber;
}

//Dom üzerinde sonuçları gösteriyor.
function changeDOM() {
  result.innerHTML = checkAll ? "Valid" : "Invalid";
  body.className = checkAll === true ? "valid" : "invalid";

  allResult.innerHTML = `Length:<span>${checkLength}</span> - Number:<span>${checkNumber}</span> - Sum:<span>${checkSumNumber}</span>
  <p>Last Number:<span>${checkLastNumber}</span> - Same Number:<span>${checkNumber}</span></p>`;

  luhn.innerHTML = `Luhn Algorithm:<span>${checkLuhnAlgorithm}<span>`;
  checkValid();
}

// Luhn algoritmasının kontrolünü yapıyor.
function luhnAlgorithm(number) {
  if (numberSplit.length >= 12) {
    let arr = number.reverse().map((x) => parseInt(x));
    let lastDigit = arr.splice(0, 1)[0];
    let sum = arr.reduce(
      (acc, value, index) =>
        index % 2 !== 0 ? acc + value : acc + ((value * 2) % 9) || 9,
      0
    );
    sum += lastDigit;
    checkLuhnAlgorithm = sum % 10 === 0 ? "valid" : "invalid";
  } else {
    checkLuhnAlgorithm = "invalid";
  }
}

function checkValid() {
  if (checkLuhnAlgorithm === "valid") {
    luhn.classList.remove("luhnInvalid");
    luhn.classList.add("luhnValid");
  } else {
    luhn.classList.remove("luhnValid");
    luhn.classList.add("luhnInvalid");
  }
}

function allFunctions() {
  converter();
  checker();
  luhnAlgorithm(numberSplit);
  changeDOM();
}

inputNumber.addEventListener("input", allFunctions);
