// Funções de primeira classe e ordem maior. Função de primeira classe, esse termo significa que a função pode ser atribuída a uma variável, a uma estrutura de dados (object, array), podem ser passadas como argumentos, e até retornada por outras funções.
function getName() {
    return "Vinícius Dias";
}

function logFn(fn) {
    console.log(fn());
}

const logFnResult = logFn;

logFnResult(getName);