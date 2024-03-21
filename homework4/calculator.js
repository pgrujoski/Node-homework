const http = require("http");
const url = require("url");
const fs = require("fs");






const handlerCalculator = (req, res) => {
    const url = req.url;


    const [_, operacija, num1, num2] = req.url.split("/");

    const stringNumber = "1";
    Number(stringNumber);

    const numberNumber = 1;
    numberNumber.toString();

    let result;

    switch (operacija) {
        case "sobiranje":
            result = Number(num1) + Number(num2);
            res.end(`${result}`);
            break;
        case "odzemanje":
            result = Number(num1) - Number(num2);
            res.end(`${result}`);
            break;
        case "mnozenje":
            result = Number(num1) * Number(num2);
            res.end(`${result}`);
            break;
        case "delenje":
            result = Number(num1) / Number(num2);
            res.end(`${result}`);
            break;
        case "modulus":
            result = Number(num1) % Number(num2);
            res.end(`${result}`);
            break;
        case "kvadrat":
            result = Number(num1) ** Number(num2); // num1 * num1
            res.end(`${result}`);
            break;
        case "kubik":
            result = Number(num1) ** 3;
            res.end(`${result}`);
            break;
        default:
            res.end("Nepoznata operacija");
    }

}

const newServer = http.createServer(handlerCalculator);

newServer.listen(8080);
