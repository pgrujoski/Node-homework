const mongoose = require("mongoose")

const Account = require("./model")
const User = require("./userModel")


async function createAccountAndUser() {
    try{
        const newUser = new User({
           firstName: "Marko",
           lastName: "Markoski",
           age: 22,

        })

        const savedUser = await newUser.save()
        console.log("User created:", savedUser)

        const newAccount = new Account({
            email: "marko@test.com",
            password: "marko123",
            username: "markomarko",
            owner: savedUser._id
        })
        
        const savedAccount = await newAccount.save()

        console.log("Account created:", savedAccount)
    } catch (err) {
        console.log("Error creating entries", err)
    }
}

mongoose
.connect(
    "mongodb+srv://petargrujoski:123@clustersemos.hovzwmd.mongodb.net/users"
)
.then(() => {
    console.log("Connected to mongoDB")
    createAccountAndUser()
})
.catch((err) => console.log("Error connecting to MongoDB", err))

