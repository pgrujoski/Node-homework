const studenti = require("./task.js")

const filter1 = studenti
.filter(student => student.grad === "Skopje" && student.ime.endsWith("a") && student.prosek > 7)
.sort((a, b) => a.ime.localeCompare(b.ime))
console.log(filter1) //Printa objekti

const zadaca1 = filter1.map(a => a.ime)

console.log(zadaca1) //Printa Iminja na studenti
