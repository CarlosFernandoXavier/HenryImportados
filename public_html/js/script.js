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
        $("#botaoLateralAcessorios").css("backgroundColor", "#ffb5ba");//O botão fica rosa quando clica nele - botão lateral de acessórios
        $("#botaoLateralAcessorios").css("color", "#000000");//botão acessório lateral permanece com a letra preta quando é clicado
        $("#botaoMenuMobile").trigger("click");//dispara um clique no botao do menu, fechando o mesmo
    });
    /*Chama a página inicio.html quando o botao inicio for clicado*/
    $(".inicio").click(function () {
        $("#conteudo").load("inicio.html");
        $("#botaoMenuMobile").trigger("click");//dispara um clique no botao do menu, fechando o mesmo
    });
    /*Chama a página roupasMeninas via ajax*/
    $(".botaoRoupaFeminina").click(function () {
        $("#conteudo").load("roupasMeninas.html");
        $("#botaoMenuMobile").trigger("click");//dispara um clique no botao do menu, fechando o mesmo
    });
    /*Chama a página sapatosFemininos via ajax*/
    $(".botaoSapatosFemininos").click(function () {
        $("#conteudo").load("sapatosFemininos.html");
        $("#botaoMenuMobile").trigger("click");//dispara um clique no botao do menu, fechando o mesmo
    });
    /*Chama a página paginaEmConstrucao via ajax*/
    $(".botaoContato").click(function () {
        $("#conteudo").load("paginaEmConstrucao.html");
    });
    /*Chama a página paginaEmConstrucao via ajax*/
    $(".botaoOpcao").click(function () {
        $("#conteudo").load("paginaEmConstrucao.html");
        $("#botaoMenuMobile").trigger("click");//dispara um clique no botao do menu, fechando o mesmo
    });

    /*Faz aparecer e desaparecer os botões laterais das meninas*/
    $("#meninas").click(function () {
        $(this).css("color", "black");
        $("#botaoLateralSapatosFemininos").slideToggle("slow", function () {
            $("#botaoLateralRoupasFemininas").slideToggle("slow", function () {
                $("#botaoMenuMobile").trigger("click");//dispara um clique no botao do menu, fechando o mesmo
            });
        });
    });
    /*Faz aparecer e desaparecer os botões laterais dos meninos*/
    $("#meninos").click(function () {
        $(this).css("color", "black");
        $("#botaoLateralSapatosMasculinos").slideToggle("slow", function () {
            $("#botaoLateralRoupasMasculinas").slideToggle("slow", function () {
                $("#botaoMenuMobile").trigger("click");//dispara um clique no botao do menu, fechando o mesmo
            });
        });
    });
    //Tira o sublinhado de elementos que estejam dento da tag <a>, assim o
    //o texto "Menu" do menu mobile fica sem o underline
    $("a").css("textDecoration", "none");

    /*Chama a página roupasMeninos via ajax*/
    $(".botaoRoupasMasculinas").click(function () {
        $("#conteudo").load("roupasMeninos.html");
        $("#botaoMenuMobile").trigger("click");//dispara um clique no botao do menu, fechando o mesmo
    });
    /*Chama a página sapatosMasculinos via ajax*/
    $(".botaoSapatosMasculinos").click(function () {
        $("#conteudo").load("sapatoMasculino.html");
        $("#botaoMenuMobile").trigger("click");//dispara um clique no botao do menu, fechando o mesmo
    });
    /*Cor chocolate nas subopções do 1º menu - versão mobile*/
    $("#myNavbar ul li ul li a").css("color", "#d2691e");
    /*Efeito de fundo rosa claro quando uma opção do menu mobile é clicada*/
    $("#1").click(function () {
        $(this).css("backgroundColor", "#ffe4c4");
        $("#2").css("backgroundColor", "#faebd7");
        $("#3").css("backgroundColor", "#faebd7");
        $("#4").css("backgroundColor", "#faebd7");
        $("#5").css("backgroundColor", "#faebd7");
        $("#6").css("backgroundColor", "#faebd7");
    });
    $("#2").click(function () {
        $(this).css("backgroundColor", "#ffe4c4");
        $("#1").css("backgroundColor", "#faebd7");
        $("#3").css("backgroundColor", "#faebd7");
        $("#4").css("backgroundColor", "#faebd7");
        $("#5").css("backgroundColor", "#faebd7");
        $("#6").css("backgroundColor", "#faebd7");
    });
    $("#3").click(function () {
        $(this).css("backgroundColor", "#ffe4c4");
        $("#1").css("backgroundColor", "#faebd7");
        $("#2").css("backgroundColor", "#faebd7");
        $("#4").css("backgroundColor", "#faebd7");
        $("#5").css("backgroundColor", "#faebd7");
        $("#6").css("backgroundColor", "#faebd7");
    });
    $("#4").click(function () {
        $(this).css("backgroundColor", "#ffe4c4");
        $("#1").css("backgroundColor", "#faebd7");
        $("#2").css("backgroundColor", "#faebd7");
        $("#3").css("backgroundColor", "#faebd7");
        $("#5").css("backgroundColor", "#faebd7");
        $("#6").css("backgroundColor", "#faebd7");
    });
    $("#5").click(function () {
        $(this).css("backgroundColor", "#ffe4c4");
        $("#1").css("backgroundColor", "#faebd7");
        $("#2").css("backgroundColor", "#faebd7");
        $("#3").css("backgroundColor", "#faebd7");
        $("#4").css("backgroundColor", "#faebd7");
        $("#6").css("backgroundColor", "#faebd7");
    });
    $("#6").click(function () {
        $(this).css("backgroundColor", "#ffe4c4");
        $("#1").css("backgroundColor", "#faebd7");
        $("#2").css("backgroundColor", "#faebd7");
        $("#3").css("backgroundColor", "#faebd7");
        $("#4").css("backgroundColor", "#faebd7");
        $("#5").css("backgroundColor", "#faebd7");
        $("#botaoMenuMobile").trigger("click");//dispara um clique no botao do menu, fechando o mesmo

    });
    /*Efeito sombreado quando o botão menu mobile para indicar quando ele está clicado
     * ou não*/
    var cliqueBotao = false;
    $("button#botaoMenuMobile").click(function () {
        if (!cliqueBotao) {
            $(this).css("boxShadow", "0px 0px 4px black");
            cliqueBotao = true;
        } else {
            $(this).css("boxShadow", "none");
            cliqueBotao = false;
        }
    });



    /*Faz o efeito de zoom nas imagens
     $(".thumbnail a img").hover(function () {
     $(this).animate({width: "150px"}, "fast");
     });
     Retorna a imagem ao tamanho origina
     $(".thumbnail a img").mouseleave(function () {
     $(this).animate({width: "120px"}, "fast");
     });*/

    /*Carrosel -*/
// Instantiate the Bootstrap carousel
    $('.multi-item-carousel').carousel({
        interval: false
    });

// for every slide in carousel, copy the next slide's item in the slide.
// Do the same for the next, next item.
    $('.multi-item-carousel .item').each(function () {
        var next = $(this).next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));

        if (next.next().length > 0) {
            next.next().children(':first-child').clone().appendTo($(this));
        } else {
            $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
        }
    });
});
