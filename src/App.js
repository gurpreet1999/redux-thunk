import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import "./App.css";
import Header from "./component/Header";
import ProductDetails from "./component/ProductDetail";
import ProductPage from "./component/ProductListing";


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ProductPage/>}/>
          <Route path="/product/:productId" element={<ProductDetails/>} />
          <Route>404 Not Found!</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;