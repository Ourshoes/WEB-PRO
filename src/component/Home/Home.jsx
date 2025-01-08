import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import imgHome from "../image/img_home.png";


import "./Home.css";

const Home = ({ setActiveLink }) => {
  const navigate = useNavigate();

  const handleExplore = () => {
    setActiveLink("/product");
    navigate("/product");
  };

  const text = `
    Explore our collection of premium footwear designed for ultimate comfort
    and unmatched style. Whether you're looking for casual wear, athletic
    shoes, or elegant designs, we have the perfect match for every occasion.
    Start your journey towards perfect fit and fashion today!
  `;

  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.02,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="home-container">
        
      <div className="home">
        <h1>Discover the Perfect Pair for You!</h1>
        <motion.p
          variants={sentence}
          initial="hidden"
          animate="visible"
          className="typing-text"
        >
          {text.split("").map((char, index) => (
            <motion.span key={index} variants={letter}>
              {char}
            </motion.span>
          ))}
        </motion.p>
        <button onClick={handleExplore}>Explore Our Product</button>
      </div>
      <div className="img">
        <motion.img
          src={imgHome}
          alt="yayay"
          initial={{
            opacity: 0,
            scale: 0.8,
            filter: "drop-shadow(0px 0px 0px rgba(0, 0, 0, 0))",
          }}
          animate={{
            opacity: 1,
            scale: 1,
            filter: "drop-shadow(20px 10px 10px rgba(0, 0, 0, 0.3))",
          }}
          transition={{
            opacity: { duration: 2 },
            scale: { duration: 1, delay: 1 },
            filter: { duration: 1 },
          }}
        />
        
      </div>
     
    </div>
  );
};

export default Home;
