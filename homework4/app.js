const express = require('express')
const app = express()

app.get('/home/imePrezimePol', (req, res) => {
    res.send('PetarGrujoskiMale')
})

app.get('/home/title', (req, res) => {
    res.send('<html><head><title>This is the new title</title></head></html>')
})

app.get('/home/header', (req, res) => {
    res.setHeader('Header', 'Ova e header-ot!')
    res.send()
})

app.use((req, res) => {
    res.status(404).send('Page not found.')
});

app.listen(8002, () => {
    console.log('Server is running on port 8001')
})
