
import { useState } from "react";
import UserTab from "./UserTab";
import ProductTab from "./ProductTab";
// import Navbar from "./Navbar";
const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("users");

  return (
    
    <div className="container my-5">
      
      <h2 className="text-center mb-4 text-aqua">Admin Dashboard</h2>

      {/* Tab Navigation */}
      <ul className="nav nav-tabs justify-content-center mb-4">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "users" ? "active text-aqua fw-bold" : ""}`}
            onClick={() => setActiveTab("users")}
          >
            Users
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "products" ? "active text-aqua fw-bold" : ""}`}
            onClick={() => setActiveTab("products")}
          >
            Products
          </button>
        </li>
      </ul>

      {/* Tab Content */}
      <div className="tab-content shadow-sm p-4 bg-light rounded">
        {activeTab === "users" && <UserTab />}
        {activeTab === "products" && <ProductTab />}
      </div>
    </div>
  );
};

export default AdminDashboard;
