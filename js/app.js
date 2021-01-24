
$(document).ready(function(){
    $('.loader').fadeOut();
    $('.product-owl  .owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay:true,
        // responsiveClass:true,
        responsive:{
            0:{
                items:1,
                // nav:true
            },
            600:{
                items:3,
                // nav:false
            },
            1000:{
                items:5,
                // nav:true,
                // loop:false
            }
        }
     });
     

     $('.testimonials .owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay:true,
        items:1
    });


     $('.menu-icon').on('click',function(){
        $('.menu').toggleClass('show');
     });

     //Mixup start
     
     AOS.init({
        duration: 600,
        easing: 'ease-in-sine',
        dataAosOnce:true
     });
     $( "#Onavbar" ).click(function( e ) {
        e.stopPropagation();
        $(this).removeClass('show');

      }).on('click','a',function(e) {
        e.stopPropagation();
   });;
});