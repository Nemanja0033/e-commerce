import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth/AuthContext ";

const Register: React.FC = () => {
  const navigate = useNavigate();
  const authContext = useAuth();
  if (!authContext) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  const { loginWithGoogle } = authContext;

  const handleRegister = async () => {
    try {
      await loginWithGoogle();
      navigate("/");
    } catch (error: any) {
      console.error("Error registering with Google:", error.message);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <button onClick={handleRegister}>Register with Google</button>
    </div>
  );
};

export default Register;
