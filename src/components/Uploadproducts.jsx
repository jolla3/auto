
// // // // // import axios from "axios"
// // // // // import { useState } from "react"
// // // // // import {
// // // // //   TextField,
// // // // //   TextareaAutosize,
// // // // //   Button,
// // // // //   Typography,
// // // // //   CircularProgress,
// // // // //   Box
// // // // // } from "@mui/material"

// // // // // const Uploadproducts = () => {
// // // // //   const [car_name, setCarName] = useState("")
// // // // //   const [brand, setBrand] = useState("")
// // // // //   const [transmission, setTransmission] = useState("")
// // // // //   const [model_year, setModelyear] = useState("")
// // // // //   const [fuel_type, setFueltype] = useState("")
// // // // //   const [car_condition, setCarcondition] = useState("")
// // // // //   const [price, setPrice] = useState("")
// // // // //   const [description, setDescription] = useState("")
// // // // //   const [car_photo, setCarPhoto] = useState(null)
// // // // //   const [loading, setLoading] = useState(false)
// // // // //   const [message, setMessage] = useState("")
// // // // //   const [error, setError] = useState("")

// // // // //   const handleFileChange = (e) => {
// // // // //     const file = e.target.files[0]
// // // // //     // Check if the file is an image and its size is under 5MB
// // // // //     if (file && file.type.startsWith("image/") && file.size <= 5 * 1024 * 1024) {
// // // // //       setCarPhoto(file)
// // // // //     } else {
// // // // //       setError("❌ Please upload a valid image (less than 5MB).")
// // // // //       setCarPhoto(null)
// // // // //     }
// // // // //   }

// // // // //   const submit = async (e) => {
// // // // //     e.preventDefault()
// // // // //     setLoading(true)
// // // // //     setMessage("")
// // // // //     setError("")

// // // // //     try {
// // // // //       const data = new FormData()
// // // // //       data.append("car_name", car_name)
// // // // //       data.append("description", description)
// // // // //       data.append("price", price)
// // // // //       data.append("transmission", transmission)
// // // // //       data.append("model_year", model_year)
// // // // //       data.append("car_condition", car_condition)
// // // // //       data.append("fuel_type", fuel_type)
// // // // //       data.append("brand", brand)
// // // // //       data.append("car_photo", car_photo)

// // // // //       await axios.post(
// // // // //         "https://sch3ccs.pythonanywhere.com/api/upload_product",
// // // // //         data
// // // // //       )

// // // // //       setLoading(false)
// // // // //       setMessage("✅ Product added successfully!")
// // // // //       // Reset the form fields after submission
// // // // //       setCarName("")
// // // // //       setBrand("")
// // // // //       setTransmission("")
// // // // //       setModelyear("")
// // // // //       setFueltype("")
// // // // //       setCarcondition("")
// // // // //       setPrice("")
// // // // //       setDescription("")
// // // // //       setCarPhoto(null)
// // // // //     } catch (err) {
// // // // //       setLoading(false)
// // // // //       console.error(err)
// // // // //       setError("❌ Failed to add product. Try again later.")
// // // // //     }
// // // // //   }

// // // // //   return (
// // // // //     <Box
// // // // //       sx={{
// // // // //         maxWidth: "600px",
// // // // //         margin: "auto",
// // // // //         padding: 4,
// // // // //         mt: 5,
// // // // //         boxShadow: 3,
// // // // //         borderRadius: 2,
// // // // //         backgroundColor: "#fff"
// // // // //       }}
// // // // //     >
// // // // //       <Typography variant="h4" gutterBottom align="center">
// // // // //         Upload Product
// // // // //       </Typography>

// // // // //       {loading && (
// // // // //         <Box sx={{ textAlign: "center", mb: 2 }}>
// // // // //           <CircularProgress />
// // // // //           <Typography variant="body2" color="textSecondary">{loading && "Please wait...!"}</Typography>
// // // // //         </Box>
// // // // //       )}

// // // // //       {message && <Typography color="success.main">{message}</Typography>}
// // // // //       {error && <Typography color="error.main">{error}</Typography>}

// // // // //       <form onSubmit={submit} encType="multipart/form-data">
// // // // //         <TextField
// // // // //           fullWidth
// // // // //           label="Car Name"
// // // // //           value={car_name}
// // // // //           onChange={(e) => setCarName(e.target.value)}
// // // // //           margin="normal"
// // // // //           required
// // // // //         />

// // // // //         <TextField
// // // // //           fullWidth
// // // // //           label="Brand"
// // // // //           value={brand}
// // // // //           onChange={(e) => setBrand(e.target.value)}
// // // // //           margin="normal"
// // // // //           required
// // // // //         />

// // // // //         <TextField
// // // // //           fullWidth
// // // // //           label="Transmission"
// // // // //           value={transmission}
// // // // //           onChange={(e) => setTransmission(e.target.value)}
// // // // //           margin="normal"
// // // // //           required
// // // // //         />

