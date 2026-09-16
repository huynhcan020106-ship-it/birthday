const screens = { intro: document.getElementById("introScreen"), celebration: document.getElementById("celebrationScreen"), memories: document.getElementById("memoriesScreen"), final: document.getElementById("finalScreen") };

if (window.QRCode && document.getElementById("qrCode")) {
	new QRCode(document.getElementById("qrCode"), {
		text: window.location.href,
		width: 48,
		height: 48,
		colorDark: "#17131d",
		colorLight: "#f8f1e7",
		correctLevel: QRCode.CorrectLevel.M
	});
}

function showScreen(nextScreen) {
	Object.values(screens).forEach((screen) => {
		const active = screen === nextScreen;
		screen.classList.toggle("is-active", active);
		screen.setAttribute("aria-hidden", String(!active));
	});
}

function makeConfetti() {
	const confetti = document.getElementById("confetti");
	const colors = ["#ee806d", "#ffb19f", "#ffe1bc", "#8ea9a1", "#f8f1e7"];
	confetti.innerHTML = "";
	for (let index = 0; index < 56; index += 1) {
		const piece = document.createElement("i");
		piece.style.left = `${Math.random() * 100}%`;
		piece.style.background = colors[index % colors.length];
		piece.style.animationDelay = `${Math.random() * 1.8}s`;
		confetti.appendChild(piece);
	}
}

function makeHearts() {
	const field = document.getElementById("heartField");
	field.innerHTML = "";
	for (let index = 0; index < 18; index += 1) {
		const heart = document.createElement("i");
		heart.textContent = index % 2 ? "♡" : "♥";
		heart.style.left = `${Math.random() * 100}%`;
		heart.style.fontSize = `${12 + Math.random() * 18}px`;
		heart.style.animationDelay = `${Math.random() * 4}s`;
		field.appendChild(heart);
	}
}

document.getElementById("giftButton").addEventListener("click", () => { makeConfetti(); showScreen(screens.celebration); });
document.getElementById("memoriesButton").addEventListener("click", () => showScreen(screens.memories));
document.getElementById("finalButton").addEventListener("click", () => { makeHearts(); showScreen(screens.final); });
document.getElementById("replayButton").addEventListener("click", () => { showScreen(screens.intro); window.scrollTo({ top: 0, behavior: "smooth" }); });
