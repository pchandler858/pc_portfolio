import React, { useState } from "react";

function Contact() {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   message: "",
  // });

  // const [errors, setErrors] = useState({
  //   name: "",
  //   email: "",
  //   message: "",
  // });

  // const [formSubmitted, setFormSubmitted] = useState(false);

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  //   setFormSubmitted(false);
  // };

  // const handleBlur = (e) => {
  //   const { name, value } = e.target;
  //   let tempErrors = { ...errors };

  //   if (!value) {
  //     tempErrors[name] = "This field is required";
  //   } else {
  //     tempErrors[name] = "";
  //   }

  //   if (name === "email" && value) {
  //     const emailRegex = /^\S+@\S+\.\S+$/;
  //     if (!emailRegex.test(value)) {
  //       tempErrors[name] = "Please enter a valid email address";
  //     }
  //   }

  //   setErrors(tempErrors);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(formData);
  //   setFormData({ name: "", email: "", message: "" });
  //   setFormSubmitted(true);
  // };

  return (
    <section id="contact" className="about">
      <div className="w-full px-4">
        <h2 className="section-title mb-10">GET IN TOUCH</h2>
        <p className="pb-10 px-10 text-left ">
          As a seasoned web developer, excited to leverage my skills in new and
          challenging environments. Always on the lookout for opportunities to
          stretch my abilities, I strive for continued professional growth. If
          your team is on the search for a web developer with a knack for
          delivering results, I'd be thrilled to discuss how I could contribute
          to your ongoing success. Let's see how we can make great things happen
          together.
        </p>
        <a
          rel="noreferrer"
          target="_blank"
          href="mailto:pchandler858@gmail.com"
          className="px-4 py-2 rounded shadow border border-gray-300 hover:border-slate-400 font-bold text-2xl hover:text-slate-400"
        >
          EMAIL ME
        </a>
        {/* <div className="">
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
                onBlur={handleBlur}
                className="mt-1 p-1 block w-full rounded-sm border border-slate-500 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-slate-900"
              />
              {errors.name && <p className="error">{errors.name}</p>}
            </label>
            <label className="block">
              <span className="">Email:</span>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                value={formData.email}
                required
                onBlur={handleBlur}
                className="mt-1 p-1 block w-full rounded-sm border border-slate-500 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-slate-900"
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </label>
            <label className="block">
              <span className="">Message:</span>
              <textarea
                name="message"
                onChange={handleChange}
                value={formData.message}
                required
                onBlur={handleBlur}
                className="h-32 mt-1 block w-full rounded-sm border border-slate-500 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
              {errors.message && <p className="error">{errors.message}</p>}
              {formSubmitted && (
                <p className="pt-5">Thank you! Your message has been sent!</p>
              )}
            </label>
            <button
              type="submit"
              className="btn btn-white gradient-text hover:text-slate-100 px-4 py-1"
            >
              Submit
            </button>
          </form>
        </div> */}
      </div>
    </section>
  );
}

export default Contact;
