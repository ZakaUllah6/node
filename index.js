const fs = require("fs");

//Blocking, synchronous way
// const textin = fs.readFileSync("./txt/input.txt", "utf-8");

// const textOut = `This is What we Know about avocado ${textin}`;
// fs.writeFileSync("./txt/output.txt", textOut);
// console.log("File Written!");

//Non- Blocking, asynchronous way
fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
  fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
    console.log(data2);
  });
  //   console.log(data1);
});
console.log("Read the file");

// fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
//   console.log(data2);
// });
