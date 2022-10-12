/* работа бургер меню */

$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger,.nav__link,.nav,.nav__menu').toggleClass('active');
    });
});




/* Перемешение на странице при помоши ссылок в меню */

$(function () {
    $('.top').hide();
    let link = $('.nav-link');

    link.on('click', function (e) {
        e.preventDefault();
        link.removeClass('active');
        let sl = $(this).addClass('active').attr('href');
        let taregt = $(sl);

        $('html, body').animate({
            scrollTop: taregt.offset().top - 70
        }, 1000)

    })


    $(window).scroll(function () {

        if ($(this).scrollTop() > 1000) {
            $('.top').fadeIn();
        } else {
            $('.top').fadeOut();
        }

        let scroll = $(window).scrollTop();
        link.each(function () {
            let sl = $(this).attr('href');
            let target = $(sl);
            if (scroll >= target.offset().top - 200) {
                link.removeClass('active');
                $(this).addClass('active');
            }
        })

    })

    $('.top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 2000);
    })

})


/* Табы на секции Commercial */



$(function () {
    $('.section__what-electrical').not('.active').hide();
    $('.section__what-bootom-box').click(function () {


        $('.section__what-bootom-box').removeClass('active').eq($(this).index()).addClass('active');
        $('.section__what-electrical').removeClass('active').hide().eq($(this).index()).addClass('active').fadeIn(500);

    })

})



/*  модальное окно в секции Commercial */

var modals = document.querySelectorAll('#mymodel');
var btns = document.querySelectorAll("#myBtn");
var spans = document.querySelectorAll(".close-icon");

modals.forEach(modal => {
    btns.forEach(btn => {
        btn.addEventListener('click', function () {
            modal.style.display = "block";

        })
        spans.forEach(span => {
            span.addEventListener('click', () => {
                modal.style.display = "none";
            })
        });
    });
    window.addEventListener('click', (e) => {
        if (e.target == modal) {
            modal.style.display = "none";
        } else if (e.key == "Escape") {
            modal.style.display = "none";
        }
    })
    window.addEventListener('keydown', (e) => {
        if (e.key == "Escape") {
            modal.style.display = "none";
        }
    })
});