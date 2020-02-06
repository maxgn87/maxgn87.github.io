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


 // $('.window_container_new').click(function (event) {
 //     if (event.target == this) {
 //         $(this).fadeOut(1200);
 //         $('.arrows').show();
 //     }
 //
 // });






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


 // $('.window_container').click(function (event) {
 //     if (event.target == this) {
 //         $(this).fadeOut(1300);
 //     }
 //
 // });



 $('.close_menu').click(function (event) {

     $('.windows').hide();
     event.preventDefault();

 });


 $(document).ready(function () {
     $(".menu_list").on("click", "a", function (event) {
         event.preventDefault();
         var id = $(this).attr('href'),
             top = $(id).offset().top;
         $('body,html').animate({
             scrollTop: top
         }, 1500);
     });
 });


 $(document).ready(function () {

     $('input[type="tel"]').inputmask({
         "mask": "+7(999) 999-9999"
     }); //specifying options    



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
                 maxlength: 10,
                 number: false,
             },

             Почта: {
                 required: true,
                 maxlength: 15,
                 number: false,
             },


         },
         messages: {
             Телефон: {
                 required: 'Нужно что-то ввести'
             },
             Имя: {
                 required: 'Нужно что-то ввести',
                 maxlength: 'Нужно ввести максимум 10 букв'
             },
             Почта: {
                 required: 'Нужно что-то ввести',
                 maxlength: 'Нужно ввести максимум 10 букв'
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

var top_show = 400; // В каком положении полосы прокрутки начинать показ кнопки "Наверх"
  var delay = 1000; // Задержка прокрутки
  $(document).ready(function() {
    $(window).scroll(function () { // При прокрутке попадаем в эту функцию
      /* В зависимости от положения полосы прокрукти и значения top_show, скрываем или открываем кнопку "Наверх" */
      if ($(this).scrollTop() > top_show) $('.top_btn').fadeIn();
      else $('.top_btn').fadeOut();
    });
    $('.top_btn').click(function () { // При клике по кнопке "Наверх" попадаем в эту функцию
      /* Плавная прокрутка наверх */
      $('body, html').animate({
        scrollTop: 0
      }, delay);
    });
  });

});






