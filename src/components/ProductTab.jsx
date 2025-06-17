
// src/components/ProductTab.js

import axiosInstance from "./axiosInstance";
import { useEffect, useState } from "react";

const ProductTab = () => {
  const [products, setProducts] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    car_name: "",
    brand: "",
    model_year: "",
    car_condition: "",
    fuel_type: "",
    transmission: "",
    price: "",
    description: "",
    car_photo: null,
  });

  const fetchProducts = async () => {
    try {
      const res = await axiosInstance.get("https://joll3a.pythonanywhere.com/api/get_products");
      console.log("Fetched products response:", res.data);

      const data = res.data;
      if (Array.isArray(data.products)) {
        setProducts(data.products);
      } else {
        console.warn("Expected an array for products, but got:", data.products);
        setProducts([]);
      }
    } catch (err) {
      console.error("Error fetching products", err);
      setProducts([]);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.entries(formData).forEach(([key, val]) => data.append(key, val));
    try {
      await axiosInstance.post("https://joll3a.pythonanywhere.com/api/upload_products", data);
      fetchProducts();
      setFormData({
        car_name: "",
        brand: "",
        model_year: "",
        car_condition: "",
        fuel_type: "",
        transmission: "",
        price: "",
        description: "",
        car_photo: null,
      });
    } catch (err) {
      console.error("Error creating product", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axiosInstance.delete(`https://sch3ccs.pythonanywhere.com/api/get_products/${id}`);
      fetchProducts();
    } catch (err) {
      console.error("Error deleting product", err);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.entries(formData).forEach(([key, val]) => data.append(key, val));
    try {
      await axiosInstance.patch(`https://joll3a.pythonanywhere.com/api/get_product_details/${editingId}`, data);
      setEditingId(null);
      fetchProducts();
    } catch (err) {
      console.error("Error updating product", err);
    }
  };

  return (
    <div className="tab-pane fade p-3" id="products">
      <h4 className="text-aqua mb-3">Manage Products</h4>

      <form onSubmit={editingId ? handleUpdate : handleCreate} className="border rounded p-3 mb-4 shadow-sm">
        <div className="row g-2 mb-2">
          <div className="col">
            <input type="text" name="car_name" className="form-control" placeholder="Car Name" value={formData.car_name} onChange={handleInputChange} required />
          </div>
          <div className="col">
            <input type="text" name="brand" className="form-control" placeholder="Brand" value={formData.brand} onChange={handleInputChange} required />
          </div>
          <div className="col">
            <input type="number" name="model_year" className="form-control" placeholder="Model Year" value={formData.model_year} onChange={handleInputChange} required />
          </div>
          <div className="col">
            <input type="text" name="car_condition" className="form-control" placeholder="Condition" value={formData.car_condition} onChange={handleInputChange} required />
          </div>
        </div>
        <div className="row g-2 mb-2">
          <div className="col">
            <input type="text" name="fuel_type" className="form-control" placeholder="Fuel Type" value={formData.fuel_type} onChange={handleInputChange} required />
          </div>
          <div className="col">
            <input type="text" name="transmission" className="form-control" placeholder="Transmission" value={formData.transmission} onChange={handleInputChange} required />
          </div>
          <div className="col">
            <input type="number" name="price" className="form-control" placeholder="Price" value={formData.price} onChange={handleInputChange} required />
          </div>
          <div className="col">
            <input type="file" name="car_photo" className="form-control" accept="image/*" onChange={handleInputChange} required />
          </div>
        </div>
        <textarea name="description" className="form-control mb-3" rows="2" placeholder="Description" value={formData.description} onChange={handleInputChange} required></textarea>
        <button type="submit" className={`btn btn-${editingId ? "success" : "primary"} w-100`}>
          {editingId ? "Update Product" : "Add Product"}
        </button>
      </form>

      <table className="table table-hover table-bordered">
        <thead className="table-aqua text-white">
          <tr>
            <th>Image</th><th>Name</th><th>Brand</th><th>Year</th><th>Price</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(products) && products.length > 0 ? (
            products.map(product => (
              <tr key={product.id}>
                <td>
                  <img
                    src={product.car_photo}
                    alt="car"
                    width="60"
                    className="rounded"
                    onError={(e) => e.target.style.display = 'none'} // hide if broken
                  />
                </td>
                <td>{product.car_name}</td>
                <td>{product.brand}</td>
                <td>{product.transmission}</td>
                <td>{product.model_year}</td>
                <td>KES {product.price}</td>
                <td>
                  <button className="btn btn-sm btn-warning me-2" onClick={() => { setEditingId(product.id); setFormData(product); }}>Edit</button>
                  <button className="btn btn-sm btn-danger" onClick={() => handleDelete(product.id)}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center text-muted">No products available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTab;
