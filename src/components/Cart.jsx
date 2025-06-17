
// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';
// // import { Link } from 'react-router-dom';
// // import '../App.css'; // Custom styles

// // function GetProducts() {
// //   const [products, setProducts] = useState([]);

// //   useEffect(() => {
// //     axios.get('https://joll3a.pythonanywhere.com/api/get_product_details')
// //       .then(res => setProducts(res.data))
// //       .catch(err => console.log(err));
// //   }, []);

// //   return (
// //     <div className="container my-5">
// //       <h2 className="text-center mb-5 section-title">MJ Exotics - Explore Our Cars</h2>
// //       <div className="row g-4">
// //         {products.map(product => (
// //           <div className="col-md-6 col-lg-4" key={product._id}>
// //             <div className="card car-card h-100">
// //               <div className="image-container">
// //                 <img
// //                   src={product.image}
// //                   className="card-img-top car-img"
// //                   alt={product.name}
// //                 />
// //               </div>
// //               <div className="card-body d-flex flex-column">
// //                 <h5 className="card-title fw-bold">{product.name}</h5>
// //                 <p className="card-text text-secondary small">{product.description}</p>
// //                 <p className="price-tag">£{product.price}</p>
// //                 <Link to={`/product/${product._id}`} className="btn btn-custom mt-auto">
// //                   View Details
// //                 </Link>
// //               </div>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// // export default GetProducts;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import '../App.css';

// function GetProducts() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     axios.get('https://joll3a.pythonanywhere.com/api/get_product_details')
//       .then(res => setProducts(res.data))
//       .catch(err => console.log(err));
//   }, []);

//   const handleAddToCart = (product) => {
//     // Placeholder for cart logic
//     alert(`Added "${product.name}" to cart.`);
//   };

//   const handleBuyNow = (product) => {
//     // Placeholder for buy logic
//     alert(`Proceed to buy "${product.name}".`);
//   };

//   return (
//     <div className="container my-5">
//       <h2 className="text-center mb-5 section-title">MJ Exotics - Explore Our Cars</h2>
//       <div className="row g-4">
//         {products.map(product => (
//           <div className="col-md-6 col-lg-4" key={product._id}>
//             <div className="card car-card h-100 d-flex flex-column">
//               <div className="image-container">
//                 <img
//                   src={product.image}
//                   className="card-img-top car-img"
//                   alt={product.name}
//                 />
//               </div>
//               <div className="card-body d-flex flex-column">
//                 <h5 className="card-title fw-bold">{product.name}</h5>
//                 <p className="card-text text-secondary small">{product.description}</p>
//                 <p className="price-tag">£{product.price}</p>
//                 <div className="mt-auto d-grid gap-2">
//                   <Link to={`/product/${product._id}`} className="btn btn-custom">
//                     View Details
//                   </Link>
//                   <button
//                     className="btn btn-outline-primary"
//                     onClick={() => handleAddToCart(product)}
//                   >
//                     Add to Cart
//                   </button>
//                   <button
//                     className="btn btn-buy"
//                     onClick={() => handleBuyNow(product)}
//                   >
//                     Buy Now
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default GetProducts;

// import React from 'react';
// import { useCart } from '../CartContext';
// import { useNavigate } from 'react-router-dom';
// import { FaTrash, FaPlus, FaMinus } from 'react-icons/fa';
// import '../App.css'; // Optional: For any extra custom styles
// import 'bootstrap/dist/css/bootstrap.min.css';

// const Cart = () => {
//   const { cart, updateQuantity, removeFromCart } = useCart();
//   const navigate = useNavigate();

//   const handleBuyNow = (item) => {
//     // You can also pass item data through state if needed
//     navigate('/Makepayment');
//   };

//   const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

//   return (
//     <div className="container py-4">
//       <h2 className="mb-4 text-center">Your Cart</h2>
      
//       {cart.length === 0 ? (
//         <p className="text-center">Your cart is empty.</p>
//       ) : (
//         <>
//           <div className="row">
//             {cart.map((item, index) => (
//               <div key={index} className="col-md-4 mb-4">
//                 <div className="card h-100 shadow-sm">
//                   <img src={item.image} className="card-img-top" alt={item.name} style={{ height: '200px', objectFit: 'cover' }} />
                  
