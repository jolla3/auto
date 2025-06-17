
// // // // // // // import { useEffect, useState } from "react";
// // // // // // // import axios from "axios";
// // // // // // // import { useNavigate } from "react-router-dom";
// // // // // // // import { Box, Typography, Grid, TextField, Button, CircularProgress } from "@mui/material";
// // // // // // // import Navbar from "./Navbar";
// // // // // // // import Footer from "./Footer";

// // // // // // // const Getproducts = () => {
// // // // // // //   const [products, setProduct] = useState([]);
// // // // // // //   const [loading, setLoading] = useState("");
// // // // // // //   const [error, setError] = useState("");
// // // // // // //   const [filteredProducts, setFilteredProducts] = useState([]);
// // // // // // //   const [searchQuery, setSearchQuery] = useState("");

// // // // // // //   const navigate = useNavigate();

// // // // // // //   const img_url = "https://joll3a.pythonanywhere.com/static/images/";

// // // // // // //   const getProducts = async () => {
// // // // // // //     setLoading("Fetching products...");

// // // // // // //     try {
// // // // // // //       const response = await axios.get(
// // // // // // //         "https://joll3a.pythonanywhere.com/api/get_product_details"
// // // // // // //       );
// // // // // // //       setProduct(response.data);
// // // // // // //       setLoading("");
// // // // // // //     } catch (error) {
// // // // // // //       setLoading("");
// // // // // // //       setError(error.message);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   useEffect(() => {
// // // // // // //     getProducts();
// // // // // // //   }, []);

// // // // // // //   useEffect(() => {
// // // // // // //     if (!products) return;
// // // // // // //     const filtered = products.filter((product) =>
// // // // // // //       product.car_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
// // // // // // //       product.description.toLowerCase().includes(searchQuery.toLowerCase())
// // // // // // //     );
// // // // // // //     setFilteredProducts(filtered);
// // // // // // //   }, [searchQuery, products]);

// // // // // // //   return (
// // // // // // //     <Box sx={{ backgroundColor: "#f4f6f9", minHeight: "100vh" }}>
// // // // // // //       <Navbar />

// // // // // // //       {/* Hero Section */}
// // // // // // //       <Box
// // // // // // //         sx={{
// // // // // // //           background: `linear-gradient(120deg, rgba(207, 252, 8, 0.5), rgba(12, 247, 228, 0.67)), url('https://via.placeholder.com/1500x600') no-repeat center center`,
// // // // // // //           backgroundSize: "cover",
// // // // // // //           color: "white",
// // // // // // //           padding: "80px 0",
// // // // // // //           textAlign: "center",
// // // // // // //         }}
// // // // // // //       >
// // // // // // //         <Typography variant="h3" gutterBottom sx={{ fontWeight: "bold" }}>
// // // // // // //           Welcome to MJ Auto  --- Where True Rides Exist
          
// // // // // // //         </Typography>
// // // // // // //         <Typography variant="h5" sx={{ fontStyle: "italic" }}>
// // // // // // //           We are the leading dealers in automotive industries ,- Discover and buy your dream car with just a click.
// // // // // // //         </Typography>
// // // // // // //       </Box>

// // // // // // //       {/* Search Bar */}
// // // // // // //       <Box sx={{ display: "flex", justifyContent: "center", my: 4 }}>
// // // // // // //         <TextField
// // // // // // //           label="Search for cars..."
// // // // // // //           variant="outlined"
// // // // // // //           fullWidth
// // // // // // //           value={searchQuery}
// // // // // // //           onChange={(e) => setSearchQuery(e.target.value)}
// // // // // // //           sx={{
// // // // // // //             maxWidth: "600px",
// // // // // // //             borderRadius: "50px",
// // // // // // //             boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
// // // // // // //           }}
// // // // // // //         />
// // // // // // //       </Box>

// // // // // // //       {/* Loading & Error Messages */}
// // // // // // //       {loading && (
// // // // // // //         <Box sx={{ display: "flex", justifyContent: "center", py: 2 }}>
// // // // // // //           <CircularProgress />
// // // // // // //         </Box>
// // // // // // //       )}
// // // // // // //       {error && (
// // // // // // //         <Box sx={{ display: "flex", justifyContent: "center", py: 2 }}>
// // // // // // //           <Typography variant="h6" color="error">
// // // // // // //             {error}
// // // // // // //           </Typography>
// // // // // // //         </Box>
// // // // // // //       )}

// // // // // // //       {/* Products Grid */}
// // // // // // //       <Grid container spacing={4} sx={{ justifyContent: "center" }}>
// // // // // // //         {filteredProducts.map((product, index) => (
// // // // // // //           <Grid item xs={12} sm={6} md={4} key={index}>
// // // // // // //             <Box
// // // // // // //               sx={{
// // // // // // //                 borderRadius: 2,
// // // // // // //                 boxShadow: 2,
// // // // // // //                 transition: "transform 0.3s ease-in-out",
// // // // // // //                 "&:hover": {
// // // // // // //                   transform: "translateY(-5px)",
// // // // // // //                   boxShadow: 6,
// // // // // // //                 },
// // // // // // //               }}
// // // // // // //             >
// // // // // // //               <Box
// // // // // // //                 component="img"
// // // // // // //                 src={img_url + product.car_photo}
// // // // // // //                 alt={product.car_name}
// // // // // // //                 sx={{
// // // // // // //                   width: "100%",
// // // // // // //                   height: "200px",
// // // // // // //                   objectFit: "cover",
// // // // // // //                   borderTopLeftRadius: 2,
// // // // // // //                   borderTopRightRadius: 2,
// // // // // // //                 }}
// // // // // // //               />
// // // // // // //               <Box sx={{ padding: 2 }}>
// // // // // // //                 <Typography variant="h6" color="text.primary" sx={{ fontWeight: "bold" }}>
// // // // // // //                   {product.car_name}
// // // // // // //                 </Typography>
// // // // // // //                 <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
// // // // // // //                   {product.brand}
// // // // // // //                 </Typography>
// // // // // // //                 <Typography variant="body2" color="text.secondary" noWrap>
// // // // // // //                   {product.description}
// // // // // // //                 </Typography>
// // // // // // //                 <Box sx={{ mt: 2, display: "flex", justifyContent: "space-between" }}>
// // // // // // //                   <Typography variant="h6" color="warning.main">
// // // // // // //                     KES {product.price}
// // // // // // //                   </Typography>
// // // // // // //                   <Button
// // // // // // //                     variant="contained"
// // // // // // //                     color="primary"
// // // // // // //                     onClick={() => navigate("/Makepayment", { state: { product } })}
// // // // // // //                   >
// // // // // // //                     Purchase Now
// // // // // // //                   </Button>
// // // // // // //                 </Box>

