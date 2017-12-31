$(document).ready(function () {
    /*Redireciona para minha página no facebook*/
    $("#desenvolvedor").click(function () {
        window.open('https://www.facebook.com/carlos.fernando.5851', '_blank');
    });
    /*Carrega a página inicio.html quando o site é aberto*/
    $("#conteudo").load("inicio.html");
    /*Chama a página acessorios.html quando o botaoAcessorios for clicado*/
    $("#botaoAcessorios").click(function () {
        $("#conteudo").load("Acessorios.html");
    });
    /*Chama a página inicio.html quando o botao inicio for clicado*/
    $("#inicio").click(function () {
        $("#conteudo").load("inicio.html");
    });
    $(".botaoRoupaFeminina").click(function(){
       $("#conteudo").load("RoupasMeninas.html");
    });
    /*TROCAR AS IMAGENS DE FRETE E COMPRA POR UM BOTÃO DE COMPRAS COM UM CARRINHO*/


    /*Faz o efeito de zoom nas imagens
     $(".thumbnail a img").hover(function () {
     $(this).animate({width: "150px"}, "fast");
     });
     Retorna a imagem ao tamanho origina
     $(".thumbnail a img").mouseleave(function () {
     $(this).animate({width: "120px"}, "fast");
     });*/


});
