var scoreElement = document.getElementById("score-num")
var scoreNum = 0;
var strongFinger = 0;
var currentScore = 0;

function newGame() {
	scoreNum = 0;
	scoreElement.innerHTML = "0";
	currentScore = 0;
	strongFinger = 0;
}

function clickMe() {
	scoreNum = scoreNum + 1 + strongFinger;
	scoreElement.innerHTML = currentScore + scoreNum;
}

function buyStrongFinger() {
	if (scoreElement.innerHTML >= 10) {
		scoreNum = 0;
		scoreElement.innerHTML = scoreElement.innerHTML - 10;
		currentScore = Number(scoreElement.innerHTML);
		strongFinger = 1;
	};
}

function infoStrongFinger() {
	alert("you clicked info for strong finger");
}

function buyAutoClicker() {
	alert("you clicked buy for auto clicker");
}

function infoAutoClicker() {
	alert("you clicked info for auto clicker");
}