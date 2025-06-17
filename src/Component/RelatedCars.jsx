// components/RelatedCars.jsx
import React, { useEffect, useState } from "react";
import CarCard from "./CarCard";

const RelatedCars = ({ brand, currentId = null, limit = 4 }) => {
  const [cars, setCars] = useState([]);
  const img_url = "https://joll3a.pythonanywhere.com/static/images/";

  useEffect(() => {
    fetch("https://joll3a.pythonanywhere.com/api/get_product_details")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter(
          (car) => car.brand === brand && car.id !== currentId
        );
        setCars(filtered.slice(0, limit));
      });
  }, [brand, currentId, limit]);

  if (cars.length === 0) return null;

  return (
    <div className="mt-5">
      <h4>🚘 Related Cars</h4>
      <div className="row">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} img_url={img_url} />
        ))}
      </div>
    </div>
  );
};

export default RelatedCars;
