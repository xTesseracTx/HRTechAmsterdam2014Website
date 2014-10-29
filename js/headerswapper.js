
window.onload = choosePic;

var myPix = new Array("../img/headers/h-1.jpg","../img/headers/h-2.jpg","../img/headers/h-3.jpg","../img/headers/h-4.jpg","../img/headers/h-5.jpg");

function choosePic() {
	randomNum = Math.floor((Math.random() * myPix.length));
	document.getElementById("myHeader").src = myPix[randomNum];
}

