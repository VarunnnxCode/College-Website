window.onscroll = function() {
    scrollFunction();
    // scrollFunction2();
}

function scrollFunction() {
    var r = document.querySelector(':root');
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    $('header').addClass("navi-scrolled");
    $('.nav-link,.logo-text,.logo-tagline').addClass("colour");
    $(".logo-img").attr("src","lion-gradient.png");
}
else{
    $('header').removeClass("navi-scrolled");
    $('.nav-link,.logo-text,.logo-tagline').removeClass("colour");
    $(".logo-img").attr("src","lion-white.png");
}
}