// // // // // // //                  <Box sx={{ mt: 2, display: "flex", justifyContent: "space-between" }}>
// // // // // // //                   <Typography variant="h6" color="warning.main">
                    
// // // // // // //                   </Typography>
// // // // // // //                   <Button
// // // // // // //                     variant="contained"
// // // // // // //                     color="primary"
// // // // // // //                     onClick={() => navigate("/Cart", { state: { product } })}
// // // // // // //                   >
// // // // // // //                     Cart
// // // // // // //                   </Button>
// // // // // // //                 </Box>




// // // import { useEffect, useState } from "react";
// // // import axios from "axios";
// // // import { useNavigate } from "react-router-dom";
// // // // import Navbar from "./Navbar";
// // // // import Footer from "./Footer";

// // // const Getproducts = () => {
// // //   const [products, setProduct] = useState([]);
// // //   const [filteredProducts, setFilteredProducts] = useState([]);
// // //   const [searchQuery, setSearchQuery] = useState("");
// // //   const [priceRange, setPriceRange] = useState("all");
// // //   const [fuelType, setFuelType] = useState("all");

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

// // //     // Filter by search query
// // //     if (searchQuery) {
// // //       filtered = filtered.filter((product) =>
// // //         product.car_name.toLowerCase().includes(searchQuery.toLowerCase())
// // //       );
// // //     }

// // //     // Filter by price range
// // //     if (priceRange !== "all") {
// // //       const [min, max] = priceRange.split("-").map(Number);
// // //       filtered = filtered.filter(
// // //         (product) => product.price >= min && product.price <= max
// // //       );
// // //     }

// // //     // Filter by fuel type
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
// // //       {/* <Navbar /> */}
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
// // //               <option value="0-20000">Below Kshs20,000</option>
// // //               <option value="20000-50000">Kshs20,000 - $50,000</option>
// // //               <option value="50000-100000">KS50,000 - $100,000</option>
// // //               <option value="100000-1000000">Above $100,000</option>
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
// // //                     <h6 className="text-warning">${product.price}</h6>
// // //                     <button
// // //                       className="btn btn-dark mt-2"
// // //                       onClick={() =>
// // //                         navigate("/Makepayment", { state: { product } })
// // //                       }
// // //                     >
// // //                       Purchase Now
// // //                     </button>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             ))
// // //           )}
// // //         </div>
// // //       </div>
// // //       {/* <Footer /> */}
// // //     </div>
// // //   );
// // // };

// // // export default Getproducts;

// // import { useEffect, useState } from "react";
// // import axios from "axios";
// // import { useNavigate } from "react-router-dom";
// // import { useCart } from "../CartContext"; // ✅ import cart context

// // const Getproducts = () => {
// //   const [products, setProduct] = useState([]);
// //   const [filteredProducts, setFilteredProducts] = useState([]);
// //   const [searchQuery, setSearchQuery] = useState("");
// //   const [priceRange, setPriceRange] = useState("all");
// //   const [fuelType, setFuelType] = useState("all");

// //   const { addToCart } = useCart(); // ✅ use addToCart function
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
// //               <option value="0-20000">Below Kshs20,000</option>
// //               <option value="20000-50000">Kshs20,000 - $50,000</option>
// //               <option value="50000-100000">KS50,000 - $100,000</option>
// //               <option value="100000-1000000">Above $100,000</option>
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
// //                     <h6 className="text-warning">${product.price}</h6>
// //                     <button
// //                       className="btn btn-dark mt-2"
// //                       onClick={() => {
// //                         addToCart(product); // ✅ Add to cart
// //                         navigate("/Makepayment", { state: { product } }); // ✅ Go to Makepayment
// //                       }}
// //                     >
// //                       Purchase Now
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

// //   // Helper to get available photo URLs from product
// //   const getPhotoUrls = (product) => {
// //     const keys = Object.keys(product).filter((key) =>
// //       key.startsWith("car_photo")
// //     );
// //     return keys.map((key) => img_url + product[key]).filter(Boolean);
// //   };

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

// //         {/* Product Cards */}
// //         <div className="row">
// //           {filteredProducts.length === 0 ? (
// //             <div className="text-center text-muted">No cars found.</div>
// //           ) : (
// //             filteredProducts.map((product, index) => {
// //               const photoUrls = getPhotoUrls(product);

// //               return (
// //                 <div className="col-md-4 mb-4" key={product.id}>
// //                   <div className="card shadow-sm h-100">
// //                     {/* Bootstrap Carousel */}
// //                     <div
// //                       id={`carousel-${index}`}
// //                       className="carousel slide"
// //                       data-bs-ride="carousel"
// //                     >
// //                       <div className="carousel-inner">
// //                         {photoUrls.map((url, i) => (
// //                           <div
// //                             className={`carousel-item ${i === 0 ? "active" : ""}`}
// //                             key={i}
// //                           >
// //                             <img
// //                               src={url}
// //                               className="d-block w-100"
// //                               alt={`Slide ${i}`}
// //                               style={{ height: "200px", objectFit: "cover" }}
// //                             />
// //                           </div>
// //                         ))}
// //                       </div>
// //                       {photoUrls.length > 1 && (
// //                         <>
// //                           <button
// //                             className="carousel-control-prev"
// //                             type="button"
// //                             data-bs-target={`#carousel-${index}`}
// //                             data-bs-slide="prev"
// //                           >
// //                             <span
// //                               className="carousel-control-prev-icon"
// //                               aria-hidden="true"
// //                             ></span>
// //                             <span className="visually-hidden">Previous</span>
// //                           </button>
// //                           <button
// //                             className="carousel-control-next"
// //                             type="button"
// //                             data-bs-target={`#carousel-${index}`}
// //                             data-bs-slide="next"
// //                           >
// //                             <span
// //                               className="carousel-control-next-icon"
// //                               aria-hidden="true"
// //                             ></span>
// //                             <span className="visually-hidden">Next</span>
// //                           </button>
// //                         </>
// //                       )}
// //                     </div>

// //                     {/* Card Body */}
// //                     <div className="card-body text-center">
// //                       <h5 className="card-title">{product.car_name}</h5>
// //                       <p className="text-muted mb-1">{product.brand}</p>
// //                       <p className="text-muted small">{product.description}</p>
// //                       <h6 className="text-warning">KES {product.price}</h6>

// //                       <button
// //                         className="btn btn-dark mt-2 w-100"
// //                         onClick={() =>
// //                           navigate("/Makepayment", { state: { product } })
// //                         }
// //                       >
// //                         Purchase Now
// //                       </button>

