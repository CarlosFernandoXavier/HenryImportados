$(document).ready(function () {
    $("#desenvolvedor").click(function () {
        window.open('https://www.facebook.com/carlos.fernando.5851', '_blank');
    });
    
    /*Faz o efeito de zoom nas imagens*/
    $(".thumbnail a img").hover(function () {
        $(this).animate({width: "150px"}, "fast");
    });
    /*Retorna a imagem ao tamanho origina*/
    $(".thumbnail a img").mouseleave(function () {
        $(this).animate({width: "120px"}, "fast");
    });
    /*TROCAR AS IMAGENS DE FRETE E COMPRA POR UM BOTÃO DE COMPRAS COM UM CARRINHO*/


});
