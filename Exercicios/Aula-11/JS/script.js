let quadrado = document.getElementById('quadrado');
let altura = 10;

function evento(){
    quadrado.style = "margin-top: " + altura + "px;"
    altura += 10;
    if(altura == 200){
        altura = 0;
    }
}
alert("Funciona somente com o clique do mouse sobre o quadrado")
quadrado.addEventListener("click",evento);

console.log("Carregado");