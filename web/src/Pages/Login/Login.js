import React, { useState } from 'react';
import './login.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Login() {
  // Hard-coded admin credentials
  const adminUsername = "admin";
  const adminPassword = "admin123";

  // State for username, password, and login status
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent form submission

    // Check credentials
    if (username === adminUsername && password === adminPassword) {
      alert("Login successful!");
      // Redirect or perform further actions for logged-in admin
      window.location.href = "/dashboard"; // Example redirect
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className='icons'>
        <div className="LoginIcon"><AccountCircleIcon/></div>

        </div>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p className="error-text">{error}</p>}

          <button className="loginB">Login</button>
        </form>
       
      </div>
    </div>
  );
}