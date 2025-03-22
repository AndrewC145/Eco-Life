const form = document.querySelector('form');
const fullName = document.querySelector('#name');
const email = document.querySelector('#email-address');
const phoneNum = document.querySelector('#phone-number');
const subject = document.querySelector('#subject');
const message = document.querySelector('#message');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  const name = fullName.value.trim();
  const emailAddress = email.value.trim();
  const subjectVal = subject.value.trim();
  const messageVal = message.value.trim();
  const phone = phoneNum.value.trim();

  if (name === '') {
    error(fullName, 'Name cannot be blank');
  } else {
    success(fullName);
  }

  if (emailAddress === '') {
    error(email, 'Email cannot be blank');
  } else if (!checkEmail(emailAddress)) {
    error(email, 'Email is not valid');
  } else {
    success(email);
  }

  if (phone === '') {
    error(phoneNum, 'Phone Number cannot be blank');
  } else if (!checkPhone(phone)) {
    error(phoneNum, 'Phone Number cannot contain letters');
  } else {
    success(phoneNum);
  }

  if (subjectVal === '') {
    error(subject, 'Subject cannot be blank');
  } else {
    success(subject);
  }

  if (messageVal === '') {
    error(message, 'Message cannot be blank');
  } else {
    success(message);
  }
}

function checkPhone(phone) {
  const charactersRegex = /^[A-Za-z]+$/;
  const numbersRegex = /^[0-9]+$/;

  if (phone.match(charactersRegex)) {
    return false;
  } else if (phone.match(numbersRegex)) {
    return true;
  }
}

function checkEmail(email) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  return email.toLowerCase().match(regex);
}

function error(input, message) {
  input.style.border = '2px solid #e74c3c';
  const inputParent = input.parentElement;
  const errorMsg = inputParent.querySelector('.error');
  errorMsg.innerText = message;
  errorMsg.style.fontSize = '0.8rem';
  errorMsg.style.color = '#e74c3c';
}

function success(input) {
  const inputParent = input.parentElement;
  const errorMsg = inputParent.querySelector('.error');
  errorMsg.innerText = '';
  input.style.border = '2px solid #2ecc71';
}
