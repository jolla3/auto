
// // // import React, { createContext, useContext, useState, useEffect } from "react";

// // // // Create the cart context
// // // const CartContext = createContext();

// // // // Custom hook to use the cart
// // // export const useCart = () => useContext(CartContext);

// // // // Cart Provider component
// // // export const CartProvider = ({ children }) => {
// // //   const [items, setItems] = useState(() => {
// // //     const saved = localStorage.getItem("cartItems");
// // //     return saved ? JSON.parse(saved) : [];
// // //   });

// // //   useEffect(() => {
// // //     localStorage.setItem("cartItems", JSON.stringify(items));
// // //   }, [items]);

// // //   const addItem = (product) => {
// // //     setItems((prevItems) => {
// // //       const exists = prevItems.find((item) => item.id === product.id);
// // //       if (exists) {
// // //         return prevItems.map((item) =>
// // //           item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
// // //         );
// // //       } else {
// // //         return [...prevItems, { ...product, quantity: 1 }];
// // //       }
// // //     });
// // //   };

// // //   const removeItem = (id) => {
// // //     setItems((prevItems) => prevItems.filter((item) => item.id !== id));
// // //   };

// // //   const updateQuantity = (id, type) => {
// // //     setItems((prevItems) =>
// // //       prevItems.map((item) => {
// // //         if (item.id === id) {
// // //           const newQuantity = type === "increment" ? item.quantity + 1 : item.quantity - 1;
// // //           return { ...item, quantity: newQuantity > 0 ? newQuantity : 1 };
// // //         }
// // //         return item;
// // //       })
// // //     );
// // //   };

// // //   return (
// // //     <CartContext.Provider value={{ items, addItem, removeItem, updateQuantity }}>
// // //       {children}
// // //     </CartContext.Provider>
// // //   );
// // // };

// // // CartContext.jsx
// // import React, { createContext, useContext, useState } from "react";

// // // Create Context
// // const CartContext = createContext();

// // // Provider
// // export const CartProvider = ({ children }) => {
// //   const [items, setItems] = useState([]);

// //   const addItem = (product) => {
// //     setItems((prevItems) => {
// //       const existing = prevItems.find((item) => item.id === product.id);
// //       if (existing) {
// //         return prevItems.map((item) =>
// //           item.id === product.id
// //             ? { ...item, quantity: item.quantity + 1 }
// //             : item
// //         );
// //       } else {
// //         return [...prevItems, { ...product, quantity: 1 }];
// //       }
// //     });
// //   };

// //   const removeItem = (id) => {
// //     setItems((prevItems) => prevItems.filter((item) => item.id !== id));
// //   };

// //   const updateQuantity = (id, type) => {
// //     setItems((prevItems) =>
// //       prevItems.map((item) => {
// //         if (item.id === id) {
// //           const newQuantity =
// //             type === "increment" ? item.quantity + 1 : item.quantity - 1;
// //           return { ...item, quantity: newQuantity > 0 ? newQuantity : 1 };
// //         }
// //         return item;
// //       })
// //     );
// //   };

// //   return (
// //     <CartContext.Provider value={{ items, addItem, removeItem, updateQuantity }}>
// //       {children}
// //     </CartContext.Provider>
// //   );
// // };

// // // Hook to use cart
// // export const useCart = () => useContext(CartContext);

// // CartContext.js
// import { createContext, useContext, useState } from 'react';

// const CartContext = createContext();

// export const useCart = () => useContext(CartContext);

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);

//   const addToCart = (product) => {
//     setCart(prev => {
//       const existing = prev.find(item => item.id === product.id);
//       if (existing) {
//         return prev.map(item =>
//           item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//         );
//       } else {
//         return [...prev, { ...product, quantity: 1 }];
//       }
//     });
//   };

//   const removeFromCart = (id) => {
//     setCart(prev => prev.filter(item => item.id !== id));
//   };

//   const clearCart = () => setCart([]);

//   return (
//     <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// import React, { createContext, useContext, useState } from 'react';

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);

//   const addToCart = (product) => {
//     setCart((prevCart) => {
//       const existing = prevCart.find((item) => item.id === product.id);
//       if (existing) {
//         return prevCart.map((item) =>
//           item.id === product.id
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         );
//       }
//       return [...prevCart, { ...product, quantity: 1 }];
//     });
//   };