// //                       <button
// //                         className="btn btn-outline-primary mt-2 w-100"
// //                         onClick={() => addToCart(product)}
// //                       >
// //                         Add to Cart
// //                       </button>
// //                     </div>
// //                   </div>
// //                 </div>
// //               );
// //             })
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Getproducts;

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

// //   // Helper to get available photo URLs from product
// //   const getPhotoUrls = (product) => {
// //     const keys = Object.keys(product).filter((key) =>
// //       key.startsWith("car_photo")
// //     );
// //     return keys.map((key) => img_url + product[key]).filter(Boolean);
// //   };

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

// //         {/* Product Cards */}
// //         <div className="row">
// //           {filteredProducts.length === 0 ? (
// //             <div className="text-center text-muted">No cars found.</div>
// //           ) : (
// //             filteredProducts.map((product, index) => {
// //               const photoUrls = getPhotoUrls(product);

// //               return (
// //                 <div className="col-md-4 mb-4" key={product.id}>
// //                   <div className="card shadow-sm h-100">
// //                     {/* Bootstrap Carousel */}
// //                     <div
// //                       id={`carousel-${index}`}
// //                       className="carousel slide"
// //                       data-bs-ride="carousel"
// //                     >
// //                       <div className="carousel-inner">
// //                         {photoUrls.map((url, i) => (
// //                           <div
// //                             className={`carousel-item ${i === 0 ? "active" : ""}`}
// //                             key={i}
// //                           >
// //                             <img
// //                               src={url}
// //                               className="d-block w-100"
// //                               alt={`Slide ${i}`}
// //                               style={{ height: "200px", objectFit: "cover" }}
// //                             />
// //                           </div>
// //                         ))}
// //                       </div>
// //                       {photoUrls.length > 1 && (
// //                         <>
// //                           <button
// //                             className="carousel-control-prev"
// //                             type="button"
// //                             data-bs-target={`#carousel-${index}`}
// //                             data-bs-slide="prev"
// //                           >
// //                             <span
// //                               className="carousel-control-prev-icon"
// //                               aria-hidden="true"
// //                             ></span>
// //                             <span className="visually-hidden">Previous</span>
// //                           </button>
// //                           <button
// //                             className="carousel-control-next"
// //                             type="button"
// //                             data-bs-target={`#carousel-${index}`}
// //                             data-bs-slide="next"
// //                           >
// //                             <span
// //                               className="carousel-control-next-icon"
// //                               aria-hidden="true"
// //                             ></span>
// //                             <span className="visually-hidden">Next</span>
// //                           </button>
// //                         </>
// //                       )}
// //                     </div>

// //                     {/* Card Body */}
// //                     <div className="card-body text-center">
// //                       <h5 className="card-title">{product.car_name}</h5>
// //                       <p className="text-muted mb-1">{product.brand}</p>
// //                       <p className="text-muted small">{product.description}</p>
// //                       <h6 className="text-warning">KES {product.price}</h6>

// //                       <button
// //                         className="btn btn-dark mt-2 w-100"
// //                         onClick={() =>
// //                           navigate("/Makepayment", { state: { product } })
// //                         }
// //                       >
// //                         Purchase Now
// //                       </button>

// //                       <button
// //                         className="btn btn-outline-primary mt-2 w-100"
// //                         onClick={() => addToCart(product)}
// //                       >
// //                         Add to Cart
// //                       </button>
// //                     </div>
// //                   </div>
// //                 </div>
// //               );
// //             })
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Getproducts;


// // import { useEffect, useState } from "react";
// // import axios from "axios";
// // import { useNavigate } from "react-router-dom";
// // import { useCart } from "../CartContext";

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

// //   // Helper to get available photo URLs from product
// //   const getPhotoUrls = (product) => {
// //     const keys = Object.keys(product).filter((key) =>
// //       key.startsWith("car_photo")
// //     );
// //     return keys.map((key) => img_url + product[key]).filter(Boolean);
// //   };

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

// //         {/* Product Cards */}
// //         <div className="row">
// //           {filteredProducts.length === 0 ? (
// //             <div className="text-center text-muted">No cars found.</div>
// //           ) : (
// //             filteredProducts.map((product, index) => {
// //               const photoUrls = getPhotoUrls(product);

// //               return (
// //                 <div className="col-md-4 mb-4" key={product.id}>
// //                   <div className="card shadow-sm h-100">
// //                     {/* Bootstrap Carousel */}
// //                     <div
// //                       id={`carousel-${index}`}
// //                       className="carousel slide"
// //                       data-bs-ride="carousel"
// //                     >
// //                       <div className="carousel-inner">
// //                         {photoUrls.map((url, i) => (
// //                           <div
// //                             className={`carousel-item ${i === 0 ? "active" : ""}`}
// //                             key={i}
// //                           >
// //                             <img
// //                               src={url}
// //                               className="d-block w-100"
// //                               alt={`Slide ${i}`}
// //                               style={{ height: "200px", objectFit: "cover" }}
// //                             />
// //                           </div>
// //                         ))}
// //                       </div>
// //                       {photoUrls.length > 1 && (
// //                         <>
// //                           <button
// //                             className="carousel-control-prev"
// //                             type="button"
// //                             data-bs-target={`#carousel-${index}`}
// //                             data-bs-slide="prev"
// //                           >
// //                             <span
// //                               className="carousel-control-prev-icon"
// //                               aria-hidden="true"
// //                             ></span>
// //                             <span className="visually-hidden">Previous</span>
// //                           </button>
// //                           <button
// //                             className="carousel-control-next"
// //                             type="button"
// //                             data-bs-target={`#carousel-${index}`}
// //                             data-bs-slide="next"
// //                           >
// //                             <span
// //                               className="carousel-control-next-icon"
// //                               aria-hidden="true"
// //                             ></span>
// //                             <span className="visually-hidden">Next</span>
// //                           </button>
// //                         </>
// //                       )}
// //                     </div>

// //                     {/* Card Body */}
// //                     <div className="card-body text-center">
// //                       <h5 className="card-title">{product.car_name}</h5>
// //                       <p className="text-muted mb-1">{product.brand}</p>
// //                       <p className="text-muted small">{product.description}</p>
// //                       <h6 className="text-warning">KES {product.price}</h6>

// //                       <button
// //                         className="btn btn-dark mt-2 w-100"
// //                         onClick={() =>
// //                           navigate("/Makepayment", { state: { product } })
// //                         }
// //                       >
// //                         Purchase Now
// //                       </button>

// //                       <button
// //                         className="btn btn-outline-primary mt-2 w-100"
// //                         onClick={() => addToCart(product)}
// //                       >
// //                         Add to Cart
// //                       </button>
// //                     </div>
// //                   </div>
// //                 </div>
// //               );
// //             })
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Getproducts;

