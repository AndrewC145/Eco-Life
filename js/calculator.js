const slider = document.querySelector('.slider');
const output = document.querySelector('.output');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

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

function moveNext() {
  if (count < questions.length - 1) {
    count++;
    slider.value = questions[count].answer;
    showRangeValue();
  }

  showButtons();
}

function movePrev() {
  if (count > 0) {
    count--;
    slider.value = questions[count].answer;
    showRangeValue();
  }

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
    question: 'How many kilometers do you drive each week?',
    answer: slider.value,
  },
  {
    question: 'How many kilometers do you drive each week?',
    answer: slider.value,
  },
  {
    question: 'How many kilometers do you drive each week?',
    answer: slider.value,
  },
  {
    question: 'How many kilometers do you drive each week?',
    answer: slider.value,
  },
];
