/*---------------------------------------------
Menu
----------------------------------------------*/
var menuA = document.getElementById('menuA');
var menuAA = document.getElementById('menuAA');
var menuB = document.getElementById('menuBIzq');
var portfolio = document.getElementById('portfolio');
var portfolioSingle = document.getElementById('portfolioSingle');
var menuADer = document.getElementById('menuADer');
var menuAIzq = document.getElementById('menuAIzq');
var closeBlack = document.getElementById('closeBlack');

function openMenuAAnimation(){
  document.getElementById('menuAOpenAnimationIzq').classList.add('ButToT');
  document.getElementById('menuAOpenAnimationDer').classList.add('topToB');
  setTimeout(openMenuA, 1100);
}

function openMenuAAnimation2(){
  menuADer.classList.remove('menuAFadeIn');
  menuAIzq.classList.remove('menuAFadeIn');
}


function openMenuA(){
  document.getElementsByTagName("BODY")[0].style.overflow = "hidden";
  menuA.style.display = "block";
  document.getElementById('goToTop').style.display = "none";
  setTimeout(openMenuAAnimation2, 200);
}

function closeMenuA(){
  document.getElementById('menuAOpenAnimationIzq').classList.remove('ButToT');
  document.getElementById('menuAOpenAnimationDer').classList.remove('topToB');
  menuA.style.display = "none";
  document.getElementById('goToTop').style.display = "block";
  document.getElementsByTagName("BODY")[0].style.overflow = "auto";
  menuADer.classList.add('menuAFadeIn');
  menuAIzq.classList.add('menuAFadeIn');
}

function openMenuBDelay(){
  menuAA.classList.add('disableContainer');
  menuB.classList.remove('transitionA');
  menuADer.classList.add('menuADerChiquito');
  closeBlack.style.display = "none";
  document.getElementById('closeMenuB').style.display = "block";
  document.getElementById('scrollMouse').style.display = "block";
}

function openMenuB(){
  if (screen.width>800){
    menuB.style.width = "70vw";
  }else{
    menuB.style.width = "100vw";
  }

  setTimeout(openMenuBDelay, 400);
}

function closeMenuB(){
  menuB.style.width = "0";
  menuAA.classList.remove('disableContainer');
  menuB.classList.add('transitionA');
  menuADer.style.width = "30%";
  closeBlack.style.display = "block";
  document.getElementById('closeMenuB').style.display = "none";
  document.getElementById('scrollMouse').style.display = "none";
  closeMenuA();
}

function openPortfolioFoto(){
  document.getElementsByTagName("BODY")[0].style.overflow = "hidden"
  portfolio.style.display = "block";
}

function closePortfolioFoto(){
  portfolio.style.display = "none";
}

function openPortfolioSingle(){
  portfolioSingle.style.display = "block"
}

function closePortfolioSingle(){
  portfolioSingle.style.display = "none";
}

/*---------------------------------------------
Stiky Menu
----------------------------------------------*/
var w = document.documentElement.clientWidth;
var menu = document.getElementById('menumain');
var redes = document.getElementById('menumainRedesSociales');
var distance = $('#menumain').offset().top,
    $window = $(window);

$window.scroll(function() {
    if ( $window.scrollTop() >= distance ) {
      menu.classList.add("menumainFixed");
      redes.style.height = "25px";
    }else{
      menu.classList.remove("menumainFixed");
      redes.style.height = "0";
    }
});

/*---------------------------------------------
Go To Top
----------------------------------------------*/

$(document).ready(function(){

	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 700) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});

	//Click event to scroll to top
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});

});

/*---------------------------------------------
Go To All
----------------------------------------------*/
$("#quieneSomosBtn, #quieneSomosBtn2").click(function() {
    menuA.style.display = "none";
    closeMenuB();
    $('html, body').animate({
        scrollTop: $("#quienesSomos").offset().top
    }, 2000);
});

$("#queHacemosBtn, #queHacemosBtn2").click(function() {
    menuA.style.display = "none";
    closeMenuB();
    $('html, body').animate({
        scrollTop: $("#serviciosEspecificos").offset().top
    }, 2000);
});

$("#clientesBtn, #clientesBtn2").click(function() {
    menuA.style.display = "none";
    closeMenuB();
    $('html, body').animate({
        scrollTop: $("#clientes").offset().top
    }, 2000);
});

$("#contactoBtn, #contactoBtn2").click(function() {
    menuA.style.display = "none";
    closeMenuB();
    $('html, body').animate({
        scrollTop: $("#mail").offset().top
    }, 2000);
});

function goToPorfolio(){
  openMenuA();
  openMenuB();
}


/*---------------------------------------------
Carousel
----------------------------------------------*/

var mySiema = new Siema({
  loop: true,
  multipleDrag: false,
});

Siema.prototype.addPagination = function() {
for (var i = 0; i < this.innerElements.length; i++) {
  var aIndex = document.createElement('a');
  aIndex.textContent = i+1;
  aIndex.className += "numC"
  aIndex.addEventListener('click', () => antony999kGoTo(i));
  document.getElementById('carouselNavIndex').appendChild(aIndex);
  if(i == 0){
    document.getElementsByClassName('numC')[i].classList.add("active");
  }
}

function reseteActive(){
  for(i=0; i<document.getElementsByClassName('numC').length;i++){
    document.getElementsByClassName('numC')[i].classList.remove("active");
  }
}

function antony999kGoTo(index){
  reseteActive();
  mySiema.goTo(index);
  document.getElementsByClassName('numC')[index].classList.add("active");
}

function antony999kGoPrev(){
  reseteActive();
  mySiema.prev();
  document.getElementsByClassName('numC')[mySiema.currentSlide].classList.add("active");
}

function antony999kGoNext(){
  reseteActive();
  mySiema.next();
  document.getElementsByClassName('numC')[mySiema.currentSlide].classList.add("active");
}

document.querySelector('.prevC').addEventListener('click',() => antony999kGoPrev());
document.querySelector('.nextC').addEventListener('click',() => antony999kGoNext());

setInterval(() => {
  mySiema.next();
  reseteActive();
  var current = mySiema.currentSlide;
  document.getElementsByClassName('numC')[current].classList.add("active");
}, 6000)
}

mySiema.addPagination();

/*---------------------------------------------
Send Mail
----------------------------------------------*/
function quitarMailCorrect(){
  document.getElementById('mailExito').style.bottom = "-25vh";

}

function mailCorrect(){
  document.getElementById('mailExito').style.bottom = "0vh";
  setTimeout(quitarMailCorrect, 3000);
}
