const studenti = require("./task.js")

const filter2 = studenti
.filter(student => student.grad !== "Skopje" && student.prosek > 9)
.sort((a,b) => b.prosek - a.prosek)
console.log(filter2) //Printa objekti

const zadaca2 = filter2.map(a => a.ime)
console.log(zadaca2) // Printa samo iminja na studenti po najvisok prosek