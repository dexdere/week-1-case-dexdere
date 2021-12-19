const body = document.querySelector("body");
const inputNumber = document.querySelector("input");
const result = document.querySelector(".result");
const luhn = document.querySelector(".luhn");
const allResult = document.querySelector("p");
const logo = document.querySelector("img");

var inputNumberValue;
var numberSplit;
var convertToNumber;

const check = {
  all: "",
  length: "",
  number: "",
  sum: "",
  lastNumber: "",
  sameNumber: "",
  luhnAlgorithm: "",
  logoUrl: "",
};

//Gerekli dönüştürme işlemlerini yapıyor.
function converter() {
  inputNumberValue = document.querySelector("input").value;
  spaceReplace = inputNumberValue.replaceAll(" ", "");
  valueReplace = spaceReplace.replaceAll("-", "");
  numberSplit = valueReplace.split("");
  convertToNumber = numberSplit.map((a) => parseInt(a));
  convertToNumber.sort((a, b) => a - b);
}

//İstenen kontrolleri yapıp değişkenlere "true" yada "false" değerini atıyor.
function checker() {
  check.length = valueReplace.length === 16 ? true : false;
  check.number = !isNaN(Number(valueReplace)) ? true : false;
  check.sum = convertToNumber.reduce((a, b) => a + b) > 16 ? true : false;
  check.lastNumber = valueReplace[valueReplace.length - 1] % 2 === 0 ? true : false;
  check.sameNumber = convertToNumber[0] === convertToNumber[convertToNumber.length - 1] ? false : true;
  check.all = check.length && check.number && check.lastNumber && check.sum && check.sameNumber;
  cardLogo();
}

//Dom üzerinde sonuçları gösteriyor.
function changeDOM() {
  result.innerHTML = check.all ? "Valid" : "Invalid";
  body.className = check.all === true ? "valid" : "invalid";
  luhn.innerHTML = `Luhn Algorithm:<span>${check.luhnAlgorithm}</span></span>`;
  allResult.innerHTML = `Length:<span>${check.length}</span> - Number:<span>${check.number}</span> - Sum:<span>${check.sum}</span> 
  <p>Last Number:<span>${check.lastNumber}</span> - Same Number:<span>${check.number}</span></p>`;
  logo.src = check.logoUrl;
  checkValid();
}

//Luhn algoritmasının kontrolünü yapıyor.
function luhnAlgorithm() {
  if (numberSplit.length >= 12) {
    let array = numberSplit.reverse().map((x) => parseInt(x));
    let lastDigit = array.splice(0, 1)[0];
    let sum = array.reduce((acc, value, index) => index % 2 !== 0 ? acc + value : acc + ((value * 2) % 9) || 9,0);
    sum += lastDigit;
    check.luhnAlgorithm = sum % 10 === 0 ? "valid" : "invalid";
  } else {
    check.luhnAlgorithm = "invalid";
  }
}

//Luhn algoritmasının CSS'i için gerekli class atamasını yapıyor.
function checkValid() {
  if (check.luhnAlgorithm === "valid") {
    luhn.classList.remove("luhnInvalid");
    luhn.classList.add("luhnValid");
  } else {
    luhn.classList.remove("luhnValid");
    luhn.classList.add("luhnInvalid");
  }
}

//Kartın "MasterCard" mı yoksa "Visa" mı olduğunu kontrol edip ilgili değişkene URL atıyor.
function cardLogo() {
  if (numberSplit.length >= 12) {
    if (inputNumberValue[0] == 4) {
      check.logoUrl = "https://img.icons8.com/fluency/48/000000/visa.png";
    } else if (inputNumberValue[0] == 5 && inputNumberValue[1] <= 5) {
      check.logoUrl = "https://img.icons8.com/color/48/000000/mastercard.png";
    } else {
      check.logoUrl = "";
    }
  } else {
    check.logoUrl = "";
  }
}

function allFunctions() {
  converter();
  checker();
  luhnAlgorithm();
  changeDOM();
}

inputNumber.addEventListener("input", allFunctions);
