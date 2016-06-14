animisition
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName(){
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name',myName);
	myHeading.textContent ='Pushing Coding just for Me, '+ myName;
}
if(!localStorage.getItem('name')){
   setUserName();
}  else {
   var storedName=localStorage.getItem('name');
   myHeading.textContent= 'Pushing Code Just for Me, '+ storedName;
}
 myButton.onclick= function(){
	setUserName();
}   

var myImage= document.querySelector('img');

myImage.onclick = function(){
	var mySrc= myImage.getAttribute('src');
	if (mySrc==='images/hotcode.png'){
		myImage.setAttribute ('src','images/hotter.png');
	} else {
		myImage.setAttribute('src','images/hotcode.png');
	}
}
$().click

$('.header')$.(sticky);
$('header').on('sticky-start',function)
/* 1.add lightbox
1.1 to make site fun and engaging*/
alert("DEREK");