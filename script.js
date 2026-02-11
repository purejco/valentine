const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const msg = document.getElementById("message");
const music = document.getElementById("bgMusic");

// Try to start music on first interaction anywhere (works best on iPhone)
function startMusic() {
  if (!music) return;
  music.volume = 0.6;
  music.play().catch((err) => {
    console.log("Music blocked:", err);
    msg.textContent = "Tap again for the song 🎶";
  });
}

// First tap/click anywhere starts music (once)
document.addEventListener("click", startMusic, { once: true });
document.addEventListener("touchstart", startMusic, { once: true });

yesBtn.addEventListener("click", () => {
  startMusic(); // ensure music starts on YES
  msg.textContent = "guys she said YES LESSS GOO💞 okay date night is a lock,i wuv you<3";
  confettiHearts();
});

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 240 - 120;
  const y = Math.random() * 180 - 90;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

function confettiHearts() {
  for (let i = 0; i < 25; i++) {
    const s = document.createElement("span");
    s.textContent = ["💖","💘","💗","💞","💕"][Math.floor(Math.random()*5)];
    s.style.position = "fixed";
    s.style.left = Math.random() * 100 + "vw";
    s.style.top = "-10px";
    s.style.fontSize = (16 + Math.random() * 18) + "px";
    s.style.zIndex = 9999;
    document.body.appendChild(s);

    const fall = 1500 + Math.random() * 1200;

    s.animate(
      [
        { transform: "translateY(0)", opacity: 1 },
        { transform: `translateY(110vh) rotate(${Math.random()*360}deg)`, opacity: 0.9 }
      ],
      { duration: fall, easing: "ease-in" }
    );

    setTimeout(() => s.remove(), fall + 100);
  }
}
