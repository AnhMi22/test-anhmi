var players=[];
var markers=['X','O'];
var choose= 0;
players[0]='Player1';
players[1]='Player2';
var score=[0,0];
var endvalue=[7,56,73,146,84,292,265,448];
var endplay= false;
function play(clickedDiv,n){
	if(!endplay){
	score[choose]+=n;
	clickedDiv.onclick = '';
	clickedDiv.innerHTML = "<span>" + markers[choose] + "</span>";
	ktEnd();
	if(!endplay){
	playClick();
	}
}
}
function ktEnd() {
	for(var i=0;i<endvalue.length;i++){
		if((score[choose] & endvalue[i]) == endvalue[i])
		{
			document.getElementById("whosePlayers").innerText=players[choose] + " thắng !";
			endplay= true;

		}}

		if((score[0]+score[1])==511&& (!endplay)){
		document.getElementById("whosePlayers").innerText="GAME OVER!!!\n Bấm F5 để chơi lại";
		endplay= true;
	}
}
function playClick()
{
	if(choose==0) choose = 1;
	else choose = 0;
	document.getElementById("whosePlayers").innerText="Lượt chơi của " + players[choose];
}