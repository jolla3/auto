import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading("Please wait as we log you in...");
    setError("");
    

    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);

      const response = await axios.post(
        "https://Joll3a.pythonanywhere.com/api/login",
        formData
      );

      setLoading("");
      if (response.data.user) {
        localStorage.setItem("user", JSON.stringify(response.data.user)); // Store user info in localStorage
        navigate("/"); // Redirect to home/dashboard
      } else {
        setError(response.data.message || "Invalid login credentials.");
      }
    } catch (err) {
      setLoading("");
      setError("Login failed. Check your network or credentials.");
    }
  };
  

  return (
    
    //  <div className="container">
    //   
    //   </div>



    <div className="row justify-content-center mt-5">
              

      <div className="col-md-6">
       
        
        <div className="card shadow p-4 border-0">
          <h2 className="text-center mb-4 text-info">Login</h2>

          {loading && <div className="alert alert-info">{loading}</div>}
          {error && <div className="alert alert-danger">{error}</div>}

          <form onSubmit={handleLogin}>
            <input
              type="email"
              className="form-control mb-3"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              className="form-control mb-3"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button
              type="submit"
              className="btn w-100"
              style={{ backgroundColor: "aqua" }}
              disabled={!!loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          <p className="text-center mt-3">
            Don’t have an account? <Link to="/Register">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
