
// // // // // // components/FeaturedCars.jsx
// // // // // import React, { useEffect, useState } from 'react';
// // // // // import axios from 'axios';
// // // // // import '../App.css';

// // // // // const ReviewsSection = () => {
// // // // //   const [cars, setCars] = useState([]);

// // // // //   useEffect(() => {
// // // // //     axios.get("https://joll3a.pythonanywhere.com/api/get_product_details")
// // // // //       .then((res) => setCars(res.data.slice(0, 6)));
// // // // //   }, []);

// // // // //   return (
// // // // //     <div className="featured-cars">
// // // // //       {cars.map((car) => (
// // // // //         <div className="car-card" key={car.id}>
// // // // //           <h4>{car.car_name}</h4>
// // // // //           <img src={`https://joll3a.pythonanywhere.com/static/images/${car.car_photo}`} alt={car.car_name} />
// // // // //           <p>{car.transmission}</p> 
// // // // //           <p>{car.fuel_type}</p>
// // // // //           <p>{car.model_year}</p>
// // // // //           <p>{car.car_condition}</p>
// // // // //           <p>{car.description}</p>
          
// // // // //           <p>{car.brand}</p>
// // // // //           <p>KES {car.price}</p>
// // // // //         </div>
// // // // //       ))}
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default ReviewsSection;




// // // // import React, { useEffect, useState } from "react";
// // // // import axios from "axios";
// // // // import { toast } from "react-toastify";

// // // // const API_URL = "https://joll3a.pythonanywhere.com/api";

// // // // const ReviewSection = ({ carId }) => {
// // // //   const [reviews, setReviews] = useState([]);
// // // //   const [newReview, setNewReview] = useState({
// // // //     name: "",
// // // //     rating: 5,
// // // //     comment: ""
// // // //   });

// // // //   const fetchReviews = async () => {
// // // //     try {
// // // //       const res = await axios.get(`${API_URL}/reviews/${carId}`);
// // // //       setReviews(res.data);
// // // //     } catch (err) {
// // // //       toast.error("Failed to load reviews");
// // // //     }
// // // //   };

// // // //   useEffect(() => {
// // // //     const fetchReviews = async () => {
// // // //       try {
// // // //         const res = await axios.get(`${API_URL}/reviews/${carId}`);
// // // //         setReviews(res.data);
// // // //       } catch (err) {
// // // //         toast.error("Failed to load reviews");
// // // //       }
// // // //     };
// // // //     fetchReviews();
// // // //   }, [carId]);

// // // //   const handleSubmit = async (e) => {
// // // //     e.preventDefault();
// // // //     try {
// // // //       await axios.post(`${API_URL}/reviews`, { ...newReview, car_id: carId });
// // // //       toast.success("Review added!");
// // // //       setNewReview({ name: "", rating: 5, comment: "" });
// // // //       fetchReviews();
// // // //     } catch {
// // // //       toast.error("Failed to submit review");
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="mt-5">
// // // //       <h4>⭐ Ratings & Reviews</h4>

// // // //       {reviews.length === 0 ? (
// // // //         <p>No reviews yet</p>
// // // //       ) : (
// // // //         <ul className="list-group mb-4">
// // // //           {reviews.map((r, idx) => (
// // // //             <li key={idx} className="list-group-item">
// // // //               <strong>{r.name}</strong> ({r.rating}★): {r.comment}
// // // //             </li>
// // // //           ))}
// // // //         </ul>
// // // //       )}

// // // //       <form onSubmit={handleSubmit}>
// // // //         <div className="mb-2">
// // // //           <input
// // // //             className="form-control"
// // // //             placeholder="Your Name"
// // // //             required
// // // //             value={newReview.name}
// // // //             onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
// // // //           />
// // // //         </div>
// // // //         <div className="mb-2">
// // // //           <select
// // // //             className="form-control"
// // // //             value={newReview.rating}
// // // //             onChange={(e) => setNewReview({ ...newReview, rating: e.target.value })}
// // // //           >
// // // //             {[].map((r) => (
// // // //               <option key={r} value={r}>{r} Star{r > 1 ? "s" : ""}</option>
// // // //             ))}
// // // //           </select>
// // // //         </div>
// // // //         <div className="mb-2">
// // // //           <textarea
// // // //             className="form-control"
// // // //             placeholder="Write your review..."
// // // //             required
// // // //             value={newReview.comment}
// // // //             onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
// // // //           ></textarea>
// // // //         </div>
// // // //         <button className="btn btn-success">Submit Review</button>
// // // //       </form>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default ReviewSection;

