import React, { useState } from 'react';
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { motion } from "framer-motion";
import vans from "../image/Vans.png";
import skechers from "../image/skechers.png";
import adidas from "../image/Adidas.png";
import Nb from "../image/Newbalance.png";
import './Product.css';

const ProductSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const products = [
    { 
      name: "Vans", 
      price: "Rp. 5.000.000", 
      img: vans, 
      description: "Vans delivers an iconic blend of comfort and timeless style, making it a staple for individuals who appreciate laid-back fashion. These sneakers are built with premium materials that ensure longevity, while their classic yet versatile design fits seamlessly into any wardrobe. Perfect for casual outings, skateboarding, or even making a bold statement, Vans shoes are known for their unparalleled durability and comfort. Whether you’re exploring the city streets, enjoying a relaxed day out, or creating your unique style, Vans offers unmatched support and versatility for every occasion." 
    },
    { 
      name: "Skechers", 
      price: "Rp. 4.500.000", 
      img: skechers, 
      description: "Skechers is synonymous with ultimate walking comfort and modern innovation. Designed with cutting-edge technology, these lightweight shoes offer a cushioned walking experience that minimizes strain on your feet. Perfect for long walks, active routines, or everyday errands, Skechers combines ergonomic features with stylish aesthetics. The breathable materials keep your feet cool and comfortable, while the flexible design adapts to your natural movements. Whether you’re navigating a busy day or simply seeking comfort and support, Skechers delivers reliability and style in one package." 
    },
    { 
      name: "Adidas", 
      price: "Rp. 6.000.000", 
      img: adidas, 
      description: "Adidas presents high-performance shoes crafted for athletes and everyday users alike. Designed with advanced technology, these shoes enhance sports performance while offering exceptional comfort. Whether you’re training for a marathon, hitting the gym, or simply seeking a stylish pair for casual outings, Adidas has you covered. The sleek, modern design is complemented by durable materials that stand up to rigorous use, making them a top choice for those with an active lifestyle. With Adidas, you can confidently tackle any challenge while staying comfortable and looking sharp." 
    },
    { 
      name: "New Balance", 
      price: "Rp. 4.800.000", 
      img: Nb, 
      description: "New Balance is the epitome of durability and long-lasting comfort, designed to provide exceptional support for every step. These shoes feature a sophisticated design that combines elegance with practicality, making them perfect for both intense physical activities and relaxed, everyday wear. Made from premium materials, New Balance ensures maximum comfort, even during extended use. Whether you’re walking, running, or simply standing for long hours, these shoes provide the stability and support your feet need. A trusted choice for those who value quality, functionality, and style in their footwear." 
    },
  ];

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % products.length;
    setCurrentIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + products.length) % products.length;
    setCurrentIndex(newIndex);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <div className="product-slider">
        <motion.div
          key={currentIndex}
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: "0%", opacity: 1 }}
          exit={{ x: "100%", opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="image-container"
        >
          <img src={products[currentIndex].img} alt={products[currentIndex].name} />
        </motion.div>

        <div className="product-info">
          <h2>{products[currentIndex].name}</h2>
          <h3>{products[currentIndex].price}</h3>
          <ul className="bullet-list">
            {products.map((_, index) => (
              <li
                key={index}
                className={currentIndex === index ? 'active' : ''}
                onClick={() => setCurrentIndex(index)}
              >
                {index + 1}
              </li>
            ))}
          </ul>
          <p>{products[currentIndex].description}</p>
        </div>

        <div className="navigation">
          <button className="slider-btn prev" onClick={prevSlide}><GrFormPrevious /></button>
          <button className="slider-btn next" onClick={nextSlide}>< GrFormNext /></button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductSlider;
