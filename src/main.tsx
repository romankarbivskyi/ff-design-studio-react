import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import { Navbar } from "./components";
import Footer from "./components/Footer.tsx";
import ConnectWithUs from "./components/ConnectWithUs.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <App />
      <ConnectWithUs />
      <Footer />
    </BrowserRouter>
  </StrictMode>,
);
