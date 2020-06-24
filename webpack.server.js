var path = require("path");
module.exports = {
  entry: "./server/server.js",
  mode:"production",
  target: "node",
  output: {
    path: path.resolve(__dirname, "server_build"),
    filename: "server_bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['isomorphic-style-loader',{ loader: "css-loader", query: { modules: true } }],
      },
    ],
  },
  resolve: {
    extensions: [".jsx", ".js"],
  },
};
