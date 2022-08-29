// https://www.omnicalculator.com/finance/bounce-rate#how-to-calculate-bounce-rate-the-bounce-rate-formula
// caclculators not working 

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const bouncerateRadio = document.getElementById('bouncerateRadio');
const numberofwebsitevisitsRadio = document.getElementById('numberofwebsitevisitsRadio');
const numberofonepagevisitsRadio = document.getElementById('numberofonepagevisitsRadio');

let bouncerate;
let numberofwebsitevisits = v1;
let numberofonepagevisits = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

bouncerateRadio.addEventListener('click', function() {
  variable1.textContent = 'Number of website visits';
  variable2.textContent = 'Number of one-page visits';
  numberofwebsitevisits = v1;
  numberofonepagevisits = v2;
  result.textContent = '';
});

numberofwebsitevisitsRadio.addEventListener('click', function() {
  variable1.textContent = 'Bounce rate';
  variable2.textContent = 'Number of one-page visits';
  bouncerate = v1;
  numberofonepagevisits = v2;
  result.textContent = '';
});

numberofonepagevisitsRadio.addEventListener('click', function() {
  variable1.textContent = 'Bounce rate';
  variable2.textContent = 'Number of website visits';
  bouncerate = v1;
  numberofwebsitevisits = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(bouncerateRadio.checked)
    result.textContent = `Bounce rate = ${computeBouncerate().toFixed(2)}`;

  else if(numberofwebsitevisitsRadio.checked)
    result.textContent = `Number of website visits = ${computeNumberofwebsitevisits().toFixed(2)}`;

  else if(numberofonepagevisitsRadio.checked)
    result.textContent = `Number of one-page visits = ${computeNumberofonepagevisits().toFixed(2)}`;
})

// calculation

function computeBouncerate() {
  return (Number(numberofonepagevisits.value) / Number(numberofwebsitevisits.value)) * 100;
}

function computeNumberofwebsitevisits() {
  return (Number(numberofwebsitevisits.value) / Number(bouncerate.value)) * 100;
}

function computeNumberofonepagevisits() {
  return (Number(bouncerate.value) / 100) * Number(numberofonepagevisits.value);
}