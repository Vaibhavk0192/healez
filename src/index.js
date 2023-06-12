import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import "./index.css";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div style={{ display: "flex" }}>
      <App />
    </div>
  </React.StrictMode>
);
