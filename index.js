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
///////////// Server
const replaceTemplate = (temp, product) => {
  let output = temp.replace(/{%PRODUCTNAME%}/g, product.productName);
  output = temp.replace(/{%FROM%}/g, product.from);
  output = temp.replace(/{%NUTRIENTS%}/g, product.netrients);
  output = temp.replace(/{%QUANTITY%}/g, product.quantity);
  output = temp.replace(/{%NUTRIENTS%}/g, product.netrients);
  output = temp.replace(/{%PRICE%}/g, product.price);
  output = temp.replace(/{%IMAGE%}/g, product.image);
  output = temp.replace(/{%description%}/g, product.description);
  output = temp.replace(/{%ID%}/g, product.id);

  if (!product.organic === "NOT__ORGANIC") {
    output = temp.replace(/{%NOT__ORGANIC%}/g, "not_organic");
  }
  return output;
};

const tempOverview = fs.readFileSync(
  `${__dirname}/templates/template-overview.html`,
  "utf-8"
);
const tempCard = fs.readFileSync(
  `${__dirname}/templates/template-card.html`,
  "utf-8"
);
const tempProduct = fs.readFileSync(
  `${__dirname}/templates/template-product.html`,
  "utf-8"
);
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
  const pathName = req.url;

  //Overview Page
  if (pathName === "/" || pathName === "/overview") {
    res.writeHead(200, { "Content-type": "text/html" });
    const cardsHTMl = dataObj.map((el) => replaceTemplate(tempCard, el));
    console.log(cardsHTMl);
    res.end(tempOverview);
  }

  //Product Page
  else if (pathName === "/product") {
    res.end("This is Product page");
  }

  //API Page
  else if (pathName === "/api") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(data);
  }

  //Not Found Page!
  else {
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
