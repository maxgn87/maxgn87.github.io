 $(document).ready(function () {
     //              document.addEventListener("DOMContentLoaded", () => {
     $('.tegs').hide();
     $('.tegs').show();

     $('.tegs').addClass('fly_element')
     $('.header-section__right_photo').addClass('man_anim')
 });


 $('.header-section').hover(function () {
     $('.tegs').addClass('back_fly')
     $('.header-section__right_photo').addClass('man_anim_back')
 });



 var mySwiper = new Swiper('.swiper-container', {
     loop: true,
     slidesPerView: 3,
     spaceBetween: 20,
     navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
     },
     pagination: {
         el: '.swiper-pagination',
         type: 'bullets',
         clickable: 'true'

     },

     scrollbar: {
         el: '.swiper-scrollbar',
         draggable: true,
     },

     breakpoints: {

         320: {
             slidesPerView: 1,
             spaceBetween: 20

         },
         480: {
             slidesPerView: 2,
             spaceBetween: 20
         },

         640: {
             slidesPerView: 2,
             spaceBetween: 20
         },

         800: {
             slidesPerView: 2,
             spaceBetween: 20
         },
         
         900: {
             slidesPerView: 2,
             spaceBetween: 20
         },
         

         1024: {
             slidesPerView: 2,
             spaceBetween: 20
         },

         1240: {
             slidesPerView: 3,
             spaceBetween: 20
         },
     }
 });



$('body').on('click', '.call', function () {

    $('window_container_new').show();
    $('.arrows').hide();

    var wind = $('.window_container_new');

    if (wind.css('display') == 'none') {
        (wind).show();
    } else {
        $(wind).hide();
    }
});


$('.window_container_new').click(function (event) {
    if (event.target == this) {
        $(this).hide();
        $('.arrows').show();
    }

});






$('.menu_burger').on('click', function (a) {
    $('.menu_burger').addClass('menu_burger__open');

    var list = $('.header-nav__menu');



    if (list.css('display') == 'none') {

        $(list).css({
            'opacity': 1,
            'visibility': 'visible',
            'display': 'block'
        }).slideDown(800);

    } else {
        $(list).hide();
         $('.menu_burger').removeClass('menu_burger__open');

    }

});

$('body').on('click', '.more', function () {

    $('window_container').show();

    var wind = $('.window_container');

    if (wind.css('display') == 'none') {
        (wind).show();
    } else {
        $(wind).hide();
    }
});


$('.window_container').click(function (event) {
    if (event.target == this) {
        $(this).hide();
    }

});














