
let btn = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu-tog'),
    cont = document.querySelector('.header-cont'),
    header = document.querySelector('.header'),
    headerBtn = document.querySelector('.header__btn');

btn.addEventListener('click', function(){
		console.log('hello')
  		menu.classList.toggle('menu-togler');
  		if (document.querySelector('.menu-togler')){
  			headerBtn.style.opacity = '0';
  			cont.style.opacity = '0';
  			btn.style.transform = 'rotate(90deg)'
  		}else{
  			headerBtn.style.opacity = '1';
  			cont.style.opacity = '1';
  			btn.style.transform = 'rotate(0deg)'
  		}
});