import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
// import { width } from '@fortawesome/free-solid-svg-icons/fa0';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";
import "../Components/ProductDisplay.css";

const ProductDisplay = () => {
  const { productID } = useParams(); // Use useParams hook to access route parameters
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8082/api/products/${productID}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
      });
  }, [productID]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const addToCart = (item) => {
    // Implement your logic to add the item to the cart
    console.log("Added to Cart:", item);
  };

  const discountPercent = Math.round(
    ((product.productMRP - product.productPrice) / product.productMRP) * 100
  );

  return (
    <div className="productdisplay container mt-5 mb-5">
      <Link
        to="/products"
        style={{
          textDecoration: "none",
          fontSize: "25px",
          color: "#cbcbcb",
        }}
      >
        &lt;- Go Back
      </Link>

      <div className="row">
        <div className="col-md-5 ">
          <div
            className="productdisplay-img"
            style={{ display: "flex", height: "455px" }}
          >
            <div className="productdisplay-img-list d-flex flex-column gap-3">
              <img
                src={`http://localhost:8000/uploads/${product.productImage}`}
                alt={product.productName + " img"}
                style={{
                  height: "102px",
                  width: "80px",
                  padding: "2px",
                  border: "dotted #ffb607",
                  borderWidth: "10px 4px",
                  borderRadius: "10px 40px",
                }}
              />
              <img
                src={`http://localhost:8000/uploads/${product.productImage}`}
                alt={product.productName + " img"}
                style={{
                  height: "102px",
                  width: "80px",
                  padding: "2px",
                  border: "dotted #ffb607",
                  borderWidth: "10px 4px",
                  borderRadius: "10px 40px",
                }}
              />
              <img
                src={`http://localhost:8000/uploads/${product.productImage}`}
                alt={product.productName + " img"}
                style={{
                  height: "102px",
                  width: "80px",
                  padding: "2px",
                  border: "dotted #ffb607",
                  borderWidth: "10px 4px",
                  borderRadius: "10px 40px",
                }}
              />
              <img
                src={`http://localhost:8000/uploads/${product.productImage}`}
                alt={product.productName + " img"}
                style={{
                  height: "102px",
                  width: "80px",
                  padding: "2px",
                  border: "dotted #ffb607",
                  borderWidth: "10px 4px",
                  borderRadius: "10px 40px",
                }}
              />
            </div>
            <img
              src={`http://localhost:8000/uploads/${product.productImage}`}
              alt={product.productName + " img"}
              className="card-img-top ms-3"
              style={{
                height: "auto",
                width: "400px",
                padding: "2px",
                border: "dotted #ffb607",
                borderWidth: "10px 4px",
                borderRadius: "10px 40px",
              }}
            />
          </div>
        </div>
        <div className="col-md-6 text-start">
          <h3
            style={{
              color: "#ffb607",
            }}
          >
            {product.productName}
          </h3>
          <h4>{product.productBrand}</h4>
          <div className="productdisplay-right-prices d-flex gap-2">
            <div
              className="productdisplay-right-price-discount fs-2"
              style={{ color: "#CC0C39", fontWeight: "lighter" }}
            >
              -{discountPercent}%{" "}
            </div>
            <div className="mt-1">
              <FontAwesomeIcon icon={faIndianRupeeSign} />
            </div>
            <div
              className="productdisplay-right-price-new fs-2"
              style={{ marginLeft: "-10px" }}
            >
              {product.productPrice}
            </div>
          </div>
          <div style={{ display: "flex", color: "#565959" }}>
            <div className="productdisplay-right-price-old">M.R.P:</div>
            <div className="productdisplay-right-price-old text-decoration-line-through">
              <FontAwesomeIcon icon={faIndianRupeeSign} />
              {product.productMRP}
            </div>
          </div>
          <div className="productdisplay-right-size">
            <h6 className="fw-bold mt-3">Select Wood</h6>
            <div className="productdisplay-right-sizes d-flex gap-2">
              <button className="size woodtype">Oak</button>
              <button className="size woodtype">Cedar</button>
              <button className="size woodtype">Redwood</button>
            </div>
          </div>
          <button
            onClick={() => {
              addToCart(product.id);
            }}
            className="btn btn-warning mb-3 mt-3"
          >
            ADD TO COLLECTION
          </button>
          <p className="productdisplay-right-category">
            <span>Category: </span>
            {product.productCatogory}
          </p>
          <p className="productdisplay-right-category">
            <span>More Info: </span>
            {product.productDetails}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
