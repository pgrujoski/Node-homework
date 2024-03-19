const crud = require("./operations")

const btc = { name: "Bitcoin", ticker: "BTC", price: 67000, id: 0}
const eth = { name: "Ethereum", ticker: "ETH", price: 3800, id: 1}
const usdt = { name: "Tether", ticker: "USDT", price: 1, id:2}
const sol = { name: "Solana", ticker: "SOL", price: 180, id:3}

async function addCoin(coin) {
    try {
        await crud.addNewCoin(coin)
        const coins = await crud.getAllCoins()
        console.log(coins)
        
    } catch(err) {
        console.log("Error", err)
    }finally {
        console.log ("Code finished sucessfully!")
    }
}

async function getCoin(coinId) {
    try {
        const coin = await crud.getOneCoin(coinId)
        console.log(coin)
    }catch(err) {
        console.log("Error", err)
    }finally {
        console.log ("Code finished sucessfully!")
    }
}

async function getAll() {
    try {
        const coins = await crud.getAllCoins()
        console.log(coins)
    }catch(err) {
        console.log("Error", err)
    }finally {
        console.log ("Code finished sucessfully!")
    }
}

async function removeCoin(coinId) {
    try {
        await crud.deleteCoin(coinId)
        const coins = await crud.getAllCoins()
        console.log(coins)

    }catch(err) {
        console.log("Error", err)
    }finally {
        console.log ("Code finished sucessfully!")
    }
}

async function updateCoin(coinId, data) {
    try {
        await crud.editCoin(coinId, data)
        const coins = await crud.getAllCoins()
        console.log(coins)
    }catch(err) {
        console.log("Error", err)
    }finally {
        console.log ("Code finished sucessfully!")
    }
}

// addCoin(sol)
// getCoin(3)
// getAll()
// removeCoin(2)
// updateCoin(1, {price: 95693})