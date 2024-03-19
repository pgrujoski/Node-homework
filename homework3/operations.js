const io = require("./IO")

const getOneCoin = async (id) => {
    const coins = await io.read()
    return coins.find((coin) => coin.id === id)
}

const getAllCoins = async() => {
    return await io.read()
}

const addNewCoin = async(newCoin) => {
    let coins = await io.read()
    coins.push(newCoin)
    await io.write(coins)
}

const deleteCoin = async(id) => {
    let coins = await io.read()
    coins = coins.filter((coin) => coin.id !== id)
    await io.write(coins)
}

const editCoin = async (coinId, coinNewData) => {
    let coins = await io.read()
    coins = coins.map((coin) => {
        if (coin.id === coinId) {
            return {
                ...coin, 
                ...coinNewData,
            }
        }
        return coin
    })
    await io.write(coins)
}

module.exports = {
    getOneCoin,
    getAllCoins,
    addNewCoin,
    deleteCoin,
    editCoin,
}