// name = 'Ira';

// if (name =='Ira') {
//   console.log('yes');
// } else {
//   console.log('no');
// }

// // for (i = 0; i < 10; i++) {
// //   console.log(i);
// // }

// // function sum (p1, p2, p3) {
// //   var result = p1 + p2 + p3;

// //   return result;
// // }

// // var result = sum(20, 30, 40);
// // console.log(result);

// // var array = ['Привет', 'Loftschool'];

// // array.push(', я изучаю'); 
// // array.push('javascript');

// // for ( var i = 0; i < array.length; i++) {
// //   console.log(array[i]);
// // }

// // var num = [110, 10, 200, 90, 50, 720, 300, 77, 450, 1];

// //   for ( var i = 0; i < num.length; i++) {

// //     if (num[i] > 100) {
// //       console.log(num[i]);
// //     }
// //    }

// // var obj = {name: 'Artur', lastName: 'Okhotnichenko', age: '32'};

// // console.log(obj.name);
// // console.log(obj.lastName);
// // console.log(obj.age);

// // obj.work = 'progr';
// // console.log(obj.work);

// // var change = document.querySelector('.order__composition-text');

// // change.textContent = 'cool';

// // var orderBtn = document.querySelector('a.btn');
// // var display = document.querySelector('main.hero__content');

// // orderBtn.addEventListener('click', function() {
// //   display.style.display = 'none';
// // })

// // var input = document.querySelector('input.form__input');

// // input.addEventListener('keydown', function(event) {
// //   let isDigit = false;
// //   let isDash = false;
// //   let isControl = false;

// //   if (event.key >= 0 || event.key <= 9) {
// //     isDigit = true;
// //   };

// //   if (event.key == 'ArrowLeft' || event.key == 'ArrowRight' || event.key == 'Backspace') {
// //     isControl = true;
// //   }

// //   if (event.key == '-') {
// //     isDash = true;
// //   }

// //   if (!isDigit && !isDash && !isControl) {
// //     event.preventDefault();
// //   }

// //   console.log(event.key);

// // });


// // DOM

// // var myBody = document.querySelector('body');
// // var newDiv = document.createElement('div');

// // myBody.appendChild(newDiv);

// // newDiv.textContent = 'Этот элемент создан при помощи DOM AP';


// // var newDiv2 = document.createElement('div');

// // newDiv2.className = 'inner';

// // var myBody = document.querySelector('body');
// // myBody.appendChild(newDiv2);
// // newDiv2.textContent = 'cooooooool';
// // newDiv2.style.fontSize = '50px';
// // newDiv2.style.color = 'red';

// // newDiv.appendChild(newDiv2);


// // var body = document.querySelector('body');
// // var div = document.createElement('div');
// // body.appendChild(div);
// // div.textContent = 'hello ! ! !'
// // div.style.color = 'green';
// // div.style.fontSize = '50px';
// // div.style.padding = '10px';
// // div.style.backgroundColor = 'pink';

// // div.addEventListener('click', function() {
// //   console.log('yes');
// // }); 


// // var link = document.createElement('a');
// // link.setAttribute('href', 'https://loftschool.com');
// // link.textContent = 'link';

// // var body = document.querySelector('body');
// // body.appendChild(link);

// // link.addEventListener('click', function(e) {
// //   e.preventDefault();
// //   console.log('Я кликнул на ссылку https://loftschool.com');
// // });


// // var body = document.querySelector('form');
// // var input = document.createElement('input');
// // var button = document.createElement('button');

// // body.appendChild(input);
// // input.style.margin = '50px';
// // input.setAttribute('name', 'inputName');
// // input.setAttribute('type', 'text');

// // body.appendChild(button);
// // button.textContent = 'button';

// // button.addEventListener('click', function(e) {
// //   e.preventDefault();
// //   console.log(body.elements.inputName.value);
// // });


// // ACCORDEON
// var link = document.querySelector('.menu__acco-trigger');
// var menu = document.querySelector('.menu__acco-text');

// //  VARIANT 3
// // var openWidth = 540;
// // var closedWidth = 0;
// // var basicWidth = 0;


