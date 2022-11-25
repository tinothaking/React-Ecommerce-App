import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Header,
  Home,
  About,
  Shop,
  Lookbook,
  Contact,
  Cart
} from "./navigation";

const DOM_PAGE = ReactDOM.createRoot(document.querySelector("section"))

DOM_PAGE.render(
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/lookbook" element={<Lookbook />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  </Router>
)