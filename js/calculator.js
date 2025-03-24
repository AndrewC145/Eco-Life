const slider = document.querySelector('.slider');
const output = document.querySelector('.output');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const question = document.querySelector('.question');
const rangeMin = document.querySelector('.range-left');
const rangeMax = document.querySelector('.range-right');
const type = document.querySelector('.type');
const calcQuiz = document.querySelector('.calc-quiz');

let count = 0;
let score = 0;

document.addEventListener('DOMContentLoaded', () => {
  question.textContent = questions[count].question;
  changeType();
  showRangeValue();
  prevButton.style.visibility = 'hidden';
});

function showRangeValue() {
  output.textContent = slider.value;
  slider.min = questions[count].minVal;
  slider.max = questions[count].maxVal;
  rangeMin.textContent = questions[count].minVal;
  rangeMax.textContent = questions[count].maxVal;
}

slider.addEventListener('input', showRangeValue);

function showButtons() {
  if (count === 0) {
    prevButton.style.visibility = 'hidden';
  } else if (count > 0) {
    prevButton.style.visibility = 'visible';
  }

  if (count === questions.length) {
    const resetBtn = document.createElement('button');
    resetBtn.textContent = 'Restart';
    resetBtn.classList.add('reset-button');
    calcQuiz.appendChild(resetBtn);
    resetBtn.addEventListener('click', resetQuiz);
  }
}

function resetQuiz() {
  location.reload();
}

function showResults() {
  let result;
  let tips = 'test';
  if (score < 400) {
    result = 'Low';
    tips = 'You are doing great! Keep up the good work!';
  } else if (score >= 400 && score < 800) {
    result = 'Medium';
    tips =
      'You are doing okay, but there is room for improvement.' +
      '\n' +
      'Try to reduce your carbon footprint by using public transportation, carpooling, and eating less animal-based products.';
  } else {
    result = 'High';
    tips =
      'You have a high carbon footprint. ' +
      '\n' +
      'Try to reduce your carbon footprint by using public transportation, carpooling, and eating less animal-based products.';
  }

  calcQuiz.innerHTML = `Your carbon footprint is ${result}!`;
  calcQuiz.innerHTML += `<br> Ways to improve improve: ${tips}`;
  calcQuiz.style.fontSize = '1.2rem';
  calcQuiz.style.marginTop = '3rem';
}

function changeType() {
  if (count <= 2) {
    type.textContent = 'Transportation';
  } else if (count > 2 && count < 5) {
    type.textContent = 'Food';
  } else if (count >= 5 && count <= 7) {
    type.textContent = 'Housing';
  } else {
    type.textContent = '';
  }

  if (count < questions.length) {
    type.textContent += ` (${count + 1} / ${questions.length}) `;
  }
}

function moveNext() {
  let answerVal = parseInt(slider.value);
  questions[count].answer = answerVal;
  score += questions[count].answer;

  count++;
  if (count < questions.length) {
    handleQuiz();
    showRangeValue();
  } else if (count === questions.length) {
    const buttonContainers = document.querySelector('.button-containers');
    buttonContainers.style.display = 'none';
    score /= 10;
    showResults();
  }

  changeType();
  showButtons();
}

function movePrev() {
  if (count > 0) {
    count--;
    handleQuiz();
    showRangeValue();
  }
  changeType();
  showButtons();
}

function handleQuiz() {
  question.textContent = questions[count].question;
  slider.min = questions[count].minVal;
  slider.max = questions[count].maxVal;
  questions[count].answer = slider.value;
  rangeMin.textContent = questions[count].minVal;
  rangeMax.textContent = questions[count].maxVal;
}

prevButton.addEventListener('click', () => {
  movePrev();
});

nextButton.addEventListener('click', () => {
  moveNext();
});

const questions = [
  {
    question: 'How many kilometers do you drive each week? (in km)',
    minVal: 0,
    maxVal: 600,
    answer: slider.value > 0 ? 600 - slider.value : 0,
  },
  {
    question: 'How far do you take public transportation (in km)',
    minVal: 0,
    maxVal: 600,
    answer: slider.value * 0.05,
  },
  {
    question: 'How often do you carpool? (in %)',
    minVal: 0,
    maxVal: 100,
    answer: slider.value * 0.05,
  },
  {
    question: 'How often do you eat animal-based products? (in %)',
    minVal: 0,
    maxVal: 100,
    answer: 100 - slider.value,
  },
  {
    question:
      'What percentage of your food is locally sourced or organic? (in %)',
    minVal: 0,
    maxVal: 100,
    answer: slider.value,
  },
  {
    question: 'How many people live in your house?',
    minVal: 0,
    maxVal: 10,
    answer: slider.value * 2,
  },
  {
    question: 'What is the size of your house? (in sqft)',
    minVal: 0,
    maxVal: 15000,
    answer: slider.value > 0 ? 15000 / slider.value : 0,
  },
  {
    question: 'How energy efficient is your home? (in %)',
    minVal: 0,
    maxVal: 100,
    answer: slider.value * 0.05,
  },
];
