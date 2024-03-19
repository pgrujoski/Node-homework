const fs = require("fs")

const read = async () => {
    return new Promise((resolve, reject) => {
        fs.readFile("data.json", "utf-8", (err, data) => {
            if (err) {
                return err
            } else if (!data) {
                return resolve([])
            } else {
                data = JSON.parse(data)
                return resolve(data)
            }
        })
    })
}

const write = async (data) => {
    return new Promise((resolve, reject) => {
        data = JSON.stringify(data)
        fs.writeFile("data.json", data, (err) => {
            if (err) {
                return reject(err)
            } else {
                return resolve()
            }
        })
    })
}

module.exports = {
    read,
    write,
}