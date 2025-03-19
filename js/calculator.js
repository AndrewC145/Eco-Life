const slider = document.querySelector('.slider');
const output = document.querySelector('.output');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const question = document.querySelector('.question');
const rangeMin = document.querySelector('.range-left');
const rangeMax = document.querySelector('.range-right');
const type = document.querySelector('.type');

document.addEventListener('DOMContentLoaded', () => {
  showRangeValue();
  prevButton.style.visibility = 'hidden';
});

function showRangeValue() {
  output.textContent = slider.value;
}
slider.addEventListener('input', showRangeValue);

let count = 0;

function showButtons() {
  if (count === 0) {
    prevButton.style.visibility = 'hidden';
  } else if (count > 0) {
    prevButton.style.visibility = 'visible';
  }

  if (count === questions.length - 1) {
    nextButton.style.visibility = 'hidden';
  } else {
    nextButton.style.visibility = 'visible';
  }
}

function changeType() {
  if (count <= 2) {
    type.textContent = 'Transportation';
  } else if (count > 2 && count < 5) {
    type.textContent = 'Food';
  } else {
    type.textContent = 'Housing';
  }
}

function changeValues() {}

function moveNext() {
  if (count < questions.length - 1) {
    count++;
    question.textContent = questions[count].question;
    slider.value = questions[count].answer;
    rangeMin.textContent = questions[count].minVal;
    rangeMax.textContent = questions[count].maxVal;
    showRangeValue();
  }

  changeType();
  showButtons();
}

function movePrev() {
  if (count > 0) {
    count--;
    question.textContent = questions[count].question;
    slider.value = questions[count].answer;
    showRangeValue();
  }
  changeType();
  showButtons();
}

prevButton.addEventListener('click', () => {
  movePrev();
});

nextButton.addEventListener('click', () => {
  console.log(count);
  moveNext();
});

const questions = [
  {
    question: 'How many kilometers do you drive each week?',
    minVal: 0,
    maxVal: 600,
    answer: slider.value,
  },
  {
    question: 'How far do you take public transportation ',
    minVal: 0,
    maxVal: 600,
    answer: slider.value,
  },
  {
    question: 'How often do you carpool?',
    minVal: 0,
    maxVal: 100,
    answer: slider.value,
  },
  {
    question: 'How often do you eat animal-based products?',
    minVal: 0,
    maxVal: 100,
    answer: slider.value,
  },
  {
    question: 'What percentage of your food is locally sourced or organic?',
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
    question: 'What is the size of your house?',
    minVal: 0,
    maxVal: 15000,
    answer: slider.value,
  },
  {
    question: 'How energy efficient is your home?',
    minVal: 0,
    maxVal: 100,
    answer: slider.value,
  },
];
