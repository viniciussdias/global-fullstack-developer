// OPERADORES ARITMÉTICOS

// Módulo (%)
// Operador binário. Retorna o inteiro restante da divisão dos dois operandos.

12 % 5 // retorna 2.

// Incremento (++) e Decremento (--)
++x 
x++

--x
x--

// Negação (-) e Adição (+)
-3
+"3"    // retorna 3
+true   // retorna 1
+false  // retorna 0
-true   // retorna -1

// Operador de exponenciação (**)
2 ** 3 // retorna 8
10 ** -1 // retorna 0.1

// Operador de agrupamento ()
2 * (3 + 2)

// ################################

// OPERADORES DE ATRIBUIÇÃO

// Atribuição
x = y

// Atribuição de adição
x = x + y // ou
x += y

// Atribuição de subtração
x = x - y // ou
x -= y

// Atribuição de multiplicação
x = x * y // ou
x *= y

// Atribuição de divisão
x = x / y // ou
x /= y

// Atribuição de adição
x = x % y // ou
x %= y

// ################################

// OPERADORES DE COMPARAÇÃO

// Igual (==)
// Retorna verdadeiro caso os operandos sejam iguais. 3 == var1
"3" == var1
3 == "3"

// Não igual (!=)
// Retorna verdadeiro caso os operandos não sejam iguais. var1 != 4
var2 != "3"

// Estritamente igual (===)
// Retorna verdadeiro caso os operandos sejam iguais e do mesmo tipo. Veja também Object.is e igualdade.
3 === var1

// Estritamente não igual (!==)
// Retorna verdadeiro caso os operandos não sejam iguais e/ou não sejam do mesmo tipo.
var1 !== "3"
3 !== "3"

// Maior que (>)
// Retorna verdadeiro caso o operando da esquerda seja maior que o da direita.
var2 > var1
"12" > 2

// Maior que ou igual (>=)
// Retorna verdadeiro caso o operando da esquerda seja maior ou igual ao da direita.
var2 >= var1
var1 >= 3

// Menor que (<)
// Retorna verdadeiro caso o operando da direita seja maior que o da esquerda.
var2 < var1
"12" < "2"

// Menor que ou igual (<=)
// Retorna verdadeiro caso o operando da esquerda seja menor ou igual ao da direita.
var1 <= var2
var2 <= 5

// ################################

// OPERADOR TERNÁRIO

condicao ? valor1 : valor2

true ? "foo" : "bar"    // Retorna "foo"
false ? "foo" : "bar"   // Retorna "bar"

// ################################

// OPERADORES LÓGICOS

// AND lógico (&&)
exp1 && exp2

var a1 = true && true;      // t && t retorna true
var a2 = true && false;     // t && f retorna false
var a3 = false && true;     // f && t retorna false
var a4 = false && (3 == 4); // f && f retorna false
var a5 = "Gato" && "Cão";   // t && t retorna Cão
var a6 = false && "Gato";   // t && t retorna false
var a7 = "Gato" && false;   // t && t retorna false

// OU lógico (||)
exp1 || exp2

var o1 = true || true;      // t && t retorna true
var o2 = false || true;     // f && t retorna true
var o3 = true || false;     // t && f retorna true
var o4 = false || (3 == 4); // f && f retorna false
var o5 = "Gato" || "Cão";   // t && t retorna Gato
var o6 = false || "Gato";   // f && t retorna Gato
var o7 = "Gato" || false;   // t && f retorna Gato

// NOT lógico (!)
!exp1

var n1 = !true;     // !t retorna false
var n2 = !false;    // !f retorna true
var n3 = !"Gato";   // !t retorna false

/*
// True
" "
1
["teste"]

// False
""
0
[]

!!
*/