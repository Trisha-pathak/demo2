const hour = document.querySelector('.hour');
const min = document.querySelector('.minute');
const val = document.querySelector('.value');

const ac = document.querySelector('.ac');
const pm = document.querySelector('.pm');
const percent = document.querySelector('.percent');

const addition = document.querySelector('.addition');
const subtraction = document.querySelector('.subtraction');
const multiplication = document.querySelector('.multiplication');
const division = document.querySelector('.division');
const equal = document.querySelector('.equal');

const decimal = document.querySelector('.decimal');
const number_0 = document.querySelector('.number-0');
const number_1 = document.querySelector('.number-1');
const number_2 = document.querySelector('.number-2');
const number_3 = document.querySelector('.number-3');
const number_4 = document.querySelector('.number-4');
const number_5 = document.querySelector('.number-5');
const number_6 = document.querySelector('.number-6');
const number_7 = document.querySelector('.number-7');
const number_8 = document.querySelector('.number-8');
const number_9 = document.querySelector('.number-9');
const numberArray = [
  number_0, number_1, number_2, number_3, number_4,
  number_5, number_6, number_7, number_8, number_9
];


// variables
let valueStr = null;
let operator = null;


// Functions
const getValueStr = () => val.textContent.split(',').join('');

const getValueNum = () => {
  return parseFloat(getValueStr());
};

const setStrAsValue = (valueStr) => {
  if (valueStr[valueStr.length - 1] === '.') {
    val.textContent += '.';
    return;
  }

  const [wholeNumStr, decimalStr] = valueStr.split('.');
  if (decimalStr) {
    val.textContent =
      parseFloat(wholeNumStr).toLocaleString() + '.' + decimalStr;
  } else {
    val.textContent = parseFloat(wholeNumStr).toLocaleString();
  }
};

const handleNumberClick = (numStr) => {
  const currentValueStr = getValueStr();
  if (currentValueStr === '0') {
    setStrAsValue(numStr);
  } else {
    setStrAsValue(currentValueStr + numStr);
  }
};

const getResultOfOperationAsStr = () => {
  const currentValueNum = getValueNum();
  const valueNumInMemory = parseFloat(valueStr);
  let newValueNum;
  if (operator === 'addition') {
    newValueNum = valueNumInMemory + currentValueNum;
  } else if (operator === 'subtraction') {
    newValueNum = valueNumInMemory - currentValueNum;
  } else if (operator === 'multiplication') {
    newValueNum = valueNumInMemory * currentValueNum;
  } else if (operator === 'division') {
    newValueNum = valueNumInMemory / currentValueNum;
  }

  return newValueNum.toString();
};

const handleOperatorClick = (operation) => {
  const currentValueStr = getValueStr();

  if (!valueStr) {
    valueStr = currentValueStr;
    operator = operation;
    setStrAsValue('0');
    return;
  }
  valueStr = getResultOfOperationAsStr();
  operator = operation;
  setStrAsValue('0');
};




// Add Event Listeners to functions
ac.addEventListener('click', () => {
  setStrAsValue('0');
  valueStr = null;
  operator= null;
});
pm.addEventListener('click', () => {
  const currentValueNum = getValueNum();
  const currentValueStr = getValueStr();

  if (currentValueStr === '-0') {
    setStrAsValue('0');
    return;
  }
  if (currentValueNum >= 0) {
    setStrAsValue('-' + currentValueStr);
  } else {
    setStrAsValue(currentValueStr.substring(1));
  }
});
percent.addEventListener('click', () => {
  const currentValueNum = getValueNum();
  const newValueNum = currentValueNum / 100;
  setStrAsValue(newValueNum.toString());
  valueStr = null;
  operator = null;
});


// add event listeners to operators
addition.addEventListener('click', () => {
  handleOperatorClick('addition');
});
subtraction.addEventListener('click', () => {
  handleOperatorClick('subtraction');
});
multiplication.addEventListener('click', () => {
  handleOperatorClick('multiplication');
});
division.addEventListener('click', () => {
  handleOperatorClick('division');
});
equal.addEventListener('click', () => {
  if (valueStr) {
    setStrAsValue(getResultOfOperationAsStr());
    valueStr = null;
    operator= null;
  }
});


// Add Event Listeners to numbers and decimal
for (let i=0; i < numberArray.length; i++) {
  const number = numberArray[i];
  number.addEventListener('click', () => {
    handleNumberClick(i.toString());
  });
}
decimal.addEventListener('click', () => {
  const currentValueStr = getValueStr();
  if (!currentValueStr.includes('.')) {
    setStrAsValue(currentValueStr + '.');
  }
});


// Set up the time
const updateTime = () => {
  const currentTime = new Date();

  let currentHour = currentTime.getHours();
  const currentMinute = currentTime.getMinutes();

  if (currentHour > 12) {
    currentHour -= 12;
  }
  hour.textContent = currentHour.toString();
  min.textContent = currentMinute.toString().padStart(2, '0');
}
setInterval(updateTime, 1000);
updateTime();