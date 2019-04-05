//Slider settings
jQuery(function ($) {

//Smooth scrolling of the page when you click on the menu
    $(".smooth-scroll").on("click", function (event) {

        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);

    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100 && $(".menu").hasClass("default")) {
            $(".menu").removeClass("default").addClass("fixed");
        } else if ($(this).scrollTop() <= 100 && $(".menu").hasClass("fixed")) {
            $(".menu").removeClass("fixed").addClass("default");
        }


//Back to top button
        if ($(this).scrollTop() > 400) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });

// scroll body to 0px on click
    $('#back-to-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });


//Slider settings
    var jcarousel = $('.jcarousel');

    jcarousel
        .jcarousel({
            animation: {
                duration: 1000,
                speed: 1000,
                easing: 'linear',
                complete: function () {
                }
            }
        })
        .jcarouselAutoscroll({
            interval: 5000,
            target: '+=1',
            autostart: true,
        })
        .on('mouseover', function (e) {
            $(this).jcarouselAutoscroll('stop');
        })
        .on('mouseout', function (e) {
            $(this).jcarouselAutoscroll('start');
        });

    jcarousel
        .on('jcarousel:reload jcarousel:create', function () {
            var carousel = $(this),
                width = carousel.innerWidth();

            if (width >= 900) {
                width = width / 2;
            } else if (width >= 600) {
                width = width / 1;
            } else if (width >= 350) {
                width = width / 1;
            }

            carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
        })
        .jcarousel({
            wrap: 'circular'
        });

    $('.jcarousel-control-prev')
        .jcarouselControl({
            target: '-=1'
        });

    $('.jcarousel-control-next')
        .jcarouselControl({
            target: '+=1'
        });

    $('.jcarousel-pagination')
        .on('jcarouselpagination:active', 'a', function () {
            $(this).addClass('active');
        })
        .on('jcarouselpagination:inactive', 'a', function () {
            $(this).removeClass('active');
        })
        .on('click', function (e) {
            e.preventDefault();
        })
        .jcarouselPagination({
            perPage: 1,
            item: function (page) {
                return '<a href="#' + page + '">' + page + '</a>';
            }
        });

    popup = {
        init: function () {
            $('figure').click(function () {
                popup.open($(this));
            });

            $(document).on('click', '.popup .gallery-img', function () {
                return false;
            }).on('click', '.popup', function () {
                popup.close();
            });

            $('body').on('click', '.popup .gallery-img', function () {
                popup.close();
            });

        },
        open: function ($figure) {
            $('.gallery').addClass('pop');
            $popup = $('<div class="popup" />').appendTo($('body'));
            $fig = $figure.clone().appendTo($('.popup'));
            $bg = $('<div class="bg" />').appendTo($('.popup'));
            $close = $('<div class="close"><svg><use xlink:href="#close"></use></svg></div>').appendTo($fig);
            $shadow = $('<div class="shadow" />').appendTo($fig);
            src = $('img', $fig).attr('src');
            $shadow.css({backgroundImage: 'url(' + src + ')'});
            $bg.css({backgroundImage: 'url(' + src + ')'});
            setTimeout(function () {
                $('.popup').addClass('pop');
            }, 10);
        },
        close: function () {
            $('.gallery, .popup').removeClass('pop');
            setTimeout(function () {
                $('.popup').remove()
            }, 100);

        }
    };

    popup.init();

    var ts = new Date(2018, 1, 31); // Январь - это 0

    if ((new Date()) > ts) {
        // Задаем точку отсчета для примера. Пусть будет очередной Новый год или дата через 10 дней.
        // Обратите внимание на *1000 в конце - время должно задаваться в миллисекундах
        ts = (new Date()).getTime() + 10 * 24 * 60 * 60 * 1000;
    }

    $('#countdown').countdown({
        timestamp: ts
    });

    var $action = $("#action"),
        $actionBlock = $(".action-block").height();

    $action.removeClass("img-responsive").css({"height": $action.height(), "width": $action.parent().width()});

    function windowSize() {
        if ($(window).width() >= "975") {
            ($action.height() >= $actionBlock) ?
                $("#price").css({"minHeight": $action.height() - 40}) :
                $action.removeClass("img-responsive").css({"height": $actionBlock, "width": $action.parent().width()});
        }
    }

    $(window).on('ready load resize scroll', windowSize);
});


