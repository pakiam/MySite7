$(document).ready(function () {

    var vH = $(window).height();
    var vW = $(window).width();

    // Header Scroll
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 50) {
            $('#header').addClass('fixed');
        } else {
            $('#header').removeClass('fixed');
        }
    });

    // contact form
    $("#contactsform").submit(function () {
        var a = $(this).attr("action");
        $("#message").slideUp(750, function () {
            $("#message").hide();
            $("#submit-contacts").attr("disabled", "disabled");
            $.post(a, {
                name: $("#contacts-form-name").val(),
                email: $("#contacts-form-email").val(),
                phone: $("#contacts-form-phone").val(),
                comments: $("#contacts-form-message").val()
            }, function (a) {
                document.getElementById("message").innerHTML = a;
                $("#message").slideDown("slow");
                $("#submit-contacts").removeAttr("disabled");
                if (null != a.match("success")) $("#contactsform").slideDown("slow");
            });
        });
        return false;
    });
    $("#contactsform input, #contactsform textarea").keyup(function () {
        $("#message").slideUp(1500);
    });

    //menu scrolling
    $(".scroll").click(function (event) {
        event.preventDefault();
        $('html,body').animate({scrollTop: $(this.hash).offset().top - 64}, 1000);
    });


    //showing items
    $('.interactive').on('click', function () {
        $('.items').find('.item').each(function (index, item) {
            setTimeout(function () {
                $(item).css({visibility: 'visible'}).animate({opacity: 1.0});
            }, 200 + (index * 500))
        });
    });
    //quotes slider
    $('.bxslider').bxSlider({
        pager: false,
        controls: true,
        auto: true,
        autoHover: true,
        nextText: '<i class="fa fa-angle-right"></i>',
        prevText: '<i class="fa fa-angle-left"></i>'
    });

    //hide links

    $('.structure-left-side').on('click', function () {
        var self = this;
        if ($(self).hasClass('structure-left-side-idea')) {
            $(self).find('a').addClass('active-list');
            $('.structure-serviceinnova-links, .structure-project-links').find('a').each(function () {
                if (!$(this).hasClass('idea-link')) {
                    $(this).addClass('hidden-link');
                    if ('.idea-link:hidden') {
                        $('.idea-link').removeClass('hidden-link');
                    }
                }
            });
        } else if ($(self).hasClass('structure-left-side-patent')) {
            $('.structure-serviceinnova-links, .structure-project-links').find('a').each(function () {
                if (!$(this).hasClass('patent-link')) {
                    $(this).addClass('hidden-link');
                    if ('.patent-link:hidden') {
                        $('.patent-link').removeClass('hidden-link');
                    }
                }
            });
        } else {
            $('.structure-serviceinnova-links, .structure-project-links').find('a').each(function () {
                if (!$(this).hasClass('startup-link')) {
                    $(this).addClass('hidden-link');
                    if ('.startup-link:hidden') {
                        $('.startup-link').removeClass('hidden-link');
                    }
                }
            });
        }
    });

    //portfolio
    var $portfolio = $('.portfolio');
    $portfolio.imagesLoaded(function () {
        $portfolio.mason({
            itemSelector: '.portfolio-img',
            ratio: 1,
            sizes: [
                [1,1],
                [1,2],
                [2,1],
                [2,2]
            ],
            columns: [
                [0,480,1],
                [480,780,2],
                [780,1080,3],
                [1080,1320,4],
                [1320,1680,8]
            ],
            layout: 'fluid'
        });
    });
    $('.portfolio-img').imagefill();
    //portfolio pop-up
    $('.portfolio-popup').magnificPopup({
        type: 'ajax'
    });

    //vocabulary tabs
    $('#tab1-container, #tab2-container, #tab3-container').easytabs({
        updateHash: false
    });
});
