const studenti = require("./task.js")

//Kreiram prazen objekt, ako gradot ne postoi, go dodavam kako niza. Potoa na taa niza mu dodavam studenti. 
const grupiPoGrad = {}
studenti.forEach(student =>  {
    if(!grupiPoGrad[student.grad]) {
        grupiPoGrad[student.grad] = []
    }
    grupiPoGrad[student.grad].push(student)
})
console.log(grupiPoGrad)

//Kreiram prazen objekt. So loop gi sobiram site proseci od studentite vo toj grad, i gi delam so brojot na studenti, i zapisuvam vo objektot prosek
const prosekPoGrad = {}
for (grad in grupiPoGrad) {
    const studentiOdGrad = grupiPoGrad[grad]
    const brojStudenti = studentiOdGrad.length
    const sumaOcenki = studentiOdGrad.reduce((total, student) => total + student.prosek, 0)
    const prosek = sumaOcenki / brojStudenti
    prosekPoGrad[grad] = prosek
}
console.log(prosekPoGrad)

// kreiram nova niza klucevi, gi dodavam klucevite od prethodniot objekt i gi sortiram od najgolem kon najmal. Potoa kreiram objekt i za sekoj kluc ja dodavam vrednosta


const keys = [];
for (const key in prosekPoGrad) {
  keys.push(key);
}

console.log(keys)

keys.sort((a, b) => prosekPoGrad[b] - prosekPoGrad[a]);

console.log(keys)

const sortiraniGradovi = {}
keys.forEach(key => {
    sortiraniGradovi[key] = prosekPoGrad[key]
})
console.log(sortiraniGradovi)
