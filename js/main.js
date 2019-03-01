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
  wheel: e => {
    const deltaY = e.originalEvent.deltaY;
    const direction = deltaY > 0 ? 'down' : 'up';

    scrollToSection(direction);
  },

  keydown: e => {
    switch (e.keyCode) {
      case 40:
        scrollToSection('down');
        break;
      case 38:
        scrollToSection('up');
        break;
    };
  },

  touchmove: e => e.preventDefault()
});

// touchswipe
if (isMobile) {
  $(document).swipe({
    //Generic swipe handler for all directions
    swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
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

$(document).ready(function () {
  $('.slider').bxSlider({
    pager: false,
    keyboardEnabled: true,
    oneToOneTouch: true
  });
});


// NATIVE JS

// ACCORDION MENU

var accoMenu = document.getElementsByClassName("menu__acco-trigger");
var i;

for (i = 0; i < accoMenu.length; i++) {
  accoMenu[i].addEventListener("click", function () {
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
  accoTeam[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var teamAccoTrigger = this.nextElementSibling;
    if (teamAccoTrigger.style.height === '160' + 'px') {
      teamAccoTrigger.style.height = '0';
    } else {
      teamAccoTrigger.style.height = '160' + 'px';
    }
  });
};

// MAP GOOGLE

// function initMap() {
//   var opt = {
//     center: { lat: 59.93541499, lng: 30.32778516 },
//     zoom: 11
//   };

//   var map = new google.maps.Map(document.getElementById('map'), opt);

//   var marker = new google.maps.Marker({
//     map: map,
//     position: { lat: 59.97226393, lng: 30.31267895 },
//     title: 'click here',
//     icon: '../img/section8/map-marker.png'
//   });

//   var marker = new google.maps.Marker({
//     map: map,
//     position: { lat: 59.94523391, lng: 30.38168683 },
//     title: 'click here',
//     icon: '../img/section8/map-marker.png'
//   });

//   var marker = new google.maps.Marker({
//     map: map,
//     position: { lat: 59.88986079, lng: 30.31463549 },
//     title: 'click here',
//     icon: '../img/section8/map-marker.png'
//   });

//   var marker = new google.maps.Marker({
//     map: map,
//     position: { lat: 59.91641894, lng: 30.49659655 },
//     title: 'click here',
//     icon: '../img/section8/map-marker.png'
//   });

//   var clickOnMarker = new google.maps.InfoWindow({
//     content: '<h3>Mr Burger</h3><p>Come and test</p>'
//   });

//   marker.addListener('click', function () {
//     clickOnMarker.open(map, marker);
//   });
// };


// MAP YANDEX

ymaps.ready(init);
var myMap, myPlacemark1, myPlacemark2, myPlacemark3, myPlacemark4;
function init() {
  myMap = new ymaps.Map("map", {
    center: [59.93541499, 30.32778516],
    zoom: 11
  });
  myMap.controls.add('routeButtonControl');
  myMap.behaviors.disable(['scrollZoom']);
  var coords = [
    [59.97226393, 30.31267895],
    [59.94523391, 30.38168683],
    [59.88986079, 30.31463549],
    [59.91641894, 30.49659655]
  ],
    myCollection = new ymaps.GeoObjectCollection({}, {
      iconLayout: 'default#image',
      iconImageHref: 'img/section8/map-marker.png',
      iconImageSize: [46, 57],
      iconImageOffset: [-23, -57]
    });
  for (var i = 0; i < coords.length; i++) {
    myCollection.add(new ymaps.Placemark(coords[i]));
  }
  myMap.geoObjects.add(myCollection)
};