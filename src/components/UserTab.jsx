
import axiosInstance from "./axiosInstance";
import { useEffect, useState } from "react";

const UserTab = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [formData, setFormData] = useState({ fullname: "", email: "", phone: "", role: "" });
  const [message, setMessage] = useState("");

  const fetchUsers = async () => {
    try {
      const res = await axiosInstance.get("https://sch3ccs.pythonanywhere.com/api/get_users");
      setUsers(Array.isArray(res.data.users) ? res.data.users : []);
    } catch (err) {
      console.error("Error fetching users", err);
      setUsers([]); // fallback to empty array on error
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Clear message after 3 seconds
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  const handleCreate = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.entries(formData).forEach(([key, val]) => data.append(key, val));
    try {
      await axiosInstance.post("https://sch3ccs.pythonanywhere.com/get_users", data);
      setFormData({ fullname: "", email: "", phone: "", role: "" });
      setMessage("User created successfully");
      fetchUsers();
    } catch (err) {
      console.error("Error creating user", err);
    }
  };

  const handleUpdate = async (id) => {
    const data = new FormData();
    Object.entries(formData).forEach(([key, val]) => data.append(key, val));
    try {
      await axiosInstance.patch(`https://sch3ccs.pythonanywhere.com/api/get_users/${id}`, data);
      setEditingUser(null);
      setMessage("User updated successfully");
      fetchUsers();
    } catch (err) {
      console.error("Error updating user", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axiosInstance.delete(`https://sch3ccs.pythonanywhere.com/api/get_users/${id}`);
      setMessage("User deleted successfully");
      fetchUsers();
    } catch (err) {
      console.error("Error deleting user", err);
    }
  };

  return (
    <div className="tab-pane fade show active p-4" id="users">
      <h4 className="text-primary">Manage Users</h4>
      {message && <div className="alert alert-success">{message}</div>}

      {/* Create User Form */}
      <form onSubmit={handleCreate} className="mb-4">
        <div className="row g-2">
          <div className="col">
            <input
              className="form-control"
              placeholder="Username"
              required
              value={formData.fullname}
              onChange={(e) => setFormData({ ...formData, fullname: e.target.value })}
            />
          </div>
          <div className="col">
            <input
              className="form-control"
              placeholder="Email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          <div className="col">
            <input
              className="form-control"
              placeholder="Phone"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>
          <div className="col">
            <input
              className="form-control"
              placeholder="Role"
              required
              value={formData.role}
              onChange={(e) => setFormData({ ...formData, role: e.target.value })}
            />
          </div>
          <div className="col">
            <button className="btn btn-info w-100 text-white">Add User</button>
          </div>
        </div>
      </form>

      {/* User Table */}
      {users.length > 0 ? (
        <table className="table table-striped table-hover border">
          <thead className="bg-info text-white">
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.fullname}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.role}</td>
                <td>
                  <button
                    className="btn btn-warning btn-sm me-2"
                    disabled={editingUser === user.id}
                    onClick={() => {
                      setEditingUser(user.id);
                      setFormData(user);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-muted">No users found. Add a new user above.</p>
      )}

      {/* Edit Form */}
      {editingUser && (
        <div className="mt-4">
          <h5 className="text-primary">Edit User</h5>
          <form onSubmit={(e) => { e.preventDefault(); handleUpdate(editingUser); }}>
            <div className="row g-2">
              <div className="col">
                <input
                  className="form-control"
                  placeholder="Username"
                  value={formData.fullname}
                  onChange={(e) => setFormData({ ...formData, fullname: e.target.value })}
                />
              </div>
              <div className="col">
                <input
                  className="form-control"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div className="col">
                <input
                  className="form-control"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
              <div className="col">
                <input
                  className="form-control"
                  placeholder="Role"
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                />
              </div>
              <div className="col">
                <button className="btn btn-success w-100">Update User</button>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default UserTab;
