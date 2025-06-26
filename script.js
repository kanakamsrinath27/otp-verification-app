let generatedOTP = "";
let timerInterval;
let retryCount = 0;
const maxRetries = 3;

function generateOTP() {
  if (retryCount >= maxRetries) {
    showToast("❌ Max attempts reached. Please wait before retrying.", true);
    return;
  }
  const userName = document.getElementById("name-input").value.trim();
  if (!userName) {
    showToast("⚠️ Please enter your name.", true);
    return;
  }
  localStorage.setItem("userName", userName);
  generatedOTP = Math.floor(1000 + Math.random() * 9000).toString();
  document.getElementById("otp-display").textContent = generatedOTP;
  document.getElementById("result").textContent = "";
  document.getElementById("result").className = "";
  document.getElementById("user-otp").value = "";
  startTimer(30);
  retryCount++;
  showToast("🔐 OTP Generated", false);
}

function verifyOTP() {
  const userOTP = document.getElementById("user-otp").value;
  const resultDiv = document.getElementById("result");

  if (!generatedOTP) {
    resultDiv.textContent = "Please generate an OTP first.";
    resultDiv.className = "error";
    return;
  }

  if (userOTP === generatedOTP) {
    clearInterval(timerInterval);
    document.getElementById("timer").textContent = "";
    navigator.vibrate?.(200);
    showToast("✅ Verified", false);
    setTimeout(() => window.location.href = "welcome.html", 1000);
  } else {
    resultDiv.textContent = "Incorrect OTP. Please try again.";
    resultDiv.className = "error";
    navigator.vibrate?.([100, 50, 100]);
    showToast("❌ Incorrect OTP", true);
  }
}

function startTimer(seconds) {
  clearInterval(timerInterval);
  let remaining = seconds;
  const timerDisplay = document.getElementById("timer");
  timerDisplay.style.animation = "pulse 1s infinite alternate";

  timerDisplay.textContent = `⏳ Time left: ${remaining} sec`;

  timerInterval = setInterval(() => {
    remaining--;
    if (remaining <= 0) {
      clearInterval(timerInterval);
      timerDisplay.textContent = "⌛ OTP expired. Please generate a new one.";
      generatedOTP = "";
      retryCount = 0;
      timerDisplay.style.animation = "none";
    } else {
      timerDisplay.textContent = `⏳ Time left: ${remaining} sec`;
    }
  }, 1000);
}

function showToast(message, isError) {
  const toast = document.createElement("div");
  toast.textContent = message;
  toast.style.position = "fixed";
  toast.style.bottom = "20px";
  toast.style.left = "50%";
  toast.style.transform = "translateX(-50%)";
  toast.style.background = isError ? "#dc3545" : "#28a745";
  toast.style.color = "#fff";
  toast.style.padding = "10px 20px";
  toast.style.borderRadius = "6px";
  toast.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.2)";
  toast.style.zIndex = "9999";
  toast.style.fontWeight = "bold";
  toast.style.opacity = "1";
  toast.style.transition = "opacity 0.5s ease";

  document.body.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = "0";
    setTimeout(() => document.body.removeChild(toast), 500);
  }, 3000);
}

// Dark Mode Toggle
function toggleTheme() {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  updateThemeLabel(isDark);
}

function updateThemeLabel(isDark) {
  const themeLabel = document.getElementById("theme-label");
  if (themeLabel) {
    themeLabel.textContent = isDark ? "🌙 Dark Mode" : "☀️ Light Mode";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const toggleSwitch = document.getElementById("theme-toggle");
  const savedTheme = localStorage.getItem("theme");
  const isDark = savedTheme === "dark";
  if (isDark) {
    document.body.classList.add("dark");
    toggleSwitch.checked = true;
  }
  updateThemeLabel(isDark);

  toggleSwitch?.addEventListener("change", toggleTheme);
});
