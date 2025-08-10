import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "../layouts/ContactForm.css";
import Swal from "sweetalert2";

function ContactForm() {
  const form = useRef();
  const [sending, setSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm(
        "service_cp9ezyb",
        "template_8ngvdkf",
        form.current,
        "v_RqITuSfA3xHf7w6"
      )
      .then(
        () => {
          Swal.fire({
            title: "Message Sent ",
            text: "Your message has been sent successfully!",
            icon: "success",
            confirmButtonColor: "var(--main-color)",
            background: "var(--main-bg-color)",
            color: "var(--main-color)",
          });
          form.current.reset();
          setSending(false);
        },
        () => {
          Swal.fire({
            title: "Failed to Send ❌",
            text: "Please try again later.",
            icon: "error",
            confirmButtonColor: "var(--main-color)",
            background: "var(--main-bg-color)",
            color: "var(--main-color)",
          });
          setSending(false);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="contact-form">
      <h2>Contact Us</h2>

      <label htmlFor="user_name">Name</label>
      <input
        type="text"
        name="user_name"
        id="user_name"
        placeholder="Your full name"
        required
      />

      <label htmlFor="user_email">Email</label>
      <input
        type="email"
        name="user_email"
        id="user_email"
        placeholder="example@mail.com"
        required
      />

      <label htmlFor="message">Message</label>
      <textarea
        name="message"
        id="message"
        placeholder="Write your message here..."
        rows="5"
        required
      />

      <button type="submit" disabled={sending}>
        {sending ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}

export default ContactForm;
