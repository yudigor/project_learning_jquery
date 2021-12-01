$(function(){
    $('#vermelho').click(function(){
        $('p').css('background-color', 'red');
        $('p').hide();
        $('p').fadeOut('fast');
        $("p").delay(1000);
        $("p").fadeIn('fast');
    });

    $('#azul').click(function(){
        $('p').css('background-color', 'blue');
        $('p').fadeOut('slow');
        $("p").delay(1000);
        $("p").fadeIn('slow');
        $("#mensagem").text("Cor alterada com sucesso!!");
        $("#mensagem").css('color', "blue");
        $("#mensagem").css('border', "1px solid blue");
        $("#mensagem").delay(3000);
        $("#mensagem").fadeOut("fast");
    }); 
});