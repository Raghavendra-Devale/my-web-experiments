const passwordInput = document.getElementById('password');

const lowerCase = document.getElementById('lc');
const upperCase = document.getElementById('uc');
const numberCase = document.getElementById('num');
const symbolCase = document.getElementById('sym');

const checkBtn = document.querySelector('.brutalist-card__button--mark');
const resetBtn = document.querySelector('.brutalist-card__button--read');

const strengthMsg = document.getElementById('strength-msg');

checkBtn.addEventListener('click', () => {
  const password = passwordInput.value.trim();

  
  const hasLower = /[a-z]/.test(password);
  const hasUpper = /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSymbol = /[^a-zA-Z0-9]/.test(password);


  lowerCase.style.color = hasLower ? 'green' : 'red';
  upperCase.style.color = hasUpper ? 'green' : 'red';
  numberCase.style.color = hasNumber ? 'green' : 'red';
  symbolCase.style.color = hasSymbol ? 'green' : 'red';


  let score = 0;
  if (hasLower) score++;
  if (hasUpper) score++;
  if (hasNumber) score++;
  if (hasSymbol) score++;
  if (password.length >= 8) score++;

  // set strength message based on score
  if (score <= 2) {
    strengthMsg.textContent = "Weak Password 😟";
    strengthMsg.style.color = "red";
  } else if (score === 3 || score === 4) {
    strengthMsg.textContent = "Medium Strength 😐";
    strengthMsg.style.color = "orange";
  } else if (score === 5) {
    strengthMsg.textContent = "Strong Password 💪";
    strengthMsg.style.color = "green";
  } else {
    strengthMsg.textContent = "";
  }
});

resetBtn.addEventListener('click', (e) => {
  e.preventDefault(); 
  passwordInput.value = '';
  lowerCase.style.color = '';
  upperCase.style.color = '';
  numberCase.style.color = '';
  symbolCase.style.color = '';
  strengthMsg.textContent = '';
});
