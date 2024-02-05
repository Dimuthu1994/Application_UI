import { useRef } from "react";
import { useLocation } from "react-router-dom";

interface Props {
  onSearchChange: (item: string) => void;
}

const Header = ({ onSearchChange }: Props) => {
  const searchInputRef = useRef<HTMLInputElement>(null);
  const location = useLocation();

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchInputRef.current) {
      onSearchChange(searchInputRef.current.value); // Pass the search value to the parent component
    }
  };
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-dark border-bottom border-body"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <div className="d-flex justify-content-between align-items-center w-50">
            {/* Use justify-content-between and align-items-center */}
            <div className="navbar-brand">Navbar</div>
            {/* onSubmit={handleSearch} */}
            {location.pathname === "/" && (
              <form className="d-flex w-50" onSubmit={handleSearchSubmit}>
                <input
                  className="form-control me-2 rounded-5"
                  type="search"
                  placeholder="Search for anything"
                  aria-label="Search"
                  ref={searchInputRef}
                />
              </form>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
