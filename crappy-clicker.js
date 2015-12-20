var scoreElement = document.getElementById("score-num");
var scoreNum = 0;
var strongFinger = 0;
var autoClicker = [];
var MAXAUTOCLICKER = 10;

function newGame() {
	scoreNum = 0;
	scoreElement.innerHTML = scoreNum;
	strongFinger = 0;
	for (var i = 0; i < autoClicker.length; i++) {
		window.clearInterval(autoClicker[i]);
	}
	autoClicker = [];
}

function clickMe() {
	scoreNum += 1 + strongFinger;
	scoreElement.innerHTML = scoreNum;
}

function buyStrongFinger() {
	if (scoreNum >= 10) {
		scoreNum -= 10;
		scoreElement.innerHTML = scoreNum;
		strongFinger = 1;
	}
}

function infoStrongFinger() {
	alert("you clicked info for strong finger");
}

function buyAutoClicker() {
	if (scoreNum >= 10 && autoClicker.length < MAXAUTOCLICKER) {
		scoreNum -= 10;
		scoreElement.innerHTML = scoreNum;
		autoClicker.push(window.setInterval(autoClickerFunc, 1000));
	}
}

function autoClickerFunc() {
	scoreNum++;
	scoreElement.innerHTML = scoreNum;
}

function infoAutoClicker() {
	alert("you clicked info for auto clicker");
}