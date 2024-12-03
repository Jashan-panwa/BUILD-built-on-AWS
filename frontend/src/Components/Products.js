import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndianRupeeSign} from '@fortawesome/free-solid-svg-icons';
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
const menuItems=[
    {
      "id": 1,
      "name": "Wireless Bluetooth Earbuds",
      "description": "High-quality earbuds with noise cancellation and 20-hour battery life.",
      "price": 49.99,
      "category": "Electronics",
      "image": "https://images.unsplash.com/photo-1732869415090-179de017b6d6",
      "rating": 4.5,
      "stock": 120
    },
    {
      "id": 2,
      "name": "Fitness Smartwatch",
      "description": "Track your fitness and health metrics with this sleek smartwatch.",
      "price": 89.99,
      "category": "Electronics",
      "image": "https://images.unsplash.com/photo-1719937206642-ca0cd57198cc",
      "rating": 4.7,
      "stock": 80
    },
    {
      "id": 3,
      "name": "Cotton T-Shirt",
      "description": "Soft and comfortable cotton t-shirt available in various colors.",
      "price": 14.99,
      "category": "Clothing",
      "image": "https://example.com/images/tshirt.jpg",
      "rating": 4.3,
      "stock": 200
    },
    {
      "id": 4,
      "name": "Eco-Friendly Water Bottle",
      "description": "Reusable and BPA-free water bottle with a 1-liter capacity.",
      "price": 19.99,
      "category": "Home & Kitchen",
      "image": "https://example.com/images/waterbottle.jpg",
      "rating": 4.6,
      "stock": 150
    },
    {
      "id": 5,
      "name": "Laptop Backpack",
      "description": "Durable and spacious backpack for laptops up to 15.6 inches.",
      "price": 39.99,
      "category": "Accessories",
      "image": "https://example.com/images/backpack.jpg",
      "rating": 4.4,
      "stock": 60
    },
    {
      "id": 6,
      "name": "LED Desk Lamp",
      "description": "Adjustable LED lamp with touch controls and multiple brightness levels.",
      "price": 29.99,
      "category": "Home & Kitchen",
      "image": "https://example.com/images/desklamp.jpg",
      "rating": 4.8,
      "stock": 95
    },
    {
      "id": 7,
      "name": "Yoga Mat",
      "description": "Non-slip yoga mat with extra cushioning for added comfort.",
      "price": 24.99,
      "category": "Sports & Outdoors",
      "image": "https://example.com/images/yogamat.jpg",
      "rating": 4.7,
      "stock": 140
    },
    {
      "id": 8,
      "name": "Gaming Mouse",
      "description": "Ergonomic gaming mouse with customizable buttons and RGB lighting.",
      "price": 59.99,
      "category": "Electronics",
      "image": "https://example.com/images/gamingmouse.jpg",
      "rating": 4.6,
      "stock": 70
    }
  ]
  

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
      <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5">
        {menuItems.map(item => (
          <div key={
            item.id
            } className="col mb-4">
            {/* <Link to={/ProductDisplay/
            ${
                // item.productID}
                } className="text-decoration-none"> */}
              <div className="card h-100">
                {/* <img 
                  src={http://localhost:8000/uploads/${item.productImage}}  
                  alt={item.productName + " img"} 
                  className="card-img-top img-fluid" 
                  style={{height:'280px'}}
                /> */}
                <img src={item.image}/>
                <div className="card-body">
                  <p className="card-title font-weight-bold">{item.name}</p>
                  <p className="card-text font-weight-bold">{item.description}</p>
                  <div className='price'style={{display:'flex'}}>
                <p className="card-text mb-auto"><FontAwesomeIcon icon={faIndianRupeeSign} /></p>
                <h3 className="card-text m-1">{item.price +" "}</h3>
                <p className="card-text mt-2" style={{color: '#000000b8'}} > MRP:</p>
                <p className="card-text mt-2" style={{color: '#000000b8', textDecoration: 'line-through'}}>  <FontAwesomeIcon icon={faIndianRupeeSign} style={{ fontWeight: 'lighter',fontSize: '0.8em',textDecoration: 'line-through' }}/>{" "+ item.price}</p>
                </div>
                  <button onClick={() => addToCart(item)} className="btn btn-warning mt-2">
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