import React, { useContext } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink, useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

const Navigation = () => {
  const [auth, setAuth] = useContext(AuthContext);
  const navigate = useNavigate();

  function logout() {
    setAuth(null);
    navigate("/");
  }

  return (
    <Navbar className="navbar" bg="dark" variant="dark" expand="lg">
      <NavLink to="/" exact="true">
        <Navbar.Brand className="brand">STAR WARS</Navbar.Brand>
      </NavLink>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="nav">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/contact" className="nav-link">
            Contact
          </NavLink>
          {auth ? (
            <>
              <NavLink to="/admin" className="nav-link logged-in-link">
                Admin | Logged in
              </NavLink>
              <button className="logout-btn" onClick={logout}>
                Log out
              </button>
            </>
          ) : (
            <NavLink to="/login" className="nav-link">
              Login
            </NavLink>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
