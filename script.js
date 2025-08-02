const quotes = [
  "Believe in yourself!", "Keep going, you're doing great!", "Success is not final, failure is not fatal.",
  "You are stronger than you think.", "One step at a time.", "Dream big. Start small. Act now.",
  "Don't wait for opportunity. Create it.", "Push yourself, because no one else will.",
  "Do something today that your future self will thank you for.", "Mistakes are proof that you are trying.",
  "Start where you are. Use what you have. Do what you can.", "Discipline is the bridge between goals and accomplishment.",
  "The future depends on what you do today.", "Your only limit is your mind.", "It always seems impossible until it's done.",
  "Act as if what you do makes a difference. It does.", "Stay positive, work hard, make it happen.",
  "A little progress each day adds up to big results.", "You don’t have to be perfect to be amazing.",
  "Doubt kills more dreams than failure ever will.", "Make each day your masterpiece.",
  "If you’re going through hell, keep going.", "The only way to do great work is to love what you do.",
  "Every accomplishment starts with the decision to try.", "Be the energy you want to attract.",
  "Your vibe attracts your tribe.", "Focus on progress, not perfection.", "Small steps every day.",
  "The best view comes after the hardest climb.", "You are enough just as you are.",
  "Train your mind to see the good in every situation.", "You got this!",
  "Be fearless in the pursuit of what sets your soul on fire.", "Turn your wounds into wisdom.",
  "Don't be afraid to start over. It's a new chance.", "The harder you work for something, the greater you’ll feel when you achieve it.",
  "Stay patient and trust your journey.", "Take the risk or lose the chance.",
  "If not now, when?", "Action is the foundational key to all success.",
  "Great things never come from comfort zones.", "Work hard in silence. Let success be your noise.",
  "Don't quit. You're already in pain, get a reward from it.", "Be proud of how far you’ve come.",
  "You are doing better than you think.", "Keep your face always toward the sunshine—and shadows will fall behind you.",
  "You were born to be real, not perfect.", "Progress is progress, no matter how small.",
  "You don't have to see the whole staircase, just take the first step.",
  "Don't limit your challenges. Challenge your limits.",
  "Success doesn't come from what you do occasionally. It comes from what you do consistently.",
  "The expert in anything was once a beginner.", "Sometimes later becomes never. Do it now.",
  "Difficult roads often lead to beautiful destinations.",
  "Success is liking yourself, liking what you do, and liking how you do it.",
  "Believe you can and you're halfway there.",
  "Your life is your message to the world. Make sure it’s inspiring.",
  "Stop being afraid of what could go wrong and start being excited about what could go right.",
  "You don't have to be great to start, but you have to start to be great.",
  "Everything you’ve ever wanted is on the other side of fear."
];

function getRandomLightColor() {
  const r = Math.floor(200 + Math.random() * 55);
  const g = Math.floor(200 + Math.random() * 55);
  const b = Math.floor(200 + Math.random() * 55);
  return `rgb(${r}, ${g}, ${b})`; // Fixed: backticks for template literal
}

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const selectedQuote = quotes[randomIndex];
  document.getElementById("quote").textContent = selectedQuote;

  const lightColor = getRandomLightColor();
  document.body.style.backgroundColor = lightColor;
  document.getElementById("color-code").textContent = "Color: " + lightColor;

  if (typeof showRandomImage === "function") {
    showRandomImage(); // Optional image function
  }
}

function copyQuote() {
  const quote = document.getElementById("quote").textContent;
  navigator.clipboard.writeText(quote).then(() => {
    alert("Quote copied to clipboard!");
  });
}

function generatePassword() {
  const length = 12;
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+{}[]<>?";
  let password = "";

  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * chars.length);
    password += chars[index];
  }

  document.getElementById("password").value = password;
}

function copyPassword() {
  const passwordField = document.getElementById("password");
  navigator.clipboard.writeText(passwordField.value).then(() => {
    alert("Password copied to clipboard!");
  });
}
