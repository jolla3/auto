// // import { useLocation, useNavigate } from "react-router-dom";
// // import { useEffect } from "react";
// // import '../App.css';

// // const CarDetails = () => {
// //   const { state } = useLocation();
// //   const navigate = useNavigate();
// //   const product = state?.product;

// //   useEffect(() => {
// //     if (!product) {
// //       navigate("/"); // fallback if someone accesses directly
// //     }
// //   }, [product, navigate]);

// //   if (!product) return null;

// //   const {
// //     car_name,
// //     brand,
// //     model_year,
// //     car_condition,
// //     fuel_type,
// //     transmission,
// //     price,
// //     description,
// //     car_photo,
// //   } = product;

// //   const img_url = "https://joll3a.pythonanywhere.com/static/images/";
// //   const fallback = "https://joll3a.pythonanywhere.com/static/images/no_image_available.png";

// //   const imageList = car_photo
// //     ? car_photo.split(",").map((file) => img_url + file.trim())
// //     : [fallback];

// //   return (
// //     <div className="container my-5">
// //       <button className="btn btn-outline-secondary mb-4" onClick={() => navigate(-1)}>
// //         &larr; Back to Products
// //       </button>

// //       <div className="row g-4">
// //         {/* Carousel */}
// //         <div className="col-md-6">
// //           <div id="carImagesCarousel" className="carousel slide" data-bs-ride="carousel">
// //             <div className="carousel-inner">
// //               {imageList.map((img, index) => (
// //                 <div
// //                   key={index}
// //                   className={`carousel-item ${index === 0 ? "active" : ""}`}
// //                 >
// //                   <img
// //                     src={img}
// //                     onError={(e) => (e.target.src = fallback)}
// //                     className="d-block w-100"
// //                     alt={`Slide ${index}`}
// //                     style={{ height: "350px", objectFit: "cover" }}
// //                   />
// //                 </div>
// //               ))}
// //             </div>
// //             {imageList.length > 1 && (
// //               <>
// //                 <button
// //                   className="carousel-control-prev"
// //                   type="button"
// //                   data-bs-target="#carImagesCarousel"
// //                   data-bs-slide="prev"
// //                 >
// //                   <span className="carousel-control-prev-icon" aria-hidden="true"></span>
// //                 </button>
// //                 <button
// //                   className="carousel-control-next"
// //                   type="button"
// //                   data-bs-target="#carImagesCarousel"
// //                   data-bs-slide="next"
// //                 >
// //                   <span className="carousel-control-next-icon" aria-hidden="true"></span>
// //                 </button>
// //               </>
// //             )}
// //           </div>
// //         </div>

// //         {/* Car Details */}
// //         <div className="col-md-6">
// //           <h3>{car_name}</h3>
// //           <p className="text-muted">{brand} - {model_year}</p>
// //           <h4 className="text-success mb-3">KES {Number(price).toLocaleString()}</h4>

// //           <ul className="list-group list-group-flush mb-3">
// //             <li className="list-group-item"><strong>Condition:</strong> {car_condition}</li>
// //             <li className="list-group-item"><strong>Fuel:</strong> {fuel_type}</li>
// //             <li className="list-group-item"><strong>Transmission:</strong> {transmission}</li>
// //           </ul>

// //           <p>{description}</p>

// //           {/* Seller Contact (Placeholder) */}
// //           <div className="mt-4 p-3 border rounded">
// //             <h5>Seller Contact</h5>
// //             <p><strong>Phone:</strong> +254 712 345678</p>
// //             <p><strong>Email:</strong> seller@example.com</p>
// //           </div>

// //           {/* Action Buttons (optional) */}
// //           <div className="mt-3 d-flex gap-2">
// //             <button className="btn btn-primary">Add to Cart</button>
// //             <button className="btn btn-outline-danger">Add to Wishlist</button>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default CarDetails;


// import React from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { useCart } from "../CartContext";
// import { toast } from "react-toastify";

// const CarDetails = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { addToCart } = useCart();
//   const product = location.state?.product;
//   const img_url = "https://joll3a.pythonanywhere.com/static/images/";
//   const fallbackImage = img_url + "no_image_available.png";

//   const [isWishlisted, setIsWishlisted] = React.useState(false);

//   React.useEffect(() => {
//     if (product?.id) {
//       const stored = JSON.parse(localStorage.getItem("wishlist")) || [];
//       setIsWishlisted(stored.includes(product.id));
//     }
//   }, [product]);

