const fs = require("fs");
const http = require("http");
const url = require("url");
///////////////////////////////////////////
///////////// FILE
// //Blocking, synchronous way
// // const textin = fs.readFileSync("./txt/input.txt", "utf-8");

// // const textOut = `This is What we Know about avocado ${textin}`;
// // fs.writeFileSync("./txt/output.txt", textOut);
// // console.log("File Written!");

// //Non- Blocking, asynchronous way
// fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
//   fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
//     console.log(data2);
//     fs.readFile("./txt/append.txt", "utf-8", (err, data3) => {
//       console.log(data3);

//       fs.writeFile(
//         "./txt/final.txt",
//         `${data1} \n ${data2} \n ${data3}`,
//         "utf-8",
//         (err) => {
//           console.log("Your file Has been written!");
//         }
//       );
//     });
//   });
//   //   console.log(data1);
// });
// console.log("Read the file");

// // fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
// //   console.log(data2);
// // });

///////////////////////////////////////////
///////////// HTTP

const server = http.createServer((req, res) => {
  const pathName = req.url;

  if (pathName === "/" || pathName === "/overview") {
    res.end("This is OVERVIEW page");
  } else if (pathName === "/product") {
    res.end("This is Product page");
  } else if (pathName === "/api") {
    fs.readFile(`${__dirname}/dev-data/data.json`, "utf-8", (err, data) => {
      const productData = JSON.parse(data);
      console.log(productData);
      res.writeHead(200, { "Content-type ": "application/json" });
      res.end(data);
    });
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
      "my-own-header": "Hello World",
    });
    res.end("<h1>This page is not found!<h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listning on server on 80000");
});

// console.log("Hello");
