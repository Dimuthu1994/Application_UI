import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="text-center mt-5">
            <h1 className="display-4">404 - Not Found</h1>
            <p className="lead">The page you are looking for does not exist.</p>
            <p className="lead">
              Please check the URL or go back to the homepage.
            </p>
            <button
              className="btn btn-primary mx-2"
              onClick={(e) => {
                navigate("/");
              }}
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
