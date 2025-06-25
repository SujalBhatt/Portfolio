import React, { useRef, useState, useContext } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeContext } from "../../theme-context.jsx";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const { theme } = useContext(ThemeContext);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6t1nazn",  // User's EmailJS Service ID
        "template_zvpij6j",  // User's EmailJS Template ID
        form.current,
        "NbEgZw78rxPx14Lta"  // User's EmailJS Public Key
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset(); // Reset form fields after sending
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme,
          });
        },
        (error) => {
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme,
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className={`flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] ${theme === 'light' ? 'light-bg' : ''}`}
    >
      {/* Toast Container */}
      <ToastContainer theme={theme} />

      {/* Section Title */}
      <div className={`text-center mb-16 ${theme === 'light' ? 'light-section-title' : ''}`}>
        <h2 className={`text-4xl font-bold ${theme === 'light' ? 'light-section-title' : 'text-white'}`}>CONTACT</h2>
        <div className={`w-32 h-1 ${theme === 'light' ? 'bg-pink-400' : 'bg-purple-500'} mx-auto mt-4`}></div>
        <p className={`mt-4 text-lg font-semibold ${theme === 'light' ? 'light-section-subtitle' : 'text-gray-400'}`}>
          I'd love to hear from you—reach out for any opportunities or questions!
        </p>
      </div>

      {/* Contact Form */}
      <div className={`mt-8 w-full max-w-md p-6 rounded-lg shadow-lg border ${theme === 'light' ? 'light-card' : 'bg-[#0d081f] border-gray-700'}`}>
        <h3 className={`text-xl font-semibold text-center ${theme === 'light' ? 'light-text' : 'text-white'}`}>
          Connect With Me <span className="ml-1">🚀</span>
        </h3>

        <form ref={form} onSubmit={sendEmail} className="mt-4 flex flex-col space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className={`w-full p-3 rounded-md border focus:outline-none ${theme === 'light' ? 'bg-pink-50 light-text border-pink-300 focus:border-pink-500' : 'bg-[#131025] text-white border-gray-600 focus:border-purple-500'}`}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className={`w-full p-3 rounded-md border focus:outline-none ${theme === 'light' ? 'bg-pink-50 light-text border-pink-300 focus:border-pink-500' : 'bg-[#131025] text-white border-gray-600 focus:border-purple-500'}`}
          />
          <input
            type="text"
            name="title"
            placeholder="Subject"
            required
            className={`w-full p-3 rounded-md border focus:outline-none ${theme === 'light' ? 'bg-pink-50 light-text border-pink-300 focus:border-pink-500' : 'bg-[#131025] text-white border-gray-600 focus:border-purple-500'}`}
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            required
            className={`w-full p-3 rounded-md border focus:outline-none ${theme === 'light' ? 'bg-pink-50 light-text border-pink-300 focus:border-pink-500' : 'bg-[#131025] text-white border-gray-600 focus:border-purple-500'}`}
          />
          
          {/* Send Button */}
          <button
            type="submit"
            className={`w-full py-3 font-semibold rounded-md hover:opacity-90 transition ${theme === 'light' ? 'bg-gradient-to-r from-pink-400 to-pink-600 text-white' : 'bg-gradient-to-r from-purple-600 to-pink-500 text-white'}`}
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