// link.addEventListener('click', function(e) {
//   e.preventDefault();

//   //  VARIANT 1
//   menu.classList.toggle('active');

//   //  VARIANT 2
//   // var openMenu = parseInt(getComputedStyle(menu).width);

//   // if(!openMenu) {
//   //   openMenu = 0;
//   // };

//   // if(openMenu == 0) {
//   //   menu.style.width = 540 + 'px';
//   // } else {
//   //   menu.style.width = 0;
//   // }

//   //  VARIANT 3
//   // if(basicWidth <= 0) {
//   //    basicWidth = closedWidth + openWidth;
//   //     menu.style.width = basicWidth + 'px';
//   //   } else {
//   //     basicWidth = closedWidth - openWidth;
//   //     menu.style.width = 0;
//   //   }
// });


// // OVERLAY
// var overlayReviewBtn = document.querySelector('.btn_hover_black');
// var reviewList = document.querySelector('.reviews__list');

// function openOverlay(content) {
//   var overlayReview = document.createElement('div');
//   overlayReview.classList.add('overlay__review');

//   var overlayContainer = document.createElement('div');
//   overlayContainer.classList.add('overlay__container-review')
//   overlayContainer.style.position = 'relative'

//   var overlayCloseBtn = document.createElement('a');
//   overlayCloseBtn.href = '#';
//   overlayCloseBtn.classList.add('overlay__btn-close');
//   overlayCloseBtn.textContent = 'x';
//   overlayCloseBtn.style.position = 'absolute';
//   overlayCloseBtn.style.right = '10px';
//   overlayCloseBtn.style.top = '0';
//   overlayCloseBtn.style.color = '#ec8468';
//   overlayCloseBtn.style.fontSize = '23px';
//   overlayCloseBtn.style.fontWeight = 'normal';
//   overlayCloseBtn.style.fontFamily = 'helvetica';
//   overlayCloseBtn.addEventListener('click', function(e) {
//     e.preventDefault();
//     reviewList.removeChild(overlayReview);
//   })

//   var overlayReviewContent = document.createElement('div');
//   overlayReviewContent.classList.add('reviews__overlay-content');
//   overlayReviewContent.textContent = content;

//   overlayReview.appendChild(overlayContainer);
//   overlayReviewContent.appendChild(overlayCloseBtn);
//   overlayContainer.appendChild(overlayReviewContent);

//   return overlayReview;
// }

// overlayReviewBtn.addEventListener('click', function(e) {
//   e.preventDefault();
//   var overlay = openOverlay('Thoughts are all about them and about them, about them and about them. You can not resist, you cannot forget ... I never thought that buns can be so soft, the meatball is so juicy, and the cheese is so melted.');

//   reviewList.appendChild(overlay);
// });





// JQUERY

// OVERLAY MENU
$(document).ready(() => {
  $('.menu-toggle__link').on('click', e => {
    e.preventDefault();
    $('.overlay__menu').css('display', 'flex');

    $('.overlay__btn-close').on('click', e => {
      e.preventDefault();

      $('.overlay__menu').css('display', 'none');
    });
  });
});


// OVERLAY REVIEW
$(document).ready(() => {
  $('.btn_hover_black').on('click', e => {
    e.preventDefault();

    $('.overlay__review').css('display', 'flex');
  });

  $('.overlay__btn-close').on('click', e => {
    e.preventDefault();

    $('.overlay__review').css('display', 'none');
  });
});

// SCROLL

const sections = $('.section');
const display = $('.maincontent');
let inScroll = false;
const mobileDetect = new MobileDetect(window.navigator.userAgent);
const isMobile = mobileDetect.mobile();

const setActiveMenuItem = itemEq => {
  $('.fixed-nav__item').eq(itemEq).addClass('active')
  .siblings().removeClass('active');
}

