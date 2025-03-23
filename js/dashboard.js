const hamburgerIcon = document.querySelector('.hamburger-icon');
const sidebar = document.querySelector('.sidebar');

hamburgerIcon.addEventListener('click', () => {
    sidebar.classList.toggle('active');

    hamburgerIcon.classList.toggle('open');
});

const quotes = [
    { text: "The Earth is what we all have in common.", author: "Wendell Berry" },
    { text: "Do something drastic—cut the plastic!", author: "Daniel Zhong" },
    { text: "The greatest threat to our planet is the belief that someone else will save it.", author: "Robert Swan" },
    { text: "Reduce, reuse, recycle.", author: "Andrew Cao" },
    { text: "The environment is where we all meet.", author: "Lady Bird Johnson" },
    { text:"Simply by changing our eating habits we can significantly reduce pollution, and in doing so improve our health and the health of generations to come.",author:"Shrey Patel"}
];

const tips = [
    "Turn off the tap while brushing your teeth to save water.",
    "Switch to reusable shopping bags to reduce plastic waste.",
    "Unplug electronics when not in use to save energy.",
    "Use public transport or carpool to reduce your carbon footprint.",
    "Compost your kitchen waste to reduce landfill waste."
];

function generateRandomContent() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    const randomTip = tips[Math.floor(Math.random() * tips.length)];

    const quoteText = document.querySelector('.quote-card .text-container p');
    const quoteAuthor = document.querySelector('.quote-card .quote-author p');
    
    quoteText.textContent = `"${randomQuote.text}"`;
    quoteAuthor.textContent = `- ${randomQuote.author}`;

    const tipText = document.querySelector('.tips-card p');
    tipText.textContent = randomTip;
}

window.addEventListener('DOMContentLoaded', generateRandomContent);