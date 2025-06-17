// import React, { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";

// const BrandPage = () => {
//   const { brandName } = useParams();
//   const [cars, setCars] = useState([]);
//   const img_url = "https://joll3a.pythonanywhere.com/static/images/";

//   useEffect(() => {
//     fetch("https://joll3a.pythonanywhere.com/api/get_product_details/")
//       .then((res) => res.json())
//       .then((data) => {
//         const filtered = data.filter((car) =>
//           car.brand.toLowerCase() === brandName.toLowerCase()
//         );
//         setCars(filtered);
//       });
//   }, [brandName]);
//   const [fuelType, setFuelType] = useState(""); // "" means show all





//   return (
//     <div className="container py-4">
//       <h3>🚗 {brandName} Cars</h3>
//       <div className="mb-3">
//   {["", "Petrol", "Diesel", "Hybrid", "Electric"].map((type) => (
//     <button
//       key={type}
//       onClick={() => setFuelType(type)}
//       className={`btn btn-sm me-2 ${fuelType === type ? "btn-dark" : "btn-outline-dark"}`}
//     >
//       {type || "All"}
//     </button>
//   ))}
// </div>

//       <div className="row">
//         {cars.length === 0 ? (
//           <p className="text-muted">No cars found for {brandName}</p>
//         ) : (
//             cars
//   .filter(car => fuelType === "" || car.fuel_type === fuelType)
//   .map(car => (
//     // Render card
  
//             <div className="col-md-4 mb-3" key={car.id}>
//               <div className="card">
//                 <img
//                   src={img_url + car.car_photo.split(",")[0]}
//                   onError={(e) =>
//                     (e.target.src = img_url + "no_image_available.png")
//                   }
//                   className="card-img-top"
//                   alt={car.car_name}
//                 />
//                 <div className="card-body">
//                   <h6 className="card-title">{car.car_name}</h6>
//                   <p className="text-success">KES {car.price.toLocaleString()}</p>
//                   <Link
//                     to={`/car/${car.id}`}
//                     state={{ product: car }}
//                     className="btn btn-sm btn-outline-primary"
//                   >
//                     View Details
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default BrandPage;


import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const BrandPage = () => {
  const { brandName } = useParams();
  const [cars, setCars] = useState([]);
  const [fuelType, setFuelType] = useState("");
  const img_url = "https://joll3a.pythonanywhere.com/static/images/";

  useEffect(() => {
    fetch("https://joll3a.pythonanywhere.com/api/get_product_details/")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter(
          (car) => car.brand.toLowerCase() === brandName.toLowerCase()
        );
        setCars(filtered);
      });
  }, [brandName]);

  return (
    <div className="container py-4">
      <h3>🚗 {brandName} Cars</h3>

      <div className="mb-3">
        {["", "Petrol", "Diesel", "Hybrid", "Electric"].map((type) => (
          <button
            key={type}
            onClick={() => setFuelType(type)}
            className={`btn btn-sm me-2 ${fuelType === type ? "btn-dark" : "btn-outline-dark"}`}
          >
            {type || "All"}
          </button>
        ))}
      </div>

      <div className="row">
        {cars.length === 0 ? (
          <p className="text-muted">No cars found for {brandName}</p>
        ) : (
          cars
            .filter((car) => fuelType === "" || car.fuel_type === fuelType)
            .map((car) => (
              <div className="col-md-4 mb-3" key={car.id}>
                <div className="card">
                  <img
                    src={img_url + car.car_photo.split(",")[0]}
                    onError={(e) =>
                      (e.target.src = img_url + "no_image_available.png")
                    }
                    className="card-img-top"
                    alt={car.car_name}
                  />
                  <div className="card-body">
                    <h6 className="card-title">{car.car_name}</h6>
                    <p className="text-success">KES {car.price.toLocaleString()}</p>
                    <Link
                      to={`/car/${car.id}`}
                      state={{ product: car }}
                      className="btn btn-sm btn-outline-primary"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))
        )}
      </div>
    </div>
  );
};

export default BrandPage;
