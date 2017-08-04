$(document).ready(function(){

    $('.carousel_head').slick({
        infinite: true,
        slidesToShow: 1,
        autoplay: true,
        dots:true,
        arrows:true
        // prevArrow: ,
        // nextArrow: ,
    });
    $('.carousel-sertif').slick({
        infinite: true,
        slidesToShow: 1,
        autoplay: true,
        dots:true,
        arrows:true
        // prevArrow: ,
        // nextArrow: ,
    });
    $('.modal_carousel').slick({
        infinite: true,
        slidesToShow: 1,
        autoplay: false,
        dots:false,
        arrows:true
        // prevArrow: ,
        // nextArrow: ,
    });

//    MODAL

    $('.modal1').click(function () {
        $('#overlay').css('display', 'block').animate({
            opacity: 0.5
        }, 200);
        $('#modal_form1').css('display', 'block');
    });

    $('#modal_close1') .click(function () {
        $('#modal_form1').css('display', 'none');
        $('#overlay').css('display', 'none').animate({
            opacity: 0
        }, 200);
    })



    $('#modal2').click(function () {
        $('#overlay').css('display', 'block').animate({
            opacity: 0.5
        }, 200);
        $('#modal_form2').css('display', 'block');
    });

    $('#modal_close2') .click(function () {
        $('#modal_form2').css('display', 'none');
        $('#overlay').css('display', 'none').animate({
            opacity: 0
        }, 200);
    })



    $('.modal3').click(function () {
        $('#overlay').css('display', 'block').animate({
                opacity: 0.5
            }, 200);
        $('#modal_form3').css('display', 'block');
    });

    $('#modal_close3') .click(function () {
        $('#modal_form3').css('display', 'none');
        $('#overlay').css('display', 'none').animate({
                opacity: 0
            }, 200);
    })

    $('#modal4').click(function () {
        $('#overlay').css('display', 'block').animate({
            opacity: 0.5
        }, 200);
        $('#modal_form4').css('display', 'block');
    });

    $('#modal_close4') .click(function () {
        $('#modal_form4').css('display', 'none');
        $('#overlay').css('display', 'none').animate({
            opacity: 0
        }, 200);
    })

    $('#modal5').click(function () {
        $('#overlay').css('display', 'block').animate({
            opacity: 0.5
        }, 200);
        $('#modal_form5').css('display', 'block');
    });

    $('#modal_close5') .click(function () {
        $('#modal_form5').css('display', 'none');
        $('#overlay').css('display', 'none').animate({
            opacity: 0
        }, 200);
    })

    $('#modal6').click(function () {
        $('#overlay').css('display', 'block').animate({
            opacity: 0.5
        }, 200);
        $('#modal_form6').css('display', 'block');
    });

    $('#modal_close6') .click(function () {
        $('#modal_form6').css('display', 'none');
        $('#overlay').css('display', 'none').animate({
            opacity: 0
        }, 200);
    })
    $('#modal7').click(function () {
        $('#overlay').css('display', 'block').animate({
            opacity: 0.5
        }, 200);
        $('#modal_form7').css('display', 'block');
    });

    $('#modal_close7') .click(function () {
        $('#modal_form7').css('display', 'none');
        $('#overlay').css('display', 'none').animate({
            opacity: 0
        }, 200);
    })


});