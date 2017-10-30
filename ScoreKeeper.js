var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var span1 = document.querySelector("#p1Display");
var span2 = document.querySelector("#p2Display");
var input = document.getElementById("number");
var winNum = document.getElementById("win");
var reset = document.querySelector("#reset");
var p1Score = 0;
var p2Score = 0;

var gameOver = false;
var winningScore = 0;



p1Button.addEventListener("click", function(){
	if(winningScore !== 0 ){
	if(!gameOver){
		p1Score++;
		if(p1Score === winningScore){
			span1.classList.add("winner")
			gameOver = true;
		}
		span1.textContent = p1Score;
	}
}else{
	alert("Enter score to fight:");
}
	
});

p2Button.addEventListener("click", function(){
	if(winningScore !== 0 ){
	if(!gameOver){
		p2Score++;
		if(p2Score === winningScore){
			span2.classList.add("winner");
			gameOver = true;
		}
		span2.textContent=p2Score;
	}
	}else{
	alert("Enter score to fight:");
	}
	
});

input.addEventListener("change", function(){
	winningScore = Number(input.value);
	winNum.textContent = input.value;
})

reset.addEventListener("click", function(){
	p1Score = 0;
	p2Score = 0; 
	winningScore = 0;
	gameOver = false;
	span1.textContent = 0;
	span2.textContent = 0;
	winNum.textContent = 0;
	input.value=0;
	span1.classList.remove("winner");
	span2.classList.remove("winner");
})