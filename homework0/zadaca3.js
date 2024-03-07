const studenti = require("./task.js")

const firstThree = studenti
.filter( student => student.ime.length == 5)
.sort((a,b) => b.prosek - a.prosek)
.slice(0,3)
console.log(firstThree) // Printa objekti po najvisok prosek
const zadaca3 = firstThree.map(a => a.ime)
console.log(zadaca3) // Printa iminja na prvi 3 studenti