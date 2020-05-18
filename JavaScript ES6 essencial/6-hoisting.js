// Hoisting (içar, elevar, ...) - variáveis
function fn() {
    console.log(text); // retorna undefined, variável existe, mas não conhece o valor

    var text = "Exemplo"; // somente a partir da atribuição que o valor é conhecido

    console.log(text);
}

// fn();

/* COMO FUNCIONA O HOISTING DE VARIÁVEIS
function fn() {
    var text;
    console.log(text);

    text = "Exemplo";

    console.log(text);
}
*/

// Hoisting (içar, elevar, ...) - função
function fn() {
    log("Hoisting de função");

    function log(value) {
        console.log(value);
    }
}

fn();

/* COMO FUNCIONA O HOISTING DE FUNÇÃO
function fn() {
    function log(value) {
        console.log(value);
    }

    log("Hoisting de função");
}
*/