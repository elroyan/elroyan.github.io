/* script.js */
const messages = [
  "Are you sure? 😢",
  "Really sure? 💔",
  "Pookie please... 😭",
  "Don't break my heart... 🥺",
  "Think about it again... 💞",
  "You're the one for me! 💗",
  "Just one yes is all I need! 🌸",
  "I'll cry if you say no... 😿",
  "Okay... but what if I say pretty please? 🥹",
  "Okay fine... I accept my fate... 😢",
];

let messageIndex = 0;

function handleNoClick() {
  const noButton = document.querySelector(".no-button");
  const yesButton = document.querySelector(".yes-button");
  noButton.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;

  // Membesarkan tombol Yes setiap klik No
  const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
  yesButton.style.fontSize = `${currentSize * 1.3}px`;
}

function handleYesClick() {
  window.location.href = "yes_page.html";
}