// // // // //         <TextField
// // // // //           fullWidth
// // // // //           label="Model Year"
// // // // //           type="date"
// // // // //           value={model_year}
// // // // //           onChange={(e) => setModelyear(e.target.value)}
// // // // //           InputLabelProps={{ shrink: true }}
// // // // //           margin="normal"
// // // // //           required
// // // // //         />

// // // // //         <TextField
// // // // //           fullWidth
// // // // //           label="Fuel Type"
// // // // //           value={fuel_type}
// // // // //           onChange={(e) => setFueltype(e.target.value)}
// // // // //           margin="normal"
// // // // //           required
// // // // //         />

// // // // //         <TextField
// // // // //           fullWidth
// // // // //           label="Car Condition"
// // // // //           value={car_condition}
// // // // //           onChange={(e) => setCarcondition(e.target.value)}
// // // // //           margin="normal"
// // // // //           required
// // // // //         />

// // // // //         <TextField
// // // // //           fullWidth
// // // // //           label="Car Price"
// // // // //           type="number"
// // // // //           value={price}
// // // // //           onChange={(e) => setPrice(e.target.value)}
// // // // //           margin="normal"
// // // // //           required
// // // // //         />

// // // // //         <TextareaAutosize
// // // // //           minRows={4}
// // // // //           placeholder="Describe your product"
// // // // //           value={description}
// // // // //           onChange={(e) => setDescription(e.target.value)}
// // // // //           style={{
// // // // //             width: "100%",
// // // // //             padding: "12px",
// // // // //             marginTop: "16px",
// // // // //             marginBottom: "16px",
// // // // //             borderRadius: "4px",
// // // // //             borderColor: "#ccc"
// // // // //           }}
// // // // //           required
// // // // //         />

// // // // //         <input
// // // // //           type="file"
// // // // //           accept="image/*"
// // // // //           onChange={handleFileChange}
// // // // //           required
// // // // //           style={{ marginBottom: "20px" }}
// // // // //         />

// // // // //         <Button
// // // // //           fullWidth
// // // // //           variant="contained"
// // // // //           color="primary"
// // // // //           type="submit"
// // // // //           disabled={loading}
// // // // //         >
// // // // //           Upload Product
// // // // //         </Button>
// // // // //       </form>
// // // // //     </Box>
// // // // //   )
// // // // // }

// // // // // export default Uploadproducts


// // // // import axios from "axios"
// // // // import { useState } from "react"
// // // // import "../App.css" // custom CSS (create this file)

// // // // const Uploadproducts = () => {
// // // //   const [car_name, setCarName] = useState("")
// // // //   const [brand, setBrand] = useState("")
// // // //   const [transmission, setTransmission] = useState("")
// // // //   const [model_year, setModelyear] = useState("")
// // // //   const [fuel_type, setFueltype] = useState("")
// // // //   const [car_condition, setCarcondition] = useState("")
// // // //   const [price, setPrice] = useState("")
// // // //   const [description, setDescription] = useState("")
// // // //   const [car_photo, setCarPhoto] = useState(null)
// // // //   const [loading, setLoading] = useState(false)
// // // //   const [message, setMessage] = useState("")
// // // //   const [error, setError] = useState("")

// // // //   const handleFileChange = (e) => {
// // // //     const file = e.target.files[0]
// // // //     if (file && file.type.startsWith("image/") && file.size <= 5 * 1024 * 1024) {
// // // //       setCarPhoto(file)
// // // //       setError("")
// // // //     } else {
// // // //       setError("❌ Please upload a valid image (less than 5MB).")
// // // //       setCarPhoto(null)
// // // //     }
// // // //   }

// // // //   const submit = async (e) => {
// // // //     e.preventDefault()
// // // //     setLoading(true)
// // // //     setMessage("")
// // // //     setError("")

// // // //     try {
// // // //       const data = new FormData()
// // // //       data.append("car_name", car_name)
// // // //       data.append("description", description)
// // // //       data.append("price", price)
// // // //       data.append("transmission", transmission)
// // // //       data.append("model_year", model_year)
// // // //       data.append("car_condition", car_condition)
// // // //       data.append("fuel_type", fuel_type)
// // // //       data.append("brand", brand)
// // // //       data.append("car_photo", car_photo)

// // // //       await axios.post("https://sch3ccs.pythonanywhere.com/api/upload_product", data)

// // // //       setMessage("✅ Product added successfully!")
// // // //       setCarName("")
// // // //       setBrand("")
// // // //       setTransmission("")
// // // //       setModelyear("")
// // // //       setFueltype("")
// // // //       setCarcondition("")
// // // //       setPrice("")
// // // //       setDescription("")
// // // //       setCarPhoto(null)
// // // //     } catch (err) {
// // // //       setError("❌ Failed to add product. Try again later.")
// // // //     } finally {
// // // //       setLoading(false)
// // // //     }
// // // //   }

// // // //   return (
// // // //     <div className="container upload-form mt-5 p-4 shadow bg-white rounded">
// // // //       <h2 className="text-center mb-4">Upload Product</h2>

// // // //       {loading && (
// // // //         <div className="text-center my-3">
// // // //           <div className="spinner-border text-primary" role="status"></div>
// // // //           <p className="text-muted mt-2">Please wait...</p>
// // // //         </div>
// // // //       )}

