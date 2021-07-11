window.addEventListener('scroll', mySticky);
window.addEventListener('scroll', myScroll);

let navbar = document.getElementById("panel");
let sticky = navbar.offsetTop;
/******************for top menu**************/
function mySticky() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

/****************for bottom footer***********************/
let prevScrollpos = window.pageYOffset;
function myScroll(){
	  let currentScrollPos = window.pageYOffset;
	  if (prevScrollpos < currentScrollPos) {
	    document.getElementById("footer").style.bottom = "0px";
	  } else {
	    document.getElementById("footer").style.bottom = "-50px";
	  }
	  prevScrollpos = currentScrollPos;
}

$(document).ready(function(){
	$('.slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1800,
  dots:true,
  variableWidth:false
});
});