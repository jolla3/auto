// // // import React, { useEffect, useState } from "react";
// // // import axios from "axios";
// // // import { useNavigate } from "react-router-dom";

// // // const API_URL = "https://joll3a.pythonanywhere.com/api";

// // // const RelatedCars = ({ brand, currentId }) => {
// // //   const [cars, setCars] = useState([]);
// // //   const navigate = useNavigate();

// // //   useEffect(() => {
// // //     axios
// // //       .get(`${API_URL}/products?brand=${brand}`)
// // //       .then((res) => {
// // //         const filtered = res.data.filter((car) => car.id !== currentId);
// // //         setCars(filtered.slice(0, 5)); // Limit to 5 related
// // //       })
// // //       .catch((err) => console.log(err));
// // //   }, [brand, currentId]);

// // //   if (cars.length === 0) return null;

// // //   return (
// // //     <div className="mt-5">
// // //       <h4>🔁 Related Cars</h4>
// // //       <div className="d-flex overflow-auto gap-3">
// // //         {cars.map((car) => (
// // //           <div
// // //             key={car.id}
// // //             className="card"
// // //             style={{ minWidth: "220px", cursor: "pointer" }}
// // //             onClick={() => navigate("/car-details", { state: { product: car } })}
// // //           >
// // //             <img
// // //               src={`https://joll3a.pythonanywhere.com/static/images/${car.car_photo?.split(",")[0]}`}
// // //               alt={car.car_name}
// // //               style={{ height: "140px", objectFit: "cover" }}
// // //               className="card-img-top"
// // //             />
// // //             <div className="card-body">
// // //               <h6>{car.car_name}</h6>
// // //               <p className="text-success">KES {car.price.toLocaleString()}</p>
// // //             </div>
// // //           </div>
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default RelatedCars;



// // // src/components/RelatedCars.jsx
// // import React, { useEffect, useState } from "react";
// // import { useNavigate } from "react-router-dom";

// // const RelatedCars = ({ brand, currentId }) => {
// //   const [cars, setCars] = useState([]);
// //   const navigate = useNavigate();
// //   const img_url = "https://joll3a.pythonanywhere.com/static/images/";

// //   useEffect(() => {
// //     fetch("https://joll3a.pythonanywhere.com/api/get_product_details")
// //       .then((res) => res.json())
// //       .then((data) => {
// //         const filtered = data.filter(
// //           (car) => car.brand === brand && car.id !== currentId
// //         );
// //         setCars(filtered);
// //       })
// //       .catch((err) => console.error("Failed to load related cars", err));
// //   }, [brand, currentId]);

// //   const goToCarDetails = (car) => {
// //     navigate("/car-details/:id", { state: { product: car } });
// //   };

// //   if (cars.length === 0) return null;

// //   return (
// //     <div className="mt-5">
// //       <h4>🚗 Related Cars</h4>
// //       <div className="row">
// //         {cars.map((car) => {
// //           const photo = car.car_photo?.split(",")[0]?.trim();
// //           const image = photo ? img_url + photo : img_url + "no_image_available.png";
// //           return (
// //             <div className="col-md-4 mb-4" key={car.id}>
// //               <div className="card h-100 shadow-sm" onClick={() => goToCarDetails(car)} style={{ cursor: "pointer" }}>
// //                 <img src={image} alt={car.car_name} className="card-img-top" style={{ height: "200px", objectFit: "cover" }} />
// //                 <div className="card-body">
// //                   <h5 className="card-title">{car.car_name}</h5>
// //                   <p className="card-text">{car.brand}</p>
// //                   <p className="text-success">KES {car.price.toLocaleString()}</p>
// //                 </div>
// //               </div>
// //             </div>
// //           );
// //         })}
// //       </div>
// //     </div>
// //   );
// // };

// // export default RelatedCars;


// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// const RelatedCars = ({ brand, currentId }) => {
//   const [cars, setCars] = useState([]);
//   const img_url = "https://joll3a.pythonanywhere.com/static/images/";

//   useEffect(() => {
//     fetch("https://joll3a.pythonanywhere.com/api/get_product_details")
//       .then((res) => res.json())
//       .then((data) => {
//         const related = data.filter(
//           (car) => car.brand === brand && car.id !== currentId
//         );
//         setCars(related);
//       });
//   }, [brand, currentId]);

//   if (cars.length === 0) return null;

//   return (
//     <div className="mt-5">
//       <h4>🚘 Related Cars</h4>
//       <div className="row">
//         {cars.slice(0, 4).map((car) => (
//           <div className="col-md-3" key={car.id}>
//             <div className="card mb-3">
//               <img
//                 src={img_url + car.car_photo.split(",")[0]}
//                 onError={(e) =>
//                   (e.target.src = img_url + "no_image_available.png")
//                 }
//                 className="card-img-top"
//                 style={{ height: "180px", objectFit: "cover" }}
//                 alt={car.car_name}
//               />
//               <div className="card-body">
//                 <h6 className="card-title">{car.car_name}</h6>
//                 <p className="text-success">KES {car.price.toLocaleString()}</p>
//                 <Link to={`/car/${car.id}`} state={{ product: car }} className="btn btn-sm btn-outline-primary">
//                   View
//                 </Link>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RelatedCars;



import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BrandsPage = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetch("https://joll3a.pythonanywhere.com/api/get_product_details/")
      .then((res) => res.json())
      .then((data) => {
        const uniqueBrands = Array.from(
          new Set(data.map((car) => car.brand))
        ).filter(Boolean); // remove null/empty
        setBrands(uniqueBrands);
      });
  }, []);

  return (
    <div className="container py-5">
      <h3 className="mb-4">🚘 Browse by Car Brand</h3>
      <div className="row">
        {brands.map((brand, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <Link to={`/brand/${brand}`} className="text-decoration-none text-dark">
              <div className="card shadow-sm text-center h-100 hover-zoom">
                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                  <div style={{ fontSize: "2rem" }}>🚗</div> {/* Replace with brand logos if available */}
                  <h6 className="mt-2">{brand}</h6>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandsPage;
