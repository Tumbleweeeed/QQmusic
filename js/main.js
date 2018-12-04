// 左右箭头
var arrowLeft = document.querySelector('.mod-left');
var arrowRight = document.querySelector('.mod-right');
var section1 = document.querySelector('.screen2');
var songCmdList = document.querySelector('.songCmd-list');
section1.onmouseover=function showArrow(){
	arrowLeft.style.transform="translateX(100%)";
	arrowRight.style.transform="translateX(-100%)";
}
section1.onmouseout=function hiddenArrow(){
	arrowLeft.style.transform="translateX(-100%)";
	arrowRight.style.transform="translateX(100%)";
}
console.log(songCmdList);
var i = 0;
arrowRight.onclick = function(){
	
	++i;
	if(i==4){
		i = 0;
	}
	var j = '-'+i*10+'%';
	console.log(j);
	songCmdList.style.transform="translateX("+j+")";
	
	console.log(i);
}