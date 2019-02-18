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


// PLUGIN bxslider ORDER 

$(document).ready(function(){
  $('.slider').bxSlider({
    pager : false,
    keyboardEnabled : true,
    oneToOneTouch : true
  });
});


// NATIVE JS

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
    if (teamAccoTrigger.style.height === '160' + 'px'){
      teamAccoTrigger.style.height = '0';
    } else {
      teamAccoTrigger.style.height = '160' + 'px';
    }
  });
};