//                   <div className="card-body d-flex flex-column">
//                     <h5 className="card-title">{item.name}</h5>
//                     <p className="card-text">Price: ${item.price.toFixed(2)}</p>

//                     <div className="d-flex align-items-center mb-2">
//                       <button
//                         className="btn btn-outline-secondary btn-sm me-2"
//                         onClick={() => updateQuantity(item.id, item.quantity - 1)}
//                         disabled={item.quantity === 1}
//                       >
//                         <FaMinus />
//                       </button>
//                       <span>{item.quantity}</span>
//                       <button
//                         className="btn btn-outline-secondary btn-sm ms-2"
//                         onClick={() => updateQuantity(item.id, item.quantity + 1)}
//                       >
//                         <FaPlus />
//                       </button>
//                     </div>

//                     <p className="card-text">Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>

//                     <div className="mt-auto d-flex justify-content-between">
//                       <button
//                         className="btn btn-danger btn-sm"
//                         onClick={() => removeFromCart(item.id)}
//                       >
//                         <FaTrash className="me-1" />Remove
//                       </button>
//                       <button
//                         className="btn btn-primary btn-sm"
//                         onClick={() => handleBuyNow(item)}
//                       >
//                         Buy Now
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="text-end mt-4">
//             <h4>Total: ${total.toFixed(2)}</h4>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Cart;

// import React from "react";
// import { useCart } from "../CartContext";
// import { useNavigate } from "react-router-dom";

// const Cart = () => {
//   const { cart, addToCart, removeFromCart, updateQuantity } = useCart();
//   const navigate = useNavigate();
//   const img_url = "https://joll3a.pythonanywhere.com/static/images/";

//   const handleCheckout = () => {
//     navigate("/Makepayment", { state: { cart } });
//   };

//   const calculateTotal = () => {
//     return cart.reduce((total, item) => total + item.price * item.quantity, 0);
//   };

//   if (cart.length === 0) {
//     return (
//       <div className="container text-center my-5">
//         <h3>Your cart is empty 🛒</h3>
//         <p className="text-muted">Browse our products and add something!</p>
//       </div>
//     );
//   }

//   return (
//     <div className="container my-4">
//       <h3 className="text-center mb-4">Your Cart</h3>
//       <div className="row g-4">
//         {cart.map((item) => (
//           <div className="col-md-4 col-sm-6" key={item.id}>
//             <div className="card h-100 shadow-sm">
//               <img
//                 src={img_url + item.car_photo}
//                 className="card-img-top"
//                 alt={item.car_name}
//                 style={{ height: "200px", objectFit: "cover" }}
//               />
//               <div className="card-body text-center">
//                 <h5 className="card-title">{item.car_name}</h5>
//                 <p className="text-muted mb-1">{item.brand}</p>
//                 <p className="text-muted small">{item.description}</p>
//                 <h6 className="text-warning">${item.price}</h6>

//                 <div className="d-flex justify-content-center align-items-center my-2">
//                   <button
//                     className="btn btn-outline-dark btn-sm me-2"
//                     onClick={() =>
//                       updateQuantity(item.id, Math.max(item.quantity - 1, 1))
//                     }
//                   >
//                     –
//                   </button>
//                   <span>{item.quantity}</span>
//                   <button
//                     className="btn btn-outline-dark btn-sm ms-2"
//                     onClick={() =>
//                       updateQuantity(item.id, item.quantity + 1)
//                     }
//                   >
//                     +
//                   </button>
//                 </div>

//                 <p className="fw-bold">
//                   Subtotal: ${item.price * item.quantity}
//                 </p>
//                 <button
//                   className="btn btn-sm btn-danger mt-2"
//                   onClick={() => removeFromCart(item.id)}
//                 >
//                   Remove
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="text-end mt-4">
//         <h4>Total: ${calculateTotal()}</h4>
//         <button className="btn btn-success mt-2" onClick={handleCheckout}>
//           Proceed to Checkout
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Cart;

// import React from "react";
// import { useCart } from "../CartContext";
// import { useNavigate } from "react-router-dom";

// const Cart = () => {
//   const { cart, removeFromCart, updateQuantity } = useCart();
//   const navigate = useNavigate();
//   const img_url = "https://joll3a.pythonanywhere.com/static/images/";

