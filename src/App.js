import React, { useState, useEffect } from "react";
import Header from "./Header/header";
import Footer from "./Footer/footer";
import Forum from "./Form/forum";
import Navbarr from "./Navbar/Navbarr";
import Section from "./Section/section";
import "./Section/section.css";

function App() {
  const [products, setProducts] = useState([]);

  // const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch products from the API
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const navbarData = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    {
      name: "Our Products",
      id: "product",
      child: [
        { name: "Product 1", id: "p1" },
        { name: "Product 2", id: "p2" },
        { name: "Product 3", id: "p3" },
        { name: "Product 4", id: "p4" },
      ],
    },
    { name: "Contact Us", id: "contact" },
  ];

  return (
    <>
      {/* <h1>Aryan Arora</h1> */}
      <Header />
      <Navbarr data={navbarData} />
      <div className="product-container">
        {products.map((product) => (
          <Section key={product.id} product={product} />
        ))}
      </div>
      <Forum />
      <Footer />
    </>
  );
}

export default App;