// // // //       {message && <div className="alert alert-success">{message}</div>}
// // // //       {error && <div className="alert alert-danger">{error}</div>}

// // // //       <form onSubmit={submit} encType="multipart/form-data">
// // // //         <div className="mb-3">
// // // //           <label>Car Name</label>
// // // //           <input type="text" className="form-control" value={car_name} onChange={(e) => setCarName(e.target.value)} required />
// // // //         </div>

// // // //         <div className="mb-3">
// // // //           <label>Brand</label>
// // // //           <input type="text" className="form-control" value={brand} onChange={(e) => setBrand(e.target.value)} required />
// // // //         </div>

// // // //         <div className="mb-3">
// // // //           <label>Transmission</label>
// // // //           <input type="text" className="form-control" value={transmission} onChange={(e) => setTransmission(e.target.value)} required />
// // // //         </div>

// // // //         <div className="mb-3">
// // // //           <label>Model Year</label>
// // // //           <input type="date" className="form-control" value={model_year} onChange={(e) => setModelyear(e.target.value)} required />
// // // //         </div>

// // // //         <div className="mb-3">
// // // //           <label>Fuel Type</label>
// // // //           <input type="text" className="form-control" value={fuel_type} onChange={(e) => setFueltype(e.target.value)} required />
// // // //         </div>

// // // //         <div className="mb-3">
// // // //           <label>Car Condition</label>
// // // //           <input type="text" className="form-control" value={car_condition} onChange={(e) => setCarcondition(e.target.value)} required />
// // // //         </div>

// // // //         <div className="mb-3">
// // // //           <label>Price (KES)</label>
// // // //           <input type="number" className="form-control" value={price} onChange={(e) => setPrice(e.target.value)} required />
// // // //         </div>

// // // //         <div className="mb-3">
// // // //           <label>Description</label>
// // // //           <textarea className="form-control" rows="4" value={description} onChange={(e) => setDescription(e.target.value)} required />
// // // //         </div>

// // // //         <div className="mb-3">
// // // //           <label>Upload Car Image</label>
// // // //           <input type="file" className="form-control" accept="image/*" onChange={handleFileChange} required />
// // // //         </div>

// // // //         <button type="submit" className="btn btn-primary w-100" disabled={loading}>
// // // //           {loading ? "Uploading..." : "Upload Product"}
// // // //         </button>
// // // //       </form>
// // // //     </div>
// // // //   )
// // // // }

// // // // export default Uploadproducts




// // // import { useEffect, useState } from "react";
// // // import axios from "axios";
// // // import { useNavigate } from "react-router-dom";
// // // import { useCart } from "../CartContext"; // ✅ Import Cart Context

// // // const Getproducts = () => {
// // //   const [products, setProduct] = useState([]);
// // //   const [filteredProducts, setFilteredProducts] = useState([]);
// // //   const [searchQuery, setSearchQuery] = useState("");
// // //   const [priceRange, setPriceRange] = useState("all");
// // //   const [fuelType, setFuelType] = useState("all");

// // //   const { addToCart } = useCart(); // ✅ Add to Cart
// // //   const navigate = useNavigate();
// // //   const img_url = "https://joll3a.pythonanywhere.com/static/images/";

// // //   const getProducts = async () => {
// // //     try {
// // //       const response = await axios.get(
// // //         "https://joll3a.pythonanywhere.com/api/get_product_details"
// // //       );
// // //       setProduct(response.data);
// // //     } catch (error) {
// // //       console.error("Failed to fetch products:", error);
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     getProducts();
// // //   }, []);

// // //   useEffect(() => {
// // //     let filtered = products;

// // //     if (searchQuery) {
// // //       filtered = filtered.filter((product) =>
// // //         product.car_name.toLowerCase().includes(searchQuery.toLowerCase())
// // //       );
// // //     }

// // //     if (priceRange !== "all") {
// // //       const [min, max] = priceRange.split("-").map(Number);
// // //       filtered = filtered.filter(
// // //         (product) => product.price >= min && product.price <= max
// // //       );
// // //     }

// // //     if (fuelType !== "all") {
// // //       filtered = filtered.filter(
// // //         (product) =>
// // //           product.fuel_type &&
// // //           product.fuel_type.toLowerCase() === fuelType.toLowerCase()
// // //       );
// // //     }

// // //     setFilteredProducts(filtered);
// // //   }, [searchQuery, priceRange, fuelType, products]);

// // //   return (
// // //     <div className="container-fluid">
// // //       <div className="container my-4">
// // //         <h3 className="text-center mb-4">Browse Our Exotic Cars</h3>

// // //         {/* Filters */}
// // //         <div className="row mb-4 g-2">
// // //           <div className="col-md-4">
// // //             <input
// // //               type="text"
// // //               className="form-control"
// // //               placeholder="Search by car name"
// // //               value={searchQuery}
// // //               onChange={(e) => setSearchQuery(e.target.value)}
// // //             />
// // //           </div>

