$(function(){
    $('#vermelho').click(function(){
        $('p').css('background-color', 'red');
        $('p').hide();
        $('p').fadeOut('');
        $("p").delay(1000);
        $("p").fadeIn('');
    });

    $('#azul').click(function(){
        $('p').css('background-color', 'blue');
        $('p').fadeOut('slow');
        $("p").delay(3000);
        $("p").fadeIn('slow');
    }); 
});