
window.addEventListener('scroll', mySticky);
window.addEventListener('scroll', myScroll);
var lazyLoadInstance = new LazyLoad({
  // Your custom settings go here
});


/************************************CART****************************************************/
let cart = {}

document.onclick = function(e){
	if (e.target.classList.contains('add_to_cart')){
		plusFunction(e.target.dataset.id);
		e.preventDefault();
	}
	if (e.target.classList.contains('add_to_cart_small')){
		plusFunction(e.target.dataset.idk);
		e.preventDefault();
	}

	if (e.target.classList.contains('add_to_popup_cart')){
		plusFunction(e.target.dataset.idl);
		e.preventDefault();
	}
	







	if (e.target.classList.contains('minus_from_cart')){
		minusFunction(e.target.dataset.idk);	
		e.preventDefault();
	} 
	if (e.target.classList.contains('minus_from_popup_cart')){
		minusFunction(e.target.dataset.idl);
		e.preventDefault();
	}







	if(e.target.classList.contains('delete_from_cart')){
		deleteFunction(e.target.dataset.id);
		e.preventDefault();
	}
	
	document.getElementById('items_quantity').innerHTML = Object.keys(cart).length;
	items_sum = 0;
	for (let key of Object.keys(cart)){
		let item_price = document.querySelector('[data-id="'+key+'"]').closest('.price').querySelector('.item_price').innerHTML;
		let item_count = cart[key];
		items_sum += item_price * item_count;	
	}

	//let item_price = document.querySelector('[data-id="'+e.target.dataset.id+'"]').closest('.price').querySelector('.item_price')
	document.querySelector('#items_end_price').innerHTML = items_sum + '₽';
	if(document.querySelector('.popup_cart')){
		document.querySelector('#popup_items_end_price').innerHTML = items_sum + '₽';
	}
	

	


}

///ADDING ITEM TO CART
let plusFunction = function(id){
	if (!(id in cart)){
		cart[id] = 1;
	}else{
		if (cart[id] + 1 == 50){
			cart[id]++;
			console.log('Вы достигли максимального количества продукта');
		}else if (cart[id]==50){
			console.log('Вы достигли максимального количества продукта');
		}else{
			cart[id]++;
		}
	}
	renderCart();
}
////DRAWING CART
let renderCart = function(){
	let cart_render = '';
	let popup_render = '';
	let input_render = `<h3>Персональная информация</h3>
									<div class="base-info">
										<div class="form__name">
											<p>Имя:</p>	
											<input type="text" value="" name='name' placeholder="Name">
										</div>
										<div class="form__phone">
											<p>Телефон:</p>
											<input type="tel" value="" name='phone' placeholder="+7 (9_ _) _ _ _ - _ _ - _ _">
										</div>
										<div class="quantity_of_people">
											<p>Кол-во наборов:</p>
											<input type="number" value="" width='50px' name='quantity_of_people' placeholder="">
										</div>
									</div>
									<h3>Доставка</h3>
									<div class="delivery">
										<div class="form__addres">
											<p>Улица:</p>
											<input type="text" value="" name='addres' placeholder="Адрес">
										</div>
										<div class="form__home">
											<p>Дом:</p>
											<input type="text" value="" name='home'>
										</div>
										<div class="form__frame">
											<p>Строение/корпус:</p>
											<input type="text" value="" name='frame' placeholder="">
										</div>
									</div>
									<input type="hidden" name="act" value="order">
									<input type="submit" value="Оформить"> 
									`; 

	for (let key of Object.keys(cart)){
		console.log(document.querySelector('[data-id="'+key+'"]').closest('.item'));
		console.log(document.querySelector('[data-id="'+key+'"]'));
		let productImg = document.querySelector('[data-id="'+key+'"]').closest('.item').querySelector('img').src;
		let productName = document.querySelector('[data-id="'+key+'"]').closest('.item').querySelector('h3').innerHTML;
		let productPrice = document.querySelector('[data-id="'+key+'"]').closest('.price').querySelector('.item_price').innerHTML;
		///let productPrice = document.querySelector('[data-id="'+key+'"]').closest('.price').querySelector('.item_price').innerHTML;
		cart_render+=`<li class="cart-content__item">
					<article class="cart-content__product cart-product">
						<img src="${productImg}" alt="" class="cart-product__img">
						<div class="cart-product__text">
							<h3 class="cart-product__title">${productName}</h3>
							<div class="adjustment">
								<div class="plus">
									<a href="#" class="add_to_cart_small" data-idk="${key}"><img src="img/arrows/plus-solid.svg" alt=""></a>
								</div>
								<div class="product_quantity">
									${cart[key]}
								</div>
								<div class="minus">
									<a href="#" class="minus_from_cart"  data-idk="${key}"><img src="img/arrows/minus-solid.svg" alt=""></a>
								</div>
							</div>
						</div>
						<span class="cart-product__price">${productPrice}₽</span>
						<button class="cart-product__delete" aria-label="Удалить товар"></button>
					</article>
				</li>\n`;
		popup_render+=`<li class="cart-content__item">
					<article class="cart-content__product cart-product">
						<img src="${productImg}" alt="" class="cart-product__img">
						<div class="cart-product__text">
							<h3 class="cart-product__title">${productName}</h3>
							<div class="adjustment">
								<div class="plus">
									<a href="#" class="add_to_popup_cart" data-idl="${key}"><img src="img/arrows/plus-solid.svg" alt=""></a>
								</div>
								<div class="product_quantity">
									${cart[key]}
								</div>
								<div class="minus">
									<a href="#" class="minus_from_popup_cart"  data-idl="${key}"><img src="img/arrows/minus-solid.svg" alt=""></a>
								</div>
							</div>
						</div>
						<span class="cart-product__price">${productPrice}₽</span>
						<button class="cart-product__delete" aria-label="Удалить товар"></button>
					</article>
				</li>\n`;
		input_render+=`<input type="hidden" name='productName' value='${productName}'>`;
	}
	document.querySelector('.cart-content__list').innerHTML = cart_render;
	if(document.querySelector('.popup_cart-content__list')) {
			document.querySelector('.popup_cart-content__list').innerHTML = popup_render;
			document.querySelector('#form_info').innerHTML = input_render;
	}
}