//   const toggleWishlist = () => {
//     if (!product?.id) return;

//     const stored = JSON.parse(localStorage.getItem("wishlist")) || [];
//     let updated;

//     if (stored.includes(product.id)) {
//       updated = stored.filter((id) => id !== product.id);
//       toast.info(`${product.car_name} removed from wishlist`);
//     } else {
//       updated = [...stored, product.id];
//       toast.success(`${product.car_name} added to wishlist`);
//     }

//     localStorage.setItem("wishlist", JSON.stringify(updated));
//     setIsWishlisted(updated.includes(product.id));
//   };

//   const handleAddToCart = () => {
//     addToCart(product);
//     toast.success(`${product.car_name} added to cart`);
//   };

//   if (!product) {
//     return (
//       <div className="container py-5">
//         <h3>No product data available</h3>
//         <button onClick={() => navigate(-1)} className="btn btn-secondary mt-3">
//           Go Back
//         </button>
//       </div>
//     );
//   }

//   const imageUrl =
//     product.car_photo && typeof product.car_photo === "string"
//       ? img_url + product.car_photo.split(",")[0].trim()
//       : fallbackImage;

//   return (
//     <div className="container py-5">
//       <button onClick={() => navigate(-1)} className="btn btn-outline-secondary mb-3">
//         ← Back
//       </button>

//       <div className="row">
//         <div className="col-md-6">
//           <img
//             src={imageUrl}
//             alt={product.car_name}
//             className="img-fluid rounded shadow"
//             onError={(e) => (e.target.src = fallbackImage)}
//             style={{ maxHeight: "400px", objectFit: "cover" }}
//           />
//         </div>

//         <div className="col-md-6">
//           <h2>{product.car_name}</h2>
//           <p className="text-muted">{product.brand}</p>
//           <h4 className="text-success">KES {product.price.toLocaleString()}</h4>

//           <p><strong>Fuel Type:</strong> {product.fuel_type}</p>
//           <p><strong>Transmission:</strong> {product.transmission}</p>
//           <p><strong>Condition:</strong> {product.car_condition}</p>
//           <p><strong>Year:</strong> {product.model_year}</p>
//           <p><strong>Description:</strong> {product.description}</p>
//           <p><strong>Seller Contact:</strong> +254-700-000000</p>

//           <div className="mt-3 d-flex flex-column gap-2">
//             <button className="btn btn-primary" onClick={handleAddToCart}>
//               <i className="bi bi-cart-plus"></i> Add to Cart
//             </button>

//             <button
//               className={`btn ${isWishlisted ? "btn-danger" : "btn-outline-danger"}`}
//               onClick={toggleWishlist}
//             >
//               <i className={`bi ${isWishlisted ? "bi-heart-fill" : "bi-heart"}`}></i>{" "}
//               {isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CarDetails;


// import React, { useEffect, useState } from "react";
// import { useLocation, useNavigate, Link } from "react-router-dom";
// import { useCart } from "../CartContext";
// import { toast } from "react-toastify";
// import RelatedCars from "./RelatedCars";
// import ReviewSection from "./Reviewsection";
// // import RelatedCars from "./RelatedCars";


// const CarDetails = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { addToCart } = useCart();
//   const product = location.state?.product;

//   const img_url = "https://joll3a.pythonanywhere.com/static/images/";
//   const fallbackImage = img_url + "no_image_available.png";

//   const [isWishlisted, setIsWishlisted] = useState(false);

//   useEffect(() => {
//     if (product?.id) {
//       const stored = JSON.parse(localStorage.getItem("wishlist")) || [];
//       setIsWishlisted(stored.includes(product.id));
//     }
//   }, [product]);

//   const toggleWishlist = () => {
//     const stored = JSON.parse(localStorage.getItem("wishlist")) || [];
//     let updated;

//     if (stored.includes(product.id)) {
//       updated = stored.filter((id) => id !== product.id);
//       toast.info(`${product.car_name} removed from wishlist`);
//     } else {
//       updated = [...stored, product.id];
//       toast.success(`${product.car_name} added to wishlist`);
//     }

//     localStorage.setItem("wishlist", JSON.stringify(updated));
//     setIsWishlisted(updated.includes(product.id));
//   };

