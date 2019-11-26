    console.log("I can see you! Welcome to my website 🙃");

    $(document).ready(function() {

    $('.icon').on('click', function(){
        $('.icon').toggleClass('active');
        $('.categories').toggleClass('active');
      })

    });
    
    $(window).resize(() => {
      var width = $(window).width();
        if (width < '812') {
            $('#hero-bg').css('display', 'none');
            $('.col-6').removeClass('col-6').addClass('col-lg');
        }
        else if (width >= '812') {
            $('#hero-bg').css('display', 'block');
            $('#hero').removeClass('col-lg').addClass('col-6');
        }
    });