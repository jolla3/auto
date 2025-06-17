// components/CarCard.jsx
import React from "react";
import { Link } from "react-router-dom";

const CarCard = ({ car, img_url }) => {
  const photo = car.car_photo?.split(",")[0];
  const fallback = img_url + "no_image_available.png";

  return (
    <div className="col-md-4 mb-3">
      <div className="card h-100">
        <img
          src={img_url + photo}
          onError={(e) => (e.target.src = fallback)}
          className="card-img-top"
          style={{ height: "180px", objectFit: "cover" }}
          alt={car.car_name}
        />
        <div className="card-body">
          <h6 className="card-title">{car.car_name}</h6>
          <p className="text-success">KES {car.price.toLocaleString()}</p>
          <Link to={`/car/${car.id}`} state={{ product: car }} className="btn btn-sm btn-outline-primary">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
