$(document).ready(function () {
    /*Redireciona para minha página no facebook*/
    $("#desenvolvedor").click(function () {
        window.open('https://www.facebook.com/carlos.fernando.5851', '_blank');
    });
    /*Carrega a página inicio.html quando o site é aberto*/
    $("#conteudo").load("inicio.html");
    /*Chama a página acessorios.html quando o botaoAcessorios for clicado*/
    $(".botaoAcessorios").click(function () {
        $("#conteudo").load("acessorios.html");
        $("#botaoLateralAcessorios").css("color","#ffb5ba");//Ainda o botão não fica rosa quando clica nele - botão lateral de acessórios
    });
    /*Chama a página inicio.html quando o botao inicio for clicado*/
    $("#inicio").click(function () {
        $("#conteudo").load("inicio.html");
    });
    /*Chama a página roupasMeninas via ajax*/
    $(".botaoRoupaFeminina").click(function () {
        $("#conteudo").load("roupasMeninas.html");
    });
     /*Chama a página sapatosFemininos via ajax*/
    $(".botaoSapatosFemininos").click(function () {
        $("#conteudo").load("sapatosFemininos.html");
    });
    
    /*Faz aparecer e desaparecer os botões laterais das meninas*/
    $("#meninas").click(function () {
        $(this).css("color", "black");
        $("#botaoLateralSapatosFemininos").slideToggle("slow", function () {
            $("#botaoLateralRoupasFemininas").slideToggle("slow");
        });
    });
    /*Faz aparecer e desaparecer os botões laterais dos meninos*/
    $("#meninos").click(function () {
        $(this).css("color", "black");
        $("#botaoLateralSapatosMasculinos").slideToggle("slow", function () {
            $("#botaoLateralRoupasMasculinas").slideToggle("slow");
        });
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
