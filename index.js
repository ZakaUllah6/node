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
    fs.readFile("./txt/append.txt", "utf-8", (err, data3) => {
      console.log(data3);

      fs.writeFile(
        "./txt/final.txt",
        `${data1} \n ${data2} \n ${data3}`,
        "utf-8",
        (err) => {
          console.log("Your file Has been written!");
        }
      );
    });
  });
  //   console.log(data1);
});
console.log("Read the file");

// fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
//   console.log(data2);
// });
