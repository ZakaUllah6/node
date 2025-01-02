const fs = require("fs");

//Blocking, synchronous way
// const textin = fs.readFileSync("./txt/input.txt", "utf-8");

// const textOut = `This is What we Know about avocado ${textin}`;
// fs.writeFileSync("./txt/output.txt", textOut);
// console.log("File Written!");

//Non- Blocking, asynchronous way
fs.readFile("./txt/start.txt", "utf-8", (err, data) => {
  console.log(data);
});
console.log("Read the file");
