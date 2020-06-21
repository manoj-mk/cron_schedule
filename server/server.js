import express from "express";
import fs from "fs";
import path from "path";
import {StaticRouter } from 'react-router-dom';
import React from "react";
import ReactDOMServer from "react-dom/server";

import App from "../src/App";
// const App = (props)=>{
// return(<h1>Hello {props.name}</h1>);
// }
const PORT = 5000;

const app = express();
app.get("/", (req, res) => {
  fs.readFile(path.resolve("./prod_build/index.html"), "utf-8", (err, data) => {
    // console.log(data);
    if (err) {
      console.log(err);
      return res.status(500).send("Some error happened");
    } 
    const content = ReactDOMServer.renderToString(<App />);
    // console.log(content);
    return res.send(  
      data.replace(
        '<div id="root"></div>',
        `<div id="root">${content}</div>`
      )
    );
  });
});

app.use(express.static("prod_build"));
app.listen(PORT, () => {
  console.log(`App launched on ${PORT}`);
});

// client ---> src/index.js    --> app.js    ____> prod_build/bundle.js
// server ---> server/server.js  --> app.js  ____> server_build/server_bundle.js
