import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://localhost:7101/api/UserAuth/register",
        {
          name: nameRef.current?.value,
          userName: emailRef.current?.value,
          password: passwordRef.current?.value,
        }
      );
      console.log("Registration successful:", response.data);
      // Redirect to login page upon successful registration
      navigate("/login");
    } catch (error) {
      console.error("Registration failed:", error);
      // Handle registration failure (e.g., display error message to the user)
    }
  };
  return (
    <div className="productdetail">
      <h1 className="mt-5 mb-4">Register</h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            // {...register("productName")}
            ref={nameRef}
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter Name"
          />
          {/* {errors.productName && (
          <p className="text-danger">{errors.productName.message}</p>
        )} */}
        </div>
        <div className="mb-3">
          <label htmlFor="userName" className="form-label">
            Email
          </label>
          <input
            // {...register("productName")}
            ref={emailRef}
            type="email"
            className="form-control"
            id="userName"
            placeholder="Enter User Name"
          />
          {/* {errors.productName && (
          <p className="text-danger">{errors.productName.message}</p>
        )} */}
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            // {...register("sku")}
            ref={passwordRef}
            type={"password"}
            className="form-control"
            id="password"
            aria-describedby="emailHelp"
            placeholder="Enter Password"
          />
          {/* {errors.sku && <p className="text-danger">{errors.sku.message}</p>} */}
        </div>
        <button type="submit" className="btn btn-primary ">
          Submit
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
