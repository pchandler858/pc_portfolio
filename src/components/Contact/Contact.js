import React from "react";
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section id="contact-me">
      <h2>Contact Me</h2>
      <form id="contact-form" onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={formData.name}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={formData.email}
            required
          />
        </label>
        <label>
          Message:
          <textarea
            name="message"
            onChange={handleChange}
            value={formData.message}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contact;