//   const removeFromCart = (productId) => {
//     setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
//   };

//   const updateQuantity = (productId, newQuantity) => {
//     if (newQuantity < 1) return;
//     setCart((prevCart) =>
//       prevCart.map((item) =>
//         item.id === productId ? { ...item, quantity: newQuantity } : item
//       )
//     );
//   };

//   return (
//     <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);



// import React, { createContext, useContext, useState, useEffect } from 'react';

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState(() => {
//     const savedCart = localStorage.getItem('mj_cart');
//     return savedCart ? JSON.parse(savedCart) : [];
//   });

//   useEffect(() => {
//     localStorage.setItem('mj_cart', JSON.stringify(cart));
//   }, [cart]);

//   const addToCart = (product) => {
//     setCart((prevCart) => {
//       const existing = prevCart.find((item) => item.id === product.id);
//       if (existing) {
//         return prevCart.map((item) =>
//           item.id === product.id
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         );
//       }
//       return [...prevCart, { ...product, quantity: 1 }];
//     });
//   };

//   const removeFromCart = (productId) => {
//     setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
//   };

//   const updateQuantity = (productId, newQuantity) => {
//     if (newQuantity < 1) return;
//     setCart((prevCart) =>
//       prevCart.map((item) =>
//         item.id === productId ? { ...item, quantity: newQuantity } : item
//       )
//     );
//   };

//   return (
//     <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// // export const useCart = () => useContext(CartContext);
// import React from "react";
// import { useCart } from "../CartContext";
// import { useNavigate } from "react-router-dom";

// const CartContent= () => {
//   const { cart, removeFromCart, updateQuantity } = useCart();
//   const navigate = useNavigate();
//   const img_url = "https://joll3a.pythonanywhere.com/static/images/";

//   // ✅ Fix to get first valid car photo
//   const getPhotoUrl = (item) => {
//     if (item.car_photo) return img_url + item.car_photo;

//     const keys = Object.keys(item).filter(
//       (key) => key.startsWith("car_photo") && item[key]
//     );

//     return keys.length > 0 ? img_url + item[keys[0]] : "/fallback.jpg";
//   };

//   const handleCheckout = () => {
//     if (cart.length > 0) {
//       navigate("/Makepayment", { state: { cart } });
//     }
//   };

//   const calculateTotal = () =>
//     cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

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
//                 src={getPhotoUrl(item)}
//                 className="card-img-top"
//                 alt={item.car_name}
//                 onError={(e) => (e.target.src = "/fallback.jpg")}
//                 style={{ height: "200px", objectFit: "cover" }}
//               />
//               <div className="card-body text-center">
//                 <h5 className="card-title">{item.car_name}</h5>
//                 <p className="text-muted mb-1">{item.brand}</p>
//                 <p className="text-muted small">{item.description}</p>
//                 <h6 className="text-warning">Kshs {item.price.toFixed(2)}</h6>

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
//                   Subtotal: Kshs {(item.price * item.quantity).toFixed(2)}
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
//         <h4>Total: Kshs {calculateTotal()}</h4>
//         <button className="btn btn-success mt-2" onClick={handleCheckout}>
//           Proceed to Checkout
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CartContent;


// import React, { createContext, useContext, useState, useEffect } from 'react';

// const CartContext = createContext();

// const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState(() => {
//     const savedCart = localStorage.getItem('mj_cart');
//     return savedCart ? JSON.parse(savedCart) : [];
//   });

//   useEffect(() => {
//     localStorage.setItem('mj_cart', JSON.stringify(cart));
//   }, [cart]);
  
// const addToCart = (product) => {
//   setCart((prevCart) => {
//     // 👇 Find match by BOTH id and selected photo (or another unique key if needed)
//     const existing = prevCart.find(
//       (item) => item.id === product.id && item.car_photo === product.car_photo
//     );

//     if (existing) {
//       // Increase quantity if same product variant
//       return prevCart.map((item) =>
//         item.id === product.id && item.car_photo === product.car_photo
//           ? { ...item, quantity: item.quantity + 1 }
//           : item
//       );
//     }

//     // Else, add as new cart item
//     return [...prevCart, { ...product, quantity: 1 }];
//   });
// };

//   // const addToCart = (product) => {
//   //   setCart((prevCart) => {
//   //     const existing = prevCart.find((item) => item.id === product.id);
//   //     if (existing) {
//   //       return prevCart.map((item) =>
//   //         item.id === product.id
//   //           ? { ...item, quantity: item.quantity + 1 }
//   //           : item
//   //       );
//   //     }
//   //     return [...prevCart, { ...product, quantity: 1 }];
//   //   });
//   // };

//   const removeFromCart = (productId) => {
//     setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
//   };

//   const updateQuantity = (productId, newQuantity) => {
//     if (newQuantity < 1) return;
//     setCart((prevCart) =>
//       prevCart.map((item) =>
//         item.id === productId ? { ...item, quantity: newQuantity } : item
//       )
//     );
//   };

//   return (
//     <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// // ✅ Export both
// export const useCart = () => useContext(CartContext);
// export { CartProvider };



// import React, { createContext, useContext, useState, useEffect } from 'react';
// import { v4 as uuidv4 } from 'uuid'; // Install this: npm install uuid

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState(() => {
//     const savedCart = localStorage.getItem('mj_cart');
//     return savedCart ? JSON.parse(savedCart) : [];
//   });

//   useEffect(() => {
//     localStorage.setItem('mj_cart', JSON.stringify(cart));
//   }, [cart]);

//   // ✅ Add new product with unique cartItemId
//   const addToCart = (product) => {
//     const cartItem = {
//       ...product,
//       quantity: 1,
//       cartItemId: uuidv4(), // 👈 makes every product unique in the cart
//     };
//     setCart((prevCart) => [...prevCart, cartItem]);
//   };

//   const removeFromCart = (cartItemId) => {
//     setCart((prevCart) => prevCart.filter((item) => item.cartItemId !== cartItemId));
//   };

//   const updateQuantity = (cartItemId, newQuantity) => {
//     if (newQuantity < 1) return;
//     setCart((prevCart) =>
//       prevCart.map((item) =>
//         item.cartItemId === cartItemId ? { ...item, quantity: newQuantity } : item
//       )
//     );
//   };

//   return (
//     <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);

// src/CartContext.js

// import React, { createContext, useContext, useEffect, useState } from 'react';

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState(() => {
//     const saved = localStorage.getItem('mj_cart');
//     return saved ? JSON.parse(saved) : [];
//   });

//   useEffect(() => {
//     localStorage.setItem('mj_cart', JSON.stringify(cart));
//   }, [cart]);

//   const addToCart = (product) => {
//     setCart((prevCart) => {
//       const existing = prevCart.find((item) => item.id === product.id);
//       if (existing) {
//         return prevCart.map((item) =>
//           item.id === product.id
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         );
//       } else {
//         return [...prevCart, { ...product, quantity: 1 }];
//       }
//     });
//   };

//   const removeFromCart = (productId) => {
//     setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
//   };

//   const updateQuantity = (productId, quantity) => {
//     if (quantity < 1) return;
//     setCart((prevCart) =>
//       prevCart.map((item) =>
//         item.id === productId ? { ...item, quantity } : item
//       )
//     );
//   };

//   return (
//     <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);

import React, { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('mj_cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Sync cart with localStorage
  useEffect(() => {
    localStorage.setItem('mj_cart', JSON.stringify(cart));
  }, [cart]);

  // Add to cart or increment quantity
  const addToCart = (product) => {
  setCart((prevCart) => {
    const existing = prevCart.find((item) => item.id === product.id);
    if (existing) {
      return prevCart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      return [...prevCart, { ...product, quantity: 1 }];
    }
  });
};

  // const addToCart = (product) => {
  //   setCart((prevCart) => {
  //     const existingItem = prevCart.find((item) => item.id === product.id);
  //     if (existingItem) {
  //       return prevCart.map((item) =>
  //         item.id === product.id
  //           ? { ...item, quantity: item.quantity + 1 }
  //           : item
  //       );
  //     } else {
  //       return [...prevCart, { ...product, quantity: 1 }];
  //     }
  //   });
  // };

  // Remove product from cart
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // Manually update quantity
  const updateQuantity = (productId, quantity) => {
    if (quantity < 1) return;
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
