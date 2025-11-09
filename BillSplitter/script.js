const billAmount = document.getElementById('bill-amount');
const tipButtons = document.querySelectorAll('.tip-btn');
const customTipAmount = document.getElementById('custom-tip');
const noOfPeople = document.getElementById('no-of-people');
const generateBill = document.getElementById('generate-bill');
const resetBtn = document.getElementById('reset');

const tipAmountDisplay = document.getElementById('tip-amount');
const totalDisplay = document.getElementById('total');
const eachPersonDisplay = document.getElementById('each-person');

let selectedTip = 0; 

tipButtons.forEach(button => {
  button.addEventListener('click', () => {
    tipButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    selectedTip = parseFloat(button.textContent);
    customTipAmount.value = '';
  });
});

customTipAmount.addEventListener('input', () => {
  selectedTip = parseFloat(customTipAmount.value) || 0;
  tipButtons.forEach(btn => btn.classList.remove('active'));
});

generateBill.addEventListener('click', () => {
  const bill = parseFloat(billAmount.value);
  const people = parseInt(noOfPeople.value);

  if (isNaN(bill) || bill <= 0 || isNaN(people) || people <= 0) {
    alert('Please enter valid numbers for bill and number of people.');
    return;
  }

  const tipValue = (bill * selectedTip) / 100;
  const totalValue = bill + tipValue;
  const perPerson = totalValue / people;

  tipAmountDisplay.textContent = `₹${tipValue.toFixed(2)}`;
  totalDisplay.textContent = `₹${totalValue.toFixed(2)}`;
  eachPersonDisplay.textContent = `₹${perPerson.toFixed(2)}`;
});

resetBtn.addEventListener('click', () => {
  billAmount.value = '';
  customTipAmount.value = '';
  noOfPeople.value = '';
  selectedTip = 0;
  tipButtons.forEach(btn => btn.classList.remove('active'));

  tipAmountDisplay.textContent = '₹0.00';
  totalDisplay.textContent = '₹0.00';
  eachPersonDisplay.textContent = '₹0.00';
});