//   const handleCheckout = () => {
//     if (cart.length > 0) {
//       navigate("/Makepayment", { state: { cart } });
//     }
//   };

//   const calculateTotal = () =>
//     cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed([]);

//   if (cart.length === 0) {
//     return (
//       <div className="container text-center my-5">
//         <h3>Your cart is empty 🛒</h3>
//         <p className="text-muted">Browse our products and add something!</p>
//       </div>
//     );
//   }

//   return (
//     <div className="container my-4">
//       <h3 className="text-center mb-4">Your Cart</h3>
//       <div className="row g-4">
//         {cart.map((item) => (
//           <div className="col-md-4 col-sm-6" key={item.id}>
//             <div className="card h-100 shadow-sm">
//               <img
//                 src={img_url + item.car_photo}
//                 className="card-img-top"
//                 alt={item.car_name}
//                 onError={(e) => (e.target.src = "/fallback.jpg")} // optional fallback
//                 style={{ height: "200px", objectFit: "cover" }}
//               />
//               <div className="card-body text-center">
//                 <h5 className="card-title">{item.car_name}</h5>
//                 <p className="text-muted mb-1">{item.brand}</p>
//                 <p className="text-muted small">{item.description}</p>
//                 <h6 className="text-warning">Kshs{item.price.toFixed(2)}</h6>

//                 <div className="d-flex justify-content-center align-items-center my-2">
//                   <button
//                     className="btn btn-outline-dark btn-sm me-2"
//                     onClick={() => updateQuantity(item.id, Math.max(item.quantity - 1, 1))}
//                   >
//                     –
//                   </button>
//                   <span>{item.quantity}</span>
//                   <button
//                     className="btn btn-outline-dark btn-sm ms-2"
//                     onClick={() => updateQuantity(item.id, item.quantity + 1)}
//                   >
//                     +
//                   </button>
//                 </div>

//                 <p className="fw-bold">
//                   Subtotal: Kshs{(item.price * item.quantity).toFixed(2)}
//                 </p>
//                 <button
//                   className="btn btn-sm btn-danger mt-2"
//                   onClick={() => removeFromCart(item.id)}
//                 >
//                   Remove
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="text-end mt-4">
//         <h4>Total: Kshs{calculateTotal()}</h4>
//         <button className="btn btn-success mt-2" onClick={handleCheckout}>
//           Proceed to Checkout
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Cart;

import React from "react";
import { useCart } from "../CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const navigate = useNavigate();
  const img_url = "https://joll3a.pythonanywhere.com/static/images/";

  const handleCheckout = () => {
    if (cart.length > 0) {
      navigate("/Makepayment", { state: { cart } });
    }
  };

  const calculateTotal = () =>
    cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

  if (cart.length === 0) {
    return (
      <div className="container text-center my-5">
        <h3>Your cart is empty 🛒</h3>
        <p className="text-muted">Browse our products and add something!</p>
      </div>
    );
  }

  return (
    <div className="container my-4">
      <h3 className="text-center mb-4">Your Cart</h3>
      <div className="row g-4">
        {cart.map((item) => (
          <div className="col-md-4 col-sm-6" key={item.id}>
            <div className="card h-100 shadow-sm">
              <img
                src={img_url + item.car_photo}
                className="card-img-top"
                alt={item.car_name}
                onError={(e) => (e.target.src = "/fallback.jpg")}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{item.car_name}</h5>
                <p className="text-muted mb-1">{item.brand}</p>
                <p className="text-muted small">{item.description}</p>
                <h6 className="text-warning">Kshs {item.price.toFixed(2)}</h6>

                <div className="d-flex justify-content-center align-items-center my-2">
                  <button
                    className="btn btn-outline-dark btn-sm me-2"
                    onClick={() =>
                      updateQuantity(item.id, Math.max(item.quantity - 1, 1))
                    }
                  >
                    –
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    className="btn btn-outline-dark btn-sm ms-2"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>

                <p className="fw-bold">
                  Subtotal: Kshs {(item.price * item.quantity).toFixed(2)}
                </p>
                <button
                  className="btn btn-sm btn-danger mt-2"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-end mt-4">
        <h4>Total: Kshs {calculateTotal()}</h4>
        <button className="btn btn-success mt-2" onClick={handleCheckout}>
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
