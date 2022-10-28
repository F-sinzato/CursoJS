// Exercicio 1
//console.log(Hello("Fabricio"));

function Hello(name) {
  return `Hello ${name}`;
}

// Exercicio 2
//console.log(yearsToDays(25))

function yearsToDays(years) {
  return years * 365;
}

// Exercicio 3
function numberToMonth(number) {
  const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  if (number > 12 || number < 1) return "error: number > 12 or < 1";
  return months[number - 1];
}

//console.log(numberToMonth(2))

/* Exercicio 4
console.log(maiorOuIgual(5, 1))
console.log(maiorOuIgual(1, 3))
console.log(maiorOuIgual(1, "3"))
*/
function maiorOuIgual(x, y) {
  return y >= x && typeof y === typeof x;
}

/*
console.log(inverso(true))
console.log(inverso(false))
console.log(inverso("5"))
console.log(inverso(15))
console.log(inverso("teste"))
*/
function inverso(x) {
  //Exercicio 5
  if (typeof x == "number") return x * -1;
  else if (x === true) return false;
  else if (x === false) return true;
  else
    return `Somente números e booleanos esperados, Mas o parâmetro e do tipo ${typeof x}`;
}

function mult(x, y) {
  //Exercicio 6
  let aux = 1;
  let aux2 = x;
  while (aux < y) {
    x += aux2;
    aux++;
  }
  return x;
}
//console.log(mult(7, 6))

//Exercicio 7
function repetir(x, y) {
  const aux= [];
  let aux2 = 1;
  while (aux2 < y) {
    aux.push(x);
    aux2++;
  }
  return aux;
}

console.log("Roberto", 5);
