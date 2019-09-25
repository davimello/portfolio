    console.log("I can see you! Welcome to my website 🙃");

    $(document).ready(function() {
      $('.icon').on('click', function(){
        $('.icon').toggleClass('active');
        $('.categories').toggleClass('active');
      })
    });