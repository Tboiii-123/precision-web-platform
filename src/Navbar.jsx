import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">

        {/* Brand */}
        <Link className="navbar-brand fw-bold" to="/">
          MyApp
        </Link>

        {/* Toggle button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/developers">
                Developers
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li> 
            
            <li className="nav-item">
              <Link className="nav-link" to="/marketing">
                Marketing
              </Link>
            </li>

         
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