// // //           <div className="col-md-4">
// // //             <select
// // //               className="form-select"
// // //               value={priceRange}
// // //               onChange={(e) => setPriceRange(e.target.value)}
// // //             >
// // //               <option value="all">All Prices</option>
// // //               <option value="0-20000">Below Kshs 20,000</option>
// // //               <option value="20000-50000">Kshs 20,000 - 50,000</option>
// // //               <option value="50000-100000">Kshs 50,000 - 100,000</option>
// // //               <option value="100000-1000000">Above Kshs 100,000</option>
// // //             </select>
// // //           </div>

// // //           <div className="col-md-4">
// // //             <select
// // //               className="form-select"
// // //               value={fuelType}
// // //               onChange={(e) => setFuelType(e.target.value)}
// // //             >
// // //               <option value="all">All Fuel Types</option>
// // //               <option value="petrol">Petrol</option>
// // //               <option value="diesel">Diesel</option>
// // //               <option value="electric">Electric</option>
// // //               <option value="hybrid">Hybrid</option>
// // //             </select>
// // //           </div>
// // //         </div>

// // //         {/* Product Grid */}
// // //         <div className="row">
// // //           {filteredProducts.length === 0 ? (
// // //             <div className="text-center text-muted">No cars found.</div>
// // //           ) : (
// // //             filteredProducts.map((product) => (
// // //               <div className="col-md-3 mb-4" key={product.id}>
// // //                 <div className="card h-100 shadow-sm">
// // //                   <img
// // //                     src={img_url + product.car_photo}
// // //                     className="card-img-top"
// // //                     alt={product.car_name}
// // //                     style={{ height: "200px", objectFit: "cover" }}
// // //                   />
// // //                   <div className="card-body text-center">
// // //                     <h5 className="card-title">{product.car_name}</h5>
// // //                     <p className="text-muted mb-1">{product.brand}</p>
// // //                     <p className="text-muted small">{product.description}</p>
// // //                     <h6 className="text-warning">KES {product.price}</h6>

// // //                     <button
// // //                       className="btn btn-dark mt-2 w-100"
// // //                       onClick={() =>
// // //                         navigate("/Makepayment", { state: { product } })
// // //                       }
// // //                     >
// // //                       Purchase Now
// // //                     </button>

// // //                     <button
// // //                       className="btn btn-outline-primary mt-2 w-100"
// // //                       onClick={() => addToCart(product)}
// // //                     >
// // //                       Add to Cart
// // //                     </button>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             ))
// // //           )}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Getproducts;

// // import { useEffect, useState } from "react";
// // import axios from "axios";
// // import { useNavigate } from "react-router-dom";
// // import { useCart } from "../CartContext"; // adjust if path is different

// // const Getproducts = () => {
// //   const [products, setProduct] = useState([]);
// //   const [filteredProducts, setFilteredProducts] = useState([]);
// //   const [searchQuery, setSearchQuery] = useState("");
// //   const [priceRange, setPriceRange] = useState("all");
// //   const [fuelType, setFuelType] = useState("all");

// //   const { addToCart } = useCart();
// //   const navigate = useNavigate();
// //   const img_url = "https://joll3a.pythonanywhere.com/static/images/";

// //   const getProducts = async () => {
// //     try {
// //       const response = await axios.get(
// //         "https://joll3a.pythonanywhere.com/api/get_product_details"
// //       );
// //       setProduct(response.data);
// //     } catch (error) {
// //       console.error("Failed to fetch products:", error);
// //     }
// //   };

// //   useEffect(() => {
// //     getProducts();
// //   }, []);

// //   useEffect(() => {
// //     let filtered = products;

// //     if (searchQuery) {
// //       filtered = filtered.filter((product) =>
// //         product.car_name.toLowerCase().includes(searchQuery.toLowerCase())
// //       );
// //     }

// //     if (priceRange !== "all") {
// //       const [min, max] = priceRange.split("-").map(Number);
// //       filtered = filtered.filter(
// //         (product) => product.price >= min && product.price <= max
// //       );
// //     }

// //     if (fuelType !== "all") {
// //       filtered = filtered.filter(
// //         (product) =>
// //           product.fuel_type &&
// //           product.fuel_type.toLowerCase() === fuelType.toLowerCase()
// //       );
// //     }

// //     setFilteredProducts(filtered);
// //   }, [searchQuery, priceRange, fuelType, products]);

// //   return (
// //     <div className="container-fluid">
// //       <div className="container my-4">
// //         <h3 className="text-center mb-4">Browse Our Exotic Cars</h3>

// //         {/* Filters */}
// //         <div className="row mb-4 g-2">
// //           <div className="col-md-4">
// //             <input
// //               type="text"
// //               className="form-control"
// //               placeholder="Search by car name"
// //               value={searchQuery}
// //               onChange={(e) => setSearchQuery(e.target.value)}
// //             />
// //           </div>

// //           <div className="col-md-4">
// //             <select
// //               className="form-select"
// //               value={priceRange}
// //               onChange={(e) => setPriceRange(e.target.value)}
// //             >
// //               <option value="all">All Prices</option>
// //               <option value="0-20000">Below Kshs 20,000</option>
// //               <option value="20000-50000">Kshs 20,000 - 50,000</option>
// //               <option value="50000-100000">Kshs 50,000 - 100,000</option>
// //               <option value="100000-1000000">Above Kshs 100,000</option>
// //             </select>
// //           </div>

