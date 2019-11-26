    console.log("I can see you! Welcome to my website 🙃");

    $(document).ready(function() {

    $('.icon').on('click', function(){
        $('.icon').toggleClass('active');
        $('.categories').toggleClass('active');
      })

    // function resize() {
    //   if (window.matchMedia('(max-width: 767px)').matches) {
    //     $('#hero').removeClass('col-6').addClass('col-lg');
    // }};
    
    // resize();

      // $(window).resize(() => {
      //   var width = $(window).width();
      //     if (width < 768) {
      //         // $('#hero-bg').hide();
      //         $('.col-6').removeClass('col-6').addClass('col-lg');
      //     }
      //     else {
      //         // $('#hero-bg').show();
      //         $('#hero').removeClass('col-lg').addClass('col-6');
      //     }
      // });

    });