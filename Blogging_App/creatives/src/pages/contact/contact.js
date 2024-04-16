import React, { useState } from 'react';
import "./contact.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // You can handle form submission logic here
    // For example, send the form data to an API or display a success message
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="container">
        <div className="form-section">
          <h1 className='heading'>Reach out us...</h1>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              required
            />
          </div>
          <button className ="submit" type="submit">Send Message</button>
        </div>
        <div className="image-section">
          <img className = "img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZmlTZH8AIV2nY6aqQKmgkf6Unvz1fLSdK4A&s" alt="" />
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
