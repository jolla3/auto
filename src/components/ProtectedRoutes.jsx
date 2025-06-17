
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ManageUsers from "./pages/ManageUsers"; 
import ManageCars from "./pages/ManageCars"; 
import MyCars from "./pages/MyCars"; 
import UploadCar from "./pages/UploadCar"; 
import Login from "./pages/Login"; 
import Signup from "./pages/Signup"; 
import ProtectedRoute from "./components/ProtectedRoute"; // Import ProtectedRoute

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        
        {/* Admin Routes with ProtectedRoute */}
        <Route 
          path="/admin/manage-users" 
          element={
            <ProtectedRoute requiredRole="admin">
              <ManageUsers />
            </ProtectedRoute>
          }
        />
        <Route 
          path="/admin/manage-cars" 
          element={
            <ProtectedRoute requiredRole="admin">
              <ManageCars />
            </ProtectedRoute>
          }
        />
        
        {/* Seller Routes with ProtectedRoute */}
        <Route 
          path="/seller/my-cars" 
          element={
            <ProtectedRoute requiredRole="seller">
              <MyCars />
            </ProtectedRoute>
          }
        />
        <Route 
          path="/seller/upload-car" 
          element={
            <ProtectedRoute requiredRole="seller">
              <UploadCar />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
