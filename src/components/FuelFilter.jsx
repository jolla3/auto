import React, { useState } from "react";

const FuelFilter = () => {
  const [fuelType, setFuelType] = useState("");

  return (
    <>
      {["Petrol", "Diesel", "Hybrid", "Electric"].map((type) => (
        <button
          key={type}
          onClick={() => setFuelType(type)}
          className={`btn btn-sm me-2 ${fuelType === type ? "btn-dark" : "btn-outline-dark"}`}
        >
          {type}
        </button>
      ))}
    </>
  );
};

export default FuelFilter;
