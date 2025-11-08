// script.js

function updateClock() {
  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12 || 12;
  const padded = (num) => (num < 10 ? "0" + num : num);

  const timeString = `${padded(hours)}:${padded(minutes)}:${padded(seconds)} ${ampm}`;
  document.getElementById("clock").textContent = timeString;

  const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
  const dateString = now.toLocaleDateString("en-US", options);
  document.getElementById("date").textContent = dateString;
}

// Call every second
setInterval(updateClock, 1000);
updateClock();

// 🌙 Theme Toggle
const toggleButton = document.getElementById("theme-toggle");
toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  const isLight = document.body.classList.contains("light-mode");
  toggleButton.textContent = isLight ? "🌞 Light Mode" : "🌙 Dark Mode";
});
