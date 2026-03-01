function celebrate() {
    document.getElementById("surprise").style.display = "block";
    confettiBlast();
}

function confettiBlast() {
    for (let i = 0; i < 80; i++) {
        const confetti = document.createElement("div");
        confetti.innerHTML = Math.random() > 0.5 ? "🎉" : "💖";
        confetti.style.position = "fixed";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = "-20px";
        confetti.style.fontSize = Math.random() * 20 + 15 + "px";
        confetti.style.animation = "fall 3s linear";
        document.body.appendChild(confetti);

        setTimeout(() => confetti.remove(), 3000);
    }
}

const style = document.createElement("style");
style.innerHTML = `
@keyframes fall {
    to {
        transform: translateY(110vh) rotate(360deg);
        opacity: 0;
    }
}`;
document.head.appendChild(style);