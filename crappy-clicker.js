var scoreElement = document.getElementById("score-num");
var scoreNum = 0;
var autoClicker;
var MAXAUTOCLICKER = 10;
var nextAutoClickerLevelElement = document.getElementById("next-auto-clicker-level");
var nextStrongFingerLevelElement = document.getElementById("next-strong-finger-level");
var strongFingerLevel = 0;
var infoStrongFingerText = "";
var infoAutoClickerText = "";
var autoClickerLevel = 0;
var currentStrongFingerLevelElement = document.getElementById("current-strong-finger-level");
var currentAutoClickerLevelElement = document.getElementById("current-auto-clicker-level");
var currentStrongFingerAmtElement = document.getElementById("current-strong-finger-amt");
var nextStrongFingerAmtElement = document.getElementById("next-strong-finger-amt");
var currentAutoClickerAmtElement = document.getElementById("current-auto-clicker-amt");
var nextAutoClickerAmtElement = document.getElementById("next-auto-clicker-amt");
var strongFingerCostElement = document.getElementById("strong-finger-cost");
var autoClickerCostElement = document.getElementById("auto-clicker-cost");
var strongFingerCost = 10;
var autoClickerCost = 10;
var strongFingerBuyElement = document.getElementById("buy-strong-finger");
var autoClickerBuyElement = document.getElementById("buy-auto-clicker");
var strongFingerBuyShow = "none";
var autoClickerBuyShow = "none";
var progressTextElement = document.getElementById("progress-text");
var progressText = "";
var totalScore = 0;

if (JSON.parse(localStorage.getItem('totalScore')) !== "undefined" && JSON.parse(localStorage.getItem('totalScore')) !== "null") {
	loadGame();
}

function newGame() {
	scoreNum = 0;
	clearInterval(autoClicker);
	strongFingerLevel = 0;
	autoClickerLevel = 0;
	strongFingerCost = 10;
	autoClickerCost = 10;
	totalScore = 0;
}

function saveGame() {
 	localStorage.setItem('scoreNum', JSON.stringify(scoreNum));
 	localStorage.setItem('strongFingerLevel', JSON.stringify(strongFingerLevel));
 	localStorage.setItem('autoClickerLevel', JSON.stringify(autoClickerLevel));
 	localStorage.setItem('autoClickerCost', JSON.stringify(autoClickerCost));
 	localStorage.setItem('totalScore', JSON.stringify(totalScore));
}

function loadGame() {
	scoreNum = JSON.parse(localStorage.getItem('scoreNum'));
	strongFingerLevel = JSON.parse(localStorage.getItem('strongFingerLevel'));
	autoClickerLevel = JSON.parse(localStorage.getItem('autoClickerLevel'));
	autoClickerCost = JSON.parse(localStorage.getItem('autoClickerCost'));
	totalScore = JSON.parse(localStorage.getItem('totalScore'));	
}

function clickMe() {
	scoreNum += 1 + strongFingerLevel;
	totalScore += 1 + strongFingerLevel;
}

function buyStrongFinger() {
	if (scoreNum >= strongFingerCost) {
		scoreNum -= strongFingerCost;
		strongFingerLevel++;
		strongFingerCost += strongFingerLevel * 30;
	}
}

function infoStrongFinger() {
	infoStrongFingerText = "Make your finger STRONGER!!~ Current Level " + strongFingerLevel + ", Next Level " + (strongFingerLevel + 1);
	alert(infoStrongFingerText);
}

function buyAutoClicker() {
	if (scoreNum >= autoClickerCost && autoClickerLevel < MAXAUTOCLICKER) {
		scoreNum -= autoClickerCost;
		clearInterval(autoClicker);
		autoClicker = setInterval(autoClickerFunc, 1000);
		autoClickerLevel++;
		autoClickerCost += autoClickerLevel * 40;
	}
}

function autoClickerFunc() {
	scoreNum += 0.1 * autoClickerLevel;
	totalScore += 0.1 * autoClickerLevel;
}

function infoAutoClicker() {
	infoAutoClickerText = "Increase your score AUTOMAGICALLY!! Current Level " + autoClickerLevel + ", Next Level " + (autoClickerLevel + 1);
	alert(infoAutoClickerText);
}

function showItems() {
	if (scoreNum >= strongFingerCost) {
		strongFingerBuyShow = "visible";
	} else {
		strongFingerBuyShow = "hidden";
	}
	if (scoreNum >= autoClickerCost && autoClickerLevel < MAXAUTOCLICKER) {
		autoClickerBuyShow = "visible";
	} else {
		autoClickerBuyShow = "hidden";
	}
}

function updateProgressText() {
	if (totalScore < 10) {
		progressText = "";
	} else if (totalScore >= 10 && totalScore < 20) {
		progressText = "You're a clicking CHAPION!";
	} else if (totalScore >= 20) {
		progressText = "You're a clicking MONSTR!!!";
	}
}

function draw() {
	scoreElement.innerHTML = scoreNum.toFixed(0);
	nextStrongFingerLevelElement.innerHTML = strongFingerLevel + 1;
	currentStrongFingerLevelElement.innerHTML = strongFingerLevel;
	nextStrongFingerAmtElement.innerHTML = strongFingerLevel + 2;
	currentStrongFingerAmtElement.innerHTML = strongFingerLevel + 1;
	strongFingerCostElement.innerHTML = strongFingerCost;
	nextAutoClickerLevelElement.innerHTML = autoClickerLevel + 1;
	currentAutoClickerLevelElement.innerHTML = autoClickerLevel;
	currentAutoClickerAmtElement.innerHTML = " -- " + (0.1 * autoClickerLevel).toFixed(1) + " clicks per sec";
	nextAutoClickerAmtElement.innerHTML = ((0.1 * autoClickerLevel) + 0.1).toFixed(1);
	autoClickerCostElement.innerHTML = autoClickerCost;
	strongFingerBuyElement.style.visibility = strongFingerBuyShow;
	autoClickerBuyElement.style.visibility = autoClickerBuyShow;
	progressTextElement.innerHTML = progressText;
}

function main() {
	showItems();
	updateProgressText();
	draw();
	requestAnimationFrame(main);
	saveGame();
}

main();