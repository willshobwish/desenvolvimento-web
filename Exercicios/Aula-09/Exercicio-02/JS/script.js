let variavel = document.getElementById('identidade');
variavel.style = "width: 200px; height: 200px; background-color: black;";

var nomeJogador1 = prompt("Qual é o nome do jogador 1?");
var nomeJogador2 = prompt("Qual é o nome do jogador 2?");

var valorJogador1 = prompt("Qual é a soma que deseja "+nomeJogador1+"?");
var valorJogador2 = prompt("Qual é a soma que deseja "+nomeJogador2+"?");

var dadoJogador1 = 0;
var dadoJogador2 = 0;
var dado1TempJogador1;
var dado2TempJogador1;
var dado1TempJogador2;
var dado2TempJogador2;
var rodada = 0;

alert("Os dados serão impressos no console do navegador")

function dado(){
    return Math.ceil(Math.random()*6);
}

var ganhador = 0;

console.log("Teste de dado: "+dado());

while(ganhador == 0){
    rodada += 1;
    console.log("Rodada "+rodada+"!");
    alert("Começará a rodada "+rodada+"!");
    if(ganhador == 0){
        dado1TempJogador1 = dado();
        dado2TempJogador1 = dado();
        dadoJogador1 += dado1TempJogador1 + dado2TempJogador1;
        console.log(nomeJogador1+" retirou os números "+dado1TempJogador1+" e "+dado2TempJogador1+" nos dados!\nTotalizando "+dadoJogador1+" pontos!\nA soma desejada de "+nomeJogador1+" é "+valorJogador1+"!");
        if(dadoJogador1>=valorJogador1){
            ganhador = 1;
            console.log("O ganhador foi o "+nomeJogador1+"!");
            alert("O ganhador foi o "+nomeJogador1+" com "+dadoJogador1+"!");
        }
    }
    if(ganhador == 0){
        dado1TempJogador2 = dado();
        dado2TempJogador2 = dado();
        dadoJogador2 += dado1TempJogador2 + dado2TempJogador2;
        console.log(nomeJogador2+" retirou os números "+dado1TempJogador2+" e "+dado2TempJogador2+" nos dados!\nTotalizando "+dadoJogador2+" pontos!\nA soma desejada de "+nomeJogador2+" é "+valorJogador2+"!");
        if(dadoJogador2>=valorJogador2){
            ganhador = 1;
            console.log("O ganhador foi o "+nomeJogador2+"!");
            alert("O ganhador foi o "+nomeJogador2+" com "+dadoJogador2+"!");
        }
    }
    if(ganhador ==0){
        alert(nomeJogador1+" retirou os números "+dado1TempJogador1+" e "+dado2TempJogador1+" nos dados!\nTotalizando "+dadoJogador1+" pontos!\nA soma desejada de "+nomeJogador1+" é "+valorJogador1+"!\n\n"+nomeJogador2+" retirou os números "+dado1TempJogador2+" e "+dado2TempJogador2+" nos dados!\nTotalizando "+dadoJogador2+" pontos!\nA soma desejada de "+nomeJogador2+" é "+valorJogador2+"!");
    }
}