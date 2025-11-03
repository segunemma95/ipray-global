// Countdown Timer
const countdownDate = new Date("Dec 12, 2025 00:00:00").getTime();
const timer = document.getElementById("timer");

setInterval(() => {
    const now = new Date().getTime();
    const diff = countdownDate - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((diff % (1000 * 60)) / 1000);

    timer.innerHTML = `${days}d : ${hours}h : ${mins}m : ${secs}s`;
}, 1000);
