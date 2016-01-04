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

function newGame() {
	scoreNum = 0;
	clearInterval(autoClicker);
	nextAutoClickerLevelElement.innerHTML = 1;
	nextStrongFingerLevelElement.innerHTML = 1;
	currentStrongFingerLevelElement.innerHTML = 0;
	currentAutoClickerLevelElement.innerHTML = 0;
	strongFingerLevel = 0;
	autoClickerLevel = 0;
	currentStrongFingerAmtElement.innerHTML = 1;
	nextStrongFingerAmtElement.innerHTML = 2;
	currentAutoClickerAmtElement.innerHTML = "";
	nextAutoClickerAmtElement.innerHTML = 0.1;
	strongFingerCostElement.innerHTML = 10;
	autoClickerCostElement.innerHTML = 10;
	strongFingerCost = 10;
	autoClickerCost = 10;
	strongFingerBuyElement.style.visibility = "hidden";
	autoClickerBuyElement.style.visibility = "hidden";
}

function clickMe() {
	scoreNum += 1 + strongFingerLevel;
}

function buyStrongFinger() {
	if (scoreNum >= strongFingerCost) {
		scoreNum -= strongFingerCost;
		strongFingerLevel++;
		strongFingerCost += strongFingerLevel * 30;
		nextStrongFingerLevelElement.innerHTML = strongFingerLevel + 1;
		currentStrongFingerLevelElement.innerHTML = strongFingerLevel;
		nextStrongFingerAmtElement.innerHTML = strongFingerLevel + 2;
		currentStrongFingerAmtElement.innerHTML = strongFingerLevel + 1;
		strongFingerCostElement.innerHTML = strongFingerCost;
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
		nextAutoClickerLevelElement.innerHTML = autoClickerLevel + 1;
		currentAutoClickerLevelElement.innerHTML = autoClickerLevel;
		currentAutoClickerAmtElement.innerHTML = " -- " + (0.1 * autoClickerLevel).toFixed(1) + " clicks per sec";
		nextAutoClickerAmtElement.innerHTML = ((0.1 * autoClickerLevel) + 0.1).toFixed(1);
		autoClickerCostElement.innerHTML = autoClickerCost;
	}
}

function autoClickerFunc() {
	scoreNum += 0.1 * autoClickerLevel;
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

function draw() {
	scoreElement.innerHTML = scoreNum.toFixed(0);
	strongFingerBuyElement.style.visibility = strongFingerBuyShow
	autoClickerBuyElement.style.visibility = autoClickerBuyShow
}

function main() {
	showItems();
	draw();
	requestAnimationFrame(main);
}

main();