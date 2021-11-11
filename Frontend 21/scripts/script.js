/* Slider */

var i = 0; 			/* Start Point */
var images = [];	/* Images Array */
var time = 6000;	/* Time Between Switch */
	 
/* Image List */
images[0] = "images/banner1.jpg";
images[1] = "images/banner2.jpg";

/* Change Image */
function changeImg(){
	document.slide.src = images[i];

	/* Check If Index Is Under Max */
	if(i < images.length - 1){
	  /* Add 1 to Index */
	  i++; 
	} else { 
		/* Reset to O */
		i = 0;
	}

	/* Run function every x seconds */
	setTimeout("changeImg()", time);
}

/* Run function when page loads */
window.onload=changeImg;

/* Bron: https://www.youtube.com/watch?v=4YQ4svkETS0&ab_channel=TraversyMedia */




/* Hamburgermenu */

var menuTrigger = document.querySelector('.hamburgermenu');
var mobileMenu = document.querySelector('.mobilemenu');

menuTrigger.addEventListener('click', toggleMenu);

function toggleMenu() {
	menuTrigger.classList.toggle('active');
	mobileMenu.classList.toggle('active');
}

