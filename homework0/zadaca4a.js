const studenti = require("./task")


const sumaNaProsek = {}

studenti.forEach(student => {
    if (!sumaNaProsek[student.grad]) {
        sumaNaProsek[student.grad] = 0
    }
    sumaNaProsek[student.grad] +=  student.prosek
})


const gradSumPairs = Object.entries(sumaNaProsek)


gradSumPairs.sort((a, b) => b[1] - a[1])

gradSumPairs.forEach(([grad, sumaNaProsek]) => {
    const roundedSumaNaProsek = sumaNaProsek.toFixed(1)
    console.log(grad, roundedSumaNaProsek)
});
