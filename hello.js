const dotenv = require("dotenv");

dotenv.config();

const x = process.env.VARIABLE

const y = x+10

console.log("hello:", y);
