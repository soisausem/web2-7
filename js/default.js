var number = Math.floor(Math.random()*3);
var answer = parseInt(window.prompt('数字当てゲーム。0～3の数字を入れよう！'));

var message;
if(answer === number){
	message = 'あたり！';
}else if(answer < number){
	message = '残念！もっと大きいです';
}else if(number < answer){
	message = '残念！もっと小さいです';
}else{
	message = '0～3の数字を入れよう';
}

document.getElementById('choice').textContent = message;
