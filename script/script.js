 $(document).ready(function () {
     $('.main-section__tegs').hide();
     $('.main-section__tegs').show();
     $('.main-section__tegs').addClass('fly_element')
     $('.main-section__right_photo').addClass('man_anim')
 });

 setTimeout(function () {
     $('.main-section__right_photo').addClass('man_anim_back')
     $('.main-section__tegs').addClass('back_fly')
 }, 2500);



 var mySwiper = new Swiper('.swiper-container', {
     loop: true,
     slidesPerView: 3,
     spaceBetween: 10,
     navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
     },

     pagination: {
         el: '.swiper-pagination',
         type: 'bullets',
         clickable: 'true'
     },

     breakpoints: {

         320: {
             slidesPerView: 1,


         },
         480: {
             slidesPerView: 2,

         },


         1024: {
             slidesPerView: 2,

         },

         1210: {
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
         (wind).fadeIn(1600);
     } else {
         $(wind).hide();
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


 $('.header-nav__menu').click(function (event) {
     if (event.target == this) {
         $(this).hide();
         $('.menu_burger').removeClass('menu_burger__open')
         $('.menu_burger').show();

     }

 });



 $('body').on('click', '.more', function () {

     $('window_container').show();

     var wind = $('.window_container');

     if (wind.css('display') == 'none') {
         (wind).fadeIn(2000);
     } else {
         $(wind).hide();
     }
 });


 $('.close_menu').click(function (event) {

     $('.windows').fadeOut(2000);
     event.preventDefault();

 });


 $(document).ready(function () {
     $(".menu_list").on("click", "a", function (event) {
         event.preventDefault();
         var id = $(this).attr('href'),
             top = $(id).offset().top;
         $('body,html').animate({
             scrollTop: top
         }, 2000);
         $('.header-nav__menu').fadeOut(5000);
         $('.menu_burger__open').hide(2000);

         setTimeout(function () {
             $('.menu_burger').removeClass('menu_burger__open')
             $('.menu_burger').show();
         }, 2800);

     });
 });

 $(document).ready(function () {

     $('input[type="tel"]').inputmask({
         "mask": "+7(999) 999-9999"
     }); //specifying options    

     $('input[type="email"]').inputmask({
         "mask": "example@mail.com"
     })

 });



 $('form').each(function () {
     $(this).validate({
         errorPlacement(error, element) {
             return true;
         },

         focusInvalid: false,
         rules: {
             Телефон: {
                 required: true,
                 maxlength: 18,
             },
             Имя: {
                 required: true,
                 maxlength: 15,
                 number: false,
             },

             Почта: {
                 required: true,
                 number: false,
             },
         },

         submitHandler(form) {
             let th = $(form);

             $.ajax({
                 type: 'POST',
                 url: 'mail.php',
                 data: th.serialize(),
                 // eslint-disable-next-line func-names
             }).done(() => {

                 alert("Спасибо! Ваша заявка отправлена!");
                 setTimeout(function () {
                     th.trigger('reset');
                     $('.windows').fadeOut(1200);
                 }, 2000);
             });

             return false;
         }
     });
 });

 $(document).ready(function () {

     var top_show = 400;
     var delay = 1000;
     $(document).ready(function () {
         $(window).scroll(function () {
             if ($(this).scrollTop() > top_show) $('.top_btn').fadeIn();
             else $('.top_btn').fadeOut();
         });
         $('.top_btn').click(function () {
             $('body, html').animate({
                 scrollTop: 0
             }, delay);
         });
     });

 });