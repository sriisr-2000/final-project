import { useRef, useState } from "react";

function Contact() {
  const nameRef = useRef();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!form.email.includes("@")) {
      newErrors.email = "Valid email is required";
    }

    if (form.message.length < 10) {
      newErrors.message =
        "Message must contain at least 10 characters";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccess("");
      return;
    }

    setErrors({});
    setSuccess("Message sent successfully!");

    setForm({
      name: "",
      email: "",
      message: "",
    });

    nameRef.current.focus();
  };

  return (
    <section className="form-page">
      <h1>Contact Us</h1>

      <form onSubmit={handleSubmit}>
        <input
          ref={nameRef}
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
        />

        {errors.name && (
          <p className="error">{errors.name}</p>
        )}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />

        {errors.email && (
          <p className="error">{errors.email}</p>
        )}

        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
        />

        {errors.message && (
          <p className="error">{errors.message}</p>
        )}

        <button type="submit">
          Send Message
        </button>

        {success && (
          <p className="success">{success}</p>
        )}
      </form>
    </section>
  );
}

export default Contact;