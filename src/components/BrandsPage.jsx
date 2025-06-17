import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BrandsPage = () => {
  const [brands, setBrands] = useState([]);
  const img_url = "https://joll3a.pythonanywhere.com/static/images/";

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
