/*
 switch(expressão) {
    case valor1:
        [break;]
    case calueN:
        [break;]
    default:
        [break;] 
 }
*/

const fruit = "pera";

switch(fruit){
    case "banana":
        console.log("R$ 3,00 / Kg");
        break;
    case "mamão":
    case "pera":
        console.log("R$ 2,00 / Kg");
        break; // remove esse break caso queira a impressão do default
    default:
        console.log("Produto não existe no estoque.");
        break;
}
