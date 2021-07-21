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
	document.getElementById(prev_type).style.borderBottom = "0px solid red";
	document.getElementById(prev_tab).style.borderBottom = "0px solid red";
	tab_2.style.borderBottom = "3px solid red";
	prev_tab = 'tab_2';
	document.getElementById(prev_block).style.display = 'none';
	document.getElementById('tab_rolls').style.display = 'block';
	prev_block = 'tab_rolls';
	for (elem in document.querySelectorAll('#tab_rolls .item')){
		elem.style.display = 'block';
	}
};

let tab_3 = document.getElementById('tab_3');
tab_3.onclick = function(){
	document.getElementById(prev_tab).style.borderBottom = "0px solid red";
	tab_3.style.borderBottom = "3px solid red";
	prev_tab = 'tab_3';
	document.getElementById(prev_block).style.display = 'none';
	document.getElementById('tab_sushi').style.display = 'block';
	prev_block = 'tab_sushi';

};

let tab_4 = document.getElementById('tab_4');
tab_4.onclick = function(){
	document.getElementById(prev_tab).style.borderBottom = "0px solid red";
	tab_4.style.borderBottom = "3px solid red";
	prev_tab = 'tab_4';
	document.getElementById(prev_block).style.display = 'none';
	document.getElementById('tab_pizza').style.display = 'block';
	prev_block = 'tab_pizza';

};

let tab_5 = document.getElementById('tab_5');
tab_5.onclick = function(){
	document.getElementById(prev_tab).style.borderBottom = "0px solid red";
	tab_5.style.borderBottom = "3px solid red";
	prev_tab = 'tab_5';
	document.getElementById(prev_block).style.display = 'none';
	document.getElementById('tab_burgers').style.display = 'block';
	prev_block = 'tab_burgers';

};


let tab_6 = document.getElementById('tab_6');
tab_6.onclick = function(){
	document.getElementById(prev_tab).style.borderBottom = "0px solid red";
	tab_6.style.borderBottom = "3px solid red";
	prev_tab = 'tab_6';
	document.getElementById(prev_block).style.display = 'none';
	document.getElementById('tab_woks').style.display = 'block';
	prev_block = 'tab_woks';

};


let tab_7 = document.getElementById('tab_7');
tab_7.onclick = function(){
	document.getElementById(prev_tab).style.borderBottom = "0px solid red";
	tab_7.style.borderBottom = "3px solid red";
	prev_tab = 'tab_7';
	document.getElementById(prev_block).style.display = 'none';
	document.getElementById('tab_garnirs').style.display = 'block';
	prev_block = 'tab_garnirs';

};


let tab_8 = document.getElementById('tab_8');
tab_8.onclick = function(){
	document.getElementById(prev_tab).style.borderBottom = "0px solid red";
	tab_8.style.borderBottom = "3px solid red";
	prev_tab = 'tab_8';
	document.getElementById(prev_block).style.display = 'none';
	document.getElementById('tab_soups').style.display = 'block';
	prev_block = 'tab_soups';

};


let tab_9 = document.getElementById('tab_9');
tab_9.onclick = function(){
	document.getElementById(prev_tab).style.borderBottom = "0px solid red";
	tab_9.style.borderBottom = "3px solid red";
	prev_tab = 'tab_9';
	document.getElementById(prev_block).style.display = 'none';
	document.getElementById('tab_salats').style.display = 'block';
	prev_block = 'tab_salats';

};


let tab_10 = document.getElementById('tab_10');
tab_10.onclick = function(){
	document.getElementById(prev_tab).style.borderBottom = "0px solid red";
	tab_10.style.borderBottom = "3px solid red";
	prev_tab = 'tab_10';
	document.getElementById(prev_block).style.display = 'none';
	document.getElementById('tab_drinks').style.display = 'block';
	prev_block = 'tab_drinks';

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




let prev_type = 'tab_cold';

let tab_cold = document.getElementById('tab_cold');
tab_cold.onclick = function(){
	document.getElementById(prev_type).style.borderBottom = "0px solid red";
	tab_cold.style.borderBottom = "3px solid red";
	prev_type = 'tab_cold';
	for (elem of document.querySelectorAll('#tab_rolls .items .item')){
		if (elem.classList.contains('roll_cold')){
			elem.style.display = 'block';
		}else{
			elem.style.display = 'none';
		}
	}
};

let tab_hot = document.getElementById('tab_hot');
tab_hot.onclick = function(){
	document.getElementById(prev_type).style.borderBottom = "0px solid red";
	tab_hot.style.borderBottom = "3px solid red";
	prev_type = 'tab_hot';
	for (elem of document.querySelectorAll('#tab_rolls .items .item')){
		console.log(elem)
		if (elem.classList.contains('roll_hot')){
			elem.style.display = 'block';
		}else{
			elem.style.display = 'none';
		}
	}
};

let tab_baked = document.getElementById('tab_baked');

tab_baked.onclick = function(){
	document.getElementById(prev_type).style.borderBottom = "0px solid red";
	tab_baked.style.borderBottom = "3px solid red";
	prev_type = 'tab_baked';
	for (let elem of document.querySelectorAll('#tab_rolls .items .item')){
		if (elem.classList.contains('roll_baked')){
			elem.style.display = 'block';
		}else{
			elem.style.display = 'none';
		}
	}
};

/*******************************************************************/




let navbar = document.getElementById("panel");
let sticky = navbar.offsetTop;
document.querySelector('.cart_description').style.top = String(sticky - window.pageYOffset + 55)+'px';
/******************for top menu**************/
function mySticky() {
  if (window.pageYOffset >= sticky +0) {
    navbar.classList.add("sticky")
    document.querySelector('.cart_description').style.top = 52+'px';
  } else {
    navbar.classList.remove("sticky");
    document.querySelector('.cart_description').style.top = String(sticky - window.pageYOffset + 52)+'px';

  }
}



/****************for bottom footer***********************/
let prevScrollpos = window.pageYOffset;
function myScroll(){
	  let currentScrollPos = window.pageYOffset;
	  if (prevScrollpos  > currentScrollPos) {
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
 
	$('.popular_items').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  variableWidth:false,
  arrows:true,
  infinite:false,
  waitForAnimate:false,
  responsive: [
  	{
  		breakpoint: 1200,
  		settings: {
  			slidesToShow: 3
  		} 
  	}, {
  		breakpoint: 900,
  		settings: {
  			slidesToShow: 2
  		} 
  	}, {
  		breakpoint: 600,
  		settings: {
  			slidesToShow: 1
  		} 
  	}
  ]
});
});