const performTransition = sectionEq => {
  const position = `${sectionEq * -100}%`;

  if (inScroll) return;
  inScroll = true;

  sections.eq(sectionEq).addClass('active')
    .siblings().removeClass('active');

    $('.overlay__menu').css('display', 'none');

  display.css({
    'transform': `translate(0, ${position})`,
    '-webkit-transform': `translate(0, ${position})`
  });

  setTimeout(() => {
    inScroll = false;
    setActiveMenuItem(sectionEq);
  }, 1200);

};

const scrollToSection = direction => {
  const activeSection = sections.filter('.active');
  const nextSection = activeSection.next();
  const prevSection = activeSection.prev();

  if (direction == 'up' && prevSection.length) {
    performTransition(prevSection.index());
  };

  if (direction == 'down' && nextSection.length) {
    performTransition(nextSection.index());
  };
};

$(document).on({
  wheel : e => {
  const deltaY = e.originalEvent.deltaY;
  const direction = deltaY > 0 ? 'down' : 'up';
  
  scrollToSection(direction);
},

keydown: e => {
  switch (e.keyCode) {
    case 40 :
     scrollToSection('down');
     break;
    case 38 : 
      scrollToSection('up');
      break;
  };
},

touchmove: e => e.preventDefault()
});

// touchswipe
if (isMobile) {
  $(document).swipe( {
    //Generic swipe handler for all directions
    swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
      const scrollDirection = direction == 'down' ? 'up' : 'down';
      scrollToSection(scrollDirection);  
    }
  }); 
};
 

// arrow-button down 
$('.arrow-button').click(function () {
  scrollToSection('down');
});

// navigation
$('[data-scroll-to]').on('click', e => {
  e.preventDefault();

  const target = parseInt($(e.currentTarget).attr('data-scroll-to'));

  performTransition(target);
});


// SLIDER

// $(function () {

//   var moveSlide = function (container, slideNum) {

//     var 
//       items = container.find('.slider__item'),
//       activeSlide = items.filter('.active'),
//       reqItem = items.eq(slideNum),
//       reqIndex = reqItem.index(),
//       list = container.find('.slider__list'),
//       duration = 500;

//     if(reqItem.length) {
//       list.animate({
//         'left': -reqIndex * 100 + '%'
//       }, duration, function () {
//         activeSlide.removeClass('active');
//         reqItem.addClass('active');
//       });
//     };
//   };

//   $('.slider__btn').on('click', function (e) {
//     e.preventDefault();

//     var $this = $(this),
//       container = $this.closest('.order__slider'),
//       items = container.find('.slider__item'),
//       activeItem = items.filter('.active'),
//       nextItem = activeItem.next(),
//       prevItem = activeItem.prev();

//     if($this.hasClass('slider__btn-right')) {  // front

//       if(nextItem.length) {
//         moveSlide(container, nextItem.index());
//       } else {
//         moveSlide(container, items.first().index());
//       };

//     } else {  // rearwards
//       if(prevItem.length) {
//         moveSlide(container, prevItem.index());
//       } else {
//         moveSlide(container, items.last().index());
//       }
//     };
//   });
// });


// PLUGIN SLIDER ORDER 

$(document).ready(function(){
  $('.slider').bxSlider({
    pager : false,
    keyboardEnabled : true,
    oneToOneTouch : true
  });
});

// ACCORDION MENU

var accoMenu = document.getElementsByClassName("menu__acco-trigger");
var i;

for (i = 0; i < accoMenu.length; i++) {
  accoMenu[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var menuAccoTrigger = this.nextElementSibling;
    if (menuAccoTrigger.style.width === '540' + 'px') {
      menuAccoTrigger.style.width = '0';
    } else {
      menuAccoTrigger.style.width = '540' + 'px';
    }
  });
};


// ACCORDION TEAM

var accoTeam = document.getElementsByClassName("team__acco-trigger");
var i;


for (i = 0; i < accoTeam.length; i++) {
  accoTeam[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var teamAccoTrigger = this.nextElementSibling;
    if (teamAccoTrigger.style.maxHeight){
      teamAccoTrigger.style.maxHeight = null
    } else {
      teamAccoTrigger.style.maxHeight = teamAccoTrigger.scrollHeight + "px";
    }
  });
};




