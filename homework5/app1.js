const express = require("express")

const app = express()

const data = {
    cars: ['Alfa Romeo', 'Ferrari', 'Audi', 'VW', 'Toyota'],
    books: ['Harry Potter', 'Dune', 'Lord of the rings'],
    cities: ['New York', 'Sydney', 'Ohrid', 'Skopje', 'Paris']
}

app.get("/", (req, res) => {
    res.json(data)
})

app.get("/cars", (req, res) =>{
    res.json(data.cars)
})

app.get("/books", (req, res) =>{
    res.json(data.books)
})

app.get("/cities", (req, res) =>{
    res.json(data.cities)
})

app.use((req, res) => {
    res.status(404).send('404 - Not Found')
})

app.listen(8001, () => {
    console.log(`Server is listening on port 8001`)
})

