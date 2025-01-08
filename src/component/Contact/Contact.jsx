import React, { useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const validateName = () => {
    if (!formData.name.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: "Please enter your name.",
      }));
      return false;
    }

    const cleanedName = formData.name.replace(/\s+/g, '');
    if (cleanedName.length < 4) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: "Name must contain at least 4 characters.",
      }));
      return false; 
    }
    return true;
  };

  const validateEmail = () => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!formData.email.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Please enter your email address.",
      }));
      return false;
    } else if (!emailPattern.test(formData.email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Please enter a valid email address.",
      }));
      return false;
    }
    return true;
  };

  const validateMessage = () => {
    const trimmedMessage = formData.message.trim();
    if (!trimmedMessage) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        message: "Please enter a message.",
      }));
      return false;
    }

    const cleanedMessage = trimmedMessage.replace(/\s+/g, '');
    if (cleanedMessage.length < 15) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        message: "Message must contain at least 15 characters.",
      }));
      return false;
    }
    return true;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    setErrors({ ...errors, [e.target.id]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors({
      name: "",
      email: "",
      message: "",
    });

    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isMessageValid = validateMessage();

    if (!isNameValid || !isEmailValid || !isMessageValid) {
      return;
    }

    toast.info("Sending...", { autoClose: false });

    emailjs
      .send(
        "service_ourshoes",
        "template_8mp25es",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          reply_to: formData.email,
        },
        "tlsYtj3kQqHIwMq8G"
      )
      .then(
        () => {
          setFormData({ name: "", email: "", message: "" });
          toast.dismiss();
          toast.success("Email sent successfully!");
        },
        (error) => {
          toast.dismiss();
          toast.error("Failed to send email.");
        }
      );
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeIn" }}
    >
      <div className="contact-page">
        <div className="contact-info">
          <h2>Contact Us</h2>
          <div className="contact-item">
            <FaPhone className="icon" />
            <span>+62 877-4628-8262</span>
          </div>
          <div className="contact-item">
            <FaEnvelope className="icon" />
            <span>ourshoes321@gmail.com</span>
          </div>
          <div className="contact-item">
            <FaMapMarkerAlt className="icon" />
            <span>Jl. Makam No.110, Bekasi</span>
          </div>
        </div>

        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <span className="error-text">{errors.name}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span className="error-text">{errors.email}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              {errors.message && <span className="error-text">{errors.message}</span>}
            </div>
            <button type="submit" className="submit-btn">
              Send
            </button>
          </form>
        </div>
      </div>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeButton={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={true}
        theme="dark"
      />
    </motion.div>
  );
};

export default Contact;
