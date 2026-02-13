"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jwt = require("jsonwebtoken");
require("dotenv/config");
console.log("".concat(process.env.JWT_TIME, "h"));
if (process.env.JWT_TIME && typeof parseFloat(process.env.JWT_TIME) === "number") {
    var token = jwt.sign({ id: 1 }, "secret", { expiresIn: "".concat(process.env.JWT_TIME, "h") });
    console.log(token);
    console.log("in the token");
    console.log(typeof process.env.JWT_TIME);
}
console.log(typeof process.env.JWT_TIME);
console.log(typeof process.env.DB_PASSWORD);
