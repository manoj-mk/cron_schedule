import express from "express";
import { StaticRouter } from "react-router-dom";
import React from "react";
import ReactDOMServer from "react-dom/server";

import App from "../src/App";

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.static("prod_build"));


app.get("/*", (req, res) => {
  const data = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Cron expression Editor created using create-react-app"
        />
        <meta name="keywords" content="cron,cron schedular,cron jobs,cron expression,cron react,cronguru,cron editor,cron expression editor" />
        <title>React App</title>
        <link href="/main.css" rel="stylesheet" />
      </head>
      <body>
        <div id="root"></div>
        <script src="/bundle.js"></script>
      </body>
    </html>
    `;
  const content = ReactDOMServer.renderToString(
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>
  );
  if(data===data.replace('<div id="root"></div>', `<div id="root">${content}</div>`)){
    return res.send("Page Not Found");
  }
    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${content}</div>`)
    );
  });
app.listen(PORT, () => {
  console.log(`App launched on ${PORT}`);
});
