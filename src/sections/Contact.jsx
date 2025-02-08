import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        "service_tchg2rt",
        "template_v0nh74p",
        {
          from_name: form.name,
          to_name: "Bhuvan Annappa",
          from_email: form.email,
          to_email: "bhuvanannappa@gmail.com",
          message: form.message,
        },
        "CXeGovKO3WM4-IXK4"
      );
      setLoading(false);
      alert("Message sent successfully");
    } catch (error) {
      setLoading(false);
      console.log(error);
      alert("Something went wrong, Please try again");
    }
  };
  return (
    <section className="c-space my-20 ">
      <div className="relative min-h-screen flex flex-col items-center justify-center">
        <img
          className="absolute inset-0 min-h-screen hidden md:block"
          src="/assets/terminal.png"
          alt="terminal"
        />
        <div className="contact-container">
          <h3 className="head-text mt-16">Let's talk</h3>
          <p className="text-lg text-white-600 mt-3">
            I’m always open to new opportunities, collaborations. Whether you
            have an idea to discuss, need a developer for your team, or just
            want to connect, feel free to reach out.
          </p>
          <form
            className=" mt-12 flex flex-col space-y-7"
            ref={formRef}
            onSubmit={handleSubmit}
          >
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="Bhuvan Annappa"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="bhuvanannappa@gmail.com"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Your Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={4}
                className="field-input resize-none"
                placeholder="I want to give you a job..."
              />
            </label>
            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
              <img
                src="/assets/arrow-up.png"
                alt="arrow"
                className="field-btn_arrow"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
