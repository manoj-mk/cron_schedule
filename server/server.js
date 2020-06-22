import express from "express";
import fs from "fs";
import path from "path";
import { StaticRouter } from "react-router-dom";
import React from "react";
import ReactDOMServer from "react-dom/server";

import App from "../src/App";
import Examples from "../src/components/examples/examples.jsx";
// const App = ()=>{
// return(<h1>Hello manoj</h1>);
// }
const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.static("prod_build"));

app.get("/*", (req, res) => {
    // console.log(data);

    const data = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
        <title>React App</title>
        <link href="main.css" rel="stylesheet" />
      </head>
      <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root"></div>
        <script src="bundle.js"></script>
      </body>
    </html>
    `;
    const content = ReactDOMServer.renderToString(
      <StaticRouter location={req.url} >
        <App />
      </StaticRouter>
    );
    console.log(content); 
    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${content}</div>`)
    );
 
});
app.get("/examples",(req,res)=>{
  // console.log("IN server.js on Line 37");

  res.send("found");
})
app.listen(PORT, () => {
  console.log(`App launched on ${PORT}`);
});

// client ---> src/index.js    --> app.js    ____> prod_build/bundle.js
// server ---> server/server.js  --> app.js  ____> server_build/server_bundle.js
// fj