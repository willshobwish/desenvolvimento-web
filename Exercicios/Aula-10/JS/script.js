function primeiraLetraMaius(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
// Utilize let inves de var, porque var eh para variaveis globais, let eh local
// Precisara pegar o body do documento e colocar em uma variavel, como esta abaixo
var body = document.querySelector('body');
// Pode-se alterar o estilo do body com o nome-variavel.style, isso serve para outros tipos como div
body.style = "margin: 0";

//Abaixo temos a criacao de um elemento para o documento, aqui sera a criacao de um "div"
//Lembre-se, precisa adicionar isso ao "body" do documento, por isso acima tivemos que selecionar o "body" e colocar em uma variavel
var container = document.createElement('div');
//Aplicando estilos no "div" que foi criado acima
container.style = "background-color: gray"

//Criacao de outro "div", para organizacao
var containerdescription = document.createElement('div');

//Criacao de uma array de jogos, foi o que peguei para fazer lista dinamicamente
var listadejogos = ['overwatch','minecraft','valorant','apex legends','league of legends','bioshock','dead by daylight','dying light','life is strange','borderlands'];

//Declaracao de variveis antes do "for", nao sei porque, mas se criar dentro do "for" nao funcionara as funcoes que precisaremos
var itens;
var nomes;
var bloco;

//Estrutura de repeticao padrao de "C"
//Ele ira repetir pela quantidade de itens que possui no array declarado acima que eh o "listadejogos"
//A funcao .length retorna o tamanho do array, isso faz com que o "for" tenha fique de acordo com o tamanho do "array"
for(i=0;i<listadejogos.length;i++){
    //Criacao de um outro elemento "div" com o nome da variavel "itens"
    itens = document.createElement('div');
    //Aplicacao de estilo no "itens"
    itens.style = "padding-top:10px;padding-left:10px;display:flex;align-items:center"
    //O "nome-variavel.innerHTML" faz com que ele "escreva" em forma de HTML, ou seja, pode escrever como está descrito abaixo para "retornar no site" os elementos descrito abaixo
    //A concatenacao de strings é diferente em JS, só precisa adicionar "+"
    //A cada "for" ele vai alterando o diretorio da imagem, fazendo com que ele pegue todas as imagens que esta no diretorio e assim formando uma lista
    //Cuidado com as aspas, coloque uma simples e utilize as duplas dentro das aspas simples e vice-versa
    itens.innerHTML = '<img src="./Images/'+listadejogos[i]+'.png" alt="" height=100px>'
    nomes = document.createElement('span')
    nomes.style = "padding-left:20px;font-size:30pt;font-weight:bold";
    //"nome-variavel.innerText" seria para escrever textos para ser mostrados no HTML
    nomes.innerText = primeiraLetraMaius(listadejogos[i]);
    bloco = document.createElement('div');
    bloco.style = "margin-left: 500px; background-color: black; height: 100px; width:100px; position: absolute";
    //Ao final de todo o processo, precisaremos adicionar os elementos criados em algum lugar para ser mostrado no site, para isso utilizaremos o "appendChild"
    //A sintaxe eh "variavel-de-destino.appendChild(variavel-de-origem)"
    //Por isso declaramos as variaveis e dentro dessas variveis possuem os elementos que foram criados como por exemplo o "div"
    itens.appendChild(nomes);
    itens.appendChild(bloco);
    container.appendChild(itens);
}
//Ao final adicionaremos o que fizemos ao "body" do HTML, assim ficara disponivel no site
body.appendChild(container);