// // import { useEffect, useState } from "react";
// // import axios from "axios";
// // import { useNavigate } from "react-router-dom";
// // import { useCart } from "../CartContext";
// // import { toast } from "react-toastify";
// // import "react-toastify/dist/ReactToastify.css";

// // const Getproducts = () => {
// //   const [products, setProducts] = useState([]);
// //   const [filteredProducts, setFilteredProducts] = useState([]);
// //   const [searchQuery, setSearchQuery] = useState("");
// //   const [priceRange, setPriceRange] = useState("all");
// //   const [fuelType, setFuelType] = useState("all");
// //   const [sortOption, setSortOption] = useState("default");
// //   const [loading, setLoading] = useState(true);
// //   const [wishlist, setWishlist] = useState([]);

// //   const [currentPage, setCurrentPage] = useState(1);
// //   const productsPerPage = 6;

// //   const { addToCart } = useCart();
// //   const navigate = useNavigate();
// //   const img_url = "https://joll3a.pythonanywhere.com/static/images/";

// //   // ✅ Fetch products from API once
// //   useEffect(() => {
// //     const getProducts = async () => {
// //       try {
// //         setLoading(true);
// //         const response = await axios.get(
// //           "https://joll3a.pythonanywhere.com/api/get_product_details"
// //         );
// //         const fixedData = response.data.map((product, index) => ({
// //           ...product,
// //           id: product.id || product.product_id || index, // Ensure unique ID
// //         }));
// //         setProducts(fixedData);
// //       } catch (error) {
// //         console.error("Failed to fetch products:", error);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     getProducts();
// //   }, []);

// //   // ✅ Filter and sort logic
// //   useEffect(() => {
// //     let filtered = [...products];

// //     if (searchQuery) {
// //       filtered = filtered.filter((product) =>
// //         product.car_name.toLowerCase().includes(searchQuery.toLowerCase())
// //       );
// //     }

// //     if (priceRange !== "all") {
// //       if (priceRange.includes("+")) {
// //         const min = parseInt(priceRange);
// //         filtered = filtered.filter((product) => product.price >= min);
// //       } else {
// //         const [min, max] = priceRange.split("-").map(Number);
// //         filtered = filtered.filter(
// //           (product) => product.price >= min && product.price <= max
// //         );
// //       }
// //     }

// //     if (fuelType !== "all") {
// //       filtered = filtered.filter(
// //         (product) =>
// //           product.fuel_type &&
// //           product.fuel_type.toLowerCase() === fuelType.toLowerCase()
// //       );
// //     }

// //     if (sortOption === "price-asc") {
// //       filtered.sort((a, b) => a.price - b.price);
// //     } else if (sortOption === "price-desc") {
// //       filtered.sort((a, b) => b.price - a.price);
// //     }

// //     setFilteredProducts(filtered);
// //     setCurrentPage(1);
// //   }, [searchQuery, priceRange, fuelType, sortOption, products]);

// //   const clearFilters = () => {
// //     setSearchQuery("");
// //     setPriceRange("all");
// //     setFuelType("all");
// //     setSortOption("default");
// //   };

// //   const getPhotoUrls = (product) => {
// //     const keys = Object.keys(product).filter((key) =>
// //       key.startsWith("car_photo")
// //     );
// //     return keys
// //       .map((key) => img_url + product[key])
// //       .filter((url) => url && !url.endsWith("null"));
// //   };

// //   const toggleWishlist = (productId) => {
// //     setWishlist((prev) => {
// //       const updated = prev.includes(productId)
// //         ? prev.filter((id) => id !== productId)
// //         : [...prev, productId];
// //       localStorage.setItem("wishlist", JSON.stringify(updated));
// //       return updated;
// //     });
// //   };

// //   const indexOfLast = currentPage * productsPerPage;
// //   const indexOfFirst = indexOfLast - productsPerPage;
// //   const currentProducts = filteredProducts.slice(indexOfFirst, indexOfLast);
// //   const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

// //   const handleAddToCart = (product) => {
// //     addToCart(product);
// //     toast.success(`${product.car_name} added to cart!`, {
// //       position: "top-right",
// //       autoClose: 2000,
// //     });
// //   };

// //   return (
// //     <div className="container-fluid">
// //       <div className="container my-4">
// //         <h3 className="text-center mb-4">Browse Our Exotic Cars</h3>

// //         {/* Filters */}
// //         <div className="row mb-4 g-2">
// //           <div className="col-md-3">
// //             <input
// //               type="text"
// //               className="form-control"
// //               placeholder="Search by car name"
// //               value={searchQuery}
// //               onChange={(e) => setSearchQuery(e.target.value)}
// //             />
// //           </div>

// //           <div className="col-md-3">
// //             <select
// //               className="form-select"
// //               value={priceRange}
// //               onChange={(e) => setPriceRange(e.target.value)}
// //             >
// //               <option value="all">All Prices</option>
// //               <option value="0-20000">Below Kshs 20,000</option>
// //               <option value="20000-50000">Kshs 20,000 - 50,000</option>
// //               <option value="50000-100000">Kshs 50,000 - 100,000</option>
// //               <option value="100000+">Above Kshs 100,000</option>
// //             </select>
// //           </div>

// //           <div className="col-md-3">
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

// //           <div className="col-md-3">
// //             <select
// //               className="form-select"
// //               value={sortOption}
// //               onChange={(e) => setSortOption(e.target.value)}
// //             >
// //               <option value="default">Sort by</option>
// //               <option value="price-asc">Price: Low to High</option>
// //               <option value="price-desc">Price: High to Low</option>
// //             </select>
// //           </div>
// //         </div>

// //         <div className="text-end mb-3">
// //           <button className="btn btn-outline-secondary" onClick={clearFilters}>
// //             Clear Filters
// //           </button>
// //         </div>

// //         {loading ? (
// //           <div className="text-center py-5">
// //             <div className="spinner-border text-primary" role="status" />
// //           </div>
// //         ) : currentProducts.length === 0 ? (
// //           <div className="text-center text-muted">No cars found.</div>
// //         ) : (
// //           <div className="row">
// //             {currentProducts.map((product, index) => {
// //               const photoUrls = getPhotoUrls(product);
// //               const isWishlisted = wishlist.includes(product.id);

// //               return (
// //                 <div className="col-md-4 mb-4" key={product.id}>
// //                   <div className="card shadow-sm h-100 position-relative">
// //                     {product.is_new && (
// //                       <span className="badge bg-danger position-absolute top-0 start-0 m-2">
// //                         NEW 🔥
// //                       </span>
// //                     )}

