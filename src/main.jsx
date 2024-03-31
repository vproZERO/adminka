import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { client } from "./config/client.js";
import { QueryClientProvider } from "@tanstack/react-query";
import "react-toastify/dist/ReactToastify.css";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={client}>
    <BrowserRouter>
      <App />
      <ToastContainer position="bottom-left" />
    </BrowserRouter>
  </QueryClientProvider>
);
