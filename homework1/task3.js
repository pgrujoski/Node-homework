const validator = require('validator')

const email = "name.surname@email.com"

if (validator.isEmail(email)) {
    console.log ("This is a valid email address:", email)

} else {
    console.log("This is not a valid email address:", email)
}


const string = ''

if (validator.isEmpty(string)) {
    console.log('The string is empty.')
} else {
    console.log('The string is not empty.')
}
