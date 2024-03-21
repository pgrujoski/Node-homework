const http = require("http")
const url = require("url")

const server = http.createServer((req, res) => {
    const serverUrl = req.url
    if(serverUrl === "/home/imePrezimePol") {
        res.end("PetarGrujoskiMale")
    } 
    else if(serverUrl === "/home/title") {
        res.write("<html> <head> <title>This is the new title</title> </head> </html>")
    }
    else if(serverUrl === "/home/header") {
        res.setHeader("Header", "Ova e header-ot!")
    }
    else {
        res.write("Page not found.")
    }

    res.end()
})

server.listen(8001)