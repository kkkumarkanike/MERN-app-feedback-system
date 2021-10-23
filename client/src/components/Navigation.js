import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../store/actions/authActions";

function Navigation() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(logout());
  };
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <NavLink to="/" style={{ textDecoration: "none", color: "#fff" }}>
            Feedback System
          </NavLink>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          {user ? (
            <Nav>
              <NavLink
                to="/surveys"
                style={{
                  margin: "0 1rem",
                  textDecoration: "none",
                  color: "#fff",
                }}
              >
                Surveys
              </NavLink>
              <NavLink
                to="/surveys/new"
                style={{
                  margin: "0 1rem",
                  textDecoration: "none",
                  color: "#fff",
                }}
              >
                Create Survey
              </NavLink>
              <div
                onClick={logOut}
                style={{
                  margin: "0 1rem",
                  textDecoration: "none",
                  color: "#fff",
                  cursor: "pointer",
                }}
              >
                Logout
              </div>
            </Nav>
          ) : (
            <Nav>
              <NavLink
                to="/signup"
                style={{
                  margin: "0 1rem",
                  textDecoration: "none",
                  color: "#fff",
                }}
              >
                Signup
              </NavLink>
              <a
                href="/auth/google"
                style={{
                  margin: "0 1rem",
                  textDecoration: "none",
                  color: "#fff",
                }}
              >
                Login With Google
              </a>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
