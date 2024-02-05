import { Link } from "react-router-dom";
import "./Sidebar.css";
import LogoutButton from "./LogoutButton";
import { JwtPayload, jwtDecode } from "jwt-decode";

interface Props {
  name: string; // Define a prop to accept the token value
}
const Sidebar = ({ name }: Props) => {
  return (
    <nav className="col-md-3 col-lg-2 d-md-block bg-dark sidebar">
      <div className="position-sticky">
        <div className="pt-3">
          <div className="pt-3 d-flex justify-content-center align-items-center pr-3 mb-2">
            <div className="text-light text-center">
              <p className="mb-2 fs-3">Cmex HRM</p>
              <p className="mb-2 fs-5">Welcome {name}</p>
            </div>
          </div>
          <ul className="nav flex-column">
            {/* Sidebar items */}
            <li className="nav-item mb-2">
              <Link className="nav-link" aria-current="page" to="/dashboard">
                Dashboard
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link className="nav-link" to="/">
                Products
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link className="nav-link" to="/user">
                User Profile
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link className="nav-link" to="/settings">
                Settings
              </Link>
            </li>
          </ul>
          <div className="pt-4 d-flex justify-content-center align-items-center pr-3 mb-2">
            <LogoutButton />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
