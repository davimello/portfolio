    console.log("I can see you! Welcome to my website 🙃");

    $(document).ready(function() {

      $(window).resize(() => {
        var width = $(window).width();
          if (width < '576') {
              $('#hero-bg').hide();
              $('.col-6').removeClass('col-6').addClass('col-lg');
          }
          else if (width >= '576') {
              $('#hero-bg').show();
              $('#hero').removeClass('col-lg').addClass('col-6');
          }
      });

    $('.icon').on('click', function(){
        $('.icon').toggleClass('active');
        $('.categories').toggleClass('active');
      })

    });
    