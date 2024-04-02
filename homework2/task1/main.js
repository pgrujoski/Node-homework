const modules = require("./module.js")

const file = "text1.txt"

const read = async() => {
    try {
        const data = await modules.read(file)
        console.log(data)
    } catch(error) {
        console.log(error)
    }
}

(async () => {
    try {
        await modules.write(file, "One two Three 4")

        read()


    } catch (err) {
        console.log("Error", err)
    }
})();

(async () => {
    try {
        await modules.append(file, "test test")
        read()
    }catch (error) {
        console.log(error)
    }
})();
