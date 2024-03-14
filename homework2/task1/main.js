const modules = require("./module.js")

const file = "text1.txt"

(async () => {
    try {
        await modules.write(file, "One two Three 4")

        const data = await modules.read(file)


    } catch (err) {
        console.log("Error", err)
    }
})()
