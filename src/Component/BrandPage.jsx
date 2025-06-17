// components/BrandPage.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CarCard from "./CarCard";

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

  const filteredCars = fuelType
    ? cars.filter((car) => car.fuel_type === fuelType)
    : cars;

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
        {filteredCars.length === 0 ? (
          <p className="text-muted">No cars found for {brandName}</p>
        ) : (
          filteredCars.map((car) => (
            <CarCard key={car.id} car={car} img_url={img_url} />
          ))
        )}
      </div>
    </div>
  );
};

export default BrandPage;
