/*
// Variáveis
var nameVar = "Geisla";
let nameLet = "Geisla";
const nameConst = "Geisla";

console.log(`nameVar: ${nameVar}`);
console.log(`nameLet: ${nameLet}`);
console.log(`nameConst: ${nameConst}`);
*/

/*
// var
var test = "example";

(() => {
    var test;
    console.log(`Valor dentro da função "${test}"`);

    if(true) {
        test = "example";
        console.log(`Valor dentro do if "${test}"`);
    }

    console.log(`Valor após a execução do if "${test}"`);
})();
*/

/*
// let
(() => {
    let test = "valor função";
    console.log(`Valor dentro da função "${test}"`);

    if(true) {
        let test = "valor if"; // respeita escopo de bloco
        console.log(`Valor dentro do if "${test}"`);
    }

    if(true) {
        let test = "valor de outro if"; // respeita escopo de bloco
        console.log(`Valor de outro if "${test}"`);
    }

    console.log(`Valor após a execução do if "${test}"`);
})();
*/

/*
// const
(() => {
    const test = "valor função";
    console.log(`Valor dentro da função "${test}"`);

    if(true) {
        const test = "valor if"; // respeita escopo de bloco
        console.log(`Valor dentro do if "${test}"`);
    }

    console.log(`Valor após a execução do if "${test}"`);
})();
*/

// PARTICULARIDADES DO CONST

const name = "Vinícius";

// Não podemos alterar o valor
// name = "Vinícius";

const user = {
    name: "Vinícius"
};

// Mas se for um objeto, podemos trocar suas propriedades
user.name = "Geisla";

// Não podemos fazer objeto "apontar" para outro lugar
// user = {
//     name: "Geisla"
// };

const persons = ["Vinícius", "Geisla", "BotJaum"];

// Podemos adicionar novos itens
persons.push("BotSilva");

// Podemos remover algum item
persons.shift;

// Podemos alterar diretamente
persons[1] = "Jane";

console.log(`\nArray após as alterações: ${persons}`);





