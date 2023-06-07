//menu mobile
$('.abrirMenu').click(function () { 
    $('.mobile').fadeIn();
});

$('.fecharMenu').click(function () { 
    $('.mobile').fadeOut();
});

// slider

$('.abt-card').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    slickPlay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
});

// scroll menu

$('menu li a').click(function () { 
    const href = $(this).attr('href');
    const offSetTop = $(href).offset().top;

    $('html body').animate({'scrollTop': offSetTop});

    return false;
    
});