////MINUSING ITEM FROM CART
let minusFunction = function(id){
	if (cart[id] - 1 === 0){
		deleteFunction(id);
		return true;
	}
	cart[id]--;
	renderCart();
}
////DELETING ITME FROM CART
let deleteFunction = function(id){
	delete cart[id];
	renderCart();
}

///



/*****************************************************************************************************/


/**********************************Popup work*************************************************/


const popupLinks = document.querySelectorAll('.popup_link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll(".lock-padding");
let unlock = true;

let timeout = 800;

if (popupLinks.length > 0){
	for (let index = 0; index < popupLinks.length; index++) {
		let popupLink = popupLinks[index];
		popupLink.addEventListener("click", function(e){
			console.log(popupLink);
			if (popupLink.getAttribute('href').replace("#", '')=='popup_cart'){
				document.querySelector('.block').querySelector('.popups').innerHTML=`<div class="popup popup_cart" id='popup_cart'>
					<div class="popup_body">
						<div class="popup_content">
							<a href="#panel" class="close-popup"><i class="fas fa-times"></i></a>
							<div class="popup_cart_description">
								<ul class="popup_cart-content__list">
									<!--
									<li class="cart-content__item">
										<article class="cart-content__product cart-product">
											<img src="img/популярные/филадельфия классик.png" alt="" class="cart-product__img">
											<div class="cart-product__text">
												<h3 class="cart-product__title">Филадельфия классик</h3>
												<div class="adjustment">
													<div class="plus">
														<a href="#" class="add_to_cart">
														<img src="img/arrows/plus-solid.svg" alt=""></a>
													</div>
													<div class="product_quantity">
														4
													</div>
													<div class="minus">
														<a href="#" class="minus_from_cart"><img src="img/arrows/minus-solid.svg" alt=""></a>
													</div>
												</div>
											</div>
											<span class="cart-product__price">250</span>₽
											<button class="cart-product__delete" aria-label="Удалить товар"></button>
										</article>
									</li>
									-->
								</ul>
								<form action='index.php' method="post" id="form_info">
								</form>
								<div class="popup_cart_sum">
									Сумма заказа: <span id='popup_items_end_price'>0</span>
								</div>
							</div>
						</div>
					</div>
				</div>`;
			}else{

				const name = popupLink.closest(".item").querySelector("h3").innerHTML;
				const image = popupLink.closest(".item").querySelector("img").src;
				const description = popupLink.closest(".item").querySelector("p").innerHTML;
				const price = popupLink.closest(".item").querySelector(".price").innerHTML;
				e.target.closest('.tab_block').querySelector(".popups").innerHTML=`<div class="popup">
					<div class="popup_body">
						<div class="popup_content">
							<a href="#panel" class="close-popup"><i class="fas fa-times"></i></a>
							<img src="${image}">
							<div class="information">
								<div class="info">	
									<h3>${name}</h3>
									<p>${description}</p>
								</div>
								<div class="description">
									<div class="price">
										${price}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>`;
			}
			renderCart();
			popupOpen(document.querySelector('.popup'));
			e.preventDefault();
		});
	}
}




function popupOpen(curentPopup){
	if(curentPopup && unlock){
		bodyLock();
		curentPopup.classList.add('open');
		curentPopup.addEventListener('click', function (e){
			if(!e.target.closest('.popup_content')){
				popupClose(e.target.closest('.popup'));
			}
		});
		let popupCloseIcon = document.querySelectorAll(".close-popup");
		if (popupCloseIcon.length > 0){

		for (var index = 0; index < popupCloseIcon.length; index++) {
			const el = popupCloseIcon[index];
			el.addEventListener('click', function(e){
				popupClose(el.closest('.popup'))
				e.preventDefault();
			});
	}
}
	}
}

function bodyLock(){
	body.classList.add('lock');

	unlock = false
	setTimeout(function(){
		unlock = true;
	},timeout);
}


function popupClose(popupActive, doUnlock = true){
	if (unlock){
		popupActive.classList.remove('open');
		document.querySelector(".popups").innerHTML=``;
		if(doUnlock){
			bodyUnlock();
		}
	}
}


function bodyUnlock(){
	setTimeout(function() {
		body.classList.remove('lock');
	}, timeout);

	unlock = false;
	setTimeout(function() {
		unlock = true;
	}, timeout);
}





document.addEventListener('keydown', function (e){
	if (e.which === 27){
		const popupActive = document.querySelector('.popup.open');
		popupClose(popupActive);
	}
});





/***********************************************************************************/















/***************************for tabs********************************/

let tabs = document.querySelectorAll('.tabs');

for (let tab of tabs){
	tab.onclick = function(e){
		if (tab.id === 'tab_main'){
			document.getElementById(document.querySelector('.block').classList[1]).style.borderBottom = "0px solid red";
			tab.style.borderBottom = "0px solid red";
			document.querySelector('.block').classList.remove('block');
			document.querySelector('.tab_main').classList.add('block');
		}else{
			document.getElementById(document.querySelector('.block').classList[1]).style.borderBottom = "0px solid red";
			tab.style.borderBottom = "3px solid red";
			document.querySelector('.block').classList.remove('block');
			document.querySelector(`.${tab.id}`).classList.add('block');
		}
	}
}


/************************************************************************************/

let prev_type = 'tab_cold';

let tab_cold = document.getElementById('tab_cold');
tab_cold.onclick = function(){
	document.getElementById(prev_type).style.borderBottom = "0px solid red";
	tab_cold.style.borderBottom = "3px solid red";
	prev_type = 'tab_cold';
	for (elem of document.querySelectorAll('.tab_rolls .items .item')){
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
	for (elem of document.querySelectorAll('.tab_rolls .items .item')){
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
	for (let elem of document.querySelectorAll('.tab_rolls .items .item')){
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

/*********************************************************************************************************/
































/*********************************for bottom footer**************************************/
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



























/*************************************siders************************************************************/


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
				breakpoint: 680,
				settings: {
					slidesToShow: 1
				} 
			}
		]
	});
});