// //           <div className="col-md-4">
// //             <select
// //               className="form-select"
// //               value={fuelType}
// //               onChange={(e) => setFuelType(e.target.value)}
// //             >
// //               <option value="all">All Fuel Types</option>
// //               <option value="petrol">Petrol</option>
// //               <option value="diesel">Diesel</option>
// //               <option value="electric">Electric</option>
// //               <option value="hybrid">Hybrid</option>
// //             </select>
// //           </div>
// //         </div>

// //         {/* Product Grid */}
// //         <div className="row">
// //           {filteredProducts.length === 0 ? (
// //             <div className="text-center text-muted">No cars found.</div>
// //           ) : (
// //             filteredProducts.map((product) => (
// //               <div className="col-md-3 mb-4" key={product.id}>
// //                 <div className="card h-100 shadow-sm">
// //                   <img
// //                     src={img_url + product.car_photo}
// //                     className="card-img-top"
// //                     alt={product.car_name}
// //                     style={{ height: "200px", objectFit: "cover" }}
// //                   />
// //                   <div className="card-body text-center">
// //                     <h5 className="card-title">{product.car_name}</h5>
// //                     <p className="text-muted mb-1">{product.brand}</p>
// //                     <p className="text-muted small">{product.description}</p>
// //                     <h6 className="text-warning">KES {product.price}</h6>

// //                     <button
// //                       className="btn btn-dark mt-2 w-100"
// //                       onClick={() =>
// //                         navigate("/Makepayment", { state: { product } })
// //                       }
// //                     >
// //                       Purchase Now
// //                     </button>

// //                     <button
// //                       className="btn btn-outline-primary mt-2 w-100"
// //                       onClick={() => addToCart(product)}
// //                     >
// //                       Add to Cart
// //                     </button>
// //                   </div>
// //                 </div>
// //               </div>
// //             ))
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Getproducts;

// import { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { useCart } from "../CartContext";

// const Getproducts = () => {
//   const [products, setProduct] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [priceRange, setPriceRange] = useState("all");
//   const [fuelType, setFuelType] = useState("all");

//   const { addToCart } = useCart();
//   const navigate = useNavigate();
//   const img_url = "https://joll3a.pythonanywhere.com/static/images/";

//   const getProducts = async () => {
//     try {
//       const response = await axios.get(
//         "https://joll3a.pythonanywhere.com/api/get_product_details"
//       );
//       setProduct(response.data);
//     } catch (error) {
//       console.error("Failed to fetch products:", error);
//     }
//   };

//   useEffect(() => {
//     getProducts();
//   }, []);

//   useEffect(() => {
//     let filtered = products;

//     if (searchQuery) {
//       filtered = filtered.filter((product) =>
//         product.car_name.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//     }

//     if (priceRange !== "all") {
//       const [min, max] = priceRange.split("-").map(Number);
//       filtered = filtered.filter(
//         (product) => product.price >= min && product.price <= max
//       );
//     }

//     if (fuelType !== "all") {
//       filtered = filtered.filter(
//         (product) =>
//           product.fuel_type &&
//           product.fuel_type.toLowerCase() === fuelType.toLowerCase()
//       );
//     }

//     setFilteredProducts(filtered);
//   }, [searchQuery, priceRange, fuelType, products]);

//   // Helper to get available photo URLs from product
//   const getPhotoUrls = (product) => {
//     const keys = Object.keys(product).filter((key) =>
//       key.startsWith("car_photo")
//     );
//     return keys.map((key) => img_url + product[key]).filter(Boolean);
//   };

//   return (
//     <div className="container-fluid">
//       <div className="container my-4">
//         <h3 className="text-center mb-4">Browse Our Exotic Cars</h3>

//         {/* Filters */}
//         <div className="row mb-4 g-2">
//           <div className="col-md-4">
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Search by car name"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//           </div>

//           <div className="col-md-4">
//             <select
//               className="form-select"
//               value={priceRange}
//               onChange={(e) => setPriceRange(e.target.value)}
//             >
//               <option value="all">All Prices</option>
//               <option value="0-20000">Below Kshs 20,000</option>
//               <option value="20000-50000">Kshs 20,000 - 50,000</option>
//               <option value="50000-100000">Kshs 50,000 - 100,000</option>
//               <option value="100000-1000000">Above Kshs 100,000</option>
//             </select>
//           </div>

//           <div className="col-md-4">
//             <select
//               className="form-select"
//               value={fuelType}
//               onChange={(e) => setFuelType(e.target.value)}
//             >
//               <option value="all">All Fuel Types</option>
//               <option value="petrol">Petrol</option>
//               <option value="diesel">Diesel</option>
//               <option value="electric">Electric</option>
//               <option value="hybrid">Hybrid</option>
//             </select>
//           </div>
//         </div>

//         {/* Product Cards */}
//         <div className="row">
//           {filteredProducts.length === 0 ? (
//             <div className="text-center text-muted">No cars found.</div>
//           ) : (
//             filteredProducts.map((product, index) => {
//               const photoUrls = getPhotoUrls(product);

