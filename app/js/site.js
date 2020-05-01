$(document).ready(function(){
    /* Слайдер */

    $('.slide').slick({
        infinite: true,
        slidesToShow: 1,
        adaptiveHeight: true

    });

	/* Аккордион */
 
    (function(){
        var flag = true;

        $('.question_item').on('click', function(e){
            e.preventDefault();

            var
                $this = $(this),
                container = $this.closest('.question_wrap'),
                item = $this.closest('.question_item'),
                currentContent = item.find('.question_item-text'),
                duration = 500;

            if (flag) {
                flag = false;
                if (!item.hasClass('active')) {

                    item
                        .addClass('active')
                        .siblings()
                        .removeClass('active')
                        .find('.question_item-text')
                        .slideUp(duration);

                    currentContent.slideDown(duration, function () {
                        flag = true
                    });
                } else {

                    item.removeClass('active');
                    currentContent.slideUp(function() {
                        flag = true
                    });
                }
            }
        });
    })();

    /* Модальное окно политики */

    $('body').on('click','.politic, .politic-modal', function(){

        $.fancybox.open({
            src  : '#modal-polit-fancybox',
            type : 'inline',
            smallBtn: false,
            buttons: ""
        });

        return false;
    });


    /* Переход по якорям */

    $('a[href^="#"]').on('click', function(event) {
        event.preventDefault();

        var sc = $(this).attr("href"),
            dn = $(sc).offset().top;

        $('html, body').animate({scrollTop: dn}, 1500);

    });


    $('body').on('click','.menu-item, .modal-close-form', function(){
        if (window.innerWidth <= 1200) {
            $(".nav-mobile-block").click();
        }

    });


    /*  Анимация AOS  */

    aos_onload();

    function aos_onload(){
        setTimeout(function() {
            AOS.init();

            AOS.init({
                duration: 800,
                once: true
            });
        }, 10);
    }

});

/* Маска телефона */

$('input[type="tel"]').mask("+7 (999) 999-99-99");


/* Библиотека alertify */

alertify.set('notifier', 'position', 'bottom-right');
alertify.set('notifier', 'delay', 10);

document.addEventListener('wpcf7mailsent', function( event ) {
    alertify.success(event.detail.apiResponse.message);
}, false);

document.addEventListener('wpcf7invalid', function( event ) {
    alertify.warning(event.detail.apiResponse.message);
}, false);

document.addEventListener('wpcf7mailfailed', function( event ) {
    alertify.error(event.detail.apiResponse.message);
}, false);


$(document).on('click', '.wpcf7-submit', function(e){
    if( $('.ajax-loader').hasClass('is-active') ) {
        e.preventDefault();
        return false;
    }
});


	/* Бесконечная галерея */

function infinity_width(){
    var width_one_block = $(".block_infinity_one").innerWidth();
    $(".block_infinity_two").css("left", "-"+width_one_block+"px");
}


infinity_width();


    /* Мобильная навигация */


$(document).mouseup(function (e){ // событие клика по веб-документу
    if ($("header .nav-mobile-block").hasClass("active-menu")) {
        var div = $(".mobile-menu-fixed"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
            $("header .nav-mobile-block").click();
        }
    }
});

$('body').on('click','.nav-mobile-block', function(){
    if ($(this).hasClass("active-menu")) {
        $(this).removeClass("active-menu");
        $('.mobile-menu-fixed').stop().css({
            "right" : "-300px"
        });
        $("body, html").removeClass("no-scroll");
    }else{
        $(this).addClass("active-menu");
        $('.mobile-menu-fixed').stop().css({
            "right" : "0px"
        });
        $("body, html").addClass("no-scroll");
    }
});

$('body').on('click','.mobile-menu-fixed .modal-close-form', function(){
    $(".nav-mobile-block").click();
});

