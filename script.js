var pos = ["y", "y", "y", "y", "y", "y", "y", "y", "y"];
var Jogador_atual = "x";
var primeiro = "x";
var ponto_x = 0;
var ponto_o = 0;

var ler_nome = function(){
    var jogador1 = prompt("Digite o nome do jogador 1");
    document.getElementById("jogador1").innerHTML= jogador1 + '<div id="jogador1">:</div>';

    var jogador2 = prompt("Digite o nome do jogador 2");
    document.getElementById("jogador2").innerHTML= jogador2 + '<div id="jogador2">:</div>';

}

var vencedor_verificar = function(){
    var vencedor = 'y';
   if((
       (pos[0] == pos[1]) && (pos[1] == pos[2]) ||
       (pos[0] == pos[3]) && (pos[3] == pos[6]) ||
       (pos[0] == pos[4]) && (pos[4] == pos[8]) 
    ))
    {vencedor = pos[0];}
   if((
       (pos[1] == pos[4]) && (pos[4] == pos[7])
   ))
   {vencedor = pos[1];}
   if((
       (pos[2] == pos[4]) && (pos[4] == pos[6]) ||
       (pos[2] == pos[5]) && (pos[5] == pos[8]) 
   ))
   {vencedor = pos[2];}
   if((
       (pos[3] == pos[4]) && (pos[4] == pos[5])
   ))
   {vencedor = pos[3];}
   if((
       (pos[6] == pos[7]) && (pos[4] == pos[8])
   ))
   {vencedor = pos[6];}
   return vencedor;
} 

var ler = function(posicao){
        if(pos[parseInt(posicao)] == "y"){
            if(Jogador_atual == "x"){
                document.getElementById(posicao).innerHTML = '<div class="ler"><img src = "letra_X.png"></div>';
                pos[parseInt(posicao)] = "x";
                Jogador_atual = "o";
                }
            else{
                document.getElementById(posicao).innerHTML = '<div class = "ler"><img src = "letra_Y.png"></div>';
                pos[parseInt(posicao)] = "o";
                Jogador_atual = "x";
            }
        } 


    if(vencedor_verificar() != "y"){
        if(vencedor_verificar() == "x"){
            ponto_x++;
        }
        else{
            ponto_o++;
        }
        alert(vencedor_verificar() + " ganhou!");

        pos = ["y", "y", "y", "y", "y", "y", "y", "y", "y"];

        if(primeiro == "x"){
            primeiro == "o"
        }
        else{
            primeiro == "x"
        }

        Jogador_atual == primeiro;

        for (var i=0; i < 9; i++){
            document.getElementById(i.toString()).innerHTML = '<div class = "ler"></div>';
        }

        for (var i = 0; i < 9; i++) {
            document.getElementById(i.toString()).innerHTML = "<div></div>";
        } 

        document.getElementById("jogador1").innerHTML = jogador1 + ": " + ponto_x;
        document.getElementById("jogador2").innerHTML = jogador2 + ": " + ponto_o;
    }
}





