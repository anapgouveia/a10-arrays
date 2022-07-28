const array1 = [31, -7, 2020, 55, 19]
const array2 = ["celular", "pasta", "relogio", "caneta"]
const array3 = [1997, "anapaula", "false"]

console.log("array original", array1, array2, array3)

const array1Copia = array1.slice()
array1Copia.push(10)
console.log(array1Copia)

const array2Copia = array2.slice()
array2Copia.pop()
console.log(array2Copia)

const array3Copia = array3.slice()
array3Copia.splice(1,1)
console.log(array3Copia)
