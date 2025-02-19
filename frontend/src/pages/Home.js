import React, { useEffect } from "react";
import { Container, Typography, Box, Grid, Button } from "@mui/material";
import Slider from "react-slick"; // For carousels
import { ArrowForwardIos, ArrowBackIos } from "@mui/icons-material";
import "./Home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import csitBanner from "../assets/csitbanner.png";

import AOS from "aos";
import "aos/dist/aos.css";
import { Divider } from "@mui/material";

import Calendar from "../components/SchoolCalendar";
const Home = () => {
  // Carousel settings for react-slick

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: <ArrowForwardIos fontSize="small" />,
    prevArrow: <ArrowBackIos fontSize="small" />,
  };

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <Box className="hero-section">
        <Slider {...carouselSettings} className="banner-carousel">
          <div className="banner-slide">
            <img
              src={csitBanner}
              alt="Seminar on Latest Tech"
              className="banner-slide-image"
            />
          </div>
        </Slider>
      </Box>
      {/* News Ticker Section */}
      <Box className="news-ticker">
        <Slider
          dots={false}
          infinite
          autoplay
          speed={1}
          autoplaySpeed={0}
          cssEase="linear"
          className="news-ticker-slider"
        >
          <Typography>Admissions Open for Session 2025-26</Typography>
          <Typography>Admissions Open for Session 2025-26</Typography>
          <Typography>Admissions Open for Session 2025-26</Typography>
        </Slider>
      </Box>
      {/* School Section */}
      <Box className="school-info-section" py={5} bgcolor="#f5f5f5">
        <Container>
          <Grid container spacing={4} alignItems="center">
            {/* About Us - Left Side */}
            <Grid item xs={12} md={6} data-aos="fade-right">
              <Box className="about-us">
                <Typography
                  variant="h4"
                  align="left"
                  gutterBottom
                  sx={{
                    fontSize: "2.5rem",
                    fontWeight: "bold",
                    color: "#2c3e50",
                    textTransform: "uppercase",
                    letterSpacing: "1.5px",
                  }}
                >
                  Welcome To Our School
                </Typography>
                <Typography
                  variant="body1"
                  align="left"
                  paragraph
                  sx={{
                    fontSize: "1.2rem",
                    lineHeight: "1.9",
                    color: "#555",
                  }}
                >
                  <strong style={{ color: "#3498db", fontWeight: 700 }}>
                    Mount Litera Zee School
                  </strong>{" "}
                  is an endeavour by the Essel Group led by Shri Subhash Chandra
                  to prepare leaders of the 21st century through its education
                  arm, Zee Learn Limited. With over 80 schools across 75 cities,
                  Mount Litera Zee School is India’s fastest growing network of
                  K12 schools. Zee Learn Limited has its preschool network
                  Kidzee with more than 1500+ preschools in India and is Asia’s
                  largest network of preschools.
                </Typography>
                {/* Read More Button */}
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    background: "linear-gradient(135deg, #2c3e50, #34495e)",
                    color: "white",
                    fontSize: "1rem",
                    padding: "15px 35px",
                    borderRadius: "50px",
                    transition: "all 0.3s ease",
                    boxShadow: "0 5px 10px rgba(0, 0, 0, 0.15)",
                    "&:hover": {
                      background: "linear-gradient(135deg, #34495e, #2c3e50)",
                      boxShadow: "0 8px 15px rgba(0, 0, 0, 0.25)",
                    },
                  }}
                  href="/about-more"
                >
                  Read More
                </Button>
              </Box>
            </Grid>

            {/* Latest Updates - Right Side */}
            <Grid item xs={12} md={6} data-aos="fade-left">
              <Box
                className="latest-updates"
                p={3}
                bgcolor="white"
                boxShadow={3}
                borderRadius={2}
              >
                <Typography variant="h5" align="left" gutterBottom>
                  Latest Updates
                </Typography>
                <ul style={{ paddingLeft: "20px", margin: "0" }}>
                  <li>Admissions open for the new academic year 2025-26</li>
                  <li>Annual Sports Day scheduled for March 10, 2025</li>
                  <li>New Robotics Lab inaugurated on campus</li>
                  <li>Parent-Teacher Meeting on February 20, 2025</li>
                </ul>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      {/* About Us Section */}
      <Box className="about-section" py={5} bgcolor="#f5f5f5">
        <Container>
          {/* About Us */}
          <Box className="about-us" data-aos="fade-right">
            <Typography variant="h4" align="left" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body1" align="left" paragraph>
              <strong>Mount Litera Zee School Bilaspur</strong>, a part of the
              K12 Pan India chain under Zee Learn Limited, is dedicated to
              providing holistic education with a standardized curriculum across
              all its branches. Established in 2014, the school emphasizes
              technology-integrated learning through smart classrooms, ensuring
              conceptual clarity over rote memorization. With state-of-the-art
              infrastructure and a strong focus on child safety through the
              I-Care program, it fosters socio-emotional growth via various
              clubs and personality-building activities.
            </Typography>
          </Box>

          {/* Our Vision */}
          <Box className="our-vision" my={4} data-aos="fade-left">
            <Typography variant="h4" align="left" gutterBottom>
              Our Vision
            </Typography>
            <Typography variant="body1" align="left" paragraph>
              A school is a micro-system where different factors have an effect
              on the child. The teachers, the curriculum, the examinations, the
              environment, the infrastructure, the activities, all come together
              to nurture the unique potential of the child. Our philosophy of
              ‘Real Understanding through an Integrated Approach’ is implemented
              through our Litera Octave approach towards education.
            </Typography>
          </Box>

          {/* Our Mission */}
          <Box className="our-mission" my={4} data-aos="fade-right">
            <Typography variant="h4" align="left" gutterBottom>
              Our Mission
            </Typography>
            <Typography variant="body1" align="left" paragraph>
              <ul style={{ paddingLeft: "20px", margin: "0" }}>
                <li>
                  To prescribe and implement a curriculum for physical, mental,
                  emotional, spiritual, and intellectual enrichment, fostering
                  multifaceted development.
                </li>
                <li>
                  To cultivate leadership qualities, team spirit, sportsmanship,
                  self-esteem, and other social attributes to prepare children
                  for real-life challenges.
                </li>
                <li>
                  To create an environment that continuously encourages
                  innovation, creativity, original thinking, and an insatiable
                  appetite for knowledge.
                </li>
              </ul>
            </Typography>
          </Box>

          {/* Read More Button */}
          <Box textAlign="center" mt={4}>
            <Button
              variant="contained"
              color="primary"
              href="/about-more"
              size="large"
            >
              Read More
            </Button>
          </Box>
        </Container>
      </Box>
      {/* calander Section */}
      <Box className="school-calander-section" py={5} bgcolor="#f5f5f5">
        <Container>
          <Calendar />{" "}
        </Container>
      </Box>

      <Divider className="custom-divider" variant="middle" />
      {/* Photo Gallery Section */}
      <Container className="section">
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          style={{ fontWeight: "bold", fontSize: "2.5rem" }}
        >
          {" "}
          Photo Gallery
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Slider {...carouselSettings}>
              <img
                src="https://images.jdmagicbox.com/comp/bilaspur-chhattisgarh/e1/9999p7752.7752.220414191040.s1e1/catalogue/-19lc6up35j.jpg"
                alt="Gallery 1"
                className="carousel-image"
              />
              <img
                src="https://images.jdmagicbox.com/comp/bilaspur-chhattisgarh/e1/9999p7752.7752.220414191040.s1e1/catalogue/-19lc6up35j.jpg"
                alt="Gallery 2"
                className="carousel-image"
              />
            </Slider>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Slider {...carouselSettings}>
              <img
                src="https://images.jdmagicbox.com/comp/bilaspur-chhattisgarh/e1/9999p7752.7752.220414191040.s1e1/catalogue/mount-litera-zee-school-uslapur-bilaspur-chhattisgarh-schools-2xji2511i6.jpg"
                alt="Gallery 3"
                className="carousel-image"
              />
              <img
                src="https://images.jdmagicbox.com/comp/bilaspur-chhattisgarh/e1/9999p7752.7752.220414191040.s1e1/catalogue/mount-litera-zee-school-uslapur-bilaspur-chhattisgarh-schools-2xji2511i6.jpg"
                alt="Gallery 4"
                className="carousel-image"
              />
            </Slider>
          </Grid>
        </Grid>
      </Container>
      <Divider className="custom-divider" variant="middle" />

      {/* Video and Events Gallery Section */}
      <Container className="section">
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          style={{ fontWeight: "bold", fontSize: "2.5rem" }}
        >
          {" "}
          Video Gallery
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Box className="event-video-container">
              <video controls className="carousel-video">
                <source
                  src="https://csitdurg.in/Potos/csit_video.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box className="event-video-container">
              <video controls className="carousel-video">
                <source
                  src="https://csitdurg.in/hotos/csit_video.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Testimonials Section */}
      <Box py={5} className="testimonials-section">
        <Container>
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            style={{ fontWeight: "bold", fontSize: "2.5rem" }}
          >
            Parent Testimonials
          </Typography>
          <Slider {...carouselSettings}>
            {/* Testimonial 1 */}
            <Box className="testimonial-item">
              <Box className="testimonial-content">
                <img
                  src="https://pngimg.com/uploads/family/family_PNG45.png" // Example image for parent
                  alt="Parent A"
                  className="testimonial-image"
                />
                <Box>
                  <Typography variant="h6" className="testimonial-quote">
                    "The school's environment has been a blessing for my child's
                    growth."
                  </Typography>
                  <Typography variant="caption" className="testimonial-author">
                    - Parent A, Mother of Student X
                  </Typography>
                  <Typography variant="body2" className="testimonial-detail">
                    "From the supportive faculty to the enriching
                    extracurricular activities, the school has played a vital
                    role in my child's development."
                  </Typography>
                </Box>
              </Box>
            </Box>
            {/* Testimonial 2 */}
            <Box className="testimonial-item">
              <Box className="testimonial-content">
                <img
                  src="https://pngimg.com/uploads/family/family_PNG42.png" // Example image for parent
                  alt="Parent B"
                  className="testimonial-image"
                />
                <Box>
                  <Typography variant="h6" className="testimonial-quote">
                    "A wonderful institution that values both academic
                    excellence and personal growth."
                  </Typography>
                  <Typography variant="caption" className="testimonial-author">
                    - Parent B, Father of Student Y
                  </Typography>
                  <Typography variant="body2" className="testimonial-detail">
                    "The personalized attention and encouragement my child
                    receives here has been instrumental in shaping their
                    confidence and aspirations."
                  </Typography>
                </Box>
              </Box>
            </Box>
            {/* Testimonial 3 */}
            <Box className="testimonial-item">
              <Box className="testimonial-content">
                <img
                  src="https://pngimg.com/uploads/family/family_PNG29.png" // Example image for parent
                  alt="Parent C"
                  className="testimonial-image"
                />
                <Box>
                  <Typography variant="h6" className="testimonial-quote">
                    "A school that truly cares about the well-being of its
                    students."
                  </Typography>
                  <Typography variant="caption" className="testimonial-author">
                    - Parent C, Mother of Student Z
                  </Typography>
                  <Typography variant="body2" className="testimonial-detail">
                    "The school has created a supportive community that empowers
                    students to thrive academically, socially, and emotionally."
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Slider>
        </Container>
      </Box>
    </>
  );
};

export default Home;
