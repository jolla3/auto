
// // // import axios from 'axios';
// // // import React, { useState } from 'react';
// // // import { useLocation, Link } from 'react-router-dom';
// // // import {
// // //   Button,
// // //   TextField,
// // //   CircularProgress,
// // //   Typography,
// // //   Box,
// // //   Container,
// // //   Paper
// // // } from '@mui/material';

// // // const Makepayment = () => {
// // //   const { product } = useLocation().state || {};
// // //   const [phone, setPhone] = useState('');
// // //   const [message, setMessage] = useState('');
// // //   const [loading, setLoading] = useState(false);

// // //   const img_url = "https://joll3a.pythonanywhere.com/api/static/images/";

// // //   const isValidPhone = /^254[17]\d{8}$/.test(phone);

// // //   const submit = async (e) => {
// // //     e.preventDefault();

// // //     if (!isValidPhone) {
// // //       setMessage("Enter a valid phone number starting with 2547 or 2541 (e.g., 254712345678)");
// // //       return;
// // //     }

// // //     setMessage("Please wait while we process your payment...");
// // //     setLoading(true);

// // //     const data = new FormData();
// // //     data.append("phone", phone);
// // //     data.append("amount", product.price);

// // //     try {
// // //       const response = await axios.post(
// // //         "https://joll3a.pythonanywhere.com/api/mpesa_payment",
// // //         data
// // //       );
// // //       setMessage(response.data.message);
// // //     } catch (error) {
// // //       const errMsg = error.response?.data?.message || "An error occurred. Please try again.";
// // //       setMessage(errMsg);
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   if (!product) {
// // //     return (
// // //       <Container maxWidth="sm">
// // //         <Typography variant="h6" align="center" sx={{ mt: 4 }}>
// // //           No product selected for payment.
// // //         </Typography>
// // //         <Box textAlign="center" mt={2}>
// // //           <Link to="/" className="btn btn-primary">Back to Products</Link>
// // //         </Box>
// // //       </Container>
// // //     );
// // //   }

// // //   return (
// // //     <Container maxWidth="sm" sx={{ mt: 5 }}>
// // //       <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
// // //         <Box textAlign="center" mb={3}>
// // //           <Link to="/" className="btn btn-dark">← Back to All Products</Link>
// // //           <Typography variant="h4" sx={{ mt: 2 }}>Lipa na Mpesa</Typography>
// // //         </Box>

// // //         <Box display="flex" justifyContent="center" mb={2}>
// // //           <img
// // //             src={img_url + product.car_photo}
// // //             alt={product.car_name}
// // //             style={{
// // //               width: '100%',
// // //               maxWidth: '300px',
// // //               borderRadius: '12px',
// // //               boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
// // //             }}
// // //           />
// // //         </Box>

// // //         <Typography variant="h6" align="center">
// // //           {product.car_name}
// // //         </Typography>
// // //         <Typography variant="body1" align="center" color="textSecondary" mb={2}>
// // //           Price: KES {product.price}
// // //         </Typography>

// // //         {message && (
// // //           <Typography
// // //             variant="body1"
// // //             align="center"
// // //             color={loading ? "primary" : message.toLowerCase().includes("success") ? "green" : "error"}
// // //             mb={2}
// // //           >
// // //             {message}
// // //           </Typography>
// // //         )}

// // //         <form onSubmit={submit}>
// // //           <TextField
// // //             label="Phone Number (e.g. 254712345678)"
// // //             variant="outlined"
// // //             fullWidth
// // //             type="tel"
// // //             value={phone}
// // //             onChange={(e) => setPhone(e.target.value)}
// // //             inputProps={{ maxLength: 12 }}
// // //             sx={{ mb: 3 }}
// // //           />

// // //           <Box textAlign="center">
// // //             {loading ? (
// // //               <CircularProgress />
// // //             ) : (
// // //               <Button variant="contained" color="primary" fullWidth type="submit">
// // //                 Make Payment
// // //               </Button>
// // //             )}
// // //           </Box>
// // //         </form>
// // //       </Paper>
// // //     </Container>
// // //   );
// // // };

// // // export default Makepayment;



// // import axios from 'axios';
// // import React, { useState } from 'react';
// // import { useLocation, Link } from 'react-router-dom';

// // const Makepayment = () => {
// //   const { product } = useLocation().state || {};
// //   const [phone, setPhone] = useState('');
// //   const [message, setMessage] = useState('');
// //   const [loading, setLoading] = useState(false);

// //   const img_url = "https://joll3a.pythonanywhere.com/api/static/images/";
// //   const isValidPhone = /^254[17]\d{8}$/.test(phone);

// //   const submit = async (e) => {
// //     e.preventDefault();

// //     if (!isValidPhone) {
// //       setMessage("Enter a valid phone number starting with 2547 or 2541 (e.g., 254712345678)");
// //       return;
// //     }

// //     setMessage("Please wait while we process your payment...");
// //     setLoading(true);

// //     const data = new FormData();
// //     data.append("phone", phone);
// //     data.append("amount", product.price);

// //     try {
// //       const response = await axios.post(
// //         "https://joll3a.pythonanywhere.com/api/mpesa_payment",
// //         data
// //       );
// //       setMessage(response.data.message);
// //     } catch (error) {
// //       const errMsg = error.response?.data?.message || "An error occurred. Please try again.";
// //       setMessage(errMsg);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   if (!product) {
// //     return (
// //       <div className="container mt-5 text-center">
// //         <h5>No product selected for payment.</h5>
// //         <Link to="/" className="btn btn-primary mt-3">Back to Products</Link>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="container mt-5">
// //       <div className="card p-4 shadow-sm">
// //         <div className="mb-3 text-start">
// //           <Link to="/" className="btn btn-dark">← Back to All Products</Link>
// //         </div>

// //         <h2 className="text-center mb-3">Lipa na Mpesa</h2>

// //         <div className="text-center mb-3">
// //           <img
// //             src={img_url + product.car_photo}
            
// //             alt={product.car_name}
// //             className="img-fluid rounded shadow"
// //             style={{ maxWidth: '300px', objectFit: "cover" }}
// //           />
// //         </div>

// //         <h5 className="text-center">{product.car_name}</h5>
// //         <p className="text-center text-muted">Price: KES {product.price}</p>

// //         {message && (
// //           <div className={`alert ${message.toLowerCase().includes("success") ? 'alert-success' : 'alert-warning'} text-center`}>
// //             {message}
// //           </div>
// //         )}

// //         <form onSubmit={submit}>
// //           <div className="mb-3">
// //             <input
// //               type="tel"
// //               className="form-control"
// //               placeholder="Enter phone (e.g. 254712345678)"
// //               value={phone}
// //               maxLength="12"
// //               onChange={(e) => setPhone(e.target.value)}
// //               required
// //             />
// //           </div>

// //           <div className="d-grid">
// //             <button type="submit" className="btn btn-primary" disabled={loading}>
// //               {loading ? (
// //                 <>
// //                   <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
// //                   Processing...
// //                 </>
// //               ) : (
// //                 "Make Payment"
// //               )}
// //             </button>
// //           </div>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Makepayment;



// import React, { useState } from 'react';
// import axios from 'axios';
// import { useLocation, Link } from 'react-router-dom';

// const Makepayment = () => {
//   const { product } = useLocation().state || {};
//   const [phone, setPhone] = useState('');
//   const [message, setMessage] = useState('');
//   const [loading, setLoading] = useState(false);

//   const img_url = "https://joll3a.pythonanywhere.com/api/static/images/";

//   const isValidPhone = /^254[17]\d{8}$/.test(phone);

//   const submit = async (e) => {
//     e.preventDefault();

//     if (!isValidPhone) {
//       setMessage("Enter a valid phone number starting with 2547 or 2541 (e.g., 254712345678)");
//       return;
//     }

//     setMessage("Please wait while we process your payment...");
//     setLoading(true);

//     const data = new FormData();
//     data.append("phone", phone);
//     data.append("amount", product.price);

//     try {
//       const response = await axios.post(
//         "https://joll3a.pythonanywhere.com/api/mpesa_payment",
//         data
//       );
//       setMessage(response.data.message);
//     } catch (error) {
//       const errMsg = error.response?.data?.message || "An error occurred. Please try again.";
//       setMessage(errMsg);
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (!product) {
//     return (
//       <div className="container d-flex flex-column justify-content-center align-items-center vh-100">
//         <h6 className="text-center mt-4">No product selected for payment.</h6>
//         <Link to="/" className="btn btn-primary mt-3">Back to Products</Link>
//       </div>
//     );
//   }

//   return (
//     <div className="container d-flex flex-column justify-content-center align-items-center vh-100">
//       <div className="w-100" style={{ maxWidth: '500px' }}>
//         <nav className="mb-4">
//           <Link to="/" className="btn btn-dark">← Back to All Products</Link>
//         </nav>

//         <h2 className="text-center mb-4" key={product.id}>Lipa na Mpesa</h2>

//         <div className="text-center mb-3" key={product.id}>
//           <img
//             src={img_url + product.car_photo}
//             alt={product.car_name}
//             className="img-fluid rounded shadow"
//           />
//         </div>

//         <h5 className="text-center">{product.car_name}</h5>
//         <p className="text-center text-muted mb-4">Price: KES {product.price}</p>

//         {message && (
//           <div className={`alert ${message.toLowerCase().includes("success") ? "alert-success" : "alert-danger"}`} role="alert">
//             {message}
//           </div>
//         )}

//         <form onSubmit={submit}>
//           <div className="form-group mb-3">
//             <label htmlFor="phone">Phone Number (e.g., 254712345678)</label>
//             <input
//               type="tel"
//               className="form-control"
//               id="phone"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//               maxLength={12}
//               required
//             />
//           </div>

//           <div className="d-grid">
//             <button type="submit" className="btn btn-primary" disabled={loading}>
//               {loading ? (
//                 <>
//                   <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
//                   Processing...
//                 </>
//               ) : (
//                 "Make Payment"
//               )}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Makepayment;

// import React, { useState } from 'react';
// import axios from 'axios';
// import { useLocation, Link } from 'react-router-dom';

// const Makepayment = () => {
//   const locationState = useLocation().state || {};
//   const cart = locationState.cart || [];

//   const [phone, setPhone] = useState('');
//   const [message, setMessage] = useState('');
//   const [loading, setLoading] = useState(false);

//   const img_url = "https://joll3a.pythonanywhere.com/static/images/";

//   const isValidPhone = /^254[17]\d{8}$/.test(phone);

//   const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

//   const submit = async (e) => {
//     e.preventDefault();

//     if (!isValidPhone) {
//       setMessage("Enter a valid phone number starting with 2547 or 2541 (e.g., 254712345678)");
//       return;
//     }

//     setMessage("Please wait while we process your payment...");
//     setLoading(true);

//     const data = new FormData();
//     data.append("phone", phone);
//     data.append("amount", totalAmount);

//     try {
//       const response = await axios.post(
//         "https://joll3a.pythonanywhere.com/api/mpesa_payment",
//         data
//       );
//       setMessage(response.data.message);
//     } catch (error) {
//       const errMsg = error.response?.data?.message || "An error occurred. Please try again.";
//       setMessage(errMsg);
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (cart.length === 0) {
//     return (
//       <div className="container d-flex flex-column justify-content-center align-items-center vh-100">
//         <h6 className="text-center mt-4">No products selected for payment.</h6>
//         <Link to="/" className="btn btn-primary mt-3">Back to Products</Link>
//       </div>
//     );
//   }

//   return (
//     <div className="container d-flex flex-column justify-content-center align-items-center py-5">
//       <div className="w-100" style={{ maxWidth: '500px' }}>
//         <div className="mb-4">
//           <Link to="/" className="btn btn-dark">← Back to All Products</Link>
//         </div>

//         <h2 className="text-center mb-4">Lipa na Mpesa</h2>

//         <div className="mb-3">
//           {cart.map((item) => (
//             <div key={item.id} className="mb-3 border-bottom pb-2">
//               <div className="d-flex align-items-center">
//                 <img
//                   src={img_url + item.car_photo}
//                   alt={item.car_name}
//                   style={{ width: '80px', height: '60px', objectFit: 'cover', marginRight: '10px' }}
//                   className="rounded shadow-sm"
//                 />
//                 <div>
//                   <h6 className="mb-1">{item.car_name}</h6>
//                   <p className="mb-0 text-muted">KES {item.price} × {item.quantity}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <h5 className="text-center mb-3">Total: KES {totalAmount}</h5>

//         {message && (
//           <div className={`alert ${message.toLowerCase().includes("success") ? "alert-success" : "alert-danger"}`} role="alert">
//             {message}
//           </div>
//         )}

//         <form onSubmit={submit}>
//           <div className="form-group mb-3">
//             <label htmlFor="phone">Phone Number (e.g., 254712345678)</label>
//             <input
//               type="tel"
//               className="form-control"
//               id="phone"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//               maxLength={12}
//               required
//             />
//           </div>

//           <div className="d-grid">
//             <button type="submit" className="btn btn-primary" disabled={loading}>
//               {loading ? (
//                 <>
//                   <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
//                   Processing...
//                 </>
//               ) : (
//                 "Make Payment"
//               )}
//             </button>
//           </div>
//         </form>

//         {message.toLowerCase().includes("success") && (
//           <div className="text-center mt-4">
//             <Link to="/" className="btn btn-success w-100">Continue Shopping</Link>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Makepayment;




import React, { useState } from 'react';
import axios from 'axios';
import { useLocation, Link } from 'react-router-dom';

const Makepayment = () => {
  const { cart } = useLocation().state || {};
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const img_url = "https://joll3a.pythonanywhere.com/static/images/";
  const isValidPhone = /^254[17]\d{8}$/.test(phone);

  const submit = async (e) => {
    e.preventDefault();

    if (!isValidPhone) {
      setMessage("Enter a valid phone number starting with 2547 or 2541 (e.g., 254712345678)");
      return;
    }

    setMessage("Processing payment for your items...");
    setLoading(true);

    try {
      for (const item of cart) {
        const data = new FormData();
        data.append("phone", phone);
        data.append("amount", item.price * item.quantity); // total for that item

        await axios.post("https://joll3a.pythonanywhere.com/api/mpesa_payment", data);
      }

      setMessage("Payment initiated successfully for all items!");
    } catch (error) {
      const errMsg = error.response?.data?.message || "An error occurred. Please try again.";
      setMessage(errMsg);
    } finally {
      setLoading(false);
    }
  };

  if (!cart || cart.length === 0) {
    return (
      <div className="container d-flex flex-column justify-content-center align-items-center vh-100">
        <h6 className="text-center mt-4">No products in the cart for payment.</h6>
        <Link to="/" className="btn btn-primary mt-3">Back to Products</Link>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <nav className="mb-4">
        <Link to="/" className="btn btn-dark">← Back to Products</Link>
      </nav>

      <h2 className="text-center mb-4">Lipa na Mpesa</h2>

      <div className="row g-4 mb-4">
        {cart.map((item) => (
          <div className="col-md-4" key={item.id}>
            <div className="card h-100 shadow-sm">
              <img
                src={img_url + item.car_photo}
                alt={item.car_name}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <h5>{item.car_name}</h5>
                <p className="text-muted">KES {item.price.toFixed(2)} x {item.quantity}</p>
                <p className="fw-bold">Subtotal: KES {(item.price * item.quantity).toFixed(2)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {message && (
        <div className={`alert ${message.toLowerCase().includes("success") ? "alert-success" : "alert-warning"}`} role="alert">
          {message}
        </div>
      )}

      <form onSubmit={submit} className="mb-5">
        <div className="mb-3">
          <label htmlFor="phone">Phone Number (e.g., 254712345678)</label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            maxLength={12}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100" disabled={loading}>
          {loading ? (
            <>
              <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
              Processing...
            </>
          ) : (
            "Make Payment"
          )}
        </button>
      </form>
    </div>
  );
};

export default Makepayment;
