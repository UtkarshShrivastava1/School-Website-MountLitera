import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import axios from "axios"; // Import axios
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css"; // Ensure custom CSS exists
import "@fortawesome/fontawesome-free/css/all.min.css";
import csgilogo from "../assets/Schoollogo.png";

const NavBar = ({ isLoggedIn, userRole, handleLogout }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const API_URL =
    process.env.REACT_APP_NODE_ENV === "production"
      ? process.env.REACT_APP_PRODUCTION_URL // Production API URL
      : process.env.REACT_APP_DEVELOPMENT_URL; // Local development API URL

  useEffect(() => {
    const fetchUserData = async () => {
      if (!isLoggedIn) return; // If not logged in, no need to fetch data

      setLoading(true);
      const token = localStorage.getItem("token");

      if (!token) {
        console.error("Authentication token is missing.");
        setLoading(false);
        return;
      }
      try {
        let response;
        if (userRole === "admin") {
          response = await axios.get(
            `${API_URL}/api/admin/auth/adminprofile`, // Admin endpoint
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
        }

        const fetchedData = response.data[userRole]; // Adjust based on the actual response format
        setUser(fetchedData);
      } catch (err) {
        console.error("Error fetching user data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData(); // Fetch data when the component mounts
  }, [isLoggedIn, userRole, API_URL]); // Re-run if `isLoggedIn` or `userRole` changes

  // Handle login button
  const handleLoginClick = () => {
    navigate("admin-login");
  };

  // Handle profile button
  const handleProfileClick = () => {
    if (userRole === "admin") {
      navigate("/admin/profile"); // Navigate to the admin profile page
    }
  };

  return (
    <>
      {/* Banner Section */}
      <div
        className="banner-section bg-light text-dark shadow"
        style={{ padding: "10px 0" }} // Adjusted padding for balance
      >
        <Container className="d-flex justify-content-between align-items-center">
          {/* Left Section - Logo & School Details */}
          <div className="d-flex align-items-center">
            <img
              src={csgilogo}
              alt="College Logo"
              className="me-3"
              style={{ width: "80px", height: "80px", borderRadius: "10px" }} // Optimized size
            />
            <div>
              <h5
                className="mb-0"
                style={{
                  fontSize: "22px",
                  fontWeight: "700",
                  color: "#2c3e50",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                }}
              >
                Shri Padmakshi Global Mount Litera Zee School Bilaspur
              </h5>
              <small
                style={{
                  fontSize: "14px",
                  color: "#555",
                  fontStyle: "italic",
                  letterSpacing: "0.5px",
                }}
              >
                Uslapur, Bilaspur, Chhattisgarh - 495001
              </small>
              <br />
              <span
                style={{ fontSize: "14px", color: "#333", fontWeight: "600" }}
              >
                CBSE Affiliation No: 3330519
              </span>
            </div>
          </div>

          {/* Right Section - Social Links & Admission Button */}
          <div className="d-flex align-items-center">
            {/* Social Media Links */}
            <a
              href="https://www.facebook.com/MountLiteraZeeSchoolBilaspur"
              target="_blank"
              rel="noopener noreferrer"
              className="me-3"
              style={{ color: "#1877F2", fontSize: "24px" }}
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="https://www.instagram.com/mount_litera_zee_school_bilasp?igshid=YmMyMTA2M2Y%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="me-3"
              style={{ color: "#E4405F", fontSize: "24px" }}
            >
              <i className="fab fa-instagram"></i>
            </a>

            {/* Admission Button */}
            <Button
              variant="success"
              className="admission-btn"
              onClick={() => navigate("/admissions")}
              style={{
                fontSize: "16px",
                fontWeight: "600",
                padding: "8px 16px",
                borderRadius: "8px",
              }}
            >
              Admissions
            </Button>
          </div>
        </Container>
      </div>

      {/* Fixed Navbar Section */}
      <Navbar
        expand="lg"
        bg="dark"
        variant="dark"
        className="custom-navbar shadow fixed-top"
      >
        <Container>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav" className="justify-content-between">
            {/* Center-Aligned Navigation */}
            <Nav className="navbar-nav ms-auto align-items-center">
              {[
                "Home",
                "About",
                "Academics",
                "Why Us",
                "Admissions",
                "Administrations",
                "Facilities",
                "Plans Notice",
                "Contact",
                "Gallery",
                "Guidelines",
              ].map((item, index) => (
                <Nav.Link
                  as={Link}
                  to={`/${item.toLowerCase().replace(" ", "-")}`}
                  key={index}
                  className="custom-nav-link"
                >
                  {item}
                </Nav.Link>
              ))}
              {isLoggedIn && (
                <Nav.Link
                  as={Link}
                  to={
                    userRole === "admin" ? "/admin-dashboard" : "/admin-login"
                  }
                  className="custom-nav-link"
                >
                  Dashboard
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
