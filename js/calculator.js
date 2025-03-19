const slider = document.querySelector('.slider');
const output = document.querySelector('.output');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const question = document.querySelector('.question');
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

function moveNext() {
  if (count < questions.length - 1) {
    count++;
    question.textContent = questions[count].question;
    slider.value = questions[count].answer;
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

// sample questions for now
const questions = [
  {
    question: 'How many kilometers do you drive each week?',
    answer: slider.value,
  },
  {
    question: 'How often do you take public transportation',
    answer: slider.value,
  },
  {
    question: 'How often do you carpool?',
    answer: slider.value,
  },
  {
    question: 'How often do you eat animal-based products?',
    answer: slider.value,
  },
  {
    question: 'What percentage of your food is locally sourced or organic?',
    answer: slider.value,
  },
  {
    question: 'How many people live in your house?',
    answer: slider.value,
  },
  {
    question: 'What is the size of your house?',
    answer: slider.value,
  },
  {
    question: 'How energy efficient is your home?',
    answer: slider.value,
  },
];
