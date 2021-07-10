window.addEventListener('scroll', mySticky);
window.addEventListener('scroll', myScroll);

let navbar = document.getElementById("navbar");
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