// // // // src/components/ReviewSection.jsx
// // // import React, { useState } from "react";

// // // const ReviewSection = ({ carId }) => {
// // //   const [reviews, setReviews] = useState([
// // //     { name: "Brian", message: "This car is powerful and clean" },
// // //     { name: "Alice", message: "Really good condition and fast" },
// // //   ]);
// // //   const [newReview, setNewReview] = useState("");
// // //   const [name, setName] = useState("");

// // //   const handleSubmit = (e) => {
// // //     e.preventDefault();
// // //     if (!newReview.trim() || !name.trim()) return;
// // //     const newEntry = { name, message: newReview };
// // //     setReviews([...reviews, newEntry]);
// // //     setNewReview("");
// // //     setName("");
// // //   };

// // //   return (
// // //     <div className="mt-5">
// // //       <h4>📝 Leave a Review</h4>
// // //       <form onSubmit={handleSubmit} className="mb-4">
// // //         <div className="mb-2">
// // //           <input
// // //             type="text"
// // //             className="form-control"
// // //             placeholder="Your name"
// // //             value={name}
// // //             onChange={(e) => setName(e.target.value)}
// // //           />
// // //         </div>
// // //         <div className="mb-2">
// // //           <textarea
// // //             className="form-control"
// // //             rows="3"
// // //             placeholder="Write your review..."
// // //             value={newReview}
// // //             onChange={(e) => setNewReview(e.target.value)}
// // //           />
// // //         </div>
// // //         <button type="submit" className="btn btn-primary">Submit Review</button>
// // //       </form>

// // //       <h5>⭐ User Reviews</h5>
// // //       <ul className="list-group">
// // //         {reviews.map((r, idx) => (
// // //           <li key={idx} className="list-group-item">
// // //             <strong>{r.name}:</strong> {r.message}
// // //           </li>
// // //         ))}
// // //       </ul>
// // //     </div>
// // //   );
// // // };

// // // export default ReviewSection;


// // import React, { useEffect, useState } from "react";

// // const ReviewSection = ({ carId }) => {
// //   const storageKey = `reviews_car_${carId}`;
// //   const [reviews, setReviews] = useState([]);
// //   const [name, setName] = useState("");
// //   const [message, setMessage] = useState("");
// //   const [rating, setRating] = useState(0);

// //   // Load from localStorage on mount
// //   useEffect(() => {
// //     const stored = localStorage.getItem(storageKey);
// //     if (stored) setReviews(JSON.parse(stored));
// //   }, [storageKey]);

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     if (!name.trim() || !message.trim() || rating === 0) return;

// //     const newReview = { name, message, rating };
// //     const updated = [...reviews, newReview];
// //     setReviews(updated);
// //     localStorage.setItem(storageKey, JSON.stringify(updated));

// //     setName("");
// //     setMessage("");
// //     setRating(0);
// //   };

// //   const handleDelete = (index) => {
// //     const updated = [...reviews];
// //     updated.splice(index, 1);
// //     setReviews(updated);
// //     localStorage.setItem(storageKey, JSON.stringify(updated));
// //   };

// //   const renderStars = (count) =>
// //     [...Array(5)].map((_, i) => (
// //       <span key={i} style={{ color: i < count ? "gold" : "#ccc" }}>★</span>
// //     ));

// //   return (
// //     <div className="mt-5">
// //       <h4>📝 Leave a Review</h4>
// //       <form onSubmit={handleSubmit} className="mb-4">
// //         <div className="mb-2">
// //           <input
// //             type="text"
// //             className="form-control"
// //             placeholder="Your name"
// //             value={name}
// //             onChange={(e) => setName(e.target.value)}
// //           />
// //         </div>
// //         <div className="mb-2">
// //           <textarea
// //             className="form-control"
// //             rows="3"
// //             placeholder="Write your review..."
// //             value={message}
// //             onChange={(e) => setMessage(e.target.value)}
// //           />
// //         </div>
// //         <div className="mb-3">
// //           <label className="form-label me-2">Rating:</label>
// //           {[1, 2, 3, 4, 5].map((num) => (
// //             <span
// //               key={num}
// //               style={{
// //                 fontSize: "1.5rem",
// //                 cursor: "pointer",
// //                 color: num <= rating ? "gold" : "#ccc",
// //               }}
// //               onClick={() => setRating(num)}
// //             >
// //               ★
// //             </span>
// //           ))}
// //         </div>
// //         <button type="submit" className="btn btn-primary">Submit Review</button>
// //       </form>