//               return (
//                 <div className="col-md-4 mb-4" key={product.id}>
//                   <div className="card shadow-sm h-100">
//                     {/* Bootstrap Carousel */}
//                     <div
//                       id={`carousel-${index}`}
//                       className="carousel slide"
//                       data-bs-ride="carousel"
//                     >
//                       <div className="carousel-inner">
//                         {photoUrls.map((url, i) => (
//                           <div
//                             className={`carousel-item ${i === 0 ? "active" : ""}`}
//                             key={i}
//                           >
//                             <img
//                               src={url}
//                               className="d-block w-100"
//                               alt={`Slide ${i}`}
//                               style={{ height: "200px", objectFit: "cover" }}
//                             />
//                           </div>
//                         ))}
//                       </div>
//                       {photoUrls.length > 1 && (
//                         <>
//                           <button
//                             className="carousel-control-prev"
//                             type="button"
//                             data-bs-target={`#carousel-${index}`}
//                             data-bs-slide="prev"
//                           >
//                             <span
//                               className="carousel-control-prev-icon"
//                               aria-hidden="true"
//                             ></span>
//                             <span className="visually-hidden">Previous</span>
//                           </button>
//                           <button
//                             className="carousel-control-next"
//                             type="button"
//                             data-bs-target={`#carousel-${index}`}
//                             data-bs-slide="next"
//                           >
//                             <span
//                               className="carousel-control-next-icon"
//                               aria-hidden="true"
//                             ></span>
//                             <span className="visually-hidden">Next</span>
//                           </button>
//                         </>
//                       )}
//                     </div>

//                     {/* Card Body */}
//                     <div className="card-body text-center">
//                       <h5 className="card-title">{product.car_name}</h5>
//                       <p className="text-muted mb-1">{product.brand}</p>
//                       <p className="text-muted small">{product.description}</p>
//                       <h6 className="text-warning">KES {product.price}</h6>

//                       <button
//                         className="btn btn-dark mt-2 w-100"
//                         onClick={() =>
//                           navigate("/Makepayment", { state: { product } })
//                         }
//                       >
//                         Purchase Now
//                       </button>

//                       <button
//                         className="btn btn-outline-primary mt-2 w-100"
//                         onClick={() => addToCart(product)}
//                       >
//                         Add to Cart
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Getproducts;

// import axios from "axios"
// import { useState } from "react"
// import "../App.css" // custom CSS (create this file)

// const Uploadproducts = () => {
//   const [car_name, setCarName] = useState("")
//   const [brand, setBrand] = useState("")
//   const [transmission, setTransmission] = useState("")
//   const [model_year, setModelyear] = useState("")
//   const [fuel_type, setFueltype] = useState("")
//   const [car_condition, setCarcondition] = useState("")
//   const [price, setPrice] = useState("")
//   const [description, setDescription] = useState("")
//   const [car_photo, setCarPhoto] = useState(null)
//   const [loading, setLoading] = useState(false)
//   const [message, setMessage] = useState("")
//   const [error, setError] = useState("")

//   const handleFileChange = (e) => {
//     const file = e.target.files[0]
//     if (file && file.type.startsWith("image/") && file.size <= 5 * 1024 * 1024) {
//       setCarPhoto(file)
//       setError("")
//     } else {
//       setError("❌ Please upload a valid image (less than 5MB).")
//       setCarPhoto(null)
//     }
//   }

//   const submit = async (e) => {
//     e.preventDefault()
//     setLoading(true)
//     setMessage("")
//     setError("")

//     try {
//       const data = new FormData()
//       data.append("car_name", car_name)
//       data.append("description", description)
//       data.append("price", price)
//       data.append("transmission", transmission)
//       data.append("model_year", model_year)
//       data.append("car_condition", car_condition)
//       data.append("fuel_type", fuel_type)
//       data.append("brand", brand)
//       data.append("car_photo", car_photo)

//       await axios.post("https://joll3a.pythonanywhere.com/api/upload_product", data)

//       setMessage("✅ Product added successfully!")
//       setCarName("")
//       setBrand("")
//       setTransmission("")
//       setModelyear("")
//       setFueltype("")
//       setCarcondition("")
//       setPrice("")
//       setDescription("")
//       setCarPhoto(null)
//     } catch (err) {
//       setError("❌ Failed to add product. Try again later.")
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
    
// <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
//   <div className="upload-form-card card shadow-lg p-4">
//     <h4 className="text-center mb-3">Upload Product</h4>

//     {loading && (
//       <div className="text-center mb-3">
//         <div className="spinner-border text-primary" role="status"></div>
//         <p className="text-muted mt-2">Please wait...</p>
//       </div>
//     )}

//     {message && <div className="alert alert-success">{message}</div>}
//     {error && <div className="alert alert-danger">{error}</div>}

