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
        $("#botaoLateralAcessorios").css("color", "#ffb5ba");//Ainda o botão não fica rosa quando clica nele - botão lateral de acessórios
    });
    /*Chama a página inicio.html quando o botao inicio for clicado*/
    $(".inicio").click(function () {
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
    //Tira o sublinhado de elementos que estejam dento da tag <a>, assim o
    //o texto "Menu" do menu mobile fica sem o underline
    $("a").css("textDecoration","none");
    
    /*Chama a página roupasMeninos via ajax*/
    $(".botaoRoupasMasculinas").click(function () {
        $("#conteudo").load("roupasMeninos.html");
    });
    /*Chama a página sapatosMasculinos via ajax*/
    $(".botaoSapatosMasculinos").click(function () {
        $("#conteudo").load("sapatoMasculino.html");
    });
    /*Cor chocolate nas subopções do 1º menu - versão mobile*/
    $("#myNavbar ul li ul li a").css("color","#d2691e");
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
    });
    /*Efeito sombreado quando o botão menu mobile para indicar quando ele está clicado
     * ou não*/
    var cliqueBotao=false;
    $("button#botaoMenuMobile").click(function(){
        if(!cliqueBotao){
            $(this).css("boxShadow","0px 0px 4px black");
            cliqueBotao=true;
        }else{
            $(this).css("boxShadow","none");
            cliqueBotao=false;
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


});
