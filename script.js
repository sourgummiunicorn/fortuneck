let quote = document.getElementById("quote");
let randomQuotes = [
	"Never give up",
	"No pain no gain",
	"Life is beautiful",
	"If life gives ",
	"If you're not changing it, you're choosing it",
	"You are destined for JavaScript!",
	"An exciting JS assignment lies ahead of you"
];

function changeQuotes() {
	let i = Math.floor(Math.random() * randomQuotes.length);
	quote.innerText = randomQuotes[i];
}

changeQuotes();