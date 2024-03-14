const fs = require("fs")


const file = "text2.txt"
const appendedData = "Test one Two 3\n"

fs.appendFile(file, appendedData, (err) => {
    if (err) {
        console.error("Error appending data:", err)
    } else {
        console.log("Data appended!")
        fs.readFile(file, "utf8", (err, data) => {
            if (err) {
                console.error("Error reading file:", err)
            } else {
                console.log("File content:", data)
            }
        })
    }
})
