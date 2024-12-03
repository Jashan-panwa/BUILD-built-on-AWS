import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndianRupeeSign} from '@fortawesome/free-solid-svg-icons';
import "../Components/product.css";

// import Carousel from 'react-bootstrap/Carousel';
// import bannerwomen from '../../Images/banner-women.jpg';

const Products = () => {
//   const [menuItems, setMenuItems] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:8082/api/women/products')
//       .then(response => {
//         setMenuItems(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);
const menuItems = [
  {
    id: 1,
    name: "Sofa Set",
    description:
      "High-quality long life with customizable buttons High-quality long life with customizable buttons",
    price: 49999.99,
    category: "Furniture",
    image:
      "https://th.bing.com/th/id/OIP.aOcLECG1DmMN9pc7D58S_AHaHa?pid=ImgDet&w=184&h=184&c=7&dpr=1.3",
    rating: 4.5,
    stock: 20,
  },
  {
    id: 2,
    name: "Bed",
    description:
      "High-quality long life with customs High-quality long life with",
    price: 18999.99,
    category: "Furniture",
    image:
      "https://th.bing.com/th/id/OIP.sX-mlRqPSNwHpSyHtAcWwgHaE8?w=331&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    rating: 4.7,
    stock: 8,
  },
  {
    id: 3,
    name: "Living Room Set",
    description:
      "High-quality long life with customizable buttons High-quality  life with customizable buttons",
    price: 140000.99,
    category: "Furniture",
    image:
      "https://th.bing.com/th/id/OIP.Lxy0BG4ltgrWX9bpnYDWeAHaFq?pid=ImgDet&w=184&h=140&c=7&dpr=1.3",
    rating: 4.9,
    stock: 2,
  },
  {
    id: 4,
    name: "TV Cabinet",
    description:
      "High-quality long life wile buttons High-quality long life with customizable buttons",
    price: 19000.99,
    category: "Furniture",
    image:
      "https://th.bing.com/th/id/OIP.m8dGNyKZI5_h1olOJBObogHaHa?pid=ImgDet&w=184&h=184&c=7&dpr=1.3",
    rating: 4.1,
    stock: 10,
  },
  {
    id: 5,
    name: "Sofa Set",
    description:
      "High-quality long life with customizable buttons High-lity long life with customizable buttons",
    price: 39010.99,
    category: "Furniture",
    image:
      "https://th.bing.com/th?id=OIP.m3BnK3tQBGyamMGZPDNNKQHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    rating: 4.4,
    stock: 20,
  },
  {
    id: 6,
    name: "Decorations",
    description:
      "High-quality long life with customizatons High-quality long life with customizable buttons",
    price: 2900.99,
    category: "Furniture",
    image:
      "https://th.bing.com/th/id/OIP.cZa4vWbNQRrM3rkZx89ffQHaHa?w=174&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    rating: 4.8,
    stock: 40,
  },
  {
    id: 7,
    name: "Chess",
    description:
      "High-quality long life with customizable buttons High-qua long life with customizable buttons",
    price: 10000.99,
    category: "Furniture",
    image:
      "https://i.etsystatic.com/14627120/r/il/c86eeb/1987475305/il_fullxfull.1987475305_r2fx.jpg",
    rating: 4.7,
    stock: 10,
  },
  {
    id: 8,
    name: "Stairs",
    description:
      "High-quality long life with customizable buttons High-quali life with customizable buttons",
    price: 59000.99,
    category: "Furniture",
    image:
      "https://th.bing.com/th/id/OIP.NmSSjc8RJK_1wbm3qO8AqAHaLH?w=204&h=306&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    rating: 4.6,
    stock: 7,
  },
];
  

  const addToCart = (item) => {
    // Implement your logic to add the item to the cart
    console.log('Added to Cart:', item);
  };

  // Function to truncate text to a certain number of words
//   const truncateText = (text, limit) => {
//     const words = text.split(' ');
//     if (words.length > limit) {
//       return words.slice(0, limit).join(' ') + '...';
//     } else {
//       return text;
//     }
//   };

  return (
    <div>
      {/* <Carousel>
      <Carousel.Item>
      <img
            className="d-block w-100"
            src={bannerwomen}
            alt="First slide"
            style={{height:'400px'}}
          />
      </Carousel.Item>
    </Carousel> */}
      <div className="container mt-5">
        <h1 className="productsheading">Our Products</h1>
        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-10">
          {menuItems.map((item) => (
            <div key={item.id} className="col mb-4">
              {/* <Link to={/ProductDisplay/
            ${
                // item.productID}
                } className="text-decoration-none"> */}
              <div
                className="card h-1000"
                style={{ border: "1px dotted #ffb607", padding: "10px"}}
              >
                {/* <img 
                  src={http://localhost:8000/uploads/${item.productImage}}  
                  alt={item.productName + " img"} 
                  className="card-img-top img-fluid" 
                  style={{height:'280px'}}
                /> */}
                <img src={item.image} style={{ height: "280px" }} />
                <div className="card-body">
                  <p className="card-title font-weight-bold">{item.name}</p>
                  <p className="card-text font-weight-bold">
                    {item.description}
                  </p>
                  <div className="price" style={{ display: "flex" }}>
                    <p className="card-text mb-auto">
                      <FontAwesomeIcon icon={faIndianRupeeSign} />
                    </p>
                    <h3 className="card-text m-1">{item.price + " "}</h3>
                    <p
                      className="card-text mt-2"
                      style={{ color: "#000000b8" }}
                    >
                      {" "}
                      MRP:
                    </p>
                    <p
                      className="card-text mt-2"
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
                      {" " + item.price}
                    </p>
                  </div>
                  <button
                    onClick={() => addToCart(item)}
                    className="btn btn-warning mt-2"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
              {/* </Link> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;