// //                     <button
// //                       className="btn btn-light position-absolute top-0 end-0 m-2"
// //                       onClick={() => toggleWishlist(product.id)}
// //                     >
// //                       <i
// //                         className={`bi ${
// //                           isWishlisted ? "bi-heart-fill text-danger" : "bi-heart"
// //                         }`}
// //                       ></i>
// //                     </button>

// //                     <div
// //                       id={`carousel-${index}`}
// //                       className="carousel slide"
// //                       data-bs-ride="carousel"
// //                     >
// //                       <div className="carousel-inner">
// //                         {photoUrls.map((url, i) => (
// //                           <div
// //                             className={`carousel-item ${i === 0 ? "active" : ""}`}
// //                             key={i}
// //                           >
// //                             <img
// //                               src={url}
// //                               onError={(e) =>
// //                                 (e.target.src =
// //                                   "https://via.placeholder.com/300x200?text=No+Image")
// //                               }
// //                               className="d-block w-100"
// //                               alt={`Slide ${i}`}
// //                               style={{ height: "200px", objectFit: "cover" }}
// //                             />
// //                           </div>
// //                         ))}
// //                       </div>
// //                       {photoUrls.length > 1 && (
// //                         <>
// //                           <button
// //                             className="carousel-control-prev"
// //                             type="button"
// //                             data-bs-target={`#carousel-${index}`}
// //                             data-bs-slide="prev"
// //                           >
// //                             <span className="carousel-control-prev-icon" />
// //                           </button>
// //                           <button
// //                             className="carousel-control-next"
// //                             type="button"
// //                             data-bs-target={`#carousel-${index}`}
// //                             data-bs-slide="next"
// //                           >
// //                             <span className="carousel-control-next-icon" />
// //                           </button>
// //                         </>
// //                       )}
// //                     </div>

// //                     <div className="card-body text-center">
// //                       <h5 className="card-title">{product.car_name}</h5>
// //                       <p className="text-muted mb-1">{product.brand}</p>
// //                       <p className="text-muted small">{product.description}</p>
// //                       <h6 className="text-warning">KES {product.price}</h6>

// //                       <button
// //                         className="btn btn-dark mt-2 w-100"
// //                         onClick={() =>
// //                           navigate("/Makepayment", { state: { product } })
// //                         }
// //                       >
// //                         Purchase Now
// //                       </button>

// //                       <button
// //                         className="btn btn-outline-primary mt-2 w-100"
// //                         onClick={() => handleAddToCart(product)}
// //                       >
// //                         Add to Cart
// //                       </button>
// //                     </div>
// //                   </div>
// //                 </div>
// //               );
// //             })}
// //           </div>
// //         )}

// //         {/* Pagination */}
// //         {filteredProducts.length > productsPerPage && (
// //           <div className="d-flex justify-content-center mt-4">
// //             <button
// //               className="btn btn-outline-primary me-2"
// //               disabled={currentPage === 1}
// //               onClick={() => setCurrentPage(currentPage - 1)}
// //             >
// //               &laquo; Prev
// //             </button>
// //             <span className="align-self-center mx-2">
// //               Page {currentPage} of {totalPages}
// //             </span>
// //             <button
// //               className="btn btn-outline-primary"
// //               disabled={currentPage === totalPages}
// //               onClick={() => setCurrentPage(currentPage + 1)}
// //             >
// //               Next &raquo;
// //             </button>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Getproducts;


// import { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { useCart } from "../CartContext";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Getproducts = () => {
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [priceRange, setPriceRange] = useState("all");
//   const [fuelType, setFuelType] = useState("all");
//   const [sortOption, setSortOption] = useState("default");
//   const [loading, setLoading] = useState(true);
//   const [wishlist, setWishlist] = useState([]);

//   const [currentPage, setCurrentPage] = useState(1);
//   const productsPerPage = 6;

//   const { addToCart } = useCart();
//   const navigate = useNavigate();
//   const img_url = "https://joll3a.pythonanywhere.com/static/images/";

//   // Load wishlist from localStorage
//   useEffect(() => {
//     const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
//     setWishlist(savedWishlist);
//   }, []);

//   // Fetch products
//   useEffect(() => {
//     const getProducts = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get(
//           "https://joll3a.pythonanywhere.com/api/get_product_details"
//         );
//         const fixedData = response.data.map((product, index) => ({
//           ...product,
//           id: product.id || product.product_id || index,
//         }));
//         setProducts(fixedData);
//       } catch (error) {
//         console.error("Failed to fetch products:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     getProducts();
//   }, []);

//   const sortProducts = (items, sortOption) => {
//     switch (sortOption) {
//       case "price-asc":
//         return items.sort((a, b) => a.price - b.price);
//       case "price-desc":
//         return items.sort((a, b) => b.price - a.price);
//       default:
//         return items;
//     }
//   };

//   useEffect(() => {
//     let filtered = [...products];

//     if (searchQuery) {
//       filtered = filtered.filter((product) =>
//         product.car_name?.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//     }

//     if (priceRange !== "all") {
//       if (priceRange.includes("+")) {
//         const min = parseInt(priceRange);
//         filtered = filtered.filter((product) => product.price >= min);
//       } else {
//         const [min, max] = priceRange.split("-").map(Number);
//         filtered = filtered.filter(
//           (product) => product.price >= min && product.price <= max
//         );
//       }
//     }

//     if (fuelType !== "all") {
//       filtered = filtered.filter(
//         (product) =>
//           product.fuel_type?.toLowerCase() === fuelType.toLowerCase()
//       );
//     }

//     filtered = sortProducts(filtered, sortOption);
//     setFilteredProducts(filtered);
//     setCurrentPage(1);
//   }, [searchQuery, priceRange, fuelType, sortOption, products]);

//   const clearFilters = () => {
//     setSearchQuery("");
//     setPriceRange("all");
//     setFuelType("all");
//     setSortOption("default");
//   };

//   const getPhotoUrls = (product) => {
//     return Object.keys(product)
//       .filter(
//         (key) =>
//           key.startsWith("car_photo") &&
//           product[key] &&
//           !product[key].toLowerCase().includes("null")
//       )
//       .map((key) => img_url + product[key]);
//   };

//   const toggleWishlist = (productId) => {
//     setWishlist((prev) => {
//       const updated = prev.includes(productId)
//         ? prev.filter((id) => id !== productId)
//         : [...prev, productId];
//       localStorage.setItem("wishlist", JSON.stringify(updated));
//       return updated;
//     });
//   };

//   const indexOfLast = currentPage * productsPerPage;
//   const indexOfFirst = indexOfLast - productsPerPage;
//   const currentProducts = filteredProducts.slice(indexOfFirst, indexOfLast);
//   const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

