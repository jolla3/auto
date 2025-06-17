
// components/FeaturedCars.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';

const FeaturedCars = () => {
  const [cars] = useState([]);

  useEffect(() => {
    axios.get("https://joll3a.pythonanywhere.com/api/get_product_details")
  
  }, []);

  return (
    <div className="featured-cars">
      {cars.map((car) => (
        < div className="car-card" key={car.id}>
           <h4>{car.car_name}</h4>
          <img src={`https://joll3a.pythonanywhere.com/static/images/${car.car_photo}`} alt={car.car_name} />
          <p>{car.transmission}</p>
          <p>{car.brand}</p>
          <p>{car.fuel_type}</p>
          <p>{car.model_year}</p>
          <p>KES {car.price}</p>
        </div>
      ))}
    </div>
  );
};

export default FeaturedCars;
