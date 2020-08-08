var color=makeColor(6);
var squareColor=document.querySelectorAll(".square");
for(var i=0;i<squareColor.length;i++){
	squareColor[i].style.backgroundColor=color[i];
}

var colorRandom=randomColor();
var colorDisplayed=document.querySelector(".colorDisplay");
var isCorrect=document.querySelector(".isCorrect");
var head=document.querySelector(".heading");
var reset=document.querySelector(".newGame");
var easybtn=document.querySelector(".easybtn");
var hardbtn=document.querySelector(".hardbtn");
colorDisplayed.textContent=colorRandom;
for(var i=0;i<squareColor.length;i++){
squareColor[i].addEventListener("click",function(){

	var pickedColor=this.style.backgroundColor;
	

	if(pickedColor==colorRandom){
		isCorrect.textContent="Correct";
		changeColor(pickedColor);
		reset.textContent="Play Again?";

	}
	else{
		isCorrect.textContent="Try Again";
		this.style.backgroundColor="#232323"
	}
});
}
function changeColor(pickedColor){
	for(var i=0;i<color.length;i++){
		squareColor[i].style.backgroundColor=pickedColor;}
		head.style.backgroundColor=pickedColor;

}

function randomColor(){
	var random=Math.floor(Math.random() * color.length);
	return color[random];
}

function makeColor(num){
	var arr=[];
	for(var i=0;i<num;i++){
		var r=Math.floor(Math.random()*256);
		var g=Math.floor(Math.random()*256);
		var b=Math.floor(Math.random()*256);
		arr[i]="rgb("+r+", " +g+", "+b+")";
	}
	return arr;
}
reset.addEventListener("click",function(){
	color=makeColor(6);
	colorRandom=randomColor();
	colorDisplayed.textContent=colorRandom;
	for(var i=0;i<squareColor.length;i++){
	squareColor[i].style.backgroundColor=color[i];
	
}
head.style.backgroundColor="steelblue";
isCorrect.textContent="";
});

easybtn.addEventListener("click",function(){
	hardbtn.classList.remove("selected");
	easybtn.classList.add("selected");
	color=makeColor(3);
	colorRandom=randomColor();
	colorDisplayed.textContent=colorRandom;
	for(var i=0;i<squareColor.length;i++){
		if(color[i]){
			squareColor[i].style.backgroundColor=color[i];
		}
		else{
			squareColor[i].style.backgroundColor="#232323";
		}
	}
	head.style.backgroundColor="steelblue";
	isCorrect.textContent="";

});
hardbtn.addEventListener("click",function(){
	easybtn.classList.remove("selected");
	hardbtn.classList.add("selected");
	color=makeColor(6);
	colorRandom=randomColor();
	colorDisplayed.textContent=colorRandom;
	for(var i=0;i<squareColor.length;i++){
		squareColor[i].style.backgroundColor=color[i];}
		head.style.backgroundColor="steelblue";
		isCorrect.textContent="";
});

