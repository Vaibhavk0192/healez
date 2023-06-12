const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = {
  target: "node",
  entry: "./src/index.js", // Entry point of your React app
  output: {
    path: path.resolve(__dirname, "dist"), // Output directory for bundled files
    filename: "bundle.js", // Name of the output bundle file
  },
  resolve: {
    fallback: {
      crypto: require.resolve("crypto-browserify"),
      http: require.resolve("stream-http"),
      https: require.resolve("https-browserify"),
      zlib: require.resolve("browserify-zlib"),
      url: require.resolve("url/"),
    },
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
      // Add any other necessary loaders for your project
    ],
  },
  plugins: [
    new CleanWebpackPlugin(), // Cleans the 'dist' folder before each build
    new HtmlWebpackPlugin({
      template: "./public/index.html", // Path to your HTML template
    }),
    new NodePolyfillPlugin(),

    // Add any other necessary plugins for your project
  ],
};
