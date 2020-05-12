const navbar = document.querySelector(".navbar");
window.onscroll = function() {

    // pageYOffset or scrollY
    if (window.pageYOffset > 0) {
        navbar.classList.add('border-bottom')
    } else {
        navbar.classList.remove('border-bottom')
    }
}

// Scroll
$(".nav-item").click(function() {
    const getTarget = $(this).attr('href');
    const nav = $('.navbar').outerHeight();
    $('html,body').animate({
        scrollTop: $(getTarget).offset().top - nav - 20 },
        'slow');
});

$(document).ready(function(){

    $('#gallery-aero').lightGallery({
        thumbnail:true
    });

    $(".caption-service").on('click' , function(){
        const caption = $(this).attr("data-target");
        $(".prog-pil").attr('style' , 'display:none');
        $(caption).addClass('active-pane');
        // console.log(caption);
    });

    $(".btn-back").on('click' , function(){
       const paneactive = '#' + $(".active-pane").attr("id");
        $(paneactive).removeClass('active-pane');
        $(".prog-pil").show();

        console.log(paneactive);
    });

});