// //       <h5 className="mt-4">⭐ User Reviews</h5>
// //       {reviews.length === 0 ? (
// //         <p className="text-muted">No reviews yet. Be the first!</p>
// //       ) : (
// //         <ul className="list-group">
// //           {reviews.map((rev, idx) => (
// //             <li key={idx} className="list-group-item d-flex justify-content-between align-items-start">
// //               <div>
// //                 <strong>{rev.name}</strong> <br />
// //                 {renderStars(rev.rating)} <br />
// //                 {rev.message}
// //               </div>
// //               <button
// //                 className="btn btn-sm btn-outline-danger"
// //                 onClick={() => handleDelete(idx)}
// //               >
// //                 🗑️
// //               </button>
// //             </li>
// //           ))}
// //         </ul>
// //       )}
// //     </div>
// //   );
// // };

// // export default ReviewSection;



// import React, { useEffect, useState } from "react";
// import "../App.css"; // CSS for animations

// const ReviewSection = ({ carId }) => {
//   const storageKey = `reviews_car_${carId}`;
//   const [reviews, setReviews] = useState([]);
//   const [name, setName] = useState("");
//   const [message, setMessage] = useState("");
//   const [rating, setRating] = useState(0);
//   const [toDeleteIndex, setToDeleteIndex] = useState(null);

//   useEffect(() => {
//     const stored = localStorage.getItem(storageKey);
//     if (stored) setReviews(JSON.parse(stored));
//   }, [carId, storageKey]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!name.trim() || !message.trim() || rating === 0) return;

//     const newReview = { name, message, rating };
//     const updated = [...reviews, newReview];
//     setReviews(updated);
//     localStorage.setItem(storageKey, JSON.stringify(updated));
//     setName("");
//     setMessage("");
//     setRating(0);
//   };

//   const confirmDelete = () => {
//     if (toDeleteIndex === null) return;
//     const updated = [...reviews];
//     updated.splice(toDeleteIndex, 1);
//     setReviews(updated);
//     localStorage.setItem(storageKey, JSON.stringify(updated));
//     setToDeleteIndex(null);
//   };

//   const renderStars = (count) =>
//     [...Array(5)].map((_, i) => (
//       <i key={i} className={`bi ${i < count ? "bi-star-fill" : "bi-star"} text-warning me-1`} />
//     ));

//   return (
//     <div className="mt-5">
//       <h4>📝 Leave a Review</h4>
//       <form onSubmit={handleSubmit} className="mb-4">
//         <div className="mb-2">
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Your name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </div>
//         <div className="mb-2">
//           <textarea
//             className="form-control"
//             rows="3"
//             placeholder="Write your review..."
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//           />
//         </div>
//         <div className="mb-3">
//           <label className="form-label me-2">Rating:</label>
//           {[1, 2, 3, 4, 5].map((num) => (
//             <i
//               key={num}
//               className={`bi bi-star-fill star-select ${num <= rating ? "selected" : ""}`}
//               onClick={() => setRating(num)}
//             />
//           ))}
//         </div>
//         <button type="submit" className="btn btn-primary">Submit Review</button>
//       </form>

//       <h5 className="mt-4">⭐ User Reviews</h5>
//       {reviews.length === 0 ? (
//         <p className="text-muted">No reviews yet. Be the first!</p>
//       ) : (
//         <ul className="list-group">
//           {reviews.map((rev, idx) => (
//             <li key={idx} className="list-group-item d-flex justify-content-between align-items-start">
//               <div>
//                 <strong>{rev.name}</strong> <br />
//                 {renderStars(rev.rating)}
//                 <p className="mb-0">{rev.message}</p>
//               </div>
//               <button
//                 className="btn btn-sm btn-outline-danger"
//                 onClick={() => setToDeleteIndex(idx)}
//               >
//                 <i className="bi bi-trash3" />
//               </button>
//             </li>
//           ))}
//         </ul>
//       )}

