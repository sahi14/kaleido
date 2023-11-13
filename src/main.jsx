import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx";
import "./index.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <App />
     
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
