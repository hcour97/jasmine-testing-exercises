window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});



// putting the values into an object
function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  // sets initial values
  const values = {
    amount: 10000,
    years: 10,
    rate: 3.5,
  }
  // updates the values to have the users values
  const userAmount = document.getElementById("loan-amount");
  userAmount.value = values.amount;

  const userYears = document.getElementById("loan-years");
  userYears.value = values.years;

  const userRate = document.getElementById("loan-rate");
  userRate.value = values.rate;

  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let currentUserValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currentUserValues));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let monthlyRate = (values.rate / 12)/100;
  let n = values.years*12;

  let monthlyPayment = (values.amount*monthlyRate) / (1 - (1 + monthlyRate)**-n);
  let monthlyPaymentRound = monthlyPayment.toFixed(2);
  return monthlyPaymentRound;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  console.log(monthly);
  let userMonthly = document.getElementById("monthly-payment"); 
  userMonthly.innerText = '$' + monthly;
}
