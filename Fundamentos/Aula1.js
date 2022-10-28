/* Exercicio 1
console.log(Hello("Fabis")) 

function Hello (name){
    return `Hello ${name}`
}
*/

/* Exercicio 2
console.log(yearsToDays(25))

function yearsToDays(years){
    return years*365
}
*/

/* Exercicio 3
function numberToMonth(number){
    const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
    if(number>12 || number < 1) return "error: number > 12 or < 1"
    return months[number-1]
}

console.log(numberToMonth(2))
*/

/* Exercicio 4
console.log(maiorOuIgual(5, 1))
console.log(maiorOuIgual(1, 3))
console.log(maiorOuIgual(1, "3"))

function maiorOuIgual(x, y){
    return y >= x && typeof(y) === typeof(x)
}
*/

/*
console.log(inverso(true))
console.log(inverso(false))
console.log(inverso("5"))
console.log(inverso(15))
console.log(inverso("teste"))

function inverso(x){
    if (typeof(x) == "number") return x * -1
    else if (x === true) return false 
    else if (x === false) return true
    else return `Somente números e booleanos esperados, Mas o parâmetro e do tipo ${typeof(x)}` 
}
*/

function mult(x, y){
    let aux, aux2 = 0
    while(aux < y){
        aux2 = aux2 + x
        aux = aux + 1
    }return aux2
}
console.log(mult(5, 6))