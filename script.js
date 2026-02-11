const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const msg = document.getElementById("message");

yesBtn.addEventListener("click", () => {
  msg.textContent = "YES!!!! 💞 Okay date night is locked innnn, i love you.";
  confettiHearts();
});

noBtn.addEventListener("mouseover", () => {
  // playful “no” button dodge on hover
  const x = Math.random() * 240 - 120;
  const y = Math.random() * 180 - 90;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

function confettiHearts() {
  // tiny confetti without libraries
  for (let i = 0; i < 24; i++) {
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