//   const handleAddToCart = (product) => {
//     addToCart(product);
//     toast.success(`${product.car_name} added to cart!`, {
//       position: "top-right",
//       autoClose: 2000,
//     });
//   };

//   return (
//     <div className="container-fluid">
//       <div className="container my-4">
//         <h3 className="text-center mb-4">Browse Our Exotic Cars</h3>

//         {/* Filters */}
//         <div className="row mb-4 g-2">
//           <div className="col-md-3">
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Search by car name"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//           </div>

//           <div className="col-md-3">
//             <select
//               className="form-select"
//               value={priceRange}
//               onChange={(e) => setPriceRange(e.target.value)}
//             >
//               <option value="all">All Prices</option>
//               <option value="0-20000">Below Kshs 20,000</option>
//               <option value="20000-50000">Kshs 20,000 - 50,000</option>
//               <option value="50000-100000">Kshs 50,000 - 100,000</option>
//               <option value="100000+">Above Kshs 100,000</option>
//             </select>
//           </div>

//           <div className="col-md-3">
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

//           <div className="col-md-3">
//             <select
//               className="form-select"
//               value={sortOption}
//               onChange={(e) => setSortOption(e.target.value)}
//             >
//               <option value="default">Sort by</option>
//               <option value="price-asc">Price: Low to High</option>
//               <option value="price-desc">Price: High to Low</option>
//             </select>
//           </div>
//         </div>

//         <div className="text-end mb-3">
//           <button className="btn btn-outline-secondary" onClick={clearFilters}>
//             Clear Filters
//           </button>
//         </div>

//         {loading ? (
//           <div className="text-center py-5">
//             <div className="spinner-border text-primary" role="status" />
//           </div>
//         ) : currentProducts.length === 0 ? (
//           <div className="text-center text-muted">
//             No cars found.
//             <p className="small">Try adjusting your filters or search.</p>
//           </div>
//         ) : (
//           <div className="row">
//             {currentProducts.map((product, index) => {
//               const photoUrls = getPhotoUrls(product);
//               const isWishlisted = wishlist.includes(product.id);
//               // Move useState out of map to avoid React hook rules violation
//               // Instead, use a local state for selected image per product
//               // We'll use a workaround with a component for each card
//               return (
//                 <ProductCard
//                   key={product.id}
//                   product={product}
//                   photoUrls={photoUrls}
//                   isWishlisted={isWishlisted}
//                   toggleWishlist={toggleWishlist}
//                   navigate={navigate}
//                   handleAddToCart={handleAddToCart}
//                 />
//               );
//             })}
//           </div>
//         )}

//         {/* Pagination */}
//         {filteredProducts.length > productsPerPage && (
//           <div className="d-flex justify-content-center mt-4">
//             <button
//               className="btn btn-outline-primary me-2"
//               disabled={currentPage === 1}
//               onClick={() => setCurrentPage(currentPage - 1)}
//             >
//               &laquo; Prev
//             </button>
//             <span className="align-self-center mx-2">
//               Page {currentPage} of {totalPages}
//             </span>
//             <button
//               className="btn btn-outline-primary"
//               disabled={currentPage === totalPages}
//               onClick={() => setCurrentPage(currentPage + 1)}
//             >
//               Next &raquo;
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// // Move the card with gallery to its own component to avoid hook-in-loop error
// // import React from "react";
// const ProductCard = ({
//   product,
//   photoUrls,
//   isWishlisted,
//   toggleWishlist,
//   navigate,
//   handleAddToCart,
// }) => {
//   const [selectedImage, setSelectedImage] = useState(photoUrls[0]);
//   return (
//     <div className="col-md-4 mb-4">
//       <div className="card shadow-sm h-100 position-relative">
//         {product.is_new && (
//           <span className="badge bg-danger position-absolute top-0 start-0 m-2">
//             NEW 🔥
//           </span>
//         )}

//         <button
//           title="Toggle Wishlist"
//           className="btn btn-light position-absolute top-0 end-0 m-2"
//           onClick={() => toggleWishlist(product.id)}
//         >
//           <i
//             className={`bi ${
//               isWishlisted ? "bi-heart-fill text-danger" : "bi-heart"
//             }`}
//           ></i>
//         </button>

//         {/* Gallery */}
//         <div className="gallery-wrapper text-center">
//           <img
//             src={selectedImage}
//             onError={(e) =>
//               (e.target.src =
//                 "https://via.placeholder.com/300x200?text=No+Image")
//             }
//             alt="Selected Car"
//             className="main-gallery-img"
//           />

//           <div className="thumb-container mt-2 d-flex justify-content-center flex-wrap">
//             {photoUrls.map((url, i) => (
//               <img
//                 key={i}
//                 src={url}
//                 alt={`thumb-${i}`}
//                 className={`thumb-img ${
//                   selectedImage === url ? "active-thumb" : ""
//                 }`}
//                 onClick={() => setSelectedImage(url)}
//               />
//             ))}
//           </div>
//         </div>

//         <div className="card-body text-center">
//           <h5 className="card-title">{product.car_name}</h5>
//           <p className="text-muted mb-1">{product.brand}</p>
//           <p className="text-muted small">{product.description}</p>
//           <h6 className="text-warning">
//             KES {product.price.toLocaleString()}
//           </h6>

//           <button
//             className="btn btn-dark mt-2 w-100"
//             onClick={() =>
//               navigate("/Makepayment", { state: { product } })
//             }
//           >
//             Purchase Now
//           </button>

//           <button
//             className="btn btn-outline-primary mt-2 w-100"
//             onClick={() => handleAddToCart(product)}
//           >
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Getproducts;


// import { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { useCart } from "../CartContext";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Getproducts = () => {
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [priceRange, setPriceRange] = useState("all");
//   const [fuelType, setFuelType] = useState("all");
//   const [sortOption, setSortOption] = useState("default");
//   const [loading, setLoading] = useState(true);
//   const [wishlist, setWishlist] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);

//   const productsPerPage = 6;
//   const { addToCart } = useCart();
//   const navigate = useNavigate();
//   const img_url = "https://joll3a.pythonanywhere.com/static/images/";
//   const fallbackImage = "https://joll3a.pythonanywhere.com/static/images/no_image_available.png";

//   useEffect(() => {
//     const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
//     setWishlist(savedWishlist);
//   }, []);

//   useEffect(() => {
//     const getProducts = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get(
//           "https://joll3a.pythonanywhere.com/api/get_product_details"
//         );
//         const fixedData = response.data.map((product, index) => ({
//           ...product,
//           id: product.id || product.product_id || index,
//         }));
//         setProducts(fixedData);
//       } catch (error) {
//         console.error("Failed to fetch products:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     getProducts();
//   }, []);

