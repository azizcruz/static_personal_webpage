$(document).ready(function () {
   /* //Dynamic active class
    $("header nav ul li").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
    });*/
    //Smooth scrolldown
    $("header nav ul li").click(function () {
            $("body, html").animate({
                scrollTop: $("#" + $(this).data("value")).offset().top - 50
            }, 1000);
        })
        //Display and hide GoTop
    var maxTop = $("#port").offset().top;
    $(window).scroll(function () {
        if ($(window).scrollTop() >= maxTop) {
            $("#goTop").fadeIn(500);
        }
        else {
            $("#goTop").fadeOut(500);
        }
    });
    //GoTop
    $("#goTop").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
    });
    // Fix the header content in small screens
    if ($(window).width() <= 900) {
        $("body").css({
            marginTop: "155px"
        });
    }
    // Dynamic active nav list element with scrolling
    var curr_pos = $(window).scrollTop()
        , port_pos = $("#port").position().top - 50
        , cont_pos = $("#cont").position().top - 200;
    if (curr_pos < port_pos) {
        $("nav ul li").removeClass("active");
        $("nav ul li:nth-child(1)").addClass("active");
    }
    else if (curr_pos >= port_pos && curr_pos < cont_pos) {
        $("nav ul li").removeClass("active");
        $("nav ul li:nth-child(2)").addClass("active");
    }
    else if (curr_pos >= cont_pos) {
        $("nav ul li").removeClass("active");
        $("nav ul li:nth-child(3)").addClass("active");
    }
    $(window).on("scroll", function () {
        var curr_pos = $(window).scrollTop()
            , port_pos = $("#port").position().top -50
            , cont_pos = $("#cont").position().top - 200;
        if (curr_pos < port_pos) {
            $("nav ul li").removeClass("active");
            $("nav ul li:nth-child(1)").addClass("active");
        }
        else if (curr_pos >= port_pos && curr_pos < cont_pos) {
            $("nav ul li").removeClass("active");
            $("nav ul li:nth-child(2)").addClass("active");
        }
        else if (curr_pos >= cont_pos) {
            $("nav ul li").removeClass("active");
            $("nav ul li:nth-child(3)").addClass("active");
        }
    });
});