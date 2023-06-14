import React, { useState } from "react";

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
    <section id="contact" className="about">
      <div className="w-full px-4">
        <h2 className="section-title">GET IN TOUCH</h2>
        <p class="pb-10 px-10 text-left ">
          As a highly skilled and motivated web developer, I am actively seeking
          new employment opportunities where I can utilize my expertise to
          deliver outstanding results. I am always eager to take on new
          challenges and to continue growing as a professional. If you are
          looking for a talented web developer to join your team, I would be
          honored to discuss how I can contribute to your success.
        </p>
        <form
          id="contact-form"
          onSubmit={handleSubmit}
          className="space-y-6 shadow-md rounded px-8 pt-6 pb-8 mb-4 bg-slate-300 text-black max-w-xl mx-auto"
        >
          <label className="block">
            <span className="">Name:</span>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              value={formData.name}
              required
              className="mt-1 p-1 block w-full rounded-sm border border-slate-500 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-slate-900"
            />
          </label>
          <label className="block">
            <span className="">Email:</span>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={formData.email}
              required
              className="mt-1 p-1 block w-full rounded-sm border border-slate-500 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-slate-900"
            />
          </label>
          <label className="block">
            <span className="">Message:</span>
            <textarea
              name="message"
              onChange={handleChange}
              value={formData.message}
              required
              className="h-32 mt-1 block w-full rounded-sm border border-slate-500 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </label>
        </form>
        <button type="submit" className="btn btn-blue px-4 py-2">
          Submit
        </button>
      </div>
    </section>
  );
}

export default Contact;
