
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  // const [role, setRole] = useState("");

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess("");
    setError("");
    setLoading("Please wait while we create your account...");

    try {
      const formData = new FormData();
      formData.append("username", username);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("phone", phone);
      // formData.append("role", role);

      const response = await axios.post(
        "https://joll3a.pythonanywhere.com/api/signup",
        formData
      );

      setSuccess(response.data.success);
      setLoading("");
    } catch (err) {
      setLoading("");
      setError(err.response?.data?.error || "Registration failed.");
    }
  };

  return (
    <div className="row justify-content-center mt-5">
      <div className="col-md-6">
        <div className="card shadow p-4 border-info">
          <h2 className="text-center mb-4 text-info">Create Account</h2>

          {loading && <div className="alert alert-info">{loading}</div>}
          {success && <div className="alert alert-success">{success}</div>}
          {error && <div className="alert alert-danger">{error}</div>}

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <input
                type="tel"
                className="form-control"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
{/* 
            <div className="mb-3">
              <select
                className="form-control"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
              >
                <option value="">---Select Role---</option>
                <option value="admin">Admin</option>
                <option value="seller">Seller</option>
                <option value="manager">manager</option>
                <option value="customer">Customer</option>
              </select>
            </div> */}

            <button
              type="submit"
              className="btn btn-info w-100 text-white"
              disabled={!!loading}
            >
              {loading ? "Signing up..." : "Register"}
            </button>
          </form>

          <p className="text-center mt-3">
            Already have an account?{" "}
            <Link to="/Login" className="text-info">Login</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Register
