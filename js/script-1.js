//Slider settings
jQuery(function ($) {

//Add to cart button




    $(".add_to_cart").on("click", function() {
        var $name = $(this).closest(".box-shadow").find("h3").text();

        $("#add_to_cart").find("input[name='amount']").val(parseInt($(this).closest(".box-shadow").find(".block-price-price:not(.old-price)").text()) + 300).prop("disabled", true).css({"border" : "none", "textAlign" : "center"});
        $("#add_to_cart").find("input[name='amount']").after("<label for='amount'></label>");
        $("#add_to_cart").find("input[name='description']").val("Наименование: " + $name).prop("disabled", true).css({"border" : "none", "textAlign" : "center"});

    });

    $(".courier").on("click", function() {
        var $textarea = $("form#sendmail").find("textarea");
        $textarea.val() !== "" ? $textarea.val("") : $textarea.val();
        var $name = $(this).closest(".box-shadow").find("h3").text();

        var $sendName = $textarea.val("Я желаю заказать и оплатить при получении товар: \"" + $name + "\". Перезвоните мне, пожалуйста.");

        $textarea.append($sendName);
    });



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
                width = width / 4;
            } else if (width >= 600) {
                width = width / 3;
            } else if (width >= 350) {
                width = width / 2;
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