//       {/* Modal for Delete Confirmation */}
//       {toDeleteIndex !== null && (
//         <div className="modal fade show d-block" tabIndex="-1" style={{ background: "rgba(0,0,0,0.5)" }}>
//           <div className="modal-dialog">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h5 className="modal-title">Delete Review</h5>
//                 <button type="button" className="btn-close" onClick={() => setToDeleteIndex(null)}></button>
//               </div>
//               <div className="modal-body">
//                 <p>Are you sure you want to delete this review?</p>
//               </div>
//               <div className="modal-footer">
//                 <button className="btn btn-secondary" onClick={() => setToDeleteIndex(null)}>Cancel</button>
//                 <button className="btn btn-danger" onClick={confirmDelete}>Delete</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ReviewSection;
import React, { useEffect, useState } from "react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from "recharts";
import "../App.css";

const ReviewSection = ({ carId }) => {
  const storageKey = `reviews_car_${carId}`;
  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(0);
  const [toDeleteIndex, setToDeleteIndex] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem(storageKey);
    if (stored) setReviews(JSON.parse(stored));
  }, [carId, storageKey]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim() || rating === 0) return;

    const newReview = { name, message, rating };
    const updated = [...reviews, newReview];
    setReviews(updated);
    localStorage.setItem(storageKey, JSON.stringify(updated));
    setName("");
    setMessage("");
    setRating(0);
  };

  const confirmDelete = () => {
    if (toDeleteIndex === null) return;
    const updated = [...reviews];
    updated.splice(toDeleteIndex, 1);
    setReviews(updated);
    localStorage.setItem(storageKey, JSON.stringify(updated));
    setToDeleteIndex(null);
  };

  const renderStars = (count) =>
    [...Array(5)].map((_, i) => (
      <i key={i} className={`bi ${i < count ? "bi-star-fill" : "bi-star"} text-warning me-1`} />
    ));

  // Generate data for the chart
  const ratingData = [1, 2, 3, 4, 5].map((star) => ({
    star: `${star} Star`,
    count: reviews.filter((r) => r.rating === star).length,
  }));

  return (
    <div className="mt-5">
      <h4>📝 Leave a Review</h4>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <textarea
            className="form-control"
            rows="3"
            placeholder="Write your review..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label me-2">Rating:</label>
          {[1, 2, 3, 4, 5].map((num) => (
            <i
              key={num}
              className={`bi bi-star-fill star-select ${num <= rating ? "selected" : ""}`}
              onClick={() => setRating(num)}
            />
          ))}
        </div>
        <button type="submit" className="btn btn-primary">Submit Review</button>
      </form>

      {/* Chart Section */}
      <div className="my-5">
        <h5>📊 Rating Distribution</h5>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={ratingData} margin={{ top: 10, right: 30, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="star" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Bar dataKey="count" fill="#0d6efd" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Review List */}
      <h5 className="mt-4">⭐ User Reviews</h5>
      {reviews.length === 0 ? (
        <p className="text-muted">No reviews yet. Be the first!</p>
      ) : (
        <ul className="list-group">
          {reviews.map((rev, idx) => (
            <li key={idx} className="list-group-item d-flex justify-content-between align-items-start">
              <div>
                <strong>{rev.name}</strong> <br />
                {renderStars(rev.rating)}
                <p className="mb-0">{rev.message}</p>
              </div>
              <button
                className="btn btn-sm btn-outline-danger"
                onClick={() => setToDeleteIndex(idx)}
              >
                <i className="bi bi-trash3" />
              </button>
            </li>
          ))}
        </ul>
      )}

      {/* Modal for Delete Confirmation */}
      {toDeleteIndex !== null && (
        <div className="modal fade show d-block" tabIndex="-1" style={{ background: "rgba(0,0,0,0.5)" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Delete Review</h5>
                <button type="button" className="btn-close" onClick={() => setToDeleteIndex(null)}></button>
              </div>
              <div className="modal-body">
                <p>Are you sure you want to delete this review?</p>
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={() => setToDeleteIndex(null)}>Cancel</button>
                <button className="btn btn-danger" onClick={confirmDelete}>Delete</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReviewSection;
