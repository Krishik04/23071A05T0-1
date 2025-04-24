import React from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
      <input type="text" placeholder="Username" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button
        onClick={() => navigate("/")}
        style={{ backgroundColor: '#a855f7', color: 'white', border: 'none', width: '100%' }}
      >
        Register
      </button>
    </div>
  );
}

export default Register;