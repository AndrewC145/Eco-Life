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
  let result = 'test';
  let tips = 'test';
  calcQuiz.innerHTML = `Your carbon footprint is ${result}!`;
  calcQuiz.innerHTML += `<br> Ways to improve improve: ${tips}`;
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
  count++;
  if (count < questions.length) {
    handleQuiz();
    showRangeValue();
  } else if (count === questions.length) {
    const buttonContainers = document.querySelector('.button-containers');
    buttonContainers.style.display = 'none';
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
  slider.value = questions[count].answer;
  slider.min = questions[count].minVal;
  slider.max = questions[count].maxVal;
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
    answer: slider.value,
  },
  {
    question: 'How far do you take public transportation (in km)',
    minVal: 0,
    maxVal: 600,
    answer: slider.value,
  },
  {
    question: 'How often do you carpool? (in %)',
    minVal: 0,
    maxVal: 100,
    answer: slider.value,
  },
  {
    question: 'How often do you eat animal-based products? (in %)',
    minVal: 0,
    maxVal: 100,
    answer: slider.value,
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
    answer: slider.value,
  },
  {
    question: 'What is the size of your house? (in sqft)',
    minVal: 0,
    maxVal: 15000,
    answer: slider.value,
  },
  {
    question: 'How energy efficient is your home? (in %)',
    minVal: 0,
    maxVal: 100,
    answer: slider.value,
  },
];
