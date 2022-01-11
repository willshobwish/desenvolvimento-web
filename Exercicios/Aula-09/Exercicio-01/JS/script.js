let listadepergunta = ["Qual o seu nome?", "Qual a sua idade?","Em qual estado mora?"];
let listaderesposta = [];
for(let i=0;i<listadepergunta.length;i++){
    listaderesposta[i] = prompt(listadepergunta[i]);
}
for(let i=0;i<listadepergunta.length;i++){
    console.log(listadepergunta[i]);
    console.log(listaderesposta[i]);
}