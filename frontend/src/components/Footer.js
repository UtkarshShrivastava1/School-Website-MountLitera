import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          {/* About Section */}
          <Col md={4} className="footer-section">
            <h5>About Us</h5>
            <p>
              Welcome to Mount Litera Zee School Bilaspur. We are glad to have
              you around. Our school aims to provide quality education in a
              nurturing and holistic environment.
            </p>
          </Col>

          {/* Quick Links Section */}
          <Col md={4} className="footer-section">
            <h5>Quick Links</h5>
            <ul className="footer-links">
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/contact">Contact Us</a>
              </li>
              <li>
                <a href="/privacy">Privacy Policy</a>
              </li>
              <li>
                <a href="/terms">Terms of Service</a>
              </li>
            </ul>
          </Col>

          {/* Contact Section */}
          <Col md={4} className="footer-section">
            <h5>Contact Us</h5>
            <ul className="footer-contact">
              <li>
                <FaMapMarkerAlt /> Mount Litera Zee School Bilaspur, Uslapur,
                Bilaspur C.G., Pincode- 495001
              </li>
              <li>
                <FaPhone />
                +91-9406430027, +91-9424130028
              </li>
              <li>
                <FaEnvelope />
                Mlzs.bilaspur@mountlitera.com
              </li>
            </ul>
          </Col>
        </Row>

        {/* Social Media Links */}
        <Row className="footer-social">
          <Col className="text-center">
            <a
              href="https://www.facebook.com/MountLiteraZeeSchoolBilaspur"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com/MountLiteraBilaspur"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com/mountlitera_bilaspur/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/mount-litera-zee-school-bilaspur/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </Col>
        </Row>

        {/* Copyright Section */}
        <Row className="text-center mt-4">
          <Col>
            <p>
              &copy; {new Date().getFullYear()} Mount Litera Zee School
              Bilaspur. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