//   const handleAddToCart = () => {
//     addToCart(product);
//     toast.success(`${product.car_name} added to cart`);
//   };

//   if (!product) {
//     return (
//       <div className="container py-5">
//         <h3>No product data available</h3>
//         <button onClick={() => navigate(-1)} className="btn btn-secondary mt-3">
//           Go Back
//         </button>
//       </div>
//     );
//   }

//   const photos =
//     product.car_photo && typeof product.car_photo === "string"
//       ? product.car_photo.split(",").map((p) => p.trim()).filter((p) => p && !p.includes("null"))
//       : [];

//   const imageList = photos.length > 0 ? photos : [fallbackImage];

//   return (
//     <div className="container py-5">

//     <Link to={`/brand/${product.brand}`} className="text-decoration-underline">
//   {product.brand}
// </Link>


       

//       <button onClick={() => navigate(-1)} className="btn btn-outline-secondary mb-4">
//         ← Back
//       </button>

//       <div className="row">
//         {/* Images Gallery */}
//         <div className="col-md-6">
//           <div id="carCarousel" className="carousel slide" data-bs-ride="carousel">
//             <div className="carousel-inner">
//               {imageList.map((img, idx) => (
//                 <div className={`carousel-item ${idx === 0 ? "active" : ""}`} key={idx}>
//                   <img
//                     src={img_url + img}
//                     onError={(e) => (e.target.src = fallbackImage)}
//                     className="d-block w-100 rounded shadow"
//                     style={{ height: "350px", objectFit: "cover" }}
//                     alt={`Slide ${idx + 1}`}
//                   />
//                 </div>
//               ))}
//             </div>
//             {imageList.length > 1 && (
//               <>
//                 <button className="carousel-control-prev" type="button" data-bs-target="#carCarousel" data-bs-slide="prev">
//                   <span className="carousel-control-prev-icon" />
//                 </button>
//                 <button className="carousel-control-next" type="button" data-bs-target="#carCarousel" data-bs-slide="next">
//                   <span className="carousel-control-next-icon" />
//                 </button>
//               </>
//             )}
//           </div>
//         </div>

//         {/* Product Info */}
//         <div className="col-md-6">
//           <h2>{product.car_name}</h2>
//           <p className="text-muted">{product.brand}</p>
//           <h4 className="text-success mb-3">KES {product.price.toLocaleString()}</h4>

//           <p><strong>Fuel:</strong> {product.fuel_type}</p>
//           <p><strong>Transmission:</strong> {product.transmission}</p>
//           <p><strong>Condition:</strong> {product.car_condition}</p>
//           <p><strong>Year:</strong> {product.model_year}</p>
//           <p><strong>Description:</strong> {product.description}</p>

//           {/* Buttons */}
//           <div className="d-grid gap-2 mt-4">
//             <button className="btn btn-primary" onClick={handleAddToCart}>
//               <i className="bi bi-cart-plus"></i> Add to Cart
//             </button>

//             <button
//               className={`btn ${isWishlisted ? "btn-danger" : "btn-outline-danger"}`}
//               onClick={toggleWishlist}
//             >
//               <i className={`bi ${isWishlisted ? "bi-heart-fill" : "bi-heart"}`}></i>{" "}
//               {isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
//             </button>

//             {/* Contact Seller */}
//             <a
//               href={`tel:+254769563983`}
//               className="btn btn-outline-secondary"
//             >
//               📞 Call Seller
//             </a>
//             <a
//               href={`https://wa.me/254786834735?text=Hello%2C%20I'm%20interested%20in%20the%20${encodeURIComponent(
//                 product.car_name
//               )}`}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="btn btn-success"
//             >
//               💬 WhatsApp Seller
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Review Section (static for now) */}
//       <div className="mt-5">
        
//         <h4>⭐ Ratings & Reviews</h4>
//         <p className="text-muted">★★★★☆ (4.0 based on 13 reviews)</p>
//         <ul className="list-group">
//           <li className="list-group-item">
//             <strong>Brian:</strong> Love this car. Runs smooth.
//           </li>
//           <li className="list-group-item">
//             <strong>Alice:</strong> Fuel efficient and looks amazing!
//           </li>
//           <li className="list-group-item">
//             <strong>Kevin:</strong> I'd buy again — seller was helpful.
//           </li>
//         </ul>
//       </div>
//       <RelatedCars brand={product.brand} currentId={product.id} />
//       <ReviewSection carId={product.id} />

      
//     </div>
//   );
// };

