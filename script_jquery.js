$(function(){
    $('#vermelho').click(function(){
        $('p')
            .css('background-color', 'red')
            .hide()
            .fadeOut('fast')
            .delay(1000)
            .fadeIn('fast');
    });

    $('#azul').click(function(){
        $('p')
            .css('background-color', 'blue')
            .fadeOut('slow')
            .delay(1000)
            .fadeIn('slow')
            
        $("#mensagem")
            .text("Cor alterada com sucesso!!")
            .css('color', "blue")
            .css('border', "1px solid blue")
            .delay(3000)
            .fadeOut("fast");
    }); 
});