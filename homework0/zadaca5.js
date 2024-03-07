const studenti = require("./task.js")

let zbirA = 0
let brojA = 0
let zbirBezA = 0
let brojBezA = 0

studenti.forEach(student => {
    if(student.ime.endsWith("a")) {
        zbirA += student.prosek
        brojA++
    } else {
        zbirBezA += student.prosek
        brojBezA++
    }

})

const prosekSoA = zbirA / brojA
const roundA = prosekSoA.toFixed(2)
const prosekBezA = zbirBezA / brojBezA
const roundBezA = prosekBezA.toFixed(2)

console.log("Prosek na studenti so ime sto zavrsuva na A:", roundA)

console.log("Prosek na studenti so ime sto ne zavrsuva na A:", roundBezA)

