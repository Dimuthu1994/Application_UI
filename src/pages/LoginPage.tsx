import axios from "axios";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [error, setError] = useState<string | null>(null);
  const userNameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://localhost:7101/api/UserAuth/login",
        {
          userName: userNameRef.current?.value,
          password: passwordRef.current?.value,
        }
      );
      const token = response.data.token;
      localStorage.setItem("token", token);
      console.log("Login successful:", response.data);
      // Redirect to login page upon successful registration
      navigate("/");
    } catch (error) {
      console.error("Registration failed:", error);
      // Handle registration failure (e.g., display error message to the user)
    }
  };

  return (
    <div className="productdetail">
      <h1 className="mt-5 mb-4">Login</h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="userName" className="form-label">
            Username
          </label>
          <input
            type="email"
            className="form-control"
            id="userName"
            placeholder="Enter User Name"
            ref={userNameRef}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type={"password"}
            className="form-control"
            id="password"
            aria-describedby="emailHelp"
            placeholder="Enter Password"
            ref={passwordRef}
          />
        </div>
        {error && <p className="text-danger">{error}</p>}
        <button type="submit" className="btn btn-primary ">
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
