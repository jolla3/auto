// components/BrandsPage.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BrandsPage = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetch("https://joll3a.pythonanywhere.com/api/get_product_details/")
      .then((res) => res.json())
      .then((data) => {
        const uniqueBrands = Array.from(new Set(data.map((car) => car.brand))).filter(Boolean);
        setBrands(uniqueBrands);
      });
  }, []);

  return (
    <div className="container py-5">
      <h3>🚘 Browse by Brand</h3>
      <div className="row">
        {brands.map((brand, i) => (
          <div className="col-md-3 mb-3" key={i}>
            <Link to={`/brand/${brand}`} className="text-decoration-none text-dark">
              <div className="card text-center shadow-sm h-100">
                <div className="card-body">
                  <div style={{ fontSize: "2rem" }}>🚗</div>
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
