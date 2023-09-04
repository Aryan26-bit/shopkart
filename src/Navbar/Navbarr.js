import React, { useState, useEffect } from "react";
import "./../Navbar/navbar.css";
import menwithbag2 from "./../assets/menwithbag2.jpg";

function Navbarr({ data }) {
  const [isOpen, setIsOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="back_image2">
        {/* <span className="line">
          <hr />
        </span> */}
        <div className="headbel">
          <p style={{ marginTop: "7Px", marginLeft: "60Px" }}>ShopKart</p>
          <p
            className="headbelow"
            style={{ marginTop: "-63Px", marginLeft: "1060Px" }}
          >
            WISHLIST(0)
          </p>
          <p
            className="headbelow"
            style={{ marginTop: "-31px", marginLeft: "1198Px" }}
          >
            BAG(0)
          </p>
        </div>
        <div className="solid_line"></div>
        <nav className={`navbar ${isOpen ? "open" : ""}`}>
          <div className="navbar-toggle" onClick={toggleNavbar}>
            {/* <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div> */}
          </div>
          {/* <hr className="line" />
          <br /> */}

          {/* <div className="headbel">
            <p>ShopKart</p>
            <p className="headbelow">WISHLIST(0)</p>
            <p className="headbelow">BAG(0)</p>
          </div> */}
          {/* <br /> */}
          <ul
            className="navbar-items"
            style={{ marginTop: "-6Px", marginLeft: "70Px" }}
          >
            {data.map((item) => (
              <li key={item.id} className="navbar-item">
                <a href={`#${item.id}`} onClick={toggleNavbar} className="aa">
                  {item.name}
                </a>
                {item.child && (
                  <ul className="sub-menu">
                    {item.child.map((subItem) => (
                      <li key={categories}>
                        <a href={`#${categories}`}>{categories}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            {/* {categories.map((category) => (
            <li key={category} className="navbar-item">
              <a href={`#${category}`} onClick={toggleNavbar}>
                {category}
              </a>
            </li>
          ))} */}
          </ul>
        </nav>
        {/* <div className="back_image"></div> */}
        <div style={{ marginTop: "108Px" }}>
          <div className="orange_box">
            <h1 className="fresh">Fresh</h1>
            <h1 className="two">2022</h1>
            <h1 className="look">Look</h1>
          </div>
          <img
            src={menwithbag2}
            style={{
              marginLeft: "1100Px",
              height: "550Px",
              marginTop: "-474Px",
            }}
          />
        </div>
      </div>
      <div></div>

      <p className="mm">New Products</p>
      <div className="zz"></div>
    </>
  );
}

export default Navbarr;