// export default CarDetails;


import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { useCart } from "../CartContext";
import { toast } from "react-toastify";
import RelatedCars from "./RelatedCars";
import ReviewSection from "./Reviewsection";

const CarDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const product = location.state?.product;

  const img_url = "https://joll3a.pythonanywhere.com/static/images/";
  const fallbackImage = img_url + "no_image_available.png";

  const [isWishlisted, setIsWishlisted] = useState(false);

  useEffect(() => {
    if (product?.id) {
      const stored = JSON.parse(localStorage.getItem("wishlist")) || [];
      setIsWishlisted(stored.includes(product.id));
    }
  }, [product]);

  const toggleWishlist = () => {
    const stored = JSON.parse(localStorage.getItem("wishlist")) || [];
    let updated;

    if (stored.includes(product.id)) {
      updated = stored.filter((id) => id !== product.id);
      toast.info(`${product.car_name} removed from wishlist`);
    } else {
      updated = [...stored, product.id];
      toast.success(`${product.car_name} added to wishlist`);
    }

    localStorage.setItem("wishlist", JSON.stringify(updated));
    setIsWishlisted(updated.includes(product.id));
  };

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.car_name} added to cart`);
  };

  if (!product) {
    return (
      <div className="container py-5">
        <h3>No product data available</h3>
        <button onClick={() => navigate(-1)} className="btn btn-secondary mt-3">
          Go Back
        </button>
      </div>
    );
  }

  const photos =
    product.car_photo && typeof product.car_photo === "string"
      ? product.car_photo.split(",").map((p) => p.trim()).filter((p) => p && !p.includes("null"))
      : [];

  const imageList = photos.length > 0 ? photos : [fallbackImage];

  return (
    <div className="container py-5">
      <Link to={`/brand/${product.brand}`} className="text-decoration-underline">
        {product.brand}
      </Link>

      <button onClick={() => navigate(-1)} className="btn btn-outline-secondary mb-4">
        ← Back
      </button>

      <div className="row">
        <div className="col-md-6">
          <div id="carCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              {imageList.map((img, idx) => (
                <div className={`carousel-item ${idx === 0 ? "active" : ""}`} key={idx}>
                  <img
                    src={img_url + img}
                    onError={(e) => (e.target.src = fallbackImage)}
                    className="d-block w-100 rounded shadow"
                    style={{ height: "350px", objectFit: "cover" }}
                    alt={`Slide ${idx + 1}`}
                  />
                </div>
              ))}
            </div>
            {imageList.length > 1 && (
              <>
                <button className="carousel-control-prev" type="button" data-bs-target="#carCarousel" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" />
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carCarousel" data-bs-slide="next">
                  <span className="carousel-control-next-icon" />
                </button>
              </>
            )}
          </div>
        </div>

        <div className="col-md-6">
          <h2>{product.car_name}</h2>
          <p className="text-muted">{product.brand}</p>
          <h4 className="text-success mb-3">KES {product.price.toLocaleString()}</h4>

          <p><strong>Fuel:</strong> {product.fuel_type}</p>
          <p><strong>Transmission:</strong> {product.transmission}</p>
          <p><strong>Condition:</strong> {product.car_condition}</p>
          <p><strong>Year:</strong> {product.model_year}</p>
          <p><strong>Description:</strong> {product.description}</p>

          <div className="d-grid gap-2 mt-4">
            <button className="btn btn-primary" onClick={handleAddToCart}>
              <i className="bi bi-cart-plus"></i> Add to Cart
            </button>

            <button
              className={`btn ${isWishlisted ? "btn-danger" : "btn-outline-danger"}`}
              onClick={toggleWishlist}
            >
              <i className={`bi ${isWishlisted ? "bi-heart-fill" : "bi-heart"}`}></i>{" "}
              {isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
            </button>

            <a href={`tel:+254769563983`} className="btn btn-outline-secondary">📞 Call Seller</a>
            <a
              href={`https://wa.me/254786834735?text=Hello%2C%20I'm%20interested%20in%20the%20${encodeURIComponent(product.car_name)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-success"
            >
              💬 WhatsApp Seller
            </a>
          </div>
        </div>
      </div>

      <RelatedCars brand={product.brand} currentId={product.id} />
      <ReviewSection carId={product.id} />
    </div>
  );
};

export default CarDetails;