//     <form onSubmit={submit} encType="multipart/form-data">
//       {[
//         ["Car Name", car_name, setCarName],
//         ["Brand", brand, setBrand],
//         ["Transmission", transmission, setTransmission],
//         ["Fuel Type", fuel_type, setFueltype],
//         ["Car Condition", car_condition, setCarcondition],
//         ["Price (KES)", price, setPrice, "number"],
//         ["Model Year", model_year, setModelyear, "date"],
//       ].map(([label, val, setVal, type = "text"], i) => (
//         <div className="mb-2" key={i}>
//           <label>{label}</label>
//           <input
//             type={type}
//             className="form-control"
//             value={val}
//             onChange={(e) => setVal(e.target.value)}
//             required
//           />
//         </div>
//       ))}

//       <div className="mb-2">
//         <label>Description</label>
//         <textarea
//           className="form-control"
//           rows="2"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           required
//         />
//       </div>

//       <div className="mb-3">
//         <label>Upload Car Image</label>
//         <input
//           type="file"
//           className="form-control"
//           accept="image/*"
//           onChange={handleFileChange}
//           required
//         />
//       </div>

//       <button type="submit" className="btn btn-primary w-100" disabled={loading}>
//         {loading ? "Uploading..." : "Upload Product"}
//       </button>
//     </form>
//   </div>
// </div>

//   )
// }

// export default Uploadproducts


// import axios from "axios";
// import { useState } from "react";
// import "../App.css";

// const Uploadproducts = () => {
//   const [car_name, setCarName] = useState("");
//   const [brand, setBrand] = useState("");
//   const [transmission, setTransmission] = useState("");
//   const [model_year, setModelyear] = useState("");
//   const [fuel_type, setFueltype] = useState("");
//   const [car_condition, setCarcondition] = useState("");
//   const [price, setPrice] = useState("");
//   const [description, setDescription] = useState("");
//   const [car_photos, setCarPhotos] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");
//   const [error, setError] = useState("");

//   const handleFilesChange = (e) => {
//     const files = Array.from(e.target.files);
//     const validImages = files.filter(
//       (file) => file.type.startsWith("image/") && file.size <= 5 * 1024 * 1024
//     );

//     if (validImages.length !== files.length) {
//       setError("❌ Some files were invalid (must be images < 5MB).");
//     } else {
//       setError("");
//     }

//     setCarPhotos(validImages);
//   };

//   const submit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setMessage("");
//     setError("");

//     try {
//       const data = new FormData();
//       data.append("car_name", car_name);
//       data.append("description", description);
//       data.append("price", price);
//       data.append("transmission", transmission);
//       data.append("model_year", model_year);
//       data.append("car_condition", car_condition);
//       data.append("fuel_type", fuel_type);
//       data.append("brand", brand);

//       // Upload all images under same key: car_photos
//       car_photos.forEach((photo) => data.append("car_photos", photo));

//       await axios.post("https://joll3a.pythonanywhere.com/api/upload_product", data);

//       setMessage("✅ Product added successfully!");
//       setCarName("");
//       setBrand("");
//       setTransmission("");
//       setModelyear("");
//       setFueltype("");
//       setCarcondition("");
//       setPrice("");
//       setDescription("");
//       setCarPhotos([]);
//     } catch (err) {
//       setError("❌ Failed to add product. Try again later.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
//       <div className="upload-form-card card shadow-lg p-4">
//         <h4 className="text-center mb-3">Upload Product</h4>

//         {loading && (
//           <div className="text-center mb-3">
//             <div className="spinner-border text-primary" role="status"></div>
//             <p className="text-muted mt-2">Please wait...</p>
//           </div>
//         )}

//         {message && <div className="alert alert-success">{message}</div>}
//         {error && <div className="alert alert-danger">{error}</div>}

//         <form onSubmit={submit} encType="multipart/form-data">
//           <div className="mb-2">
//             <label>Car Name</label>
//             <input type="text" className="form-control" value={car_name} onChange={(e) => setCarName(e.target.value)} required />
//           </div>

//           <div className="mb-2">
//             <label>Brand</label>
//             <input type="text" className="form-control" value={brand} onChange={(e) => setBrand(e.target.value)} required />
//           </div>

//           <div className="mb-2">
//             <label>Transmission</label>
//             <select className="form-select" value={transmission} onChange={(e) => setTransmission(e.target.value)} required>
//               <option value="">Select</option>
//               <option value="Automatic">Automatic</option>
//               <option value="Manual">Manual</option>
//             </select>
//           </div>

//           <div className="mb-2">
//             <label>Fuel Type</label>
//             <select className="form-select" value={fuel_type} onChange={(e) => setFueltype(e.target.value)} required>
//               <option value="">Select</option>
//               <option value="Petrol">Petrol</option>
//               <option value="Diesel">Diesel</option>
//               <option value="Electric">Electric</option>
//               <option value="Hybrid">Hybrid</option>
//             </select>
//           </div>

//           <div className="mb-2">
//             <label>Car Condition</label>
//             <select className="form-select" value={car_condition} onChange={(e) => setCarcondition(e.target.value)} required>
//               <option value="">Select</option>
//               <option value="New">New</option>
//               <option value="Used">Used</option>
//             </select>
//           </div>

