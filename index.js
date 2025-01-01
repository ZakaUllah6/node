const fs = require("fs");

const textin = fs.readFileSync("./txt/input.txt", "utf-8");

const textOut = `This is What we Know about avocado ${textin}`;
fs.writeFileSync("./txt/output.txt", textOut);
// console.log("File Written!");
