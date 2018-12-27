$(document).ready(function () {

    $('.single-item').slick({
        dots: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 5000,
    });
    $('.slider-for').slick({
        nextArrow: '<div class="left-arrow"><i class="fa fa-angle-right" aria-hidden="true"></i></div>',
        prevArrow: '<div class="right-arrow"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
        slidesToShow: 1,
        slidesToScroll: 1,
        // asNavFor: '.slider-for',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 5000,

    });
    $('.certificate-grid').slick({
        nextArrow: '<div class="left-arrow"><i class="fa fa-angle-right" aria-hidden="true"></i></div>',
        prevArrow: '<div class="right-arrow"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
        slidesToShow: 3,
        slidesToScroll: 1,
        // asNavFor: '.slider-for',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ]
    });

  

    $(".smooth-scroll").on("click", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top - 100;
        $('body,html').animate({scrollTop: top}, 1500);
    });


    //Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#back-to-top').fadeIn() && $(".header-top").addClass("fixed");
        } else {
            $('#back-to-top').fadeOut() && $(".header-top").removeClass("fixed");
        }
    });

    // scroll body to 0px on click
    $('#back-to-top').click(function () {
        $('#back-to-top').tooltip('hide');
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    $('#go').click(function (event) {
        event.preventDefault();
        $('#overlay').fadeIn(400,
            function () {
                $('#modal_form')
                    .css('display', 'block')
                    .animate({opacity: 1, top: '50%'}, 200);
            });
    });

    $('#call, #order').click(function (event) {
        event.preventDefault();
        $('#overlay').fadeIn(400,
            function () {
                $('#call_form')
                    .css('display', 'block')
                    .animate({opacity: 1, top: '50%'}, 200);
            });
    });

    $('#overlay').click(function () {
        $('#modal_form, #call_form')
            .animate({opacity: 0, top: '45%'}, 200,
                function () {
                    $(this).css('display', 'none');
                    $('#overlay').fadeOut(400);
                }
            );
    });

    $(document).on('click', '[data-toggle="lightbox"]', function (event) {
        event.preventDefault();
        $(this).ekkoLightbox();
    });

});