//           <div className="mb-2">
//             <label>Model Year</label>
//             <input type="number" className="form-control" value={model_year} onChange={(e) => setModelyear(e.target.value)} required />
//           </div>

//           <div className="mb-2">
//             <label>Price (KES)</label>
//             <input type="number" className="form-control" value={price} onChange={(e) => setPrice(e.target.value)} required />
//           </div>

//           <div className="mb-2">
//             <label>Description</label>
//             <textarea className="form-control" rows="3" value={description} onChange={(e) => setDescription(e.target.value)} required />
//           </div>

//           <div className="mb-3">
//             <label>Upload Car Images (multiple)</label>
//             <input
//               type="file"
//               className="form-control"
//               accept="image/*"
//               onChange={handleFilesChange}
//               multiple
//               required
//             />
//           </div>

//           <button type="submit" className="btn btn-primary w-100" disabled={loading}>
//             {loading ? "Uploading..." : "Upload Product"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Uploadproducts;


import axios from "axios";
import { useState } from "react";
import "../App.css";

const Uploadproducts = () => {
  const [car_name, setCarName] = useState("");
  const [brand, setBrand] = useState("");
  const [transmission, setTransmission] = useState("");
  const [model_year, setModelyear] = useState("");
  const [fuel_type, setFueltype] = useState("");
  const [car_condition, setCarcondition] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [car_photos, setCarPhotos] = useState(Array(7).fill(null));
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handlePhotoChange = (index, file) => {
    const updatedPhotos = [...car_photos];
    updatedPhotos[index] = file;
    setCarPhotos(updatedPhotos);
  };

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setError("");

    try {
      const data = new FormData();
      data.append("car_name", car_name);
      data.append("description", description);
      data.append("price", price);
      data.append("transmission", transmission);
      data.append("model_year", model_year);
      data.append("car_condition", car_condition);
      data.append("fuel_type", fuel_type);
      data.append("brand", brand);

      car_photos.forEach((photo) => {
        if (photo) data.append("car_photos", photo);
      });

      await axios.post("https://joll3a.pythonanywhere.com/api/upload_product", data);

      setMessage("✅ Product added successfully!");
      setCarName("");
      setBrand("");
      setTransmission("");
      setModelyear("");
      setFueltype("");
      setCarcondition("");
      setPrice("");
      setDescription("");
      setCarPhotos(Array(7).fill(null));
    } catch (err) {
      setError("❌ Failed to add product. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="upload-form-card card shadow-lg p-4">
        <h4 className="text-center mb-3">Upload Product</h4>

        {loading && (
          <div className="text-center mb-3">
            <div className="spinner-border text-primary" role="status"></div>
            <p className="text-muted mt-2">Please wait...</p>
          </div>
        )}

        {message && <div className="alert alert-success">{message}</div>}
        {error && <div className="alert alert-danger">{error}</div>}

        <form onSubmit={submit} encType="multipart/form-data">
          <div className="mb-2">
            <label>Car Name</label>
            <input type="text" className="form-control" value={car_name} onChange={(e) => setCarName(e.target.value)} required />
          </div>

          <div className="mb-2">
            <label>Brand</label>
            <input type="text" className="form-control" value={brand} onChange={(e) => setBrand(e.target.value)} required />
          </div>

          <div className="mb-2">
            <label>Transmission</label>
            <select className="form-select" value={transmission} onChange={(e) => setTransmission(e.target.value)} required>
              <option value="">Select</option>
              <option value="Automatic">Automatic</option>
              <option value="Manual">Manual</option>
            </select>
          </div>

          <div className="mb-2">
            <label>Fuel Type</label>
            <select className="form-select" value={fuel_type} onChange={(e) => setFueltype(e.target.value)} required>
              <option value="">Select</option>
              <option value="Petrol">Petrol</option>
              <option value="Diesel">Diesel</option>
              <option value="Electric">Electric</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>

          <div className="mb-2">
            <label>Car Condition</label>
            <select className="form-select" value={car_condition} onChange={(e) => setCarcondition(e.target.value)} required>
              <option value="">Select</option>
              <option value="New">New</option>
              <option value="Used">Used</option>
            </select>
          </div>

          <div className="mb-2">
            <label>Model Year</label>
            <input type="number" className="form-control" value={model_year} onChange={(e) => setModelyear(e.target.value)} required />
          </div>

          <div className="mb-2">
            <label>Price (KES)</label>
            <input type="number" className="form-control" value={price} onChange={(e) => setPrice(e.target.value)} required />
          </div>

          <div className="mb-2">
            <label>Description</label>
            <textarea className="form-control" rows="3" value={description} onChange={(e) => setDescription(e.target.value)} required />
          </div>

          <div className="mb-3">
            <label className="form-label">Upload Car Images (up to 7)</label>
            {[...Array(7)].map((_, index) => (
              <input
                key={index}
                type="file"
                className="form-control mb-2"
                accept="image/*"
                onChange={(e) => handlePhotoChange(index, e.target.files[0])}
              />
            ))}
          </div>

          <button type="submit" className="btn btn-primary w-100" disabled={loading}>
            {loading ? "Uploading..." : "Upload Product"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Uploadproducts;