//   const sortProducts = (items, sortOption) => {
//     switch (sortOption) {
//       case "price-asc":
//         return items.sort((a, b) => a.price - b.price);
//       case "price-desc":
//         return items.sort((a, b) => b.price - a.price);
//       default:
//         return items;
//     }
//   };

//   useEffect(() => {
//     let filtered = [...products];

//     if (searchQuery) {
//       filtered = filtered.filter((product) =>
//         product.car_name?.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//     }

//     if (priceRange !== "all") {
//       if (priceRange.includes("+")) {
//         const min = parseInt(priceRange);
//         filtered = filtered.filter((product) => product.price >= min);
//       } else {
//         const [min, max] = priceRange.split("-").map(Number);
//         filtered = filtered.filter(
//           (product) => product.price >= min && product.price <= max
//         );
//       }
//     }

//     if (fuelType !== "all") {
//       filtered = filtered.filter(
//         (product) =>
//           product.fuel_type?.toLowerCase() === fuelType.toLowerCase()
//       );
//     }

//     filtered = sortProducts(filtered, sortOption);
//     setFilteredProducts(filtered);
//     setCurrentPage(1);
//   }, [searchQuery, priceRange, fuelType, sortOption, products]);

//   const clearFilters = () => {
//     setSearchQuery("");
//     setPriceRange("all");
//     setFuelType("all");
//     setSortOption("default");
//   };

//   const getFirstImageUrl = (product) => {
//     const keys = Object.keys(product);
//     const photoKey = keys.find(
//       (key) =>
//         key.startsWith("car_photo") &&
//         product[key] &&
//         typeof product[key] === "string" &&
//         !product[key].toLowerCase().includes("null")
//     );
//     return photoKey ? img_url + product[photoKey] : fallbackImage;
//   };

//   const toggleWishlist = (productId) => {
//     setWishlist((prev) => {
//       const updated = prev.includes(productId)
//         ? prev.filter((id) => id !== productId)
//         : [...prev, productId];
//       localStorage.setItem("wishlist", JSON.stringify(updated));
//       return updated;
//     });
//   };

//   const indexOfLast = currentPage * productsPerPage;
//   const indexOfFirst = indexOfLast - productsPerPage;
//   const currentProducts = filteredProducts.slice(indexOfFirst, indexOfLast);
//   const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

//   const handleAddToCart = (product) => {
//     addToCart(product);
//     toast.success(`${product.car_name} added to cart!`, {
//       position: "top-right",
//       autoClose: 2000,
//     });
//   };

//   return (
//     <div className="container my-4">
//       <h3 className="text-center mb-4">Browse Our Exotic Cars</h3>

//       {/* Filters */}
//       <div className="row mb-4 g-2">
//         <div className="col-md-3">
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Search by car name"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//           />
//         </div>

//         <div className="col-md-3">
//           <select
//             className="form-select"
//             value={priceRange}
//             onChange={(e) => setPriceRange(e.target.value)}
//           >
//             <option value="all">All Prices</option>
//             <option value="0-20000">Below Kshs 20,000</option>
//             <option value="20000-50000">Kshs 20,000 - 50,000</option>
//             <option value="50000-100000">Kshs 50,000 - 100,000</option>
//             <option value="100000+">Above Kshs 100,000</option>
//           </select>
//         </div>

//         <div className="col-md-3">
//           <select
//             className="form-select"
//             value={fuelType}
//             onChange={(e) => setFuelType(e.target.value)}
//           >
//             <option value="all">All Fuel Types</option>
//             <option value="petrol">Petrol</option>
//             <option value="diesel">Diesel</option>
//             <option value="electric">Electric</option>
//             <option value="hybrid">Hybrid</option>
//           </select>
//         </div>

//         <div className="col-md-3">
//           <select
//             className="form-select"
//             value={sortOption}
//             onChange={(e) => setSortOption(e.target.value)}
//           >
//             <option value="default">Sort by</option>
//             <option value="price-asc">Price: Low to High</option>
//             <option value="price-desc">Price: High to Low</option>
//           </select>
//         </div>
//       </div>

//       <div className="text-end mb-3">
//         <button className="btn btn-outline-secondary" onClick={clearFilters}>
//           Clear Filters
//         </button>
//       </div>

//       {loading ? (
//         <div className="text-center py-5">
//           <div className="spinner-border text-primary" role="status" />
//         </div>
//       ) : currentProducts.length === 0 ? (
//         <div className="text-center text-muted">
//           No cars found.
//           <p className="small">Try adjusting your filters or search.</p>
//         </div>
//       ) : (
//         <div className="row">
//           {currentProducts.map((product) => {
//             const imageUrl = getFirstImageUrl(product);
//             const isWishlisted = wishlist.includes(product.id);

//             return (
//               <div className="col-md-4 mb-4" key={product.id}>
//                 <div className="card shadow-sm h-100 position-relative">
//                   {/* Wishlist Icon */}
//                   <button
//                     className="btn btn-light position-absolute top-0 end-0 m-2"
//                     onClick={() => toggleWishlist(product.id)}
//                   >
//                     <i
//                       className={`bi ${
//                         isWishlisted ? "bi-heart-fill text-danger" : "bi-heart"
//                       }`}
//                     ></i>
//                   </button>

//                   {/* Main Image */}
//                   <img
//                     src={imageUrl}
//                     alt={product.car_name}
//                     onError={(e) => (e.target.src = fallbackImage)}
//                     className="card-img-top"
//                     style={{ height: "200px", objectFit: "cover" }}
//                   />

//                   {/* Content */}
//                   <div className="card-body text-center">
//                     <h5 className="card-title">{product.car_name}</h5>
//                     <p className="text-muted mb-1">{product.brand}</p>
//                     <h6 className="text-warning">
//                       KES {product.price.toLocaleString()}
//                     </h6>

//                     <button
//                       className="btn btn-outline-secondary mt-2 w-100"
//                       onClick={() =>
//                         navigate(`/product-details/${product.id}`, {
//                           state: { product },
//                         })
//                       }
//                     >
//                       View Details
//                     </button>

//                     <button
//                       className="btn btn-outline-primary mt-2 w-100"
//                       onClick={() => handleAddToCart(product)}
//                     >
//                       Add to Cart
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       )}

