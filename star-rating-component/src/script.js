const stars = document.querySelectorAll(".star");
const messageBox = document.querySelector(".message");

stars.forEach((star) => {
  star.addEventListener("click", () => {
    const rating = star.getAttribute("data-value");
    highlightStars(rating);
    updateRating(rating);
    changeMessage(rating);
  });
});

const messages = [
  "We're sorry to hear you that had a bad exprience. We would like to learn more about what happend and how we can make things right.",
  "we apologize for the incovenience you exprienced. We appreciate your feedback and would like to work with you to address any issues.",
  "Thank you for your feedback. We sorry to hear that your exprience wasnt perfect. We would love to hear more about your concerns to see how we can improve.",
  "Thank you for your positive feedback! We're glad to know that you had a grat exprience and we appreciate your support.",
  "Excellent! We're thrilled to hear you had such a positive exprience.Thank you for choosing our platform.",
];

function changeMessage(rating) {
  messageBox.textContent = messages[rating - 1];
}

function updateRating(rating) {
  messageBox.textContent = `You've rated with ${rating} star${
    rating === "1" ? "" : "s"
  }!`;
}

function highlightStars(count) {
  for (let i = 0; i < stars.length; i++) {
    stars[i].classList.toggle("active", i < count);
  }
}

function resetStars() {
  stars.forEach((star) => {
    star.classList.remove("active");
  });
  messageBox.textContent = "Select your rating";
}
