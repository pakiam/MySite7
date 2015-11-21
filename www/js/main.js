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
});