//       {filteredProducts.length > productsPerPage && (
//         <div className="d-flex justify-content-center mt-4">
//           <button
//             className="btn btn-outline-primary me-2"
//             disabled={currentPage === 1}
//             onClick={() => setCurrentPage(currentPage - 1)}
//           >
//             &laquo; Prev
//           </button>
//           <span className="align-self-center mx-2">
//             Page {currentPage} of {totalPages}
//           </span>
//           <button
//             className="btn btn-outline-primary"
//             disabled={currentPage === totalPages}
//             onClick={() => setCurrentPage(currentPage + 1)}
//           >
//             Next &raquo;
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Getproducts;


import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCart } from "../CartContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Getproducts = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState("all");
  const [fuelType, setFuelType] = useState("all");
  const [sortOption, setSortOption] = useState("default");
  const [loading, setLoading] = useState(true);
  const [wishlist, setWishlist] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 6;
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const img_url = "https://joll3a.pythonanywhere.com/static/images/";
  const fallbackImage =
    "https://joll3a.pythonanywhere.com/static/images/no_image_available.png";

  useEffect(() => {
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(savedWishlist);
  }, []);

  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://joll3a.pythonanywhere.com/api/get_product_details"
        );
        const fixedData = response.data.map((product, index) => ({
          ...product,
          id: product.id || product.product_id || index,
        }));
        setProducts(fixedData);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  const sortProducts = (items, sortOption) => {
    switch (sortOption) {
      case "price-asc":
        return items.sort((a, b) => a.price - b.price);
      case "price-desc":
        return items.sort((a, b) => b.price - a.price);
      default:
        return items;
    }
  };

  useEffect(() => {
    let filtered = [...products];

    if (searchQuery) {
      filtered = filtered.filter((product) =>
        product.car_name?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (priceRange !== "all") {
      if (priceRange.includes("+")) {
        const min = parseInt(priceRange);
        filtered = filtered.filter((product) => product.price >= min);
      } else {
        const [min, max] = priceRange.split("-").map(Number);
        filtered = filtered.filter(
          (product) => product.price >= min && product.price <= max
        );
      }
    }

    if (fuelType !== "all") {
      filtered = filtered.filter(
        (product) =>
          product.fuel_type?.toLowerCase() === fuelType.toLowerCase()
      );
    }

    filtered = sortProducts(filtered, sortOption);
    setFilteredProducts(filtered);
    setCurrentPage(1);
  }, [searchQuery, priceRange, fuelType, sortOption, products]);

  const clearFilters = () => {
    setSearchQuery("");
    setPriceRange("all");
    setFuelType("all");
    setSortOption("default");
  };

  // ✅ Updated to pick the first image from comma-separated string
  const getFirstImageUrl = (product) => {
    if (product.car_photo && typeof product.car_photo === "string") {
      const photos = product.car_photo.split(",").map((p) => p.trim());
      const firstValidPhoto = photos.find(
        (p) => p && !p.toLowerCase().includes("null")
      );
      return firstValidPhoto ? img_url + firstValidPhoto : fallbackImage;
    }
    return fallbackImage;
  };

  const toggleWishlist = (productId) => {
    setWishlist((prev) => {
      const updated = prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId];
      localStorage.setItem("wishlist", JSON.stringify(updated));
      return updated;
    });
  };

  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`${product.car_name} added to cart!`, {
      position: "top-right",
      autoClose: 2000,
    });
  };

  return (
    <div className="container my-4">
      <h3 className="text-center mb-4">Browse Our Exotic Cars</h3>

      {/* Filters */}
      <div className="row mb-4 g-2">
        <div className="col-md-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by car name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="col-md-3">
          <select
            className="form-select"
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
          >
            <option value="all">All Prices</option>
            <option value="0-20000">Below Kshs 20,000</option>
            <option value="20000-50000">Kshs 20,000 - 50,000</option>
            <option value="50000-100000">Kshs 50,000 - 100,000</option>
            <option value="100000+">Above Kshs 100,000</option>
          </select>
        </div>

        <div className="col-md-3">
          <select
            className="form-select"
            value={fuelType}
            onChange={(e) => setFuelType(e.target.value)}
          >
            <option value="all">All Fuel Types</option>
            <option value="petrol">Petrol</option>
            <option value="diesel">Diesel</option>
            <option value="electric">Electric</option>
            <option value="hybrid">Hybrid</option>
          </select>
        </div>

        <div className="col-md-3">
          <select
            className="form-select"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="default">Sort by</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>
      </div>

      <div className="text-end mb-3">
        <button className="btn btn-outline-secondary" onClick={clearFilters}>
          Clear Filters
        </button>
      </div>

      {loading ? (
        <div className="text-center py-5">
          <div className="spinner-border text-primary" role="status" />
        </div>
      ) : currentProducts.length === 0 ? (
        <div className="text-center text-muted">
          No cars found.
          <p className="small">Try adjusting your filters or search.</p>
        </div>
      ) : (
        <div className="row">
          {currentProducts.map((product) => {
            const imageUrl = getFirstImageUrl(product);
            const isWishlisted = wishlist.includes(product.id);

            return (
              <div className="col-md-4 mb-4" key={product.id}>
                <div className="card shadow-sm h-100 position-relative">
                  {/* Wishlist Icon */}
                  <button
                    className="btn btn-light position-absolute top-0 end-0 m-2"
                    onClick={() => toggleWishlist(product.id)}
                  >
                    <i
                      className={`bi ${
                        isWishlisted ? "bi-heart-fill text-danger" : "bi-heart"
                      }`}
                    ></i>
                  </button>

                  {/* Main Image */}
                  <img
                    src={imageUrl}
                    alt={product.car_name}
                    onError={(e) => (e.target.src = fallbackImage)}
                    className="card-img-top"
                    style={{ height: "200px", objectFit: "cover" }}
                  />

                  {/* Content */}
                  <div className="card-body text-center">
                    <h5 className="card-title">{product.car_name}</h5>
                    <p className="text-muted mb-1">{product.brand}</p>
                    <h6 className="text-warning">
                      KES {product.price.toLocaleString()}
                    </h6>

                    <button
                      className="btn btn-outline-secondary mt-2 w-100"
                      onClick={() =>
                        navigate(`/car-details/${product.id}`, {
                          state: { product },
                        })
                      }
                    >
                      View Details
                    </button>

                    <button
                      className="btn btn-outline-primary mt-2 w-100"
                      onClick={() => handleAddToCart(product)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {filteredProducts.length > productsPerPage && (
        <div className="d-flex justify-content-center mt-4">
          <button
            className="btn btn-outline-primary me-2"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            &laquo; Prev
          </button>
          <span className="align-self-center mx-2">
            Page {currentPage} of {totalPages}
          </span>
          <button
            className="btn btn-outline-primary"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next &raquo;
          </button>
        </div>
      )}
    </div>
  );
};

export default Getproducts;
