import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";
import "../Components/products.css";
import Carousel from "react-bootstrap/Carousel";

const Product = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8082/api/newCollection")
      .then((response) => {
        setMenuItems(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const addToCart = (item) => {
    // Implement your logic to add the item to the cart
    console.log("Added to Cart:", item);
  };

  // Function to truncate text to a certain number of words
  const truncateText = (text, limit) => {
    const words = text.split(" ");
    if (words.length > limit) {
      return words.slice(0, limit).join(" ") + "...";
    } else {
      return text;
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-5" style={{ color: "#ffb607" }}>
        NEW WOODEN ARTS:-
      </h1>
      <hr />
      <div className="row">
        {menuItems.map((item) => (
          <div
            key={item.productID}
            className="col-md-4 mb-3 justify-content-center"
          >
            <Link to={`/ProductDisplay/${item.productID}`}>
              <div
                className="card"
                style={{ border: "1px dotted #ffb607", padding: "10px" }}
              >
                <img
                  src={`http://localhost:8000/uploads/${item.productImage}`}
                  alt={item.productName + " img"}
                  className="card-img-top"
                  style={{ height: "360px" }}
                />
                <div className="card-body">
                  <p
                    className="card-title font-weight-bold"
                    style={{ fontWeight: "bold" }}
                  >
                    {item.productName}
                  </p>
                  <p className="card-text font-weight-bold">
                    {truncateText(item.productDetails, 9)}
                  </p>
                  {/* <p className="card-text">Category: {item.productCatogory}</p> */}
                  <div className="price" style={{ display: "flex" }}>
                    <p className="card-text mb-auto">
                      <FontAwesomeIcon icon={faIndianRupeeSign} />
                    </p>
                    <h3 className="card-text m-1">{item.productPrice + " "}</h3>
                    <p
                      className="card-text mt-3 me-2"
                      style={{ color: "#000000b8" }}
                    >
                      {" "}
                      MRP:
                    </p>
                    <p
                      className="card-text mt-3"
                      style={{
                        color: "#000000b8",
                        textDecoration: "line-through",
                      }}
                    >
                      {" "}
                      <FontAwesomeIcon
                        icon={faIndianRupeeSign}
                        style={{
                          fontWeight: "lighter",
                          fontSize: "0.8em",
                          textDecoration: "line-through",
                        }}
                      />
                      {" " + item.productMRP}
                    </p>
                  </div>
                  <button
                    onClick={() => addToCart(item)}
                    className="btn btn-warning custombtn"
                  >
                    Add to Collection
                  </button>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Product;
