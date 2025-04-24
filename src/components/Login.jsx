import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button
        onClick={() => navigate("/")}
        style={{ backgroundColor: '#22c55e', color: 'white', border: 'none', width: '100%' }}
      >
        Login
      </button>
    </div>
  );
}

export default Login;