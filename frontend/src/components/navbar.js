import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div id="logo">
        <strong>SHOPPING CART</strong>
      </div>
      <div className="nav-links">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
