/*
// ---- variáveis ----
var nome = "Vinícius Dias";
var idade = 21;
var idade2 = 10;
var frase = "Japão é o melhor time do mundo.";

// ---- alert ----
alert(nome + " tem " + idade + " anos");
alert(idade + idade2);
alert(frase.replace("Japão", "Brasil"));

// ---- console.log ----
console.log(nome) // imprimir no console
console.log(idade + idade2)
console.log(frase.replace("Japão", "Brasil")); // substituir string
console.log(frase.toUpperCase()); // tudo em maiúsculo
console.log(frase.toLowerCase()); // tudo em minúsculo

// ---- array ----
var lista = ["maça", "pêra", "laranja"];
console.log(lista);
lista.push("uva"); // inserir no array
lista.pop(); // remover do array
console.log(lista.length); // verifica tamanho do array
console.log(lista.reverse()); // inverte ordem dos elementos
console.log(lista.toString()); // transforma elementos do array em uma string
console.log(lista.join(" | ")); // transforma elementos do array em uma string com algum separador

// ---- dicionário ----
var fruta = {nome:"maçã", cor:"vermelha"};
console.log(fruta.nome);
alert(fruta.cor);

// ---- lista de dicionários ----
var frutas = [{nome:"maçã", cor:"vermelha"}, {nome:"limão", cor:"verde"}];
console.log(frutas[0].nome);
*/

// ---- condicionais ----
// var idade = prompt("Digite sua idade: ");
// if(idade >= 18) {
//     alert("Maior de idade");
// }else {
//     alert("Menor de idade");
// }

// ---- estruturas de repetição ----
/*
// while
var count = 0;
while(count <= 5) {
    console.log(count);
    count++;
}

// for
var count;
for(count=0; count<=5; count++) {
    console.log(count);
}
*/

// ---- data ----
/*
var d = new Date(); // capturar data
// alert(d.getMonth() + 1); // pega o mês
alert(d.getFullYear()); // pega o ano
*/

// ---- funções ----
/*
function soma(n1, n2) {
    return n1 + n2;
}
// alert(soma(23, 10));

function validaIdade() {
    var validar;
    if(idade >= 18) {
        validar = true;
    }else {
        validar = false;
    }
    return validar;
}

var idade = prompt("Digite sua idade: ");
console.log(validaIdade(idade));


function setReplace(frase, nome, novo_nome) {
    return frase.replace(nome, novo_nome);
}

alert(setReplace("Bem vindo Carlos, como vai? ", "Carlos", "Gutierrez"));
*/

function clicou() {
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar!</b>";
}

function redirecionar() {
    window.open("https://digitalinnovation.one/"); // abre em nova guia
    // window.location.href = "https://digitalinnovation.one/"; // abre na mesma guia
}

function trocar(elemento) {
    // document.getElementById("mouseover").innerHTML = "Obrigado por passar o mouse!"; // outra forma de trocar
    elemento.innerHTML = "Obrigado por passar o mouse.";
}

function voltar(elemento) {
    // document.getElementById("mouseover").innerHTML = "Passe o mouse aqui!";
    elemento.innerHTML = "Passe o mouse aqui...";
}

function load() {
    alert("Página carregada"); // alert ao carregar página
}

function funcaoChange(elemento) {
    console.log(elemento.value); // pega o valor do elemento
}