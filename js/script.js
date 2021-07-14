window.addEventListener('scroll', mySticky);
window.addEventListener('scroll', myScroll);


/*let tab = ; */
/***************************for tabs********************************/

let tab_1 = document.getElementById('tab_1');
document.getElementById('tab_main').display = 'block';
let prev_tab = 'tab_11';
let prev_block = 'tab_main';
tab_1.onclick = function(){
	document.getElementById(prev_tab).style.borderBottom = "0px solid red";
	tab_1.style.borderBottom = "3px solid red";
	prev_tab = 'tab_1';
	document.getElementById(prev_block).style.display = 'none';
	document.getElementById('tab_sets').style.display = 'block';
	prev_block = 'tab_sets';

};

let tab_2 = document.getElementById('tab_2');
tab_2.onclick = function(){
	document.getElementById(prev_tab).style.borderBottom = "0px solid red";
	tab_2.style.borderBottom = "3px solid red";
	prev_tab = 'tab_2';
};

let tab_3 = document.getElementById('tab_3');
tab_3.onclick = function(){
	document.getElementById(prev_tab).style.borderBottom = "0px solid red";
	tab_3.style.borderBottom = "3px solid red";
	prev_tab = 'tab_3';
};

let tab_4 = document.getElementById('tab_4');
tab_4.onclick = function(){
	document.getElementById(prev_tab).style.borderBottom = "0px solid red";
	tab_4.style.borderBottom = "3px solid red";
	prev_tab = 'tab_4';
};

let tab_5 = document.getElementById('tab_5');
tab_5.onclick = function(){
	document.getElementById(prev_tab).style.borderBottom = "0px solid red";
	tab_5.style.borderBottom = "3px solid red";
	prev_tab = 'tab_5';
};


let tab_6 = document.getElementById('tab_6');
tab_6.onclick = function(){
	document.getElementById(prev_tab).style.borderBottom = "0px solid red";
	tab_6.style.borderBottom = "3px solid red";
	prev_tab = 'tab_6';
};


let tab_7 = document.getElementById('tab_7');
tab_7.onclick = function(){
	document.getElementById(prev_tab).style.borderBottom = "0px solid red";
	tab_7.style.borderBottom = "3px solid red";
	prev_tab = 'tab_7';
};


let tab_8 = document.getElementById('tab_8');
tab_8.onclick = function(){
	document.getElementById(prev_tab).style.borderBottom = "0px solid red";
	tab_8.style.borderBottom = "3px solid red";
	prev_tab = 'tab_8';
};


let tab_9 = document.getElementById('tab_9');
tab_9.onclick = function(){
	document.getElementById(prev_tab).style.borderBottom = "0px solid red";
	tab_9.style.borderBottom = "3px solid red";
	prev_tab = 'tab_9';
};


let tab_10 = document.getElementById('tab_10');
tab_10.onclick = function(){
	document.getElementById(prev_tab).style.borderBottom = "0px solid red";
	tab_10.style.borderBottom = "3px solid red";
	prev_tab = 'tab_10';
};

let tab_11 = document.getElementById('tab_11');
tab_11.onclick = function(){
	document.getElementById(prev_tab).style.borderBottom = "0px solid red";
	tab_11.style.borderBottom = "0px solid red";
	prev_tab = 'tab_10';
	document.getElementById(prev_block).style.display = 'none';
	document.getElementById('tab_main').style.display = 'block';
	prev_block = "tab_main";
};



/*******************************************************************/




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
	  if (prevScrollpos  < currentScrollPos) {
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