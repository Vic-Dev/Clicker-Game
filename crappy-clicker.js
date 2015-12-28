var scoreElement = document.getElementById("score-num");
var scoreNum = 0;
var strongFinger = 0;
var autoClicker = [];
var MAXAUTOCLICKER = 10;
var autoClickerLevelElement = document.getElementById("next-auto-clicker-level");
var strongFingerLevelElement = document.getElementById("next-strong-finger-level");
var strongFingerLevel = 0;
var infoStrongFingerText = "";
var strongFingerNextLevel = 0;
var infoAutoClickerText = "";
var autoClickerLevel = 0;
var autoClickerNextLevel = 0;
var currentStrongFingerLevelElement = document.getElementById("current-strong-finger-level");
var currentAutoClickerLevelElement = document.getElementById("current-auto-clicker-level");

function newGame() {
	scoreNum = 0;
	scoreElement.innerHTML = scoreNum;
	strongFinger = 0;
	for (var i = 0; i < autoClicker.length; i++) {
		window.clearInterval(autoClicker[i]);
	}
	autoClicker = [];
	autoClickerLevelElement.innerHTML = 1;
	strongFingerLevelElement.innerHTML = 1;
	currentStrongFingerLevelElement.innerHTML = 0;
	currentAutoClickerLevelElement.innerHTML = 0;
	strongFingerLevel = 0;
	strongFingerNextLevel = 0;
	autoClickerLevel = 0;
	autoClickerNextLevel = 0;
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
		strongFingerLevel++;
		strongFingerNextLevel = strongFingerLevel + 1;
		strongFingerLevelElement.innerHTML = strongFingerNextLevel;
		currentStrongFingerLevelElement.innerHTML = strongFingerLevel;
	}
}

function infoStrongFinger() {
	strongFingerNextLevel = strongFingerLevel + 1;
	infoStrongFingerText = "Make your finger STRONGER!!~ Current Level " + strongFingerLevel + ", Next Level " + strongFingerNextLevel;
	alert(infoStrongFingerText);
}

function buyAutoClicker() {
	if (scoreNum >= 10 && autoClicker.length < MAXAUTOCLICKER) {
		scoreNum -= 10;
		scoreElement.innerHTML = scoreNum;
		autoClicker.push(window.setInterval(autoClickerFunc, 1000));
		autoClickerLevel = autoClicker.length
		autoClickerNextLevel = autoClickerLevel + 1
		autoClickerLevelElement.innerHTML = autoClickerNextLevel;
		currentAutoClickerLevelElement.innerHTML = autoClickerLevel;
	}
}

function autoClickerFunc() {
	scoreNum++;
	scoreElement.innerHTML = scoreNum;
}

function infoAutoClicker() {
	autoClickerNextLevel = autoClickerLevel + 1;
	infoAutoClickerText = "Increase your score AUTOMAGICALLY!! Current Level " + autoClickerLevel + ", Next Level " + autoClickerNextLevel;
	alert(infoAutoClickerText);
}