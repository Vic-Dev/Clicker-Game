var scoreElement = document.getElementById("score-num")
var scoreNum = 0;

function newGame() {
	scoreNum = 0;
	scoreElement.innerHTML = "0";
}

function clickMe() {
	scoreNum++;
	scoreElement.innerHTML = scoreNum;
}