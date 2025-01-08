import React from "react";
import img from "../image/Store.png";
import { motion } from "framer-motion";
import "./About.css";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeIn" }}
    >
      <div className="about-us-container">
        <div className="about-us-content">
          <h1>About Us</h1>
          <p>
            At <strong>Our Shoes</strong>, we believe that the right pair of
            shoes can change your journey-whether it's for a casual walk, an
            important meeting, or an athletic run. Founded with a passion for
            craftsmanship and innovative design, we strive to offer shoes that
            blend style, comfort, and durability.
          </p>
          <p>
            Our collection features a range of shoes designed to suit every
            need, from elegant formal shoes to high-performance athletic
            footwear and everyday comfort options. Each pair is crafted with
            precision using premium materials and the latest technology to
            ensure that you step forward with confidence.
          </p>
          <p>
            We are committed to sustainability and ethical practices, ensuring
            that our products have a positive impact on both people and the
            planet. At <strong>Our Shoes</strong>, we don’t just sell shoes-we
            create experiences, empowering you to step forward with confidence
            in every step you take.
          </p>
        </div>
        <div className="about-us-img">
          <img src={img} alt="Eror" />
        </div>
      </div>
    </motion.div>
  );
};